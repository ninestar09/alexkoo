/**
 * Interactive cube hero.
 * A WebGL2 smoke simulation flows around a ray-traced, freely spinning cube.
 * Moving the pointer near the cube spins it, holding still brakes it,
 * entering the cube (or clicking) fires a scan pulse, scrolling adds torque.
 * Click-drag on the cube to reposition it; release coasts with light inertia.
 */

const DEFAULTS = {
  title: "ALEX KOO",
  subtitle: "",
  fontFamily: "Orbitron",
  fontWeight: 800,
  fontHref: "https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap",
  seed: null,

  // cube + camera (world units: frame height = 1)
  cubeSize: 0.122,
  lens: 0.4785,
  presence: 0.74,
  faceShade: 1.96,
  glint: 0.35,

  // logotype
  logoWidth: 0.592,
  logoOpacity: 0.5,
  typeGlow: 0.99,
  typeVapor: 0.8,
  typeGrid: 0.99,
  typeStroke: 0.71,

  // scan pulse
  pulseSpeed: 0.622,
  pulseWidth: 0.00473,
  pulseLife: 1.4,
  pulseRing: 0,
  pulseReveal: 1.88,
  pulseForce: 1.2,
  pulseGrid: 24,
  gridOpacity: 1.11,
  gridDotScale: 0.7185,
  gridSizeRnd: 0.4,
  gridOpRnd: 1,
  gridStagger: 0.965,

  // probes / plexus
  probeCount: 260,
  probeDrift: 0.274,
  linkDist: 0.1446,
  linkMax: 4,
  linkOpacity: 0.66,
  linkOpacityRnd: 0.91,
  labelCount: 4,
  labelOpacity: 0.345,
  pingOpacity: 0.64,
  hudOpacity: 0.5,

  // motion
  timeScale: 0.545,
  grip: 5.55,
  flickBoost: 4,
  coast: 0.925,
  idleTurn: 3,
  scrollTorque: 6,
  draggable: true,
  dragInertia: 0.9,
  dragSpin: 0.55,

  // medium
  atmosphere: 0.8,
  fogFloor: 0.3,
  wake: 0.985,
  turbulence: 11,
  diffusion: 0.35,
  detail: 0.35,
  churn: 0.9,
  vortex: 0.9,
  vortexRadius: 0.075,
  whisper: 1.2,
  exposure: 2.12,
  contrast: 2.3875,
  relief: 4.8,
  iridescence: 1,
  iridSpread: 0.84,
};

/* ------------------------------------------------------------------ */
/* shaders                                                             */
/* ------------------------------------------------------------------ */

const VS = `#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

const COMMON = `
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 frag;
uniform vec2  uAspect;
uniform vec2  uCubePos;
uniform float uTime, uSeed, uCube;
uniform mat3  uRot, uRotT;
uniform vec3  uOmega;

vec2 cubeC(){ return uCubePos; }
float sdBox(vec3 p, float b){
  vec3 q = abs(p) - vec3(b);
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}
float sliceSD(vec2 w){ return sdBox(uRotT * vec3(w - cubeC(), 0.0), uCube); }
vec2 sliceN(vec2 w){
  float e = 0.003;
  return normalize(vec2(
    sliceSD(w + vec2(e, 0.0)) - sliceSD(w - vec2(e, 0.0)),
    sliceSD(w + vec2(0.0, e)) - sliceSD(w - vec2(0.0, e))) + 1e-6);
}
vec2 surfVel(vec2 w){ return cross(uOmega, vec3(w - cubeC(), 0.0)).xy; }
float facing(vec2 w){
  vec3 q = uRotT * vec3(w - cubeC(), 0.0);
  vec3 a = abs(q);
  vec3 n = (a.x >= a.y && a.x >= a.z) ? vec3(sign(q.x), 0.0, 0.0)
         : (a.y >= a.z ? vec3(0.0, sign(q.y), 0.0) : vec3(0.0, 0.0, sign(q.z)));
  return clamp((uRot * n).z * 0.5 + 0.5, 0.0, 1.0);
}
float hash12(vec2 p){
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ v += a * vnoise(p); p = p * 2.03 + 17.7; a *= 0.5; }
  return v;
}
vec2 curlNoise(vec2 p){
  float e = 0.02;
  return vec2(fbm(p + vec2(0.0, e)) - fbm(p - vec2(0.0, e)),
              fbm(p - vec2(e, 0.0)) - fbm(p + vec2(e, 0.0))) / (2.0 * e);
}
`;

const fs = (body) => `#version 300 es\n${COMMON}\n${body}`;

const FS_ADVECT = fs(`
uniform sampler2D uVel, uSrc;
uniform float uDt, uDiss;
void main(){
  vec2 v = texture(uVel, vUv).xy;
  frag = uDiss * texture(uSrc, vUv - uDt * v / uAspect);
}`);

const FS_FORCE = fs(`
uniform sampler2D uVel;
uniform float uDt, uIdle, uWhisper, uVortex, uVortexR;
uniform float uDown, uHold, uRelease;
uniform vec2  uPtr, uPtrVel;
uniform vec3  uCP[8], uCV[8];
uniform vec4  uPulse[4];
uniform float uPulseSpeed, uPulseWidth, uPulseForce, uPulseLife;
void main(){
  vec2 w = vUv * uAspect;
  vec2 v = texture(uVel, vUv).xy;

  v += curlNoise(w * 2.1 + vec2(uSeed, -uSeed * 0.6) + uTime * 0.028) * uIdle * 0.014 * uDt * 60.0;

  vec2 dp = w - uPtr;
  float pg = exp(-dot(dp, dp) / 0.007);
  v += uPtrVel * uWhisper * pg * 0.09;
  vec2 dir = normalize(dp + 1e-5);
  if (uDown > 0.5 && length(uPtrVel) < 0.18)
    v -= dir * pg * min(uHold * 0.8, 1.0) * 0.16 * smoothstep(0.0, 0.02, length(dp));
  if (uRelease > 0.0)
    v += dir * pg * exp(-uRelease * 6.0) * 0.3;

  float sd = sliceSD(w);
  vec2 n = sliceN(w);
  for (int i = 0; i < 4; i++){
    if (uPulse[i].w < 0.5) continue;
    float age = uPulse[i].z;
    float band = exp(-pow((sd - age * uPulseSpeed) / (uPulseWidth * 2.4), 2.0));
    v += n * band * exp(-age * 2.6 / uPulseLife) * uPulseForce * 0.5;
  }

  // the spinning surface drags the medium with it and never lets it inside
  if (sd < 0.05){
    vec2 us = surfVel(w);
    float k = 1.0 - smoothstep(0.0, 0.05, sd);
    v = mix(v, us, k * (0.3 + min(length(us) * 3.0, 0.65)));
    v -= n * min(dot(v - us, n), 0.0) * k;
    if (sd < 0.004) v += n * 0.22;
  }

  // moving corners shed vortices
  for (int i = 0; i < 8; i++){
    vec2 cv = uCV[i].xy;
    float sp = length(cv);
    if (sp < 0.02) continue;
    vec2 cd = w - uCP[i].xy;
    float r2 = dot(cd, cd);
    float g = exp(-r2 / (uVortexR * uVortexR));
    float side = cv.x * cd.y - cv.y * cd.x;
    vec2 tang = vec2(-cd.y, cd.x) / (sqrt(r2) + 1e-4);
    float zw = smoothstep(-uCube * 1.5, uCube * 1.5, uCP[i].z) * 0.7 + 0.3;
    v += tang * sign(side) * min(abs(side) * 9.0, 1.0) * sp * g * uVortex * zw * 0.5;
  }

  frag = vec4(clamp(v, vec2(-2.5), vec2(2.5)), 0.0, 1.0);
}`);

const FS_CURL = fs(`
uniform sampler2D uVel;
uniform vec2 uTexel;
void main(){
  float L = texture(uVel, vUv - vec2(uTexel.x, 0.0)).y;
  float R = texture(uVel, vUv + vec2(uTexel.x, 0.0)).y;
  float B = texture(uVel, vUv - vec2(0.0, uTexel.y)).x;
  float T = texture(uVel, vUv + vec2(0.0, uTexel.y)).x;
  frag = vec4(0.5 * ((R - L) - (T - B)), 0.0, 0.0, 1.0);
}`);

const FS_VORT = fs(`
uniform sampler2D uVel, uCurl;
uniform vec2 uTexel;
uniform float uDt, uEps;
void main(){
  float L = abs(texture(uCurl, vUv - vec2(uTexel.x, 0.0)).x);
  float R = abs(texture(uCurl, vUv + vec2(uTexel.x, 0.0)).x);
  float B = abs(texture(uCurl, vUv - vec2(0.0, uTexel.y)).x);
  float T = abs(texture(uCurl, vUv + vec2(0.0, uTexel.y)).x);
  float c = texture(uCurl, vUv).x;
  vec2 f = 0.5 * vec2(R - L, T - B);
  f = f / (length(f) + 1e-5) * uEps * c * vec2(1.0, -1.0);
  vec2 v = texture(uVel, vUv).xy + f * uDt;
  frag = vec4(clamp(v, vec2(-2.5), vec2(2.5)), 0.0, 1.0);
}`);

const FS_DIV = fs(`
uniform sampler2D uVel;
uniform vec2 uTexel;
void main(){
  float L = texture(uVel, vUv - vec2(uTexel.x, 0.0)).x;
  float R = texture(uVel, vUv + vec2(uTexel.x, 0.0)).x;
  float B = texture(uVel, vUv - vec2(0.0, uTexel.y)).y;
  float T = texture(uVel, vUv + vec2(0.0, uTexel.y)).y;
  frag = vec4(0.5 * ((R - L) + (T - B)), 0.0, 0.0, 1.0);
}`);

const FS_SCALE = fs(`
uniform sampler2D uSrc;
uniform float uK;
void main(){ frag = vec4(texture(uSrc, vUv).x * uK, 0.0, 0.0, 1.0); }`);

const FS_JACOBI = fs(`
uniform sampler2D uPressure, uDiv;
uniform vec2 uTexel;
void main(){
  float L = texture(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float R = texture(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float B = texture(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float T = texture(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  frag = vec4((L + R + B + T - texture(uDiv, vUv).x) * 0.25, 0.0, 0.0, 1.0);
}`);

const FS_GRAD = fs(`
uniform sampler2D uPressure, uVel;
uniform vec2 uTexel;
void main(){
  float L = texture(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float R = texture(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float B = texture(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float T = texture(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  vec2 v = texture(uVel, vUv).xy - 0.5 * vec2(R - L, T - B);
  frag = vec4(v * 0.999, 0.0, 1.0);
}`);

// density: r = medium behind the cube, g = medium in front of it
const FS_INJECT = fs(`
uniform sampler2D uDen, uLogo;
uniform float uDt, uAtmo, uChurn, uWhisper, uVortexR, uTypeVapor;
uniform vec2  uPtr, uPtrVel;
uniform vec3  uCP[8], uCV[8];
uniform vec4  uPulse[4];
uniform float uPulseSpeed, uPulseWidth, uPulseLife;
uniform vec4  uLogoBox;
void main(){
  vec2 w = vUv * uAspect;
  vec2 d = texture(uDen, vUv).rg;
  vec2 room = max(vec2(0.0), 1.0 - d * 0.55);
  float b = 0.0, f = 0.0;

  for (int i = 0; i < 3; i++){
    float fi = float(i);
    vec2 ep = cubeC() + 0.36 * vec2(sin(uTime * 0.031 + uSeed + fi * 2.1),
                                     cos(uTime * 0.023 + uSeed * 1.3 + fi * 2.7));
    float r = length(w - ep);
    float a = exp(-r * r * 120.0) * uAtmo * 0.14;
    float fw = 0.5 + 0.5 * sin(uTime * 0.05 + fi * 2.4 + uSeed);
    f += a * fw; b += a * (1.0 - fw);
  }

  float sd = sliceSD(w);
  if (sd > 0.0 && sd < 0.16){
    vec2 us = surfVel(w);
    float sp = length(us);
    if (sp > 0.03){
      float lead = clamp(dot(us / sp, sliceN(w)) * 0.5 + 0.65, 0.0, 1.0);
      float a = exp(-sd * sd / 0.004) * pow(min(sp * 1.3, 1.4), 1.6) * lead * uChurn * 0.7;
      float fw = facing(w);
      f += a * fw; b += a * (1.0 - fw);
    }
  }

  for (int i = 0; i < 8; i++){
    vec2 cd = w - uCP[i].xy;
    float g = exp(-dot(cd, cd) / (uVortexR * uVortexR));
    float a = g * pow(min(length(uCV[i].xy) * 1.1, 1.2), 1.5) * uChurn * 0.4;
    float fw = smoothstep(-uCube, uCube, uCP[i].z);
    f += a * fw; b += a * (1.0 - fw);
  }

  // the scan wave exhales vapor where it crosses the letters
  float tm = textureLod(uLogo, (w - uLogoBox.xy) / uLogoBox.zw + 0.5, 0.0).r;
  float typeIn = 0.0;
  for (int i = 0; i < 4; i++){
    if (uPulse[i].w < 0.5) continue;
    float age = uPulse[i].z;
    typeIn += exp(-pow((sd - age * uPulseSpeed) / (uPulseWidth * 2.0), 2.0)) * exp(-age * 2.6 / uPulseLife);
  }
  float tv = tm * typeIn * uTypeVapor * 2.6;
  f += tv * 0.6; b += tv * 0.4;

  vec2 dp = w - uPtr;
  float wa = exp(-dot(dp, dp) / 0.005) * min(length(uPtrVel), 1.2) * uWhisper * 0.25;
  f += wa * 0.7; b += wa * 0.3;

  frag = vec4(min(d.r + b * room.r * uDt, 2.2), min(d.g + f * room.g * uDt, 2.2), 0.0, 1.0);
}`);

const FS_DOWN = fs(`
uniform sampler2D uVel;
void main(){ frag = vec4(texture(uVel, vUv).xy, 0.0, 1.0); }`);

const FS_COMPOSITE = fs(`
uniform sampler2D uDen, uVel, uCurl, uPres, uLogo;
uniform vec2  uTexel;
uniform float uLens, uExposure, uContrast, uRelief, uIrid, uIridSpread, uDetail, uDiffusion;
uniform float uPresence, uFaceShade, uGlint, uFog;
uniform vec4  uPulse[4];
uniform float uPulseSpeed, uPulseWidth, uPulseLife, uPulseReveal, uPulseRing;
uniform float uGrid, uGridDot, uGridSizeRnd, uGridOpRnd, uGridStagger, uGridOpacity;
uniform vec4  uLogoBox;
uniform float uTypeGlow, uTypeGrid, uTypeStroke;

const vec3 SILVER = vec3(0.93, 0.92, 0.90);

vec3 spectral(float t){ return 0.5 + 0.5 * cos(6.28318 * (t + vec3(0.0, 0.33, 0.67))); }
float dens(vec2 uv, vec2 keep){ return dot(texture(uDen, uv).rg, keep); }

void main(){
  vec2 w = vUv * uAspect;
  vec2 c = cubeC();
  float s = uCube;

  // ray-trace the cube
  vec3 ro = vec3(0.0, 0.0, uLens);
  vec3 rd = normalize(vec3(w - c, -uLens));
  vec3 roB = uRotT * ro, rdB = uRotT * rd;
  vec3 inv = 1.0 / rdB;
  vec3 t0 = (-vec3(s) - roB) * inv, t1 = (vec3(s) - roB) * inv;
  vec3 tmn = min(t0, t1), tmx = max(t0, t1);
  float tN = max(max(tmn.x, tmn.y), tmn.z);
  float tF = min(min(tmx.x, tmx.y), tmx.z);
  float thick = max(tF - tN, 0.0);
  float inside = step(1e-5, thick) * step(0.0, tF);
  float depth = clamp(thick / (2.0 * s * 1.7320508), 0.0, 1.0);
  vec3 nB = -sign(rdB) * step(tmn.yzx, tmn.xyz) * step(tmn.zxy, tmn.xyz);
  vec3 nW = uRot * nB;
  vec3 hitB = roB + rdB * max(tN, 0.0);
  float hitZ = (ro + rd * max(tN, 0.0)).z;
  vec3 Ld = normalize(vec3(-0.42, 0.58, 0.55));
  float face = dot(nW, Ld) * 0.5 + 0.5;

  float occB = inside * uPresence;
  float occF = inside * clamp(hitZ / (s * 1.6), 0.0, 1.0) * uPresence * 0.92;
  vec2 keep = vec2(1.0 - occB, 1.0 - occF);

  // medium
  float fog = uFog * (0.30 + fbm(w * 2.6 + uTime * 0.02 + uSeed) * 0.32);
  float d = dens(vUv, keep) + fog * (0.65 * keep.x + 0.35 * keep.y);
  vec2 vel = texture(uVel, vUv).xy;
  float pres = texture(uPres, vUv).x;
  vec2 q = w * (26.0 - uDiffusion * 14.0) - vel * 2.4 + uTime * 0.06 + uSeed;
  d = max(d * (1.0 + (fbm(q + fbm(q * 0.5) * 1.4) - 0.5) * uDetail * 0.9), 0.0);

  vec2 e = uTexel * 3.0;
  float gx = dens(vUv + vec2(e.x, 0.0), keep) - dens(vUv - vec2(e.x, 0.0), keep);
  float gy = dens(vUv + vec2(0.0, e.y), keep) - dens(vUv - vec2(0.0, e.y), keep);
  vec3 n = normalize(vec3(-gx * uRelief * 8.0, -gy * uRelief * 8.0, 1.0));
  float diff = dot(n, Ld) * 0.5 + 0.5;
  float rim = pow(1.0 - n.z, 2.0);

  float lum = 1.0 - exp(-d * uExposure * 0.85);
  lum = pow(lum, uContrast);
  lum *= 0.60 + diff * 0.55;
  lum += rim * lum * 0.45;
  vec3 col = mix(vec3(0.055, 0.058, 0.066), SILVER, clamp(lum, 0.0, 1.0));
  col *= smoothstep(0.0, 0.05, lum + 0.015);
  col += vec3(0.05, 0.052, 0.058) * face * occB * uFaceShade * depth;

  // thin-film colour appears only where the flow is sheared hard
  float shear = abs(texture(uCurl, vUv).x);
  float band = smoothstep(0.06, 0.4, d) * (1.0 - smoothstep(1.3, 2.2, d));
  vec3 film = spectral(d * 1.6 + shear * 2.0 + uTime * 0.03);
  film = mix(vec3(dot(film, vec3(0.3333))), film, uIridSpread);
  col += film * min(shear * 3.0, 1.6) * band * uIrid * 0.5;

  float spin = length(uOmega);
  float edgeBand = (1.0 - smoothstep(0.012, 0.10, depth)) * inside;
  float gate = smoothstep(0.62, 0.9, vnoise(vec2(uTime * 0.11, uSeed)));
  col += vec3(0.95, 0.96, 1.0) * edgeBand * min(shear * 1.6, 1.0) * gate * smoothstep(0.35, 1.1, spin) * uGlint * 0.6;

  // face coordinates (object space) for the dot grid and wire edges
  vec3 an = abs(nB);
  vec2 tc = (an.x > 0.5 ? hitB.yz : (an.y > 0.5 ? hitB.xz : hitB.xy)) / s;
  float gDot = 0.0, gOp = 0.0, gStag = 0.0;
  if (inside > 0.5){
    vec2 cell = tc * uGrid * 0.5;
    vec2 gs = floor(cell) + nB.xy * 7.3 + nB.z * 3.1;
    vec2 cf = fract(cell) - 0.5;
    gStag = hash12(gs);
    float h2 = hash12(gs * 1.7 + 3.1), h3 = hash12(gs * 2.3 + 9.7);
    float rad = 0.15 * uGridDot * mix(1.0, 0.35 + 1.5 * h2, uGridSizeRnd);
    gDot = 1.0 - smoothstep(rad * 0.6, rad * 1.35, length(cf));
    gOp = (1.0 - uGridOpRnd * h3) * uGridOpacity;
  }
  float edgeC = 1.0 - max(abs(tc.x), abs(tc.y));
  float ew = fwidth(edgeC) * 1.8 + 0.006;
  float dw = fwidth(depth) * 2.5 + 0.004;
  float wire = max(1.0 - smoothstep(0.0, ew, edgeC), 1.0 - smoothstep(0.0, dw, depth)) * inside;

  float phi = (texture(uDen, vUv).r + texture(uDen, vUv).g) * 4.5 + pres * 3.0;
  float pw = max(fwidth(phi), 1e-4);
  float iso = 1.0 - smoothstep(0.0, pw * 1.6, abs(fract(phi) - 0.5) * 2.0);

  // scan pulse
  float sd2 = sliceSD(w);
  float front = 0.0, trail = 0.0, typeIn = 0.0;
  for (int i = 0; i < 4; i++){
    if (uPulse[i].w < 0.5) continue;
    float age = uPulse[i].z;
    float r = age * uPulseSpeed;
    float env = exp(-age * 2.6 / uPulseLife);
    front  += exp(-pow((sd2 - r) / uPulseWidth, 2.0)) * env;
    typeIn += exp(-pow((sd2 - r) / (uPulseWidth * 2.0), 2.0)) * env;
    trail  += (sd2 < r ? exp(-(r - sd2) * 5.0) : 0.0) * env;
  }
  trail = min(trail, 1.0);
  if (trail > 0.004 || front > 0.004){
    col += SILVER * iso * trail * uPulseReveal * (1.0 - occB) * 0.35;
    if (gDot > 0.001){
      float sIn = max(trail, front * 0.7);
      float cIn = clamp((sIn - gStag * uGridStagger * 0.7) / max(0.05, 1.0 - uGridStagger * 0.5), 0.0, 1.0);
      col += vec3(0.80, 0.85, 0.93) * gDot * cIn * gOp * uPulseReveal * (0.4 + face * 0.6);
    }
    if (inside < 0.5){
      float hs = hash12(floor(w * 26.0) + uSeed);
      if (hs > 0.8){
        float dm = 1.0 - smoothstep(0.07, 0.15, length(fract(w * 26.0) - 0.5));
        col += SILVER * dm * trail * uPulseReveal * (hs - 0.8) * 1.4;
      }
    }
    col += vec3(0.92, 0.94, 0.98) * front * uPulseRing * 0.6 * (1.0 - occB * 0.6);
  }

  // the letters act as a viewfinder onto the cube's grid and edges
  vec2 luv = (w - uLogoBox.xy) / uLogoBox.zw + 0.5;
  float fill = textureLod(uLogo, luv, 0.0).r;
  float soft = textureLod(uLogo, luv, 3.5).r;
  if (fill > 0.03){
    col += vec3(0.85, 0.88, 0.94) * gDot * gOp * fill * uTypeGrid * (0.5 + typeIn * 1.2 + trail * 0.5);
    col += vec3(0.88, 0.90, 0.95) * wire * fill * uTypeStroke * (0.55 + typeIn * 0.9);
  }
  col += (fill * 1.1 + soft * 1.5) * typeIn * uTypeGlow * vec3(0.84, 0.87, 0.95) * 0.5;

  vec2 vc = vUv - 0.5;
  col *= 1.0 - dot(vc, vc) * 0.55;
  col += (hash12(vUv * 1471.0 + fract(uTime) * 731.0) - 0.5) * (1.5 / 255.0);
  frag = vec4(col, 1.0);
}`);

/* ------------------------------------------------------------------ */
/* small math helpers                                                   */
/* ------------------------------------------------------------------ */

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (t) => {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
};
const fmtSigned = (v) => (v < 0 ? "\u2212" : "+") + Math.abs(v).toFixed(3).slice(1);
const fmt = (v) => clamp(v, 0, 0.999).toFixed(3).slice(1);

function rotFromQuat(q, R, RT) {
  const [w, x, y, z] = q;
  const r00 = 1 - 2 * (y * y + z * z), r01 = 2 * (x * y - w * z), r02 = 2 * (x * z + w * y);
  const r10 = 2 * (x * y + w * z), r11 = 1 - 2 * (x * x + z * z), r12 = 2 * (y * z - w * x);
  const r20 = 2 * (x * z - w * y), r21 = 2 * (y * z + w * x), r22 = 1 - 2 * (x * x + y * y);
  // column-major for GLSL
  R.set([r00, r10, r20, r01, r11, r21, r02, r12, r22]);
  RT.set([r00, r01, r02, r10, r11, r12, r20, r21, r22]);
}
// R is column-major: R * v
const mulR = (M, x, y, z) => [
  M[0] * x + M[3] * y + M[6] * z,
  M[1] * x + M[4] * y + M[7] * z,
  M[2] * x + M[5] * y + M[8] * z,
];

/* ------------------------------------------------------------------ */
/* logotype                                                             */
/* ------------------------------------------------------------------ */

const LOGO_W = 2048;
const LOGO_H = 512;

function ensureFont(href) {
  if (!href || document.querySelector(`link[data-bbih-font]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.bbihFont = "1";
  document.head.appendChild(link);
}

const escapeXml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]);

function titleLinesFor(cfg, stacked) {
  if (Array.isArray(cfg.titleLines) && cfg.titleLines.length) {
    return cfg.titleLines.map(String);
  }
  const title = String(cfg.title || "");
  if (!stacked) return [title];
  const parts = title.trim().split(/\s+/).filter(Boolean);
  return parts.length > 1 ? parts : [title];
}

async function buildLogo(cfg, stacked = false) {
  const family = cfg.fontFamily;
  const font = (px) => `${cfg.fontWeight} ${px}px "${family}", "Arial Black", sans-serif`;
  try {
    await Promise.race([document.fonts.load(font(160)), new Promise((r) => setTimeout(r, 3000))]);
  } catch (_) {}

  const lines = titleLinesFor(cfg, stacked);
  const mask = document.createElement("canvas");
  mask.width = LOGO_W;
  mask.height = LOGO_H;
  const ctx = mask.getContext("2d");
  const titleW = LOGO_W * 0.94;
  const sub = cfg.subtitle ? String(cfg.subtitle) : "";

  // fit each title line, then scale the whole stack into the logo frame
  let size = 100;
  ctx.font = font(size);
  const longest = Math.max(...lines.map((ln) => ctx.measureText(ln).width), 1);
  size = (100 * titleW) / longest;
  ctx.font = font(size);
  let metrics = lines.map((ln) => {
    const m = ctx.measureText(ln);
    return { text: ln, width: m.width, asc: m.actualBoundingBoxAscent, desc: m.actualBoundingBoxDescent };
  });
  const lineGap = size * (lines.length > 1 ? 0.18 : 0);
  let stackH =
    metrics.reduce((h, m) => h + m.asc + m.desc, 0) + lineGap * Math.max(0, lines.length - 1);
  const maxStack = sub ? LOGO_H * 0.55 : LOGO_H * (lines.length > 1 ? 0.78 : 0.6);
  if (stackH > maxStack) {
    size *= maxStack / stackH;
    ctx.font = font(size);
    metrics = lines.map((ln) => {
      const m = ctx.measureText(ln);
      return { text: ln, width: m.width, asc: m.actualBoundingBoxAscent, desc: m.actualBoundingBoxDescent };
    });
    stackH =
      metrics.reduce((h, m) => h + m.asc + m.desc, 0) +
      size * (lines.length > 1 ? 0.18 : 0) * Math.max(0, lines.length - 1);
  }
  const gap = size * 0.3;
  const subSize = size * 0.36;
  let subAsc = 0, subDesc = 0, subWidth = 0;
  if (sub) {
    ctx.font = font(subSize);
    const sm = ctx.measureText(sub);
    subAsc = sm.actualBoundingBoxAscent;
    subDesc = sm.actualBoundingBoxDescent;
    subWidth = sm.width;
  }
  const blockH = stackH + (sub ? gap + subAsc + subDesc : 0);
  let y = (LOGO_H - blockH) / 2;
  const bases = metrics.map((m) => {
    const base = y + m.asc;
    y += m.asc + m.desc + size * (lines.length > 1 ? 0.18 : 0);
    return { ...m, base };
  });
  const baseSub = sub ? y - size * (lines.length > 1 ? 0.18 : 0) + gap + subAsc : 0;
  const blockWidth = Math.max(...metrics.map((m) => m.width), subWidth);

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, LOGO_W, LOGO_H);
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "center";
  ctx.font = font(size);
  for (const ln of bases) ctx.fillText(ln.text, LOGO_W / 2, ln.base);

  if (sub) {
    ctx.font = font(subSize);
    ctx.textAlign = "left";
    const chars = [...sub];
    const widths = chars.map((ch) => ctx.measureText(ch).width);
    const extra = chars.length > 1 ? (blockWidth - widths.reduce((a, b) => a + b, 0)) / (chars.length - 1) : 0;
    let x = LOGO_W / 2 - blockWidth / 2;
    chars.forEach((ch, i) => {
      ctx.fillText(ch, x, baseSub);
      x += widths[i] + extra;
    });
  }

  const ff = `&quot;${escapeXml(family)}&quot;, Arial Black, sans-serif`;
  const svgLines = bases
    .map(
      (ln) =>
        `<text x="${LOGO_W / 2}" y="${ln.base.toFixed(1)}" text-anchor="middle" font-family="${ff}" font-weight="${cfg.fontWeight}" font-size="${size.toFixed(1)}" ` +
        `textLength="${ln.width.toFixed(1)}" lengthAdjust="spacingAndGlyphs">${escapeXml(ln.text)}</text>`
    )
    .join("");
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOGO_W} ${LOGO_H}" aria-label="${escapeXml(cfg.title)}">` +
    svgLines +
    (sub
      ? `<text x="${LOGO_W / 2}" y="${baseSub.toFixed(1)}" text-anchor="middle" font-family="${ff}" font-weight="${cfg.fontWeight}" font-size="${subSize.toFixed(1)}" ` +
        `textLength="${blockWidth.toFixed(1)}" lengthAdjust="spacing">${escapeXml(sub)}</text>`
      : "") +
    `</svg>`;

  return { svg, mask };
}

/* ------------------------------------------------------------------ */
/* HUD                                                                  */
/* ------------------------------------------------------------------ */

function buildTicks(hud) {
  for (let i = 1; i <= 9; i++) {
    const f = i / 10;
    const h = document.createElement("div");
    h.className = "tick h";
    h.style.left = `${f * 100}%`;
    hud.appendChild(h);
    const hl = document.createElement("div");
    hl.className = "tickLbl";
    hl.textContent = `.${i}`;
    hl.style.left = `${f * 100}%`;
    hl.style.bottom = "9px";
    hl.style.transform = "translateX(-50%)";
    hud.appendChild(hl);

    const v = document.createElement("div");
    v.className = "tick v";
    v.style.top = `${f * 100}%`;
    hud.appendChild(v);
    if (i % 2 === 0) {
      const vl = document.createElement("div");
      vl.className = "tickLbl";
      vl.textContent = `.${10 - i}`;
      vl.style.top = `${f * 100}%`;
      vl.style.left = "10px";
      vl.style.transform = "translateY(-50%)";
      hud.appendChild(vl);
    }
  }
}

/* ------------------------------------------------------------------ */
/* main                                                                 */
/* ------------------------------------------------------------------ */

export function mountBlackboxHero(root, options = {}) {
  if (!root) throw new Error("mountBlackboxHero: missing root element");
  const cfg = { ...DEFAULTS, ...options };
  if (cfg.seed == null) cfg.seed = Math.random() * 100;

  const isMobile =
    /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) < 820);

  ensureFont(cfg.fontHref);
  root.classList.add("bbihero");
  root.innerHTML = "";
  const add = (cls, tag = "div") => {
    const e = document.createElement(tag);
    e.className = cls;
    root.appendChild(e);
    return e;
  };
  const canvas = add("bbih-gl", "canvas");
  const dots = add("bbih-dots", "canvas");
  const logo = add("bbih-logo");
  const hud = add("bbih-hud");
  const probeLayer = add("bbih-probes");
  const telemetry = add("bbih-telemetry");
  logo.style.opacity = cfg.logoOpacity;
  telemetry.style.opacity = cfg.hudOpacity;
  buildTicks(hud);

  let disposed = false;
  let logoMask = null;
  let uploadLogo = null;
  let logoStacked = null;
  const applyLogo = ({ svg, mask }) => {
    if (disposed) return;
    logo.innerHTML = svg;
    logoMask = mask;
    if (uploadLogo) uploadLogo(mask);
  };
  const refreshLogo = (stacked) => {
    logoStacked = stacked;
    root.classList.toggle("is-stacked-logo", !!stacked);
    return buildLogo(cfg, stacked).then(applyLogo);
  };
  // stack the name on mobile / portrait ratios; keep it centered always
  refreshLogo(isMobile || window.innerHeight > window.innerWidth * 1.05);

  const gl = canvas.getContext("webgl2", {
    antialias: false,
    depth: false,
    stencil: false,
    alpha: false,
    powerPreference: "high-performance",
  });
  if (!gl || !gl.getExtension("EXT_color_buffer_float")) {
    root.classList.add("bbih-static");
    return {
      dispose() {
        disposed = true;
        root.innerHTML = "";
      },
    };
  }

  /* ---------- GL plumbing ---------- */

  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader error");
    return s;
  };
  const vs = compile(gl.VERTEX_SHADER, VS);
  const makeProgram = (src) => {
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, src));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p) || "link error");
    const u = new Proxy({}, { get: (t, k) => (k in t ? t[k] : null) });
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) {
      const info = gl.getActiveUniform(p, i);
      u[info.name] = gl.getUniformLocation(p, info.name);
    }
    return { p, u };
  };
  const P = {
    advect: makeProgram(FS_ADVECT),
    force: makeProgram(FS_FORCE),
    curl: makeProgram(FS_CURL),
    vort: makeProgram(FS_VORT),
    div: makeProgram(FS_DIV),
    scale: makeProgram(FS_SCALE),
    jacobi: makeProgram(FS_JACOBI),
    grad: makeProgram(FS_GRAD),
    inject: makeProgram(FS_INJECT),
    down: makeProgram(FS_DOWN),
    composite: makeProgram(FS_COMPOSITE),
  };
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  const makeTarget = (w, h, internal, format, type, filter) => {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, type, null);
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    return { tex, fbo, w, h };
  };
  const half = (w, h, internal, format) => makeTarget(w, h, internal, format, gl.HALF_FLOAT, gl.LINEAR);
  const pair = (w, h, internal, format) => {
    let a = half(w, h, internal, format);
    let b = half(w, h, internal, format);
    return {
      get a() { return a; },
      get b() { return b; },
      swap() { [a, b] = [b, a]; },
      targets: () => [a, b],
    };
  };
  const freeTarget = (t) => {
    gl.deleteTexture(t.tex);
    gl.deleteFramebuffer(t.fbo);
  };

  const logoTex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, logoTex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
  uploadLogo = (mask) => {
    gl.bindTexture(gl.TEXTURE_2D, logoTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mask);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  };
  if (logoMask) uploadLogo(logoMask);

  /* ---------- sizing ---------- */

  const FLOW_W = 32;
  const FLOW_H = 18;
  const flow = new Float32Array(FLOW_W * FLOW_H * 4);
  let G = 1;
  let cssW = 1, cssH = 1, dpr = 1;
  let vel, den, pres, curlT, divT, readT;
  let simW = 2, simH = 2;

  function resize() {
    cssW = Math.max(2, root.clientWidth);
    cssH = Math.max(2, root.clientHeight);
    const scale = Math.min(window.devicePixelRatio || 1, 2) * (isMobile ? 0.62 : 0.85);
    canvas.width = Math.max(2, Math.round(cssW * scale));
    canvas.height = Math.max(2, Math.round(cssH * scale));
    const oldG = G;
    G = canvas.width / canvas.height;
    for (const p of probes) p.x *= G / oldG;
    if (cubePos) {
      cubePos[0] *= G / Math.max(oldG, 1e-6);
      clampCubePos();
    } else {
      cubePos = [G * 0.5, 0.5];
    }

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    dots.width = Math.round(cssW * dpr);
    dots.height = Math.round(cssH * dpr);
    // slightly taller footprint when the name is stacked on two lines
    const stack = isMobile || cssH > cssW * 1.05;
    logo.style.width = `${(stack ? Math.min(cfg.logoWidth * 1.08, 0.72) : cfg.logoWidth) * cssW}px`;
    if (logoStacked !== stack) refreshLogo(stack);

    if (vel) {
      [...vel.targets(), ...den.targets(), ...pres.targets(), curlT, divT, readT].forEach(freeTarget);
    }
    simH = isMobile ? 148 : 208;
    simW = Math.max(2, Math.round(simH * G));
    vel = pair(simW, simH, gl.RG16F, gl.RG);
    den = pair(simW * 2, simH * 2, gl.RG16F, gl.RG);
    pres = pair(simW, simH, gl.R16F, gl.RED);
    curlT = half(simW, simH, gl.R16F, gl.RED);
    divT = half(simW, simH, gl.R16F, gl.RED);
    readT = makeTarget(FLOW_W, FLOW_H, gl.RGBA32F, gl.RGBA, gl.FLOAT, gl.NEAREST);
    flow.fill(0);
  }

  /* ---------- state ---------- */

  const ptr = {
    x: 0.5,
    y: 0.5,
    vx: 0,
    vy: 0,
    active: false,
    down: false,
    hold: 0,
    release: -1,
    lastX: null,
    lastY: null,
    lastT: 0,
    wasIn: false,
    dragging: false,
    grabOX: 0,
    grabOY: 0,
    moved: false,
  };
  let cubePos = null;
  const cubeVel = [0, 0];
  const q = [1, 0, 0, 0];
  {
    // start tilted so three faces read immediately
    const a = 0.62, b = 0.78;
    const qa = [Math.cos(a / 2), Math.sin(a / 2), 0, 0];
    const qb = [Math.cos(b / 2), 0, Math.sin(b / 2), 0];
    q[0] = qa[0] * qb[0];
    q[1] = qa[1] * qb[0];
    q[2] = qa[0] * qb[2];
    q[3] = qa[1] * qb[2];
  }
  const omega = [0.3, 0.6, 0.1];
  const R = new Float32Array(9);
  const RT = new Float32Array(9);
  const CP = new Float32Array(24);
  const CV = new Float32Array(24);
  const pulseU = new Float32Array(16);
  const pulses = [];
  let pulseId = 0;
  let lastPulse = -1;
  let simT = 0;
  let frameN = 0;

  const s = cfg.cubeSize;

  function cubeCenter() {
    return cubePos || [G * 0.5, 0.5];
  }
  function clampCubePos() {
    const [cx, cy] = cubeCenter();
    const mx = s * 1.8;
    const my = s * 1.8;
    cubePos[0] = clamp(cx, mx, G - mx);
    cubePos[1] = clamp(cy, my, 1 - my);
  }
  function setCubeCursor(over, dragging) {
    root.classList.toggle("is-over-cube", !!over && !dragging);
    root.classList.toggle("is-dragging-cube", !!dragging);
  }

  function hitCube(wx, wy) {
    const [ccx, ccy] = cubeCenter();
    const dx = wx - ccx, dy = wy - ccy, dz = -cfg.lens;
    const len = Math.hypot(dx, dy, dz);
    const ro = mulR(RT, 0, 0, cfg.lens);
    const rd = mulR(RT, dx / len, dy / len, dz / len);
    let tn = -1e9, tf = 1e9;
    for (let i = 0; i < 3; i++) {
      const inv = 1 / rd[i];
      let a = (-s - ro[i]) * inv, b = (s - ro[i]) * inv;
      if (a > b) [a, b] = [b, a];
      if (a > tn) tn = a;
      if (b < tf) tf = b;
    }
    return tf >= tn && tf >= 0;
  }
  function sliceSD(wx, wy) {
    const [ccx, ccy] = cubeCenter();
    const p = mulR(RT, wx - ccx, wy - ccy, 0);
    const qx = Math.abs(p[0]) - s, qy = Math.abs(p[1]) - s, qz = Math.abs(p[2]) - s;
    const out = Math.hypot(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0));
    return out + Math.min(Math.max(qx, qy, qz), 0);
  }
  function firePulse() {
    if (simT - lastPulse < 0.12) return;
    lastPulse = simT;
    pulses.push({ t0: simT, id: ++pulseId });
    while (pulses.length > 4) pulses.shift();
  }

  /* ---------- probes ---------- */

  const probeCount = Math.round(cfg.probeCount * (isMobile ? 0.6 : 1));
  const probes = [];
  function spawn(p) {
    for (let t = 0; t < 6; t++) {
      p.x = (0.05 + Math.random() * 0.9) * G;
      p.y = 0.05 + Math.random() * 0.9;
      if (!hitCube(p.x, p.y)) break;
    }
    p.age = 0;
    p.life = 8 + Math.random() * 9;
    p.rnd = Math.random();
    p.size = Math.random();
    p.ping = -1;
    p.vis = 0;
    p.links = 0;
    return p;
  }
  const pings = [];
  const labels = [];
  for (let i = 0; i < cfg.labelCount; i++) {
    const el = document.createElement("div");
    el.className = "plabel";
    probeLayer.appendChild(el);
    labels.push({ el, idx: Math.floor((i + 0.5) * (probeCount / Math.max(cfg.labelCount, 1))), showV: i % 2 === 0 });
  }
  const cornerEls = [];
  for (let i = 0; i < 8; i++) {
    const el = document.createElement("div");
    el.className = "cornerLbl";
    probeLayer.appendChild(el);
    cornerEls.push(el);
  }

  function sampleFlow(u, v) {
    const fx = clamp(u, 0, 0.999) * (FLOW_W - 1);
    const fy = clamp(v, 0, 0.999) * (FLOW_H - 1);
    const ix = Math.floor(fx), iy = Math.floor(fy);
    const tx = fx - ix, ty = fy - iy;
    const at = (x, y, c) => flow[(Math.min(y, FLOW_H - 1) * FLOW_W + Math.min(x, FLOW_W - 1)) * 4 + c];
    const lerp2 = (c) =>
      (at(ix, iy, c) * (1 - tx) + at(ix + 1, iy, c) * tx) * (1 - ty) +
      (at(ix, iy + 1, c) * (1 - tx) + at(ix + 1, iy + 1, c) * tx) * ty;
    return [lerp2(0), lerp2(1)];
  }

  /* ---------- input ---------- */

  const toFrame = (e) => {
    const r = root.getBoundingClientRect();
    return [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height];
  };
  function onMove(e) {
    const [x, y] = toFrame(e);
    const now = performance.now() / 1000;
    if (ptr.lastX !== null) {
      const dt = Math.max(now - ptr.lastT, 1 / 240);
      ptr.vx = ptr.vx * 0.5 + (((x - ptr.lastX) * G) / dt) * 0.5;
      ptr.vy = ptr.vy * 0.5 + ((y - ptr.lastY) / dt) * 0.5;
    }
    ptr.x = x;
    ptr.y = y;
    ptr.lastX = x;
    ptr.lastY = y;
    ptr.lastT = now;
    ptr.active = true;

    if (ptr.dragging && cfg.draggable && cubePos) {
      const nx = x * G - ptr.grabOX;
      const ny = y - ptr.grabOY;
      if (Math.hypot(nx - cubePos[0], ny - cubePos[1]) > 0.002) ptr.moved = true;
      cubePos[0] = nx;
      cubePos[1] = ny;
      clampCubePos();
      cubeVel[0] = ptr.vx;
      cubeVel[1] = ptr.vy;
      if (e.cancelable) e.preventDefault();
    }

    setCubeCursor(hitCube(x * G, y) || ptr.dragging, ptr.dragging);
  }
  function onDown(e) {
    const [x, y] = toFrame(e);
    ptr.x = x;
    ptr.y = y;
    ptr.active = true;
    ptr.down = true;
    ptr.release = -1;
    ptr.moved = false;
    try {
      root.setPointerCapture(e.pointerId);
    } catch (_) {}
    const onCube = hitCube(x * G, y);
    if (onCube) {
      firePulse();
      if (cfg.draggable && cubePos) {
        ptr.dragging = true;
        ptr.grabOX = x * G - cubePos[0];
        ptr.grabOY = y - cubePos[1];
        cubeVel[0] = 0;
        cubeVel[1] = 0;
        setCubeCursor(true, true);
        if (e.cancelable) e.preventDefault();
      }
    }
  }
  function onUp() {
    if (ptr.down) ptr.release = simT;
    if (ptr.dragging) {
      // fling: keep a slice of pointer velocity as positional inertia
      cubeVel[0] = clamp(ptr.vx * 0.35, -2.5, 2.5);
      cubeVel[1] = clamp(ptr.vy * 0.35, -2.5, 2.5);
    }
    ptr.dragging = false;
    ptr.down = false;
    setCubeCursor(ptr.active && hitCube(ptr.x * G, ptr.y), false);
  }
  function onLeave() {
    ptr.lastX = null;
    ptr.vx = 0;
    ptr.vy = 0;
    ptr.active = false;
    if (!ptr.dragging) setCubeCursor(false, false);
  }
  let lastTop = null;
  function onScroll() {
    const top = root.getBoundingClientRect().top;
    if (lastTop !== null) {
      const d = clamp(lastTop - top, -80, 80);
      if (Math.abs(d) > 0.25) {
        omega[0] -= d * 0.0044 * cfg.scrollTorque;
        omega[1] -= d * 0.0016 * cfg.scrollTorque;
      }
    }
    lastTop = top;
  }
  root.addEventListener("pointermove", onMove, { passive: false });
  root.addEventListener("pointerdown", onDown, { passive: false });
  root.addEventListener("pointerup", onUp);
  root.addEventListener("pointercancel", onUp);
  root.addEventListener("pointerleave", onLeave);
  window.addEventListener("scroll", onScroll, { passive: true });

  let visible = true;
  const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
  io.observe(root);
  let resizeTimer = 0;
  const ro = new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });
  ro.observe(root);

  resize();
  rotFromQuat(q, R, RT);
  for (let i = 0; i < probeCount; i++) {
    const p = spawn({});
    p.age = Math.random() * p.life * 0.7;
    p.vis = hitCube(p.x, p.y) ? 0 : smooth(p.age / 1.2) * smooth((p.life - p.age) / 1.5);
    probes.push(p);
  }

  /* ---------- per-frame ---------- */

  function updateRotation(dt) {
    const [ccx, ccy] = cubeCenter();
    const ox = ptr.x * G - ccx, oy = ptr.y - ccy;
    const near = ptr.active && !ptr.dragging ? Math.exp(-(ox * ox + oy * oy) / 0.34) : 0;
    const l = clamp(ptr.vx, -3, 3), u = clamp(ptr.vy, -3, 3);
    const speed = Math.hypot(l, u);
    const boost = 1 + Math.min(speed / 3, 1) ** 2 * cfg.flickBoost;
    const gripScale = ptr.dragging ? cfg.dragSpin : 1;
    const k = cfg.grip * 1.9 * dt * (ptr.dragging ? 1 : near) * boost * gripScale * (isMobile ? 2.5 : 1);
    omega[0] += -u * k;
    omega[1] += l * k;
    omega[2] += (l * oy - u * ox) * k * 0.6;

    const braking = ptr.down && !ptr.dragging && speed < 0.2;
    const damp = Math.exp(-(braking ? 7 : 4.2 - cfg.coast * 3.6) * dt);
    omega[0] *= damp;
    omega[1] *= damp;
    omega[2] *= damp;

    const mag = Math.hypot(...omega);
    const idle = cfg.idleTurn * 0.28;
    if (!braking && !ptr.dragging && mag < idle * 2) {
      const ix = Math.sin(simT * 0.05 + cfg.seed), iy = 0.85, iz = Math.cos(simT * 0.041);
      const il = Math.hypot(ix, iy, iz);
      const r = Math.min(dt * 0.4, 1);
      omega[0] += ((ix / il) * idle - omega[0]) * r;
      omega[1] += ((iy / il) * idle - omega[1]) * r;
      omega[2] += ((iz / il) * idle - omega[2]) * r;
    }
    if (mag > 9) {
      omega[0] *= 9 / mag;
      omega[1] *= 9 / mag;
      omega[2] *= 9 / mag;
    }

    const [w, x, y, z] = q;
    const [a, b, c] = omega;
    q[0] += 0.5 * dt * (-a * x - b * y - c * z);
    q[1] += 0.5 * dt * (a * w + b * z - c * y);
    q[2] += 0.5 * dt * (b * w + c * x - a * z);
    q[3] += 0.5 * dt * (c * w + a * y - b * x);
    const ql = Math.hypot(...q);
    for (let i = 0; i < 4; i++) q[i] /= ql;
    rotFromQuat(q, R, RT);

    for (let i = 0; i < 8; i++) {
      const p = mulR(R, i & 1 ? s : -s, i & 2 ? s : -s, i & 4 ? s : -s);
      CP[i * 3] = p[0] + ccx;
      CP[i * 3 + 1] = p[1] + ccy;
      CP[i * 3 + 2] = p[2];
      CV[i * 3] = omega[1] * p[2] - omega[2] * p[1];
      CV[i * 3 + 1] = omega[2] * p[0] - omega[0] * p[2];
      CV[i * 3 + 2] = omega[0] * p[1] - omega[1] * p[0];
    }
  }

  const use = (prog, target) => {
    gl.useProgram(prog.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, target ? target.fbo : null);
    gl.viewport(0, 0, target ? target.w : canvas.width, target ? target.h : canvas.height);
    const u = prog.u;
    const [ccx, ccy] = cubeCenter();
    gl.uniform2f(u.uAspect, G, 1);
    gl.uniform2f(u.uCubePos, ccx, ccy);
    gl.uniform1f(u.uTime, simT);
    gl.uniform1f(u.uSeed, cfg.seed);
    gl.uniform1f(u.uCube, s);
    gl.uniformMatrix3fv(u.uRot, false, R);
    gl.uniformMatrix3fv(u.uRotT, false, RT);
    gl.uniform3f(u.uOmega, omega[0], omega[1], omega[2]);
    return u;
  };
  const bind = (u, name, tex, unit) => {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(u[name], unit);
  };
  const draw = () => gl.drawArrays(gl.TRIANGLES, 0, 3);
  const setPulses = (u) => {
    gl.uniform4fv(u["uPulse[0]"], pulseU);
    gl.uniform1f(u.uPulseSpeed, cfg.pulseSpeed);
    gl.uniform1f(u.uPulseWidth, cfg.pulseWidth);
    gl.uniform1f(u.uPulseLife, cfg.pulseLife);
  };
  const logoBox = () => {
    // name stays viewport-centered; only the cube moves under drag
    const stack = !!logoStacked;
    const lw = (stack ? Math.min(cfg.logoWidth * 1.08, 0.72) : cfg.logoWidth) * G;
    return [G * 0.5, 0.5, lw, (lw * LOGO_H) / LOGO_W];
  };

  function simulate(dt, rdt) {
    const tx = 1 / simW, ty = 1 / simH;
    const lv = clamp(ptr.vx, -3, 3), uv = clamp(ptr.vy, -3, 3);
    const px = ptr.active ? ptr.x * G : -10, py = ptr.active ? ptr.y : -10;
    let u;

    u = use(P.advect, vel.b);
    bind(u, "uVel", vel.a.tex, 0);
    bind(u, "uSrc", vel.a.tex, 1);
    gl.uniform1f(u.uDt, dt);
    gl.uniform1f(u.uDiss, Math.pow(0.996, rdt * 60));
    draw();
    vel.swap();

    u = use(P.force, vel.b);
    bind(u, "uVel", vel.a.tex, 0);
    gl.uniform1f(u.uDt, dt);
    gl.uniform1f(u.uIdle, 0.8);
    gl.uniform1f(u.uWhisper, cfg.whisper);
    gl.uniform1f(u.uVortex, cfg.vortex);
    gl.uniform1f(u.uVortexR, cfg.vortexRadius);
    gl.uniform1f(u.uDown, ptr.down ? 1 : 0);
    gl.uniform1f(u.uHold, ptr.hold);
    gl.uniform1f(u.uRelease, ptr.release >= 0 ? simT - ptr.release : 0);
    gl.uniform2f(u.uPtr, px, py);
    gl.uniform2f(u.uPtrVel, lv, uv);
    gl.uniform3fv(u["uCP[0]"], CP);
    gl.uniform3fv(u["uCV[0]"], CV);
    setPulses(u);
    gl.uniform1f(u.uPulseForce, cfg.pulseForce);
    draw();
    vel.swap();

    u = use(P.curl, curlT);
    bind(u, "uVel", vel.a.tex, 0);
    gl.uniform2f(u.uTexel, tx, ty);
    draw();

    u = use(P.vort, vel.b);
    bind(u, "uVel", vel.a.tex, 0);
    bind(u, "uCurl", curlT.tex, 1);
    gl.uniform2f(u.uTexel, tx, ty);
    gl.uniform1f(u.uDt, dt);
    gl.uniform1f(u.uEps, cfg.turbulence);
    draw();
    vel.swap();

    u = use(P.div, divT);
    bind(u, "uVel", vel.a.tex, 0);
    gl.uniform2f(u.uTexel, tx, ty);
    draw();

    u = use(P.scale, pres.b);
    bind(u, "uSrc", pres.a.tex, 0);
    gl.uniform1f(u.uK, 0.8);
    draw();
    pres.swap();

    for (let i = 0; i < 12; i++) {
      u = use(P.jacobi, pres.b);
      bind(u, "uPressure", pres.a.tex, 0);
      bind(u, "uDiv", divT.tex, 1);
      gl.uniform2f(u.uTexel, tx, ty);
      draw();
      pres.swap();
    }

    u = use(P.grad, vel.b);
    bind(u, "uPressure", pres.a.tex, 0);
    bind(u, "uVel", vel.a.tex, 1);
    gl.uniform2f(u.uTexel, tx, ty);
    draw();
    vel.swap();

    u = use(P.advect, den.b);
    bind(u, "uVel", vel.a.tex, 0);
    bind(u, "uSrc", den.a.tex, 1);
    gl.uniform1f(u.uDt, dt);
    gl.uniform1f(u.uDiss, Math.pow(cfg.wake - cfg.diffusion * 0.004, rdt * 60));
    draw();
    den.swap();

    u = use(P.inject, den.b);
    bind(u, "uDen", den.a.tex, 0);
    bind(u, "uLogo", logoTex, 1);
    gl.uniform1f(u.uDt, dt);
    gl.uniform1f(u.uAtmo, cfg.atmosphere * Math.min(simT / 2, 1));
    gl.uniform1f(u.uChurn, cfg.churn);
    gl.uniform1f(u.uWhisper, cfg.whisper);
    gl.uniform1f(u.uVortexR, cfg.vortexRadius);
    gl.uniform1f(u.uTypeVapor, cfg.typeVapor);
    gl.uniform2f(u.uPtr, px, py);
    gl.uniform2f(u.uPtrVel, lv, uv);
    gl.uniform3fv(u["uCP[0]"], CP);
    gl.uniform3fv(u["uCV[0]"], CV);
    gl.uniform4f(u.uLogoBox, ...logoBox());
    setPulses(u);
    draw();
    den.swap();

    if (frameN % 3 === 0) {
      u = use(P.down, readT);
      bind(u, "uVel", vel.a.tex, 0);
      draw();
      gl.readPixels(0, 0, FLOW_W, FLOW_H, gl.RGBA, gl.FLOAT, flow);
    }
  }

  function composite() {
    const u = use(P.composite, null);
    bind(u, "uDen", den.a.tex, 0);
    bind(u, "uVel", vel.a.tex, 1);
    bind(u, "uCurl", curlT.tex, 2);
    bind(u, "uPres", pres.a.tex, 3);
    bind(u, "uLogo", logoTex, 4);
    gl.uniform2f(u.uTexel, 1 / canvas.width, 1 / canvas.height);
    gl.uniform1f(u.uLens, cfg.lens);
    gl.uniform1f(u.uExposure, cfg.exposure);
    gl.uniform1f(u.uContrast, cfg.contrast);
    gl.uniform1f(u.uRelief, cfg.relief);
    gl.uniform1f(u.uIrid, cfg.iridescence);
    gl.uniform1f(u.uIridSpread, cfg.iridSpread);
    gl.uniform1f(u.uDetail, cfg.detail);
    gl.uniform1f(u.uDiffusion, cfg.diffusion);
    gl.uniform1f(u.uPresence, cfg.presence);
    gl.uniform1f(u.uFaceShade, cfg.faceShade);
    gl.uniform1f(u.uGlint, cfg.glint);
    gl.uniform1f(u.uFog, cfg.fogFloor);
    setPulses(u);
    gl.uniform1f(u.uPulseReveal, cfg.pulseReveal);
    gl.uniform1f(u.uPulseRing, cfg.pulseRing);
    gl.uniform1f(u.uGrid, cfg.pulseGrid);
    gl.uniform1f(u.uGridDot, cfg.gridDotScale);
    gl.uniform1f(u.uGridSizeRnd, cfg.gridSizeRnd);
    gl.uniform1f(u.uGridOpRnd, cfg.gridOpRnd);
    gl.uniform1f(u.uGridStagger, cfg.gridStagger);
    gl.uniform1f(u.uGridOpacity, cfg.gridOpacity);
    gl.uniform4f(u.uLogoBox, ...logoBox());
    gl.uniform1f(u.uTypeGlow, cfg.typeGlow);
    gl.uniform1f(u.uTypeGrid, cfg.typeGrid);
    gl.uniform1f(u.uTypeStroke, cfg.typeStroke);
    draw();
  }

  const ctx = dots.getContext("2d");
  const toPx = (x, y) => [(x / G) * cssW, (1 - y) * cssH];

  function updateOverlay(dt, rdt) {
    const linkD2 = cfg.linkDist * cfg.linkDist;
    for (const p of probes) {
      p.age += dt;
      if (p.age > p.life) spawn(p);
      if (p.age < 0) {
        p.vis = 0;
        continue;
      }
      const [vx, vy] = sampleFlow(p.x / G, p.y);
      p.x += vx * cfg.probeDrift * dt;
      p.y += vy * cfg.probeDrift * dt;
      if (p.x < 0 || p.x > G || p.y < 0 || p.y > 1) {
        spawn(p);
        continue;
      }
      const fade = smooth(p.age / 1.2) * smooth((p.life - p.age) / 1.5);
      const target = hitCube(p.x, p.y) ? 0 : fade;
      p.vis += (target - p.vis) * Math.min(rdt * 8, 1);
      p.links = 0;

      for (const pl of pulses) {
        const r = (simT - pl.t0) * cfg.pulseSpeed;
        if (p.ping !== pl.id && p.vis > 0.1 && Math.abs(sliceSD(p.x, p.y) - r) < 0.012) {
          p.ping = pl.id;
          pings.push({ x: p.x, y: p.y, t: 0, a: cfg.pingOpacity * (0.4 + 0.6 * p.rnd) });
        }
      }
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    ctx.lineWidth = 0.6;
    for (let i = 0; i < probes.length; i++) {
      const a = probes[i];
      if (a.vis < 0.02 || a.links >= cfg.linkMax) continue;
      for (let j = i + 1; j < probes.length; j++) {
        const b = probes[j];
        if (b.vis < 0.02 || b.links >= cfg.linkMax) continue;
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > linkD2) continue;
        a.links++;
        b.links++;
        const alpha =
          cfg.linkOpacity * (1 - cfg.linkOpacityRnd * ((a.rnd + b.rnd) * 0.5)) * Math.min(a.vis, b.vis) * (1 - Math.sqrt(d2) / cfg.linkDist) * 0.55;
        if (alpha < 0.005) continue;
        const [ax, ay] = toPx(a.x, a.y);
        const [bx, by] = toPx(b.x, b.y);
        ctx.strokeStyle = `rgba(232,230,226,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
        if (a.links >= cfg.linkMax) break;
      }
    }

    for (const p of probes) {
      if (p.vis < 0.02) continue;
      const [x, y] = toPx(p.x, p.y);
      const r = 0.7 + p.size * 0.9;
      ctx.fillStyle = `rgba(236,234,230,${(p.vis * (0.45 + 0.5 * (1 - p.rnd))).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = pings.length - 1; i >= 0; i--) {
      const pg = pings[i];
      pg.t += rdt;
      const k = pg.t / 0.9;
      if (k >= 1) {
        pings.splice(i, 1);
        continue;
      }
      const [x, y] = toPx(pg.x, pg.y);
      ctx.strokeStyle = `rgba(232,230,226,${(pg.a * (1 - k)).toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, 3 + k * 14, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (const lab of labels) {
      const p = probes[lab.idx % probes.length];
      if (!p || p.vis < 0.05) {
        lab.el.style.opacity = "0";
        continue;
      }
      const [x, y] = toPx(p.x, p.y);
      const [vx, vy] = sampleFlow(p.x / G, p.y);
      let t = `x ${fmt(p.x / G)}\ny ${fmt(p.y)}`;
      if (lab.showV) t += `\nv ${fmt(Math.hypot(vx, vy))}`;
      lab.el.textContent = t;
      lab.el.style.opacity = (cfg.labelOpacity * p.vis).toFixed(3);
      lab.el.style.transform = `translate(${(x + 10).toFixed(1)}px, ${(y - 6).toFixed(1)}px)`;
    }

    let env = 0;
    for (const pl of pulses) env = Math.max(env, Math.exp(((pl.t0 - simT) * 2.6) / cfg.pulseLife));
    const [ccx, ccy] = cubeCenter();
    for (let i = 0; i < 8; i++) {
      const el = cornerEls[i];
      const cx = CP[i * 3] - ccx, cy = CP[i * 3 + 1] - ccy, cz = CP[i * 3 + 2];
      const op = env * cfg.hudOpacity * (cz > 0 ? 1 : 0.35);
      el.style.opacity = op.toFixed(3);
      if (op < 0.02) continue;
      const k = cfg.lens / Math.max(cfg.lens - cz, 0.05);
      const [x, y] = toPx(ccx + cx * k, ccy + cy * k);
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(7px, -50%)`;
      el.textContent = `${fmtSigned(cx)} ${fmtSigned(cy)} ${fmtSigned(cz)}`;
    }
  }

  let telAcc = 0;
  function updateTelemetry(rdt) {
    telAcc += rdt;
    if (telAcc < 0.12) return;
    telAcc = 0;
    const mm = String(Math.floor(simT / 60)).padStart(2, "0");
    const ss = String(Math.floor(simT % 60)).padStart(2, "0");
    telemetry.textContent = `\u03c9 ${Math.hypot(...omega).toFixed(2)}   t ${mm}:${ss}   n ${probeCount}`;
  }

  let last = performance.now() / 1000;
  let raf = 0;
  let bootFired = false;
  function frame(ms) {
    if (disposed) return;
    raf = requestAnimationFrame(frame);
    const now = ms / 1000;
    if (!visible || document.hidden) {
      last = now;
      return;
    }
    const rdt = Math.min(Math.max(now - last, 0), 1 / 40);
    last = now;
    const dt = rdt * cfg.timeScale;
    simT += dt;
    frameN++;

    while (pulses.length && simT - pulses[0].t0 > 5.5) pulses.shift();
    if (!bootFired && simT > 0.35) {
      bootFired = true;
      firePulse();
    }

    // coast the cube after a drag-fling
    if (!ptr.dragging && cubePos && (Math.abs(cubeVel[0]) > 1e-4 || Math.abs(cubeVel[1]) > 1e-4)) {
      cubePos[0] += cubeVel[0] * dt;
      cubePos[1] += cubeVel[1] * dt;
      clampCubePos();
      const damp = Math.pow(cfg.dragInertia, rdt * 60);
      cubeVel[0] *= damp;
      cubeVel[1] *= damp;
      if (Math.hypot(cubeVel[0], cubeVel[1]) < 0.002) {
        cubeVel[0] = 0;
        cubeVel[1] = 0;
      }
    }

    updateRotation(dt);
    const inCube = ptr.active && hitCube(ptr.x * G, ptr.y);
    if (inCube && !ptr.wasIn && !ptr.dragging) firePulse();
    ptr.wasIn = inCube;

    pulseU.fill(0);
    pulses.forEach((pl, i) => {
      pulseU[i * 4 + 2] = simT - pl.t0;
      pulseU[i * 4 + 3] = 1;
    });

    simulate(dt, rdt);
    composite();
    updateOverlay(dt, rdt);
    updateTelemetry(rdt);

    ptr.vx *= 0.86;
    ptr.vy *= 0.86;
    ptr.hold = ptr.down ? ptr.hold + dt : 0;
  }
  raf = requestAnimationFrame(frame);

  return {
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      clearTimeout(resizeTimer);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointercancel", onUp);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      setCubeCursor(false, false);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      root.innerHTML = "";
    },
  };
}
