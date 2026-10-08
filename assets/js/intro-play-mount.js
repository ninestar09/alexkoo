/**
 * Mounts the alexintro-play interactive cube on #intro-play-stage (homepage only).
 */
import { mountBlackboxHero } from "./blackbox-hero.js?v=intro7";

const PLAY_OPTIONS = {
  title: "ALEX KOO",
  subtitleLines: ["Advancing Art, AI &", "Creative Technology"],
  dynamicColor: true,
  colorSpeed: 0.28,
  colorAmp: 0.9,
  popups: true,
  popupLife: 3.4,
  iridescence: 1.25,
  iridSpread: 1,
  glint: 0.48,
};

let handle = null;

function ensureStyles() {
  if (document.querySelector('link[href*="blackbox-hero.css"]')) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "assets/css/blackbox-hero.css";
  document.head.appendChild(link);
}

function ensureStage() {
  const section = document.getElementById("intro-play");
  if (!section) return null;
  section.hidden = false;
  section.removeAttribute("hidden");
  let stage = document.getElementById("intro-play-stage");
  if (!stage) {
    stage = document.createElement("div");
    stage.id = "intro-play-stage";
    stage.className = "intro-play__stage";
    section.appendChild(stage);
  }
  return stage;
}

export function disposeIntroPlay() {
  if (handle && typeof handle.dispose === "function") {
    try {
      handle.dispose();
    } catch (_) {}
  }
  handle = null;
  const stage = document.getElementById("intro-play-stage");
  if (stage) {
    stage.classList.remove("bbihero", "is-dynamic-color", "is-popups", "is-stacked-logo", "bbih-static");
    stage.innerHTML = "";
  }
}

export function isIntroPlayHealthy() {
  const section = document.getElementById("intro-play");
  const stage = document.getElementById("intro-play-stage");
  const canvas = stage?.querySelector("canvas.bbih-gl");
  return !!(section && !section.hidden && stage && canvas && canvas.width > 2 && section.clientHeight > 100);
}

export function mountIntroPlay(force = false) {
  const section = document.getElementById("intro-play");
  if (!section) return null;
  if (!force && isIntroPlayHealthy()) return handle;
  disposeIntroPlay();
  const stage = ensureStage();
  if (!stage) return null;
  ensureStyles();
  void stage.offsetWidth;
  try {
    handle = mountBlackboxHero(stage, PLAY_OPTIONS);
  } catch (err) {
    console.warn("[intro-play] mount failed", err);
    handle = null;
  }
  requestAnimationFrame(() => {
    try {
      window.dispatchEvent(new Event("resize"));
    } catch (_) {}
  });
  return handle;
}

export function ensureIntroPlay() {
  if (!document.getElementById("intro-play")) return null;
  if (isIntroPlayHealthy()) return handle;
  return mountIntroPlay(true);
}

window.AlexIntroPlay = {
  mountIntroPlay,
  disposeIntroPlay,
  isIntroPlayHealthy,
  ensureIntroPlay,
};

function boot() {
  if (!document.getElementById("intro-play")) return;
  mountIntroPlay(true);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}

window.addEventListener("load", () => {
  if (document.getElementById("intro-play")) ensureIntroPlay();
});

window.addEventListener("pageshow", (ev) => {
  if (!document.getElementById("intro-play")) return;
  if (ev.persisted || !isIntroPlayHealthy()) mountIntroPlay(true);
});
