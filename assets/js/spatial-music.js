/**
 * Spatial Sound Sculpture (test page).
 * A 4×8 pad console plays synth voices from one of several banks; each note becomes
 * a line shape on one of 16 stacked "time slices". The slices loop as a step sequencer,
 * so the shapes accumulate into a sculpture. Visual styles change the layout of the stack.
 * Desktop: keyboard + mouse. WebXR: controllers or hands.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const ROWS = 4;
const COLS = 8;
const STEPS = 16;
const BANK_SIZE = ROWS * COLS;

const KEY_ROWS = [
  ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8'],
  ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI'],
  ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK'],
  ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma'],
];
const KEY_LABELS = [
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ','],
];
const KEY_TO_PAD = new Map();
KEY_ROWS.forEach((row, r) => row.forEach((code, c) => KEY_TO_PAD.set(code, r * COLS + c)));

const padRow = (pad) => Math.floor(pad / COLS);
const padCol = (pad) => pad % COLS;
// A pattern entry ("code") remembers which bank it was played with, so banks can be layered.
const codeBank = (code) => Math.floor(code / BANK_SIZE);
const codePad = (code) => code % BANK_SIZE;

/* ------------------------------------------------------------------ */
/* Music state                                                          */
/* ------------------------------------------------------------------ */

const SCALES = {
  pentatonic: [0, 3, 5, 7, 10, 12, 15, 17],
  pelog: [0, 1.2, 2.7, 6.7, 7.85, 12, 13.2, 14.7],
  dorian: [0, 2, 3, 5, 7, 9, 10, 12],
  majpenta: [0, 2, 4, 7, 9, 12, 14, 16],
};

const music = {
  bpm: 116,
  swing: 0,
  scale: SCALES.pentatonic,
  root: 293.66,
  bank: 0,
  pattern: Array.from({ length: STEPS }, () => new Set()),
  playing: true,
  recording: true,
};

/* ------------------------------------------------------------------ */
/* Audio engine                                                         */
/* ------------------------------------------------------------------ */

let ac = null;
let master = null;
let revIn = null;
let noiseBuf = null;
let distCurve = null;

function initAudio() {
  ac = new (window.AudioContext || window.webkitAudioContext)();
  const comp = ac.createDynamicsCompressor();
  comp.threshold.value = -14;
  comp.ratio.value = 4;
  comp.connect(ac.destination);

  master = ac.createGain();
  master.gain.value = 0.7;
  master.connect(comp);

  const rev = ac.createConvolver();
  rev.buffer = makeImpulse(2.8);
  revIn = ac.createGain();
  revIn.gain.value = 0.9;
  revIn.connect(rev);
  rev.connect(comp);

  noiseBuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

  distCurve = new Float32Array(1024);
  for (let i = 0; i < 1024; i++) {
    const x = (i / 1023) * 2 - 1;
    distCurve[i] = Math.tanh(x * 3.2);
  }
}

function makeImpulse(seconds) {
  const len = Math.floor(ac.sampleRate * seconds);
  const buf = ac.createBuffer(2, len, ac.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  }
  return buf;
}

function voiceOut(send) {
  const g = ac.createGain();
  g.connect(master);
  const s = ac.createGain();
  s.gain.value = send;
  g.connect(s);
  s.connect(revIn);
  return g;
}

function env(param, t, peak, attack, decay) {
  param.setValueAtTime(0.0001, t);
  param.exponentialRampToValueAtTime(peak, t + attack);
  param.exponentialRampToValueAtTime(0.0001, t + attack + decay);
}

function osc(type, freq, t, dur, dest) {
  const o = ac.createOscillator();
  o.type = type;
  o.frequency.value = freq;
  o.connect(dest);
  o.start(t);
  o.stop(t + dur);
  return o;
}

function gainTo(value, dest) {
  const g = ac.createGain();
  g.gain.value = value;
  g.connect(dest);
  return g;
}

function filt(type, freq, q, dest) {
  const f = ac.createBiquadFilter();
  f.type = type;
  f.frequency.value = freq;
  f.Q.value = q;
  f.connect(dest);
  return f;
}

function noiseSrc(t, dur, dest) {
  const src = ac.createBufferSource();
  src.buffer = noiseBuf;
  src.connect(dest);
  src.start(t, Math.random() * 0.8);
  src.stop(t + dur);
  return src;
}

function sweep(o, t, from, to, time) {
  o.frequency.setValueAtTime(from, t);
  o.frequency.exponentialRampToValueAtTime(to, t + time);
}

/* --- Bank 1: gamelan kit --- */

function playBell(t, f) {
  const out = voiceOut(0.45);
  env(out.gain, t, 0.22, 0.004, 2.2);
  const mod = ac.createOscillator();
  mod.frequency.value = f * 3.5;
  const modGain = ac.createGain();
  modGain.gain.setValueAtTime(f * 2.2, t);
  modGain.gain.exponentialRampToValueAtTime(f * 0.05, t + 1.2);
  mod.connect(modGain);
  // two carriers a few Hz apart give the gamelan-style beating shimmer
  [f, f + 4.5].forEach((cf) => modGain.connect(osc('sine', cf, t, 2.3, out).frequency));
  mod.start(t);
  mod.stop(t + 2.3);
}

function playPluck(t, f) {
  const out = voiceOut(0.3);
  env(out.gain, t, 0.24, 0.003, 0.55);
  const lp = filt('lowpass', 4200, 5, out);
  lp.frequency.setValueAtTime(4200, t);
  lp.frequency.exponentialRampToValueAtTime(380, t + 0.32);
  osc('triangle', f, t, 0.6, lp);
  osc('square', f * 1.004, t, 0.6, gainTo(0.25, lp));
}

function playBass(t, f) {
  const out = voiceOut(0.08);
  env(out.gain, t, 0.4, 0.006, 0.45);
  const lp = filt('lowpass', 1100, 8, out);
  lp.frequency.setValueAtTime(1100, t);
  lp.frequency.exponentialRampToValueAtTime(140, t + 0.3);
  osc('sawtooth', f, t, 0.5, lp);
  osc('sine', f / 2, t, 0.5, lp);
}

function playDrum(t, kind) {
  if (kind === 0) {
    const out = voiceOut(0.05);
    env(out.gain, t, 0.95, 0.002, 0.42);
    sweep(osc('sine', 165, t, 0.45, out), t, 165, 42, 0.13);
  } else if (kind === 1 || kind === 2) {
    const out = voiceOut(0.25);
    noiseSrc(t, 0.3, filt('bandpass', kind === 1 ? 1900 : 1200, kind === 1 ? 0.8 : 1.6, out));
    if (kind === 1) {
      env(out.gain, t, 0.5, 0.002, 0.2);
      const tg = gainTo(1, out);
      env(tg.gain, t, 0.35, 0.002, 0.09);
      osc('triangle', 190, t, 0.15, tg);
    } else {
      // clap: three quick bursts, then a tail
      out.gain.setValueAtTime(0.0001, t);
      [0, 0.011, 0.022].forEach((dt) => {
        out.gain.setValueAtTime(0.55, t + dt);
        out.gain.exponentialRampToValueAtTime(0.08, t + dt + 0.009);
      });
      out.gain.setValueAtTime(0.5, t + 0.032);
      out.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    }
  } else if (kind === 3 || kind === 4) {
    const out = voiceOut(0.12);
    env(out.gain, t, kind === 3 ? 0.2 : 0.16, 0.001, kind === 3 ? 0.05 : 0.38);
    noiseSrc(t, 0.45, filt('highpass', 7200, 0.7, out));
  } else if (kind === 5 || kind === 6) {
    const out = voiceOut(0.2);
    env(out.gain, t, 0.6, 0.002, 0.32);
    const f0 = kind === 5 ? 115 : 185;
    sweep(osc('sine', f0, t, 0.36, out), t, f0, f0 * 0.62, 0.3);
  } else {
    const out = voiceOut(0.2);
    env(out.gain, t, 0.35, 0.001, 0.04);
    osc('triangle', 920, t, 0.06, out);
  }
}

/* --- Bank 2: ambient --- */

function playGlass(t, f) {
  const out = voiceOut(0.65);
  env(out.gain, t, 0.13, 0.008, 3);
  [[1, 1], [1.0035, 0.6], [2.76, 0.28], [5.4, 0.1]].forEach(([m, a]) => osc('sine', f * m, t, 3.1, gainTo(a, out)));
}

function playSwell(t, f) {
  const out = voiceOut(0.6);
  out.gain.setValueAtTime(0.0001, t);
  out.gain.linearRampToValueAtTime(0.085, t + 0.35);
  out.gain.exponentialRampToValueAtTime(0.0001, t + 2.3);
  const lp = filt('lowpass', 500, 1.2, out);
  lp.frequency.setValueAtTime(500, t);
  lp.frequency.linearRampToValueAtTime(2400, t + 0.6);
  lp.frequency.linearRampToValueAtTime(600, t + 2.3);
  osc('sawtooth', f * 0.996, t, 2.4, lp);
  osc('sawtooth', f * 1.004, t, 2.4, lp);
  osc('sawtooth', f * 2.002, t, 2.4, gainTo(0.3, lp));
  osc('sine', f / 2, t, 2.4, gainTo(0.6, out));
}

function playSub(t, f) {
  const out = voiceOut(0.03);
  env(out.gain, t, 0.5, 0.004, 0.75);
  sweep(osc('sine', f * 2, t, 0.8, out), t, f * 2, f, 0.06);
  osc('triangle', f, t, 0.8, gainTo(0.22, out));
}

function playTexture(t, kind) {
  if (kind === 0) {
    // wind gust: resonant noise sweep
    const out = voiceOut(0.7);
    env(out.gain, t, 0.3, 0.3, 0.9);
    const bp = filt('bandpass', 400, 6, out);
    bp.frequency.setValueAtTime(400, t);
    bp.frequency.exponentialRampToValueAtTime(2600, t + 0.5);
    bp.frequency.exponentialRampToValueAtTime(600, t + 1.2);
    noiseSrc(t, 1.25, bp);
  } else if (kind === 1) {
    const out = voiceOut(0.2);
    out.gain.setValueAtTime(0.0001, t);
    [0, 0.07].forEach((dt, i) => {
      out.gain.exponentialRampToValueAtTime(i ? 0.12 : 0.2, t + dt + 0.02);
      out.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.07);
    });
    noiseSrc(t, 0.16, filt('highpass', 5200, 0.8, out));
  } else if (kind === 2) {
    // wind chimes
    [2093, 2637, 3136, 3951].forEach((cf, i) => {
      const g = voiceOut(0.8);
      const tt = t + i * 0.045 + Math.random() * 0.02;
      env(g.gain, tt, 0.05, 0.002, 1.5);
      osc('sine', cf, tt, 1.55, g);
      osc('sine', cf * 2.76, tt, 0.4, gainTo(0.2, g));
    });
  } else if (kind === 3) {
    // dust: a scatter of tiny clicks
    const out = voiceOut(0.4);
    const hp = filt('highpass', 3000, 0.7, out);
    for (let i = 0; i < 14; i++) {
      const tt = t + Math.random() * 0.6;
      const g = gainTo(0, hp);
      env(g.gain, tt, 0.25 + Math.random() * 0.25, 0.001, 0.006);
      noiseSrc(tt, 0.01, g);
    }
  } else if (kind === 4) {
    // riser
    const out = voiceOut(0.5);
    out.gain.setValueAtTime(0.0001, t);
    out.gain.linearRampToValueAtTime(0.2, t + 0.75);
    out.gain.linearRampToValueAtTime(0.0001, t + 0.85);
    const bp = filt('bandpass', 300, 4, out);
    bp.frequency.setValueAtTime(300, t);
    bp.frequency.exponentialRampToValueAtTime(6000, t + 0.8);
    noiseSrc(t, 0.86, bp);
  } else if (kind === 5) {
    // sparkle: fast arpeggio up the current scale
    for (let i = 0; i < 6; i++) {
      const g = voiceOut(0.6);
      const tt = t + i * 0.05;
      env(g.gain, tt, 0.07, 0.002, 0.3);
      osc('sine', music.root * 4 * Math.pow(2, music.scale[i] / 12), tt, 0.32, g);
    }
  } else if (kind === 6) {
    const out = voiceOut(0.7);
    env(out.gain, t, 0.2, 0.02, 2.2);
    osc('sine', music.root / 2, t, 2.3, out);
    osc('sine', music.root * 0.75, t, 2.3, gainTo(0.5, out));
    osc('triangle', music.root, t, 2.3, gainTo(0.15, out));
  } else {
    // bubbles
    for (let i = 0; i < 3; i++) {
      const g = voiceOut(0.3);
      const tt = t + i * 0.07 + Math.random() * 0.03;
      env(g.gain, tt, 0.16, 0.003, 0.09);
      const f0 = 260 + Math.random() * 300;
      sweep(osc('sine', f0, tt, 0.12, g), tt, f0, f0 * 4, 0.1);
    }
  }
}

/* --- Bank 3: acid --- */

function playLead(t, f) {
  const out = voiceOut(0.35);
  env(out.gain, t, 0.12, 0.01, 0.6);
  const lp = filt('lowpass', 3500, 4, out);
  lp.frequency.setValueAtTime(3500, t);
  lp.frequency.exponentialRampToValueAtTime(900, t + 0.4);
  const lfo = ac.createOscillator();
  lfo.frequency.value = 5.5;
  const depth = ac.createGain();
  depth.gain.value = f * 0.008;
  lfo.connect(depth);
  const a = osc('square', f, t, 0.7, lp);
  const b = osc('sawtooth', f * 1.006, t, 0.7, gainTo(0.5, lp));
  depth.connect(a.frequency);
  depth.connect(b.frequency);
  lfo.start(t);
  lfo.stop(t + 0.7);
}

function playAcid(t, f) {
  const out = voiceOut(0.12);
  env(out.gain, t, 0.26, 0.003, 0.32);
  const shaper = ac.createWaveShaper();
  shaper.curve = distCurve;
  shaper.connect(out);
  const lp = filt('lowpass', 200, 16, shaper);
  lp.frequency.setValueAtTime(1500 + Math.random() * 2600, t);
  lp.frequency.exponentialRampToValueAtTime(160, t + 0.22);
  osc('sawtooth', f, t, 0.4, lp);
}

function playReese(t, f) {
  const out = voiceOut(0.06);
  env(out.gain, t, 0.3, 0.01, 0.8);
  const lp = filt('lowpass', 900, 2, out);
  lp.frequency.setValueAtTime(900, t);
  lp.frequency.exponentialRampToValueAtTime(240, t + 0.8);
  osc('sawtooth', f * 0.99, t, 0.85, lp);
  osc('sawtooth', f * 1.01, t, 0.85, lp);
  osc('sine', f / 2, t, 0.85, gainTo(0.7, out));
}

function playElec(t, kind) {
  if (kind === 0) {
    const out = voiceOut(0.04);
    env(out.gain, t, 1, 0.002, 0.6);
    sweep(osc('sine', 220, t, 0.65, out), t, 220, 45, 0.2);
    const c = gainTo(0, out);
    env(c.gain, t, 0.4, 0.001, 0.01);
    noiseSrc(t, 0.015, filt('highpass', 2000, 0.7, c));
  } else if (kind === 1) {
    const out = voiceOut(0.25);
    env(out.gain, t, 0.45, 0.002, 0.18);
    noiseSrc(t, 0.25, filt('highpass', 1500, 0.7, out));
    osc('triangle', 220, t, 0.08, gainTo(0.5, out));
  } else if (kind === 2) {
    const out = voiceOut(0.3);
    env(out.gain, t, 0.3, 0.002, 0.18);
    sweep(osc('sine', 2400, t, 0.2, out), t, 2400, 80, 0.15);
  } else if (kind === 3) {
    [[0, 1760], [0.06, 2637]].forEach(([dt, cf]) => {
      const g = voiceOut(0.35);
      env(g.gain, t + dt, 0.1, 0.001, 0.05);
      osc('square', cf, t + dt, 0.07, g);
    });
  } else if (kind === 4) {
    const out = voiceOut(0.35);
    env(out.gain, t, 0.12, 0.003, 0.2);
    sweep(osc('sawtooth', 300, t, 0.22, filt('lowpass', 4000, 3, out)), t, 300, 3000, 0.18);
  } else if (kind === 5) {
    const out = voiceOut(0.2);
    for (let i = 0; i < 6; i++) {
      const tt = t + i * 0.025;
      const g = gainTo(0, out);
      g.gain.setValueAtTime(0.09, tt);
      g.gain.setValueAtTime(0, tt + 0.012);
      osc('square', 200 + Math.random() * 2800, tt, 0.013, g);
    }
  } else if (kind === 6) {
    const out = voiceOut(0.5);
    env(out.gain, t, 0.16, 0.002, 1.1);
    noiseSrc(t, 1.2, filt('highpass', 6000, 0.6, out));
  } else {
    const out = voiceOut(0.2);
    env(out.gain, t, 0.22, 0.002, 0.3);
    const bp = filt('bandpass', 800, 3, out);
    osc('square', 540, t, 0.35, bp);
    osc('square', 800, t, 0.35, bp);
  }
}

/* --- Bank 4: world --- */

function partial(type, f, t, dest, peak, decay) {
  const g = gainTo(0, dest);
  env(g.gain, t, peak, 0.002, decay);
  osc(type, f, t, decay + 0.05, g);
}

function playMarimba(t, f) {
  const out = voiceOut(0.3);
  out.gain.value = 1;
  partial('sine', f, t, out, 0.3, 0.7);
  partial('sine', f * 4, t, out, 0.07, 0.1);
  partial('sine', f * 10, t, out, 0.02, 0.03);
}

function playKalimba(t, f) {
  const out = voiceOut(0.45);
  out.gain.value = 1;
  partial('sine', f, t, out, 0.24, 1.2);
  partial('sine', f * 5.9, t, out, 0.08, 0.15);
  partial('triangle', f * 2, t, out, 0.04, 0.4);
}

const VOWELS = [[700, 1150, 2600], [450, 800, 2830], [300, 2100, 2900]];

function playChoir(t, f, col) {
  const out = voiceOut(0.7);
  out.gain.setValueAtTime(0.0001, t);
  out.gain.linearRampToValueAtTime(0.13, t + 0.18);
  out.gain.exponentialRampToValueAtTime(0.0001, t + 1.7);
  const [f1, f2, f3] = VOWELS[col % 3];
  const bus = ac.createGain();
  [[f1, 8, 1], [f2, 10, 0.6], [f3, 12, 0.25]].forEach(([ff, q, a]) => bus.connect(filt('bandpass', ff, q, gainTo(a, out))));
  const lfo = ac.createOscillator();
  lfo.frequency.value = 5;
  const depth = ac.createGain();
  depth.gain.value = f * 0.006;
  lfo.connect(depth);
  [f, f * 1.005].forEach((cf) => depth.connect(osc('sawtooth', cf, t, 1.75, bus).frequency));
  lfo.start(t);
  lfo.stop(t + 1.75);
}

function playHand(t, kind) {
  const out = voiceOut(0.22);
  out.gain.value = 1;
  if (kind === 0 || kind === 1) {
    const f0 = kind === 0 ? 180 : 290;
    const g = gainTo(0, out);
    env(g.gain, t, 0.5, 0.002, 0.3);
    sweep(osc('sine', f0, t, 0.35, g), t, f0, f0 * 0.78, 0.25);
    const s = gainTo(0, out);
    env(s.gain, t, 0.25, 0.001, 0.02);
    noiseSrc(t, 0.03, filt('bandpass', 2000, 1, s));
  } else if (kind === 2) {
    [0, 0.08].forEach((dt, i) => {
      const g = gainTo(0, out);
      g.gain.setValueAtTime(0.0001, t + dt);
      g.gain.exponentialRampToValueAtTime(i ? 0.1 : 0.16, t + dt + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.1);
      noiseSrc(t + dt, 0.12, filt('highpass', 6000, 0.7, g));
    });
  } else if (kind === 3) {
    partial('sine', 900, t, out, 0.35, 0.06);
    partial('triangle', 1800, t, out, 0.1, 0.04);
  } else if (kind === 4) {
    partial('sine', 2500, t, out, 0.35, 0.035);
  } else if (kind === 5) {
    // tabla-style "ge": pitch bends up
    const g = gainTo(0, out);
    env(g.gain, t, 0.5, 0.003, 0.5);
    const o = osc('sine', 110, t, 0.55, g);
    o.frequency.setValueAtTime(110, t);
    o.frequency.exponentialRampToValueAtTime(165, t + 0.2);
  } else if (kind === 6) {
    const g = gainTo(0, out);
    env(g.gain, t, 0.35, 0.001, 0.07);
    noiseSrc(t, 0.09, filt('bandpass', 1800, 1, g));
    partial('sine', 330, t, out, 0.3, 0.08);
  } else {
    partial('sine', 1046, t, out, 0.2, 0.25);
    partial('sine', 1046 * 2.7, t, out, 0.05, 0.1);
  }
}

/* ------------------------------------------------------------------ */
/* Voices + banks                                                       */
/* ------------------------------------------------------------------ */

const VOICES = {
  bell: { oct: 1, shape: 'rings', play: playBell },
  pluck: { oct: 0.5, shape: 'square', play: playPluck },
  bass: { oct: 0.25, shape: 'hexagon', play: playBass },
  drum: { perc: true, shapes: ['triangle', 'diamond', 'burst', 'dots', 'cross', 'triangle', 'diamond', 'plus'], play: (t, f, c) => playDrum(t, c) },

  glass: { oct: 1, shape: 'star', play: playGlass },
  swell: { oct: 0.5, shape: 'flower', play: playSwell },
  sub: { oct: 0.25, shape: 'target', play: playSub },
  texture: { perc: true, shapes: ['wave', 'dots', 'star', 'burst', 'spiral', 'zigzag', 'squiggle', 'circle'], play: (t, f, c) => playTexture(t, c) },

  lead: { oct: 1, shape: 'pentagon', play: playLead },
  acid: { oct: 0.5, shape: 'spiral', play: playAcid },
  reese: { oct: 0.25, shape: 'wave', play: playReese },
  elec: { perc: true, shapes: ['diamond', 'xcircle', 'zigzag', 'plus', 'burst', 'cross', 'star', 'square'], play: (t, f, c) => playElec(t, c) },

  marimba: { oct: 1, shape: 'octagon', play: playMarimba },
  kalimba: { oct: 1, shape: 'triangle', play: playKalimba },
  choir: { oct: 0.5, shape: 'ellipse', play: playChoir },
  hand: { perc: true, shapes: ['circle', 'target', 'dots', 'square', 'plus', 'triangle', 'cross', 'diamond'], play: (t, f, c) => playHand(t, c) },
};

const BANKS = [
  { name: 'Gamelan', rows: ['bell', 'pluck', 'bass', 'drum'] },
  { name: 'Ambient', rows: ['glass', 'swell', 'sub', 'texture'] },
  { name: 'Acid', rows: ['lead', 'acid', 'reese', 'elec'] },
  { name: 'World', rows: ['marimba', 'kalimba', 'choir', 'hand'] },
];

const voiceOf = (code) => VOICES[BANKS[codeBank(code)].rows[padRow(codePad(code))]];

function shapeNameOf(code) {
  const v = voiceOf(code);
  return v.shapes ? v.shapes[padCol(codePad(code))] : v.shape;
}

function playCode(code, t) {
  const v = voiceOf(code);
  const col = padCol(codePad(code));
  const f = v.perc ? 0 : music.root * Math.pow(2, music.scale[col] / 12) * v.oct;
  v.play(t, f, col);
}

/* ------------------------------------------------------------------ */
/* Generative "auto-play" genres                                        */
/* ------------------------------------------------------------------ */

function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const R0 = 0, R1 = 1, R2 = 2, R3 = 3;
const KICK = 0, SNARE = 1, CLAP = 2, HAT = 3, OHAT = 4, TOM_L = 5, TOM_H = 6, RIM = 7;

const GENRES = {
  gamelan: {
    bank: 0, bpm: 116, swing: 0, scale: SCALES.pelog, root: 329.63,
    build(p, rnd, at) {
      // interlocking kotekan: two parts alternate every step
      const contour = [0, 1, 2, 1, 2, 3, 2, 1, 3, 4, 3, 2, 1, 2, 1, 0];
      contour.forEach((d, s) => p[s].add(at(R0, d + (s % 2 ? 2 : 0))));
      [[0, 2], [4, 4], [8, 3], [12, 0]].forEach(([s, d]) => p[s].add(at(R1, d)));
      p[0].add(at(R2, 0));
      p[8].add(at(R2, 3));
      [3, 7, 11, 15].forEach((s) => p[s].add(at(R3, TOM_L)));
      [6, 14].forEach((s) => p[s].add(at(R3, TOM_H)));
      [2, 10].forEach((s) => p[s].add(at(R3, RIM)));
      if (rnd() > 0.5) p[13].add(at(R3, TOM_H));
    },
  },
  medieval: {
    bank: 0, bpm: 76, swing: 0, scale: SCALES.dorian, root: 293.66,
    build(p, rnd, at) {
      p[0].add(at(R2, 0));
      p[8].add(at(R2, 4));
      const tune = [0, 1, 2, 3, 4, 3, 2, 1];
      tune.forEach((d, i) => p[i * 2].add(at(R1, d + (rnd() > 0.8 ? 1 : 0))));
      // upper voice moves in parallel fifths on the strong beats
      [0, 4, 8, 12].forEach((s) => p[s].add(at(R0, tune[s / 2] + 4)));
      [6, 14].forEach((s) => p[s].add(at(R0, 7 - tune[s / 2])));
      p[0].add(at(R3, RIM));
      p[8].add(at(R3, TOM_L));
    },
  },
  footwork: {
    bank: 0, bpm: 160, swing: 0, scale: SCALES.pentatonic, root: 261.63,
    build(p, rnd, at) {
      const kicks = [0, 3, 6, 8, 11, 14];
      const bassDeg = [0, 0, 3, 0, 5, 4];
      kicks.forEach((s, i) => {
        p[s].add(at(R3, KICK));
        p[s].add(at(R2, bassDeg[i]));
      });
      [4, 12].forEach((s) => p[s].add(at(R3, CLAP)));
      for (let s = 1; s < STEPS; s += 2) p[s].add(at(R3, HAT));
      [6, 14].forEach((s) => p[s].add(at(R3, OHAT)));
      // chopped vocal-style stabs
      [2, 3, 10, 11].forEach((s) => p[s].add(at(R1, 4)));
      p[7].add(at(R1, 6));
      p[0].add(at(R0, 7));
      if (rnd() > 0.4) p[15].add(at(R1, 5));
    },
  },
  jazzfunk: {
    bank: 0, bpm: 104, swing: 0.2, scale: SCALES.dorian, root: 349.23,
    build(p, rnd, at) {
      [0, 7, 10].forEach((s) => p[s].add(at(R3, KICK)));
      [4, 12].forEach((s) => p[s].add(at(R3, SNARE)));
      p[15].add(at(R3, RIM));
      for (let s = 0; s < STEPS; s += 2) p[s].add(at(R3, HAT));
      p[14].add(at(R3, OHAT));
      [[0, 0], [3, 0], [6, 3], [8, 4], [10, 4], [11, 5], [14, 6]].forEach(([s, d]) => p[s].add(at(R2, d)));
      // offbeat chord stabs (several pads on the same slice)
      [[2, [0, 2, 4]], [6, [1, 3, 5]], [10, [0, 2, 4]], [14, [4, 6, 7]]].forEach(([s, chord]) =>
        chord.forEach((d) => p[s].add(at(R1, d)))
      );
      [[1, 4], [5, 5], [9, 7], [13, 6]].forEach(([s, d]) => p[s].add(at(R0, d)));
      if (rnd() > 0.5) p[9].add(at(R0, 6));
    },
  },
  ambient: {
    bank: 1, bpm: 84, swing: 0, scale: SCALES.majpenta, root: 261.63,
    build(p, rnd, at) {
      [[0, 4], [3, 6], [6, 5], [10, 7], [13, 3]].forEach(([s, d]) => p[s].add(at(R0, d)));
      if (rnd() > 0.4) p[8].add(at(R0, 2));
      p[0].add(at(R1, 0));
      p[8].add(at(R1, 3));
      p[0].add(at(R2, 0));
      p[8].add(at(R2, 3));
      p[12].add(at(R2, 4));
      p[0].add(at(R3, 0));
      p[6].add(at(R3, 2));
      p[12].add(at(R3, 5));
      [2, 6, 10, 14].forEach((s) => p[s].add(at(R3, 1)));
      p[9].add(at(R3, 3));
      if (rnd() > 0.5) p[15].add(at(R3, 7));
    },
  },
  acid: {
    bank: 2, bpm: 128, swing: 0, scale: SCALES.pentatonic, root: 220,
    build(p, rnd, at) {
      [0, 4, 8, 12].forEach((s) => p[s].add(at(R3, 0)));
      [4, 12].forEach((s) => p[s].add(at(R3, 1)));
      [3, 11].forEach((s) => p[s].add(at(R3, 3)));
      p[15].add(at(R3, 2));
      p[0].add(at(R3, 6));
      p[7].add(at(R3, 7));
      const line = [0, 0, 3, 0, 5, 0, 4, 2, 0, 0, 3, 7, 5, 0, 6, 4];
      line.forEach((d, s) => {
        if (s % 4 === 0 || rnd() > 0.3) p[s].add(at(R1, d));
      });
      p[0].add(at(R2, 0));
      p[8].add(at(R2, 3));
      p[2].add(at(R0, 4));
      p[10].add(at(R0, 6));
    },
  },
};

/* ------------------------------------------------------------------ */
/* Visual styles                                                        */
/* ------------------------------------------------------------------ */

const STYLES = {
  slices: { rows: [0xff3a2a, 0xff7040, 0xe0183a, 0xffa25c], frame: 0xff3a2a, bg: 0x050203, padBase: 0x120403, ui: 0xff3a2a, bloom: 0.62 },
  rings: { rows: [0xe6dcff, 0xffb347, 0x9a6bff, 0xffffff], frame: 0xcfc4ff, bg: 0x040306, padBase: 0x07060c, ui: 0xb79cff, bloom: 0.5 },
  helix: { rows: [0xffffff, 0xff3b1f, 0xff7a5c, 0xc8c8c8], frame: 0xe0e0e0, bg: 0x030303, padBase: 0x080808, ui: 0xeeeeee, bloom: 0.38 },
};
const STYLE_ORDER = ['slices', 'rings', 'helix'];
let style = 'slices';
let theme = STYLES.slices;

/* ------------------------------------------------------------------ */
/* Scene                                                                */
/* ------------------------------------------------------------------ */

const stage = document.getElementById('sm-stage');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(theme.bg, 1);
renderer.xr.enabled = true;
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 50);
camera.position.set(1.1, 1.2, 2.05);

const rig = new THREE.Group();
scene.add(rig);

const lineMat = (color, opacity) =>
  new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

const V = (x, z) => new THREE.Vector3(x, 0, z);

function polar(n, r, rot = 0) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = rot + (i / n) * Math.PI * 2;
    pts.push(V(Math.cos(a) * r, Math.sin(a) * r));
  }
  return pts;
}

function segs(pts, closed = true) {
  const out = [];
  const n = closed ? pts.length : pts.length - 1;
  for (let i = 0; i < n; i++) out.push(pts[i], pts[(i + 1) % pts.length]);
  return out;
}

const segGeo = (list) => new THREE.BufferGeometry().setFromPoints(list);

const SHAPES = (() => {
  const wavePts = (amp, cycles, w = 1) => {
    const pts = [];
    for (let i = 0; i <= 40; i++) {
      const x = -w + (i / 40) * 2 * w;
      pts.push(V(x, amp * Math.sin((x / w) * Math.PI * cycles)));
    }
    return pts;
  };
  const rose = [];
  for (let i = 0; i < 80; i++) {
    const a = (i / 80) * Math.PI * 2;
    const r = 0.55 + 0.45 * Math.cos(5 * a);
    rose.push(V(Math.cos(a) * r, Math.sin(a) * r));
  }
  const spiral = [];
  for (let i = 0; i <= 70; i++) {
    const k = i / 70;
    const a = k * Math.PI * 4;
    spiral.push(V(Math.cos(a) * (0.08 + 0.92 * k), Math.sin(a) * (0.08 + 0.92 * k)));
  }
  const star = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i / 10) * Math.PI * 2;
    const r = i % 2 ? 0.42 : 1;
    star.push(V(Math.cos(a) * r, Math.sin(a) * r));
  }
  const burst = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    burst.push(V(Math.cos(a) * 0.35, Math.sin(a) * 0.35), V(Math.cos(a), Math.sin(a)));
  }
  const dots = [];
  polar(8, 0.8).forEach((c) => dots.push(...segs(polar(4, 0.13, Math.PI / 4).map((p) => p.add(c)))));
  const zig = [];
  for (let i = 0; i <= 6; i++) zig.push(V(-1 + i / 3, i % 2 ? 0.45 : -0.45));
  const ellipse = polar(40, 1).map((p) => V(p.x, p.z * 0.5));
  const X = [V(-0.8, -0.8), V(0.8, 0.8), V(-0.8, 0.8), V(0.8, -0.8)];
  const plus = [V(-1, 0), V(1, 0), V(0, -1), V(0, 1)];
  const scale = (list, s) => list.map((p) => p.clone().multiplyScalar(s));
  return {
    circle: segGeo(segs(polar(40, 1))),
    rings: segGeo([...segs(polar(40, 1)), ...segs(polar(28, 0.42))]),
    target: segGeo([...segs(polar(40, 1)), ...segs(polar(28, 0.5)), ...segs(polar(16, 0.15))]),
    square: segGeo(segs(polar(4, 1, Math.PI / 4))),
    hexagon: segGeo(segs(polar(6, 1))),
    triangle: segGeo(segs(polar(3, 1, -Math.PI / 2))),
    diamond: segGeo(segs(polar(4, 0.95))),
    pentagon: segGeo(segs(polar(5, 1, -Math.PI / 2))),
    octagon: segGeo([...segs(polar(8, 1, Math.PI / 8)), ...segs(polar(8, 0.18, Math.PI / 8))]),
    star: segGeo(segs(star)),
    flower: segGeo(segs(rose)),
    spiral: segGeo(segs(spiral, false)),
    wave: segGeo(segs(wavePts(0.4, 2), false)),
    zigzag: segGeo(segs(zig, false)),
    burst: segGeo(burst),
    dots: segGeo(dots),
    ellipse: segGeo(segs(ellipse)),
    cross: segGeo(X),
    plus: segGeo(plus),
    xcircle: segGeo([...segs(polar(40, 1)), ...scale(X, 0.62)]),
    squiggle: segGeo([...segs(polar(40, 1)), ...segs(wavePts(0.25, 1.5, 0.62), false)]),
    arrowL: segGeo(segs([V(0.5, -0.8), V(-0.5, 0), V(0.5, 0.8)], false)),
    arrowR: segGeo(segs([V(-0.5, -0.8), V(0.5, 0), V(-0.5, 0.8)], false)),
  };
})();

function makeShape(code, size, opacity) {
  const g = new THREE.Group();
  const m = new THREE.LineSegments(SHAPES[shapeNameOf(code)], lineMat(theme.rows[padRow(codePad(code))], opacity));
  m.scale.setScalar(size);
  g.add(m);
  return g;
}

function setGroupOpacity(g, o) {
  g.traverse((n) => {
    if (n.material) n.material.opacity = o;
  });
}

/* Floor grid */
const floor = new THREE.GridHelper(6, 48, 0x2a0604, 0x140302);
floor.position.y = -0.03;
floor.material.transparent = true;
floor.material.opacity = 0.35;
rig.add(floor);

/* Console of pads */
const PAD = 0.07;
const PAD_PITCH = 0.086;
const consoleGroup = new THREE.Group();
consoleGroup.position.set(0, 0, 0.62);
rig.add(consoleGroup);

function rectLoop(w, d, color, opacity) {
  return new THREE.LineLoop(
    segGeo([V(-w / 2, -d / 2), V(w / 2, -d / 2), V(w / 2, d / 2), V(-w / 2, d / 2)]),
    lineMat(color, opacity)
  );
}

const innerFrame = rectLoop(COLS * PAD_PITCH + 0.05, ROWS * PAD_PITCH + 0.05, theme.frame, 0.55);
consoleGroup.add(innerFrame);
const outerFrame = rectLoop(COLS * PAD_PITCH + 0.25, ROWS * PAD_PITCH + 0.14, theme.frame, 0.18);
outerFrame.position.y = -0.008;
consoleGroup.add(outerFrame);

function textTexture(text, w, h, font) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const x = c.getContext('2d');
  x.fillStyle = '#ffffff';
  x.font = font;
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText(text, w / 2, h / 2 + 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const padBoxGeo = new THREE.BoxGeometry(PAD, 0.012, PAD);
const padEdgeGeo = new THREE.EdgesGeometry(padBoxGeo);
const labelGeo = new THREE.PlaneGeometry(0.024, 0.024);
const labelMats = [];

const pads = [];
const hitMeshes = [];
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const index = r * COLS + c;
    const g = new THREE.Group();
    g.position.set((c - (COLS - 1) / 2) * PAD_PITCH, 0, (r - (ROWS - 1) / 2) * PAD_PITCH);
    const base = new THREE.Mesh(padBoxGeo, new THREE.MeshBasicMaterial({ color: theme.padBase }));
    base.userData = { pad: index, hx: PAD / 2, hz: PAD / 2 };
    g.add(base);
    const edges = new THREE.LineSegments(padEdgeGeo, lineMat(theme.rows[r], 0.5));
    g.add(edges);
    const labelMat = new THREE.MeshBasicMaterial({
      map: textTexture(KEY_LABELS[r][c], 64, 64, '600 40px ui-monospace, Menlo, monospace'),
      color: theme.ui,
      transparent: true,
      depthWrite: false,
    });
    labelMats.push(labelMat);
    const label = new THREE.Mesh(labelGeo, labelMat);
    label.rotation.x = -Math.PI / 2;
    label.position.set(-PAD / 2 + 0.014, 0.0066, PAD / 2 - 0.014);
    g.add(label);
    consoleGroup.add(g);
    pads.push({ group: g, base, edges, icon: null, row: r, flash: 0 });
    hitMeshes.push(base);
  }
}

/* Bank arrows on either side of the console (usable by mouse, controller and hand) */
const arrowGeo = new THREE.BoxGeometry(0.05, 0.012, ROWS * PAD_PITCH * 0.7);
const arrowEdgeGeo = new THREE.EdgesGeometry(arrowGeo);
const arrows = [-1, 1].map((dir) => {
  const g = new THREE.Group();
  g.position.set(dir * (COLS * PAD_PITCH / 2 + 0.06), 0, 0);
  const base = new THREE.Mesh(arrowGeo, new THREE.MeshBasicMaterial({ color: theme.padBase }));
  base.userData = { action: dir < 0 ? 'bankPrev' : 'bankNext', hx: 0.025, hz: ROWS * PAD_PITCH * 0.35 };
  const edges = new THREE.LineSegments(arrowEdgeGeo, lineMat(theme.frame, 0.45));
  const icon = new THREE.LineSegments(dir < 0 ? SHAPES.arrowL : SHAPES.arrowR, lineMat(theme.frame, 0.85));
  icon.scale.setScalar(0.014);
  icon.position.y = 0.0065;
  g.add(base, edges, icon);
  consoleGroup.add(g);
  hitMeshes.push(base);
  return { group: g, base, edges, icon, flash: 0 };
});

/* Bank name plate in front of the console */
const plateMat = new THREE.MeshBasicMaterial({ color: theme.ui, transparent: true, depthWrite: false });
const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.04), plateMat);
plate.rotation.x = -Math.PI / 2;
plate.position.set(0, 0.001, ROWS * PAD_PITCH / 2 + 0.05);
consoleGroup.add(plate);

function refreshConsole() {
  pads.forEach((p, i) => {
    if (p.icon) {
      p.group.remove(p.icon);
      p.icon.traverse((o) => o.material && o.material.dispose());
    }
    p.icon = makeShape(music.bank * BANK_SIZE + i, 0.017, 0.75);
    p.icon.position.y = 0.0065;
    p.group.add(p.icon);
    p.edges.material.color.setHex(theme.rows[p.row]);
  });
  const b = BANKS[music.bank];
  if (plateMat.map) plateMat.map.dispose();
  plateMat.map = textTexture(
    `BANK ${music.bank + 1} · ${b.name.toUpperCase()}   ${b.rows.join(' · ')}`,
    1024, 64, '600 36px ui-monospace, Menlo, monospace'
  );
  plateMat.needsUpdate = true;
}

/* Layers: the bottom ("active") layer sits just behind the keys with the same column pitch, so
   every note's line runs straight back from its pad, parallel to the others. When the bar
   wraps, the layer rises into the stack and a fresh layer starts behind the keys. */
const GRID_W = COLS * PAD_PITCH + 0.05;
const GRID_D = ROWS * PAD_PITCH + 0.05;
const LAYER_Y0 = 0.12;
const MAX_LAYERS = 12;
const RING_R = 0.4;
const ANG_STEP = (Math.PI * 2) / STEPS;
const stack = new THREE.Group();
stack.position.set(0, 0, consoleGroup.position.z - 0.62);
rig.add(stack);

const view = { spread: 0.085, twist: 0 };

const gridGeo = (() => {
  const pts = [];
  for (let c = 1; c < COLS; c++) {
    const x = (c - COLS / 2) * PAD_PITCH;
    pts.push(V(x, -GRID_D / 2), V(x, GRID_D / 2));
  }
  for (let r = 1; r < ROWS; r++) {
    const z = (r - ROWS / 2) * PAD_PITCH;
    pts.push(V(-GRID_W / 2, z), V(GRID_W / 2, z));
  }
  return segGeo(pts);
})();
const layerFillGeo = new THREE.PlaneGeometry(GRID_W, GRID_D);

const ringLayerGeo = (() => {
  const pts = [...segs(polar(72, RING_R)), ...segs(polar(20, 0.05))];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const len = i % 4 ? 0.025 : 0.05;
    pts.push(V(Math.cos(a) * RING_R, Math.sin(a) * RING_R), V(Math.cos(a) * (RING_R + len), Math.sin(a) * (RING_R + len)));
  }
  return segGeo(pts);
})();

function makeLayer() {
  const g = new THREE.Group();
  g.position.y = LAYER_Y0;
  const outline = rectLoop(GRID_W, GRID_D, theme.frame, 0.5);
  const grid = new THREE.LineSegments(gridGeo, lineMat(theme.frame, 0.1));
  const fill = new THREE.Mesh(
    layerFillGeo,
    new THREE.MeshBasicMaterial({
      color: theme.frame,
      transparent: true,
      opacity: 0.02,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  fill.rotation.x = -Math.PI / 2;
  const ring = new THREE.LineSegments(ringLayerGeo, lineMat(theme.frame, 0));
  g.add(outline, grid, fill, ring);
  stack.add(g);
  return { group: g, outline, grid, fill, ring, notes: new Map(), idx: 0, idxF: 0, morph: 0, glow: 0, fade: 1 };
}

function disposeLayer(l) {
  stack.remove(l.group);
  l.group.traverse((o) => o.material && o.material.dispose());
}

const layers = [makeLayer()];

/* Base disc (rings + helix styles): concentric circles with a radial index line */
const baseDisc = (() => {
  const pts = [];
  for (let i = 1; i <= 12; i++) pts.push(...segs(polar(64, (i / 12) * (RING_R + 0.04))));
  pts.push(...segs(polar(96, RING_R + 0.1)));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    pts.push(V(Math.cos(a) * (RING_R + 0.1), Math.sin(a) * (RING_R + 0.1)), V(Math.cos(a) * (RING_R + 0.16), Math.sin(a) * (RING_R + 0.16)));
  }
  pts.push(V(0, 0), V(0, RING_R + 0.18));
  const m = new THREE.LineSegments(segGeo(pts), lineMat(theme.frame, 0.22));
  stack.add(m);
  return m;
})();

/* Dotted strands: a braid through the centre (rings) or spiral trails per row (helix) */
const STRAND_N = 220;
const strands = Array.from({ length: 4 }, () => {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(STRAND_N * 3), 3));
  const pts = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      size: 0.007,
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  pts.frustumCulled = false;
  stack.add(pts);
  return pts;
});

/* Spine up the stack */
const spine = new THREE.Line(segGeo([new THREE.Vector3(), new THREE.Vector3(0, 1, 0)]), lineMat(theme.frame, 0.35));
stack.add(spine);

/* Bar progress along the front edge of the active layer */
const progress = new THREE.Line(segGeo([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0)]), lineMat(theme.ui, 0.95));
progress.position.set(-GRID_W / 2, LAYER_Y0, GRID_D / 2 + 0.015);
stack.add(progress);
const progressTicks = (() => {
  const pts = [];
  for (let i = 0; i <= STEPS; i++) {
    const x = -GRID_W / 2 + (i / STEPS) * GRID_W;
    const len = i % 4 ? 0.006 : 0.012;
    pts.push(V(x, GRID_D / 2 + 0.015 - len), V(x, GRID_D / 2 + 0.015 + len));
  }
  const m = new THREE.LineSegments(segGeo(pts), lineMat(theme.frame, 0.4));
  m.position.y = LAYER_Y0;
  stack.add(m);
  return m;
})();

function gridPos(code) {
  const p = codePad(code);
  return V((padCol(p) - (COLS - 1) / 2) * PAD_PITCH, (padRow(p) - (ROWS - 1) / 2) * PAD_PITCH);
}

/* Where a note ends up once its layer has risen and taken the style's shape */
function stylePos(code) {
  const p = codePad(code);
  const row = padRow(p);
  const col = padCol(p);
  if (style === 'rings') {
    const a = (col / COLS) * Math.PI * 2 - Math.PI / 2 + row * 0.2;
    const r = 0.1 + row * 0.085;
    return V(Math.cos(a) * r, Math.sin(a) * r);
  }
  if (style === 'helix') {
    const a = (col - (COLS - 1) / 2) * 0.13;
    const r = 0.14 + row * 0.08;
    return V(Math.cos(a) * r, Math.sin(a) * r);
  }
  return gridPos(code);
}

const helixRot = (k, t) => k * ANG_STEP + t * 0.1 + k * view.twist;

function layerRot(l, t) {
  if (style === 'helix') return l.morph * helixRot(l.idxF, t);
  if (style === 'rings') return l.morph * t * 0.05 + l.idxF * view.twist;
  return l.idxF * view.twist;
}

const STEM_GEO = segGeo([new THREE.Vector3(), new THREE.Vector3(0, -0.03, 0)]);

function addLayerNote(layer, code) {
  let n = layer.notes.get(code);
  if (n) return n;
  const g = makeShape(code, 0.026, 0.8);
  g.add(new THREE.Line(STEM_GEO, lineMat(theme.rows[padRow(codePad(code))], 0.4)));
  n = { group: g, code, pop: 0, spin: (Math.random() - 0.5) * 0.8, grid: gridPos(code), styled: stylePos(code) };
  g.position.copy(n.grid);
  g.position.y = 0.004;
  layer.group.add(g);
  layer.notes.set(code, n);
  return n;
}

function commitLayer() {
  if (!layers[0].notes.size) return;
  layers.forEach((l) => { l.idx += 1; });
  layers[0].glow = 1;
  layers.unshift(makeLayer());
}

function clearLayers() {
  layers.forEach(disposeLayer);
  layers.length = 0;
  layers.push(makeLayer());
}

/* Ripples + lasers (pooled) */
const ripples = Array.from({ length: 40 }, () => {
  const m = new THREE.LineSegments(SHAPES.circle, lineMat(0xffffff, 0));
  m.visible = false;
  scene.add(m);
  return { mesh: m, t: 1 };
});
let rippleIdx = 0;
function spawnRipple(worldPos, color) {
  const r = ripples[rippleIdx++ % ripples.length];
  r.mesh.position.copy(worldPos);
  r.mesh.material.color.setHex(color);
  r.mesh.visible = true;
  r.t = 0;
}

const lasers = Array.from({ length: 32 }, () => {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const l = new THREE.Line(geo, lineMat(0xffffff, 0));
  l.visible = false;
  l.frustumCulled = false;
  scene.add(l);
  return { line: l, t: 1 };
});
let laserIdx = 0;
function spawnLaser(a, b, color) {
  const L = lasers[laserIdx++ % lasers.length];
  L.line.geometry.attributes.position.array.set([a.x, a.y, a.z, b.x, b.y, b.z]);
  L.line.geometry.attributes.position.needsUpdate = true;
  L.line.material.color.setHex(color);
  L.line.visible = true;
  L.t = 0;
}

/* ------------------------------------------------------------------ */
/* Style switching                                                      */
/* ------------------------------------------------------------------ */

const rgba = (hex, a) => `rgba(${(hex >> 16) & 255}, ${(hex >> 8) & 255}, ${hex & 255}, ${a})`;

function applyStyle(name) {
  style = name;
  theme = STYLES[name];
  renderer.setClearColor(theme.bg, 1);
  bloom.strength = theme.bloom;
  document.body.style.background = `#${theme.bg.toString(16).padStart(6, '0')}`;
  const root = document.documentElement.style;
  root.setProperty('--red', rgba(theme.ui, 1));
  root.setProperty('--red-dim', rgba(theme.ui, 0.45));
  root.setProperty('--red-faint', rgba(theme.ui, 0.14));

  const isSlices = name === 'slices';
  floor.visible = isSlices;
  baseDisc.visible = !isSlices;
  strands.forEach((s, i) => {
    s.visible = !isSlices;
    s.material.color.setHex(name === 'rings' ? (i < 2 ? 0x9a6bff : 0xd9c6ff) : theme.rows[i]);
  });
  layers.forEach((l) => {
    [l.outline, l.grid, l.fill, l.ring].forEach((m) => m.material.color.setHex(theme.frame));
    l.notes.forEach((n) => {
      n.styled = stylePos(n.code);
      const c = theme.rows[padRow(codePad(n.code))];
      n.group.traverse((o) => o.material && o.material.color.setHex(c));
    });
  });
  [innerFrame, outerFrame, baseDisc, spine, progressTicks].forEach((m) => m.material.color.setHex(theme.frame));
  progress.material.color.setHex(theme.ui);
  arrows.forEach((a) => {
    a.edges.material.color.setHex(theme.frame);
    a.icon.material.color.setHex(theme.frame);
  });
  plateMat.color.setHex(theme.ui);
  labelMats.forEach((m) => m.color.setHex(theme.ui));
  if (isSlices) spine.position.set(-GRID_W / 2, LAYER_Y0, -GRID_D / 2);
  else spine.position.set(0, LAYER_Y0, 0);

  refreshConsole();
  document.querySelectorAll('[data-style]').forEach((b) => b.classList.toggle('is-on', b.dataset.style === name));
}

function setBank(i) {
  music.bank = (i + BANKS.length) % BANKS.length;
  refreshConsole();
  document.querySelectorAll('[data-bank]').forEach((b) => b.classList.toggle('is-on', Number(b.dataset.bank) === music.bank));
}

/* ------------------------------------------------------------------ */
/* Transport / scheduler                                                */
/* ------------------------------------------------------------------ */

let nextStepTime = 0;
let nextStep = 0;
const visualQueue = [];
const recentSteps = [];
let currentStep = 0;

const stepDur = () => 60 / music.bpm / 4;

function scheduler() {
  if (!ac || !music.playing) return;
  while (nextStepTime < ac.currentTime + 0.12) {
    const t = nextStepTime + (nextStep % 2 ? music.swing * stepDur() : 0);
    music.pattern[nextStep].forEach((code) => playCode(code, t));
    visualQueue.push({ t, step: nextStep, codes: [...music.pattern[nextStep]] });
    recentSteps.push({ t, step: nextStep });
    if (recentSteps.length > 8) recentSteps.shift();
    nextStepTime += stepDur();
    nextStep = (nextStep + 1) % STEPS;
  }
}
setInterval(scheduler, 25);

function startTransport() {
  music.playing = true;
  nextStepTime = ac.currentTime + 0.06;
  visualQueue.length = 0;
}

function nearestStep(now) {
  let best = null;
  for (const s of recentSteps) {
    if (!best || Math.abs(s.t - now) < Math.abs(best.t - now)) best = s;
  }
  return best ? best.step : currentStep;
}

const tmpA = new THREE.Vector3();
const tmpB = new THREE.Vector3();

/* Every sound lands on the active layer, with a vertical line up from its pad. */
function fireNote(code) {
  const p = codePad(code);
  const color = theme.rows[padRow(p)];
  // only flash the pad if its bank is the one on the console
  if (codeBank(code) === music.bank) pads[p].flash = 1;
  const n = addLayerNote(layers[0], code);
  n.pop = 1;
  layers[0].glow = Math.max(layers[0].glow, 0.5);
  pads[p].base.getWorldPosition(tmpA);
  tmpA.y += 0.007;
  n.group.getWorldPosition(tmpB);
  spawnLaser(tmpA, tmpB, color);
  spawnRipple(tmpB, color);
}

function hitPad(p) {
  if (!ac) return;
  const code = music.bank * BANK_SIZE + p;
  const now = ac.currentTime;
  playCode(code, now);
  if (music.playing && music.recording) music.pattern[nearestStep(now)].add(code);
  fireNote(code);
}

function hitMesh(mesh) {
  const d = mesh.userData;
  if (d.pad !== undefined) {
    hitPad(d.pad);
    return;
  }
  const arrow = arrows.find((a) => a.base === mesh);
  if (arrow) arrow.flash = 1;
  setBank(music.bank + (d.action === 'bankPrev' ? -1 : 1));
}

/* ------------------------------------------------------------------ */
/* Camera views                                                         */
/* ------------------------------------------------------------------ */

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.45, 0.2);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.minDistance = 0.4;
controls.maxDistance = 6;

const VIEWS = {
  orbit: { pos: new THREE.Vector3(1.1, 1.2, 2.05), target: new THREE.Vector3(0, 0.45, 0.2), auto: true },
  top: { pos: new THREE.Vector3(0, 2.4, 1.35), target: new THREE.Vector3(0, 0.3, 0.25), auto: false },
};
let viewTween = null;

function setView(name) {
  const v = VIEWS[name];
  controls.autoRotate = v.auto;
  viewTween = { pos: v.pos.clone(), target: v.target.clone() };
  document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('is-on', b.dataset.view === name));
}
controls.addEventListener('start', () => { viewTween = null; });

/* ------------------------------------------------------------------ */
/* Desktop input                                                        */
/* ------------------------------------------------------------------ */

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let padPointerDown = false;

renderer.domElement.addEventListener('pointerdown', (e) => {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects(hitMeshes, false)[0];
  if (hit) {
    padPointerDown = true;
    controls.enabled = false;
    hitMesh(hit.object);
  }
}, { capture: true });
window.addEventListener('pointerup', () => {
  if (padPointerDown) {
    padPointerDown = false;
    controls.enabled = true;
  }
});

window.addEventListener('keydown', (e) => {
  if (!ac || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
  if (KEY_TO_PAD.has(e.code)) {
    e.preventDefault();
    hitPad(KEY_TO_PAD.get(e.code));
  } else if (e.code === 'BracketLeft' || e.code === 'BracketRight') {
    e.preventDefault();
    setBank(music.bank + (e.code === 'BracketLeft' ? -1 : 1));
  } else if (e.code === 'Slash') {
    e.preventDefault();
    applyStyle(STYLE_ORDER[(STYLE_ORDER.indexOf(style) + 1) % STYLE_ORDER.length]);
  } else if (e.code === 'Space') {
    e.preventDefault();
    togglePlay();
  } else if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
    e.preventDefault();
    setBpm(music.bpm + (e.code === 'ArrowUp' ? 2 : -2));
  } else if (e.code === 'Backspace' || e.code === 'Delete') {
    e.preventDefault();
    clearPattern();
  }
});

/* ------------------------------------------------------------------ */
/* UI                                                                   */
/* ------------------------------------------------------------------ */

const ui = {
  play: document.getElementById('smPlay'),
  rec: document.getElementById('smRec'),
  clear: document.getElementById('smClear'),
  bpm: document.getElementById('smBpm'),
  spread: document.getElementById('smSpread'),
  twist: document.getElementById('smTwist'),
  start: document.getElementById('smStart'),
};

function togglePlay() {
  if (music.playing) music.playing = false;
  else startTransport();
  ui.play.textContent = music.playing ? 'Pause' : 'Play';
  ui.play.classList.toggle('is-on', music.playing);
}

function setBpm(v) {
  music.bpm = Math.max(50, Math.min(200, Math.round(v)));
  ui.bpm.textContent = String(music.bpm);
}

function clearPattern() {
  music.pattern.forEach((s) => s.clear());
  clearLayers();
  document.querySelectorAll('[data-genre]').forEach((b) => b.classList.remove('is-on'));
}

let genreSeed = 1;
function loadGenre(name) {
  const g = GENRES[name];
  music.scale = g.scale;
  music.root = g.root;
  music.swing = g.swing;
  setBpm(g.bpm);
  music.pattern.forEach((s) => s.clear());
  const at = (row, col) => g.bank * BANK_SIZE + row * COLS + Math.max(0, Math.min(COLS - 1, col));
  g.build(music.pattern, mulberry32(genreSeed++), at);
  setBank(g.bank);
  commitLayer();
  document.querySelectorAll('[data-genre]').forEach((b) => b.classList.toggle('is-on', b.dataset.genre === name));
}

ui.play.addEventListener('click', togglePlay);
ui.rec.addEventListener('click', () => {
  music.recording = !music.recording;
  ui.rec.classList.toggle('is-on', music.recording);
});
ui.clear.addEventListener('click', clearPattern);
document.getElementById('smBpmUp').addEventListener('click', () => setBpm(music.bpm + 4));
document.getElementById('smBpmDown').addEventListener('click', () => setBpm(music.bpm - 4));
ui.spread.addEventListener('input', () => { view.spread = parseFloat(ui.spread.value); });
ui.twist.addEventListener('input', () => { view.twist = parseFloat(ui.twist.value); });
document.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
document.querySelectorAll('[data-style]').forEach((b) => b.addEventListener('click', () => applyStyle(b.dataset.style)));
document.querySelectorAll('[data-bank]').forEach((b) => b.addEventListener('click', () => setBank(Number(b.dataset.bank))));
document.querySelectorAll('[data-genre]').forEach((b) =>
  b.addEventListener('click', () => {
    if (ac) loadGenre(b.dataset.genre);
  })
);

ui.start.addEventListener('click', () => {
  if (!ac) initAudio();
  ac.resume();
  ui.start.hidden = true;
  loadGenre('gamelan');
  startTransport();
});

/* ------------------------------------------------------------------ */
/* WebXR: controllers + hand tracking                                   */
/* ------------------------------------------------------------------ */

const xrSlot = document.getElementById('smXr');
xrSlot.appendChild(VRButton.createButton(renderer));

renderer.xr.addEventListener('sessionstart', () => {
  // console at waist height just in front of the player; slices rise above it
  rig.position.set(0, 0.82, -0.75);
  if (!ac) {
    initAudio();
    ui.start.hidden = true;
    loadGenre('gamelan');
    startTransport();
  }
  ac.resume();
});
renderer.xr.addEventListener('sessionend', () => rig.position.set(0, 0, 0));

const xrRay = new THREE.Raycaster();
const xrMatrix = new THREE.Matrix4();
for (let i = 0; i < 2; i++) {
  const controller = renderer.xr.getController(i);
  const ray = new THREE.Line(segGeo([new THREE.Vector3(), new THREE.Vector3(0, 0, -1)]), lineMat(0xff3a2a, 0.5));
  ray.scale.z = 1.5;
  controller.add(ray);
  controller.addEventListener('selectstart', () => {
    xrMatrix.identity().extractRotation(controller.matrixWorld);
    xrRay.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    xrRay.ray.direction.set(0, 0, -1).applyMatrix4(xrMatrix);
    const hit = xrRay.intersectObjects(hitMeshes, false)[0];
    if (hit) hitMesh(hit.object);
  });
  controller.addEventListener('connected', (e) => {
    ray.visible = !e.data.hand;
  });
  scene.add(controller);
}

const tipMat = new THREE.MeshBasicMaterial({ color: 0xff6a50 });
const tipGeo = new THREE.SphereGeometry(0.008, 10, 8);
const hands = [0, 1].map((i) => {
  const hand = renderer.xr.getHand(i);
  scene.add(hand);
  const tip = new THREE.Mesh(tipGeo, tipMat);
  tip.visible = false;
  scene.add(tip);
  return { hand, tip, touching: null };
});

const tipPos = new THREE.Vector3();
const padPos = new THREE.Vector3();
function updateHands() {
  for (const h of hands) {
    const joint = h.hand.joints && h.hand.joints['index-finger-tip'];
    if (!joint || !joint.visible) {
      h.tip.visible = false;
      h.touching = null;
      continue;
    }
    joint.getWorldPosition(tipPos);
    h.tip.position.copy(tipPos);
    h.tip.visible = true;
    let found = null;
    for (const m of hitMeshes) {
      m.getWorldPosition(padPos);
      const dy = tipPos.y - (padPos.y + 0.006);
      if (Math.abs(tipPos.x - padPos.x) < m.userData.hx && Math.abs(tipPos.z - padPos.z) < m.userData.hz && dy < 0.012 && dy > -0.03) {
        found = m;
        break;
      }
    }
    if (found && found !== h.touching) hitMesh(found);
    h.touching = found;
  }
}

/* ------------------------------------------------------------------ */
/* Render loop                                                          */
/* ------------------------------------------------------------------ */

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.62, 0.32, 0.18);
composer.addPass(bloom);
composer.addPass(new OutputPass());

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  bloom.setSize(window.innerWidth, window.innerHeight);
});

/* Strands only run through the risen layers, never through the one being built. */
function updateStrands(topIdx) {
  const visible = topIdx >= 1;
  strands.forEach((S) => S.geometry.setDrawRange(0, visible ? STRAND_N : 0));
  if (!visible) return;
  if (style === 'rings') {
    const y0 = LAYER_Y0 + view.spread * 0.6;
    const y1 = LAYER_Y0 + topIdx * view.spread + 0.12;
    strands.forEach((S, i) => {
      const arr = S.geometry.attributes.position.array;
      const dir = i < 2 ? 1 : -1;
      const r0 = i < 2 ? 0.045 : 0.085;
      const phase = (i % 2) * Math.PI;
      for (let j = 0; j < STRAND_N; j++) {
        const y = y0 + (j / (STRAND_N - 1)) * (y1 - y0);
        const a = dir * (y * 16 + elapsed * 0.9) + phase;
        const r = r0 + 0.012 * Math.sin(y * 9 + i);
        arr[j * 3] = Math.cos(a) * r;
        arr[j * 3 + 1] = y;
        arr[j * 3 + 2] = Math.sin(a) * r;
      }
      S.geometry.attributes.position.needsUpdate = true;
    });
  } else if (style === 'helix') {
    strands.forEach((S, row) => {
      const arr = S.geometry.attributes.position.array;
      const r = 0.14 + row * 0.08;
      for (let j = 0; j < STRAND_N; j++) {
        const k = 1 + (j / (STRAND_N - 1)) * (topIdx - 1);
        const a = -helixRot(k, elapsed);
        arr[j * 3] = Math.cos(a) * r;
        arr[j * 3 + 1] = LAYER_Y0 + k * view.spread;
        arr[j * 3 + 2] = Math.sin(a) * r;
      }
      S.geometry.attributes.position.needsUpdate = true;
    });
  }
}

const clock = new THREE.Clock();
let elapsed = 0;
const hotColor = new THREE.Color();
const baseColor = new THREE.Color();

function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  elapsed += dt;

  if (ac) {
    const now = ac.currentTime;
    while (visualQueue.length && visualQueue[0].t <= now) {
      const ev = visualQueue.shift();
      // bar wrapped: the finished layer rises and a new one starts above the keys
      if (ev.step === 0) commitLayer();
      currentStep = ev.step;
      ev.codes.forEach(fireNote);
    }
  }

  let topIdx = 0;
  for (let i = layers.length - 1; i >= 0; i--) {
    const l = layers[i];
    l.idxF += (l.idx - l.idxF) * Math.min(1, dt * 5);
    if (l.idx > 0) l.morph = Math.min(1, l.morph + dt * 1.2);
    if (l.idx >= MAX_LAYERS) l.fade = Math.max(0, l.fade - dt * 1.5);
    if (l.fade <= 0) {
      disposeLayer(l);
      layers.splice(i, 1);
      continue;
    }
    topIdx = Math.max(topIdx, Math.min(l.idxF, MAX_LAYERS - 1));
    l.group.position.y = LAYER_Y0 + l.idxF * view.spread;
    l.group.rotation.y = layerRot(l, elapsed);
    l.glow = Math.max(0, l.glow - dt * 2);

    const active = l.idx === 0;
    const m = style === 'slices' ? 0 : l.morph;
    const ease = m * m * (3 - 2 * m);
    l.outline.material.opacity = ((active ? 0.55 : 0.2) + 0.5 * l.glow) * (1 - ease) * l.fade;
    l.grid.material.opacity = (active ? 0.14 : 0.04) * (1 - ease) * l.fade;
    l.fill.material.opacity = (active ? 0.03 : 0.004) * (1 - ease) * l.fade;
    l.ring.material.opacity = style === 'rings' ? (0.14 + 0.6 * l.glow) * ease * l.fade : 0;

    l.notes.forEach((n) => {
      n.pop = Math.max(0, n.pop - dt * 3.2);
      n.group.position.x = n.grid.x + (n.styled.x - n.grid.x) * ease;
      n.group.position.z = n.grid.z + (n.styled.z - n.grid.z) * ease;
      n.group.scale.setScalar(1 + n.pop * 0.9);
      if (!active) n.group.rotation.y += dt * n.spin;
      setGroupOpacity(n.group, ((active ? 0.6 : 0.42) + 0.5 * n.pop) * l.fade);
    });
  }

  baseDisc.position.y = LAYER_Y0 + view.spread * 0.5;
  baseDisc.rotation.y = elapsed * 0.04;
  updateStrands(topIdx);
  spine.scale.y = Math.max(0.001, topIdx * view.spread + (style === 'slices' ? 0 : 0.18));
  progress.scale.x = GRID_W * ((currentStep + 1) / STEPS);
  progress.visible = !!ac && music.playing;

  baseColor.setHex(theme.padBase);
  pads.forEach((p) => {
    p.flash = Math.max(0, p.flash - dt * 5);
    hotColor.setHex(theme.rows[p.row]).multiplyScalar(0.5);
    p.base.material.color.copy(baseColor).lerp(hotColor, p.flash);
    p.edges.material.opacity = 0.45 + 0.55 * p.flash;
    p.group.position.y = -0.004 * p.flash;
  });
  arrows.forEach((a) => {
    a.flash = Math.max(0, a.flash - dt * 5);
    hotColor.setHex(theme.frame).multiplyScalar(0.4);
    a.base.material.color.copy(baseColor).lerp(hotColor, a.flash);
    a.group.position.y = -0.004 * a.flash;
  });

  ripples.forEach((r) => {
    if (r.t >= 1) {
      r.mesh.visible = false;
      return;
    }
    r.t = Math.min(1, r.t + dt / 0.7);
    r.mesh.scale.setScalar(0.03 + r.t * 0.12);
    r.mesh.material.opacity = (1 - r.t) * 0.8;
  });

  lasers.forEach((L) => {
    if (L.t >= 1) {
      L.line.visible = false;
      return;
    }
    L.t = Math.min(1, L.t + dt / 0.35);
    L.line.material.opacity = (1 - L.t) * 0.9;
  });

  if (renderer.xr.isPresenting) {
    updateHands();
    renderer.render(scene, camera);
    return;
  }

  if (viewTween) {
    camera.position.lerp(viewTween.pos, 0.08);
    controls.target.lerp(viewTween.target, 0.08);
    if (camera.position.distanceTo(viewTween.pos) < 0.005) viewTween = null;
  }
  controls.update();
  composer.render();
}

applyStyle('slices');
setBank(0);
renderer.setAnimationLoop(tick);
