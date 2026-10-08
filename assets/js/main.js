/**
* Template Name: PhotoFolio - v1.1.1
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Prevent browser from restoring a mid-page scroll (hides #intro-play under the fold)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  /** Resolve intro-play module URL from this script (classic `import('./x')` is doc-relative and 404s). */
  const ASSET_VERSION = 'intro4';
  function introPlayModuleUrl() {
    const existing = document.querySelector('script[type="module"][src*="intro-play-mount.js"]');
    if (existing) return existing.src;
    const scripts = document.querySelectorAll('script[src]');
    for (let i = 0; i < scripts.length; i++) {
      const src = scripts[i].getAttribute('src') || '';
      if (/main\.js(\?|#|$)/.test(src)) {
        return new URL('intro-play-mount.js?v=' + ASSET_VERSION, scripts[i].src).href;
      }
    }
    return new URL('assets/js/intro-play-mount.js?v=' + ASSET_VERSION, window.location.href).href;
  }

  /** Lazy-load intro-play mount (defined early so Home/boot never hit a TDZ). */
  let introPlayMountPromise = null;
  function loadIntroPlayMount() {
    if (window.AlexIntroPlay) return Promise.resolve(window.AlexIntroPlay);
    if (!introPlayMountPromise) {
      introPlayMountPromise = import(introPlayModuleUrl()).catch((err) => {
        console.warn('[intro-play] module load failed', err);
        introPlayMountPromise = null;
        return null;
      });
    }
    return introPlayMountPromise.then((mod) => window.AlexIntroPlay || mod);
  }

  function pinIntroPlayToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function ensureIntroPlayShell() {
    let el = document.getElementById('intro-play');
    if (el) return el;
    el = document.createElement('section');
    el.id = 'intro-play';
    el.className = 'intro-play';
    el.setAttribute('aria-label', 'Interactive cube intro');
    el.innerHTML = '<div id="intro-play-stage" class="intro-play__stage"></div>';
    const app = document.getElementById('app-content');
    if (app) app.insertBefore(el, app.firstChild);
    else document.body.insertBefore(el, document.body.firstChild);
    return el;
  }

  let introPlayBootTimers = [];
  function clearIntroPlayBootTimers() {
    while (introPlayBootTimers.length) {
      window.clearTimeout(introPlayBootTimers.pop());
    }
  }

  function isHomePage() {
    if (document.body.classList.contains('page-home')) return true;
    return pageBasename(window.location.pathname) === 'index.html';
  }

  /** Play intro on Home only. */
  function syncIntroPlayForHome(isHome) {
    if (!isHome) {
      clearIntroPlayBootTimers();
      document.body.classList.remove('page-home');
      try { window.AlexIntroPlay?.disposeIntroPlay?.(); } catch (_) {}
      const el = document.getElementById('intro-play');
      if (el) el.remove();
      return Promise.resolve(null);
    }
    document.body.classList.add('page-home');
    ensureIntroPlayShell();
    pinIntroPlayToTop();
    return ensureIntroPlayReady({ force: true });
  }

  /** Mount/repair play intro if #intro-play is in the DOM. */
  function ensureIntroPlayReady(opts) {
    const force = !!(opts && opts.force);
    if (!isHomePage()) return Promise.resolve(null);
    const el = ensureIntroPlayShell();
    if (!el) return Promise.resolve(null);
    el.hidden = false;
    el.removeAttribute('hidden');
    pinIntroPlayToTop();
    const run = (api) => {
      if (!api) return null;
      try {
        if (force) return api.mountIntroPlay?.(true) ?? null;
        return api.ensureIntroPlay?.() ?? api.mountIntroPlay?.(false) ?? null;
      } catch (_) {
        return null;
      }
    };
    if (window.AlexIntroPlay) return Promise.resolve(run(window.AlexIntroPlay));
    return loadIntroPlayMount().then(run);
  }

  /**
   * Preloader — must never block clicks indefinitely (z-index 99999).
   * Rare edge: `load` already fired before this listener runs, or a hung asset delays `load` on slow/CDN paths.
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    let preloaderDismissed = false;
    const dismissPreloader = () => {
      if (preloaderDismissed || !preloader.parentNode) return;
      preloaderDismissed = true;
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 100);
      setTimeout(() => {
        preloader.remove();
      }, 900);
    };
    window.addEventListener('load', dismissPreloader);
    if (document.readyState === 'complete') {
      dismissPreloader();
    } else {
      requestAnimationFrame(() => {
        if (document.readyState === 'complete') dismissPreloader();
      });
    }
    /* Last resort: never leave an invisible blocker on INTERACTIVE 3D / slow networks */
    window.setTimeout(() => {
      if (preloader.parentNode && !preloader.classList.contains('loaded')) dismissPreloader();
    }, 8000);
  }

  /**
   * Page transition: glass L/R wings (see main.css). Used for:
   * - SPA nav (index / about / contact / interactive3d): exit → fetch → enter
   * - Full page (e.g. gallery → SPA): exit → navigate with ?navt → enter on load
   */
  const PAGE_TX_MS = 760;
  let pageTxOverlay = null;

  function ensurePageTransitionOverlay() {
    if (pageTxOverlay) return pageTxOverlay;
    let el = document.getElementById('pageLineTransition');
    if (!el) {
      el = document.createElement('div');
      el.id = 'pageLineTransition';
      el.className = 'page-line-transition';
      el.innerHTML = `
        <div class="page-line-transition__wings" aria-hidden="true">
          <div class="page-line-transition__wing page-line-transition__wing--left"></div>
          <div class="page-line-transition__wing page-line-transition__wing--right"></div>
        </div>
      `;
      document.body.appendChild(el);
    }
    pageTxOverlay = el;
    return pageTxOverlay;
  }

  function pageTxClear() {
    if (!pageTxOverlay) return;
    pageTxOverlay.classList.remove('is-active', 'is-exiting', 'is-entering');
  }

  /** Run exit animation, then call `done` (e.g. fetch or full navigation). */
  function pageTxExitThen(done) {
    ensurePageTransitionOverlay();
    pageTxClear();
    pageTxOverlay.classList.add('is-active', 'is-exiting');
    window.setTimeout(done, PAGE_TX_MS);
  }

  /** Play enter animation (e.g. after SPA content swap). */
  function pageTxPlayEnter() {
    ensurePageTransitionOverlay();
    pageTxClear();
    pageTxOverlay.classList.add('is-active', 'is-entering');
    window.setTimeout(pageTxClear, PAGE_TX_MS + 40);
  }

  /** Full-page navigation with transition + ?navt for enter on next document. */
  function pageTxNavigateFull(toUrl) {
    ensurePageTransitionOverlay();
    const u = new URL(toUrl.toString());
    u.searchParams.set('navt', '1');
    pageTxClear();
    pageTxOverlay.classList.add('is-active', 'is-exiting');
    window.setTimeout(() => {
      window.location.href = u.toString();
    }, PAGE_TX_MS);
  }

  /** Always hard-load Home so the WebGL intro boots like a refresh (SPA remount is unreliable). */
  function navigateHomeHard(e) {
    if (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    const u = new URL('index.html', window.location.href);
    u.search = '';
    u.hash = '';
    // Cache-bust so the document + modules boot the same way as a manual refresh
    u.searchParams.set('_home', String(Date.now()));
    window.location.assign(u.toString());
  }

  function pageBasename(pathOrHref) {
    try {
      const u = new URL(pathOrHref, window.location.href);
      let p = u.pathname || '';
      if (p.endsWith('/')) p += 'index.html';
      const name = p.split('/').pop() || 'index.html';
      return name;
    } catch (_) {
      const raw = String(pathOrHref || '').split('?')[0].split('#')[0];
      if (!raw || raw === '/' || raw.endsWith('/')) return 'index.html';
      return raw.split('/').pop() || 'index.html';
    }
  }

  /** Capture-phase: Home hard-loads; leaving Home also full-loads so play intro never sticks. */
  document.addEventListener('click', (e) => {
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    if (a.getAttribute('target') === '_blank') return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    let dest;
    try {
      dest = new URL(href, window.location.href);
      if (dest.origin !== window.location.origin) return;
    } catch (_) {
      return;
    }
    const nextName = pageBasename(dest.pathname);
    const curName = pageBasename(window.location.pathname);
    const spaPages = ['index.html', 'about.html', 'contact.html', 'interactive3d.html'];
    if (!spaPages.includes(nextName)) return;

    // Home links (ignore index.html#gallery deep links)
    if (nextName === 'index.html') {
      if (dest.hash && dest.hash !== '#intro-play' && dest.hash !== '#') return;
      navigateHomeHard(e);
      return;
    }

    // Leaving Home → full load of About/Contact/3D (drops play intro with the document)
    if (curName === 'index.html') {
      e.preventDefault();
      e.stopImmediatePropagation();
      syncIntroPlayForHome(false);
      pageTxNavigateFull(dest);
    }
  }, true);

  // Boot play intro on Home only
  {
    try {
      const u = new URL(window.location.href);
      if (u.searchParams.has('_home')) {
        u.searchParams.delete('_home');
        window.history.replaceState({}, '', u.pathname + u.search + u.hash);
      }
    } catch (_) {}

    if (isHomePage()) {
      syncIntroPlayForHome(true);
      window.addEventListener('load', () => {
        if (isHomePage()) ensureIntroPlayReady({ force: true });
      });
      introPlayBootTimers.push(window.setTimeout(() => {
        if (isHomePage()) ensureIntroPlayReady({ force: true });
      }, 250));
    } else {
      syncIntroPlayForHome(false);
    }

    window.addEventListener('pageshow', (ev) => {
      if (!isHomePage()) {
        syncIntroPlayForHome(false);
        return;
      }
      ensureIntroPlayReady({ force: !!ev.persisted });
    });
  }

  function initPageLineTransition() {
    ensurePageTransitionOverlay();

    const urlNow = new URL(window.location.href);
    if (urlNow.searchParams.get('navt')) {
      urlNow.searchParams.delete('navt');
      window.history.replaceState({}, '', urlNow.toString());
      pageTxPlayEnter();
    }

    /* Pages without #app-content (e.g. gallery): full load to any SPA nav target with same transition */
    document.addEventListener('click', (e) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (document.getElementById('app-content')) return;

      const target = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#' || href.startsWith('#')) return;
      if (target.getAttribute('target') === '_blank') return;

      const to = new URL(href, window.location.href);
      if (to.origin !== window.location.origin) return;

      const path = getPath(to.pathname);
      if (!isSpaPage(path)) return;

      const destName = path.replace(/^.*\//, '') || 'index.html';
      const curPath = getPath(window.location.pathname);
      const curName = curPath.replace(/^.*\//, '') || 'index.html';
      if (destName === curName) return;

      e.preventDefault();
      pageTxNavigateFull(to);
    }, { capture: true, passive: false });
  }

  initPageLineTransition();

  /**
   * Deep link to index sections (e.g. gallery pages → index.html#gallery)
   */
  function easeInCubic(t) {
    return t * t * t;
  }

  function smoothScrollToY(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const ms = duration || 1500;
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / ms);
      const eased = easeInCubic(t);
      window.scrollTo(0, startY + distance * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function scrollToLocationHash(options) {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    // Intro is the page top — never offset-scroll it under the fold
    if (hash === '#intro-play') {
      pinIntroPlayToTop();
      return;
    }
    const target = document.querySelector(hash);
    if (!target) return;
    const { smooth = true, delay = 0, duration = 1500 } = options || {};
    const run = () => {
      const header = document.getElementById('header');
      const offset = header ? header.offsetHeight + 20 : 100;
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
      if (smooth) smoothScrollToY(top, duration);
      else window.scrollTo(0, top);
    };
    if (delay > 0) window.setTimeout(run, delay);
    else run();
  }

  window.addEventListener('load', () => {
    if (!window.location.hash) return;
    const delay = preloader?.isConnected ? 1100 : 120;
    scrollToLocationHash({ smooth: true, delay, duration: 1600 });
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Hero scroll-driven frame animation (90 frames, 16:9).
   * When the hero section reaches the top of the viewport (after #intro-play),
   * the first stretch of wheel input drives the frame sequence; then page scrolls.
   * Must be re-inited after SPA swaps #app-content (old window listeners targeted removed nodes).
   */
  let heroScrollAbort = null;

  function disposeHeroScrollFrames() {
    if (heroScrollAbort) {
      heroScrollAbort.abort();
      heroScrollAbort = null;
    }
  }

  function initHeroScrollFrames() {
    disposeHeroScrollFrames();

    const heroScrollFrameEl = document.getElementById('heroScrollFrame');
    const heroSection = document.getElementById('hero');
    if (!heroScrollFrameEl || !heroSection) return;

    heroScrollAbort = new AbortController();
    const signal = heroScrollAbort.signal;

    const TOTAL_FRAMES = 90;
    const FRAME_EXT = 'jpg'; // or 'png'
    const FRAME_PATH = 'assets/img/hero-scroll/frame_';
    /* Virtual scroll range: first N px of “scroll” only advance the sequence (no page scroll) */
    const ANIMATION_SCROLL_RANGE = 5000;
    const FRAME_SCROLL_SPEED = 2; // 2× faster frame progression vs prior tuning
    const SCROLL_SPEED_MULTIPLIER = 24 * FRAME_SCROLL_SPEED;
    let virtualScroll = 0;
    let hasReachedEnd = false;
    let maxProgressReached = 0;
    let currentProgress = 0;

    const measureRoot = document.getElementById('heroMeasure');
    const vTicks = [];
    let playhead = null;

    function buildHeroMeasure() {
      if (!measureRoot) return;
      measureRoot.innerHTML = '';
      vTicks.length = 0;

      const railV = document.createElement('div');
      railV.className = 'hm-rail hm-rail-v';
      railV.setAttribute('aria-hidden', 'true');
      measureRoot.appendChild(railV);

      for (let i = 1; i <= 9; i++) {
        const f = i / 10;
        const major = i % 2 === 0;

        const v = document.createElement('div');
        v.className = 'hm-tick v' + (major ? ' is-major' : '');
        v.style.top = `${f * 100}%`;
        v.dataset.t = String(f);
        measureRoot.appendChild(v);
        vTicks.push(v);

        if (major) {
          const vl = document.createElement('button');
          vl.type = 'button';
          vl.className = 'hm-lbl';
          vl.textContent = `.${10 - i}`;
          vl.style.top = `${f * 100}%`;
          vl.style.left = '8px';
          vl.style.transform = 'translateY(-50%)';
          // left rail maps top→.9 … bottom→.1 like alexintro; scrub uses top-origin progress
          vl.dataset.t = String(f);
          vl.setAttribute('aria-label', `Jump to scroll ${f.toFixed(1)}`);
          measureRoot.appendChild(vl);
        }
      }

      playhead = document.createElement('div');
      playhead.className = 'hm-playhead';
      playhead.style.top = '0%';
      measureRoot.appendChild(playhead);

      measureRoot.addEventListener('click', (e) => {
        const btn = e.target.closest('.hm-lbl');
        if (!btn || !measureRoot.contains(btn)) return;
        const t = parseFloat(btn.dataset.t || '0');
        if (!Number.isFinite(t)) return;
        scrubToProgress(t);
      }, { signal });
    }

    function updateHeroMeasure(progress) {
      if (!measureRoot) return;
      const p = Math.min(1, Math.max(0, progress));
      if (playhead) playhead.style.top = `${(p * 100).toFixed(2)}%`;

      const nearest = Math.round(p * 10) / 10;
      measureRoot.querySelectorAll('.hm-tick, .hm-lbl').forEach((el) => {
        const t = parseFloat(el.dataset.t || '-1');
        el.classList.toggle('is-active', Math.abs(t - nearest) < 0.051);
      });
    }

    function heroDocTop() {
      return heroSection.getBoundingClientRect().top + window.scrollY;
    }

    function scrollPastHeroPin() {
      return window.scrollY - heroDocTop();
    }

    function isHeroPinned() {
      const top = heroSection.getBoundingClientRect().top;
      return top <= 2 && top >= -2;
    }

    function pinHeroIfNeeded() {
      const top = heroSection.getBoundingClientRect().top;
      if (top > 2) {
        const y = heroDocTop();
        window.scrollTo({ top: y, behavior: 'auto' });
      }
    }

    function updateHeroTitleGradient(progress) {
      const p = Math.min(1, Math.max(0, progress));
      const angle = 88 + (p * 42);
      const warmStop = 34 - (p * 32);
      const midStop = 62 - (p * 46);
      const warm = `hsl(${26 + (p * 186)} 96% ${71 - (p * 11)}%)`;
      const mid = `hsl(${334 - (p * 122)} 88% ${68 - (p * 8)}%)`;
      const cool = `hsl(${198 + (p * 18)} 94% ${66 - (p * 6)}%)`;
      heroSection.style.setProperty('--hero-title-gradient-angle', `${angle.toFixed(1)}deg`);
      heroSection.style.setProperty('--hero-title-warm-stop', `${warmStop.toFixed(1)}%`);
      heroSection.style.setProperty('--hero-title-mid-stop', `${midStop.toFixed(1)}%`);
      heroSection.style.setProperty('--hero-title-warm', warm);
      heroSection.style.setProperty('--hero-title-mid', mid);
      heroSection.style.setProperty('--hero-title-cool', cool);
    }

    function setFrameFromProgress(progress) {
      const p = Math.min(1, Math.max(0, progress));
      currentProgress = p;
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(p * TOTAL_FRAMES));
      const num = String(frameIndex + 1).padStart(3, '0');
      heroScrollFrameEl.src = FRAME_PATH + num + '.' + FRAME_EXT;
      updateHeroTitleGradient(p);
      updateHeroMeasure(p);
    }

    function scrubToProgress(t) {
      const p = Math.min(1, Math.max(0, t));
      pinHeroIfNeeded();
      virtualScroll = p * ANIMATION_SCROLL_RANGE;
      maxProgressReached = p;
      hasReachedEnd = p >= 0.999;
      setFrameFromProgress(p);
    }

    function updateHeroScrollFrame() {
      const past = scrollPastHeroPin();
      const scrollRange = Math.max(1, heroSection.offsetHeight || window.innerHeight);

      // Still in the intro-play section above the hero
      if (past < -1) {
        hasReachedEnd = false;
        maxProgressReached = 0;
        setFrameFromProgress(0);
        return;
      }

      // Pinned at hero top — virtual wheel scroll drives frames
      if (past <= 0) {
        hasReachedEnd = false;
        maxProgressReached = Math.max(maxProgressReached, virtualScroll / ANIMATION_SCROLL_RANGE);
        setFrameFromProgress(virtualScroll / ANIMATION_SCROLL_RANGE);
        return;
      }

      if (hasReachedEnd) {
        setFrameFromProgress(1);
        return;
      }

      const effectiveRange = scrollRange / SCROLL_SPEED_MULTIPLIER;

      if (past >= effectiveRange) {
        hasReachedEnd = true;
        maxProgressReached = 1;
        setFrameFromProgress(1);
        return;
      }

      const progress = past / effectiveRange;
      maxProgressReached = Math.max(maxProgressReached, progress);
      virtualScroll = ANIMATION_SCROLL_RANGE;
      setFrameFromProgress(maxProgressReached);
    }

    /* When hero is pinned under the header, first ANIMATION_SCROLL_RANGE only drives frames */
    heroSection.addEventListener('wheel', (e) => {
      if (!isHeroPinned() && heroSection.getBoundingClientRect().top > 2) return;

      const top = heroSection.getBoundingClientRect().top;
      // Hero not yet at top (still scrolling through intro)
      if (top > 2) return;

      const wheelStep = Math.abs(e.deltaY) * FRAME_SCROLL_SPEED;
      if (e.deltaY > 0) {
        if (virtualScroll < ANIMATION_SCROLL_RANGE && top >= -2) {
          e.preventDefault();
          virtualScroll = Math.min(ANIMATION_SCROLL_RANGE, virtualScroll + wheelStep);
          updateHeroScrollFrame();
        }
      } else {
        if (virtualScroll > 0 && scrollPastHeroPin() <= 0) {
          e.preventDefault();
          virtualScroll = Math.max(0, virtualScroll - wheelStep);
          hasReachedEnd = false;
          updateHeroScrollFrame();
        }
      }
    }, { passive: false, signal });

    // Drag left/bottom rails to scrub frame progress
    if (measureRoot) {
      let dragging = false;
      let dragAxis = 'y';
      const scrubFromPointer = (e) => {
        const rect = measureRoot.getBoundingClientRect();
        if (dragAxis === 'x') {
          scrubToProgress((e.clientX - rect.left) / Math.max(1, rect.width));
        } else {
          scrubToProgress((e.clientY - rect.top) / Math.max(1, rect.height));
        }
      };
      measureRoot.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.hm-lbl')) return;
        const rail = e.target.closest('.hm-rail');
        if (!rail) return;
        dragging = true;
        dragAxis = rail.classList.contains('hm-rail-h') ? 'x' : 'y';
        measureRoot.setPointerCapture?.(e.pointerId);
        scrubFromPointer(e);
        e.preventDefault();
      }, { signal });
      measureRoot.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        scrubFromPointer(e);
      }, { signal });
      const endDrag = () => { dragging = false; };
      measureRoot.addEventListener('pointerup', endDrag, { signal });
      measureRoot.addEventListener('pointercancel', endDrag, { signal });
    }

    let heroTicking = false;
    window.addEventListener('scroll', () => {
      if (!heroTicking) {
        requestAnimationFrame(() => {
          if (scrollPastHeroPin() <= 0) {
            virtualScroll = Math.min(virtualScroll, ANIMATION_SCROLL_RANGE);
          } else {
            virtualScroll = ANIMATION_SCROLL_RANGE;
          }
          updateHeroScrollFrame();
          heroTicking = false;
        });
        heroTicking = true;
      }
    }, { passive: true, signal });

    window.addEventListener('resize', function() { updateHeroScrollFrame(); }, { signal });
    buildHeroMeasure();
    updateHeroScrollFrame();
  }

  /** Hero intro: slow clockwise drift + drag/touch to rotate (re-init after SPA swap) */
  let heroIntroCubesAbort = null;
  let heroIntroCubesRaf = null;
  let heroIntroCubesAlive = false;

  function disposeHeroIntroCubes() {
    heroIntroCubesAlive = false;
    if (heroIntroCubesRaf !== null) {
      cancelAnimationFrame(heroIntroCubesRaf);
      heroIntroCubesRaf = null;
    }
    if (heroIntroCubesAbort) {
      heroIntroCubesAbort.abort();
      heroIntroCubesAbort = null;
    }
  }

  function initHeroIntroCubes() {
    disposeHeroIntroCubes();

    const roots = document.querySelectorAll('.hero-intro-cube');
    if (!roots.length) return;

    heroIntroCubesAbort = new AbortController();
    const { signal } = heroIntroCubesAbort;
    const ROT_Y = 0.42;
    const ROT_X = 0.26;
    const CLAMP_X = 34;
    /* ~52s per full clockwise turn; zero when user prefers reduced motion */
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DRIFT_DEG_PER_MS = reduceMotion ? 0 : 360 / 52000;

    const states = [];

    roots.forEach((root) => {
      const axis = root.querySelector('.hero-intro-cube__axis');
      if (!axis) return;

      root.classList.add('hero-intro-cube--interactive');

      const s = {
        axis,
        rotY: 0,
        rotX: 0,
        dragging: false,
        lastX: 0,
        lastY: 0
      };
      states.push(s);

      root.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        s.dragging = true;
        s.lastX = e.clientX;
        s.lastY = e.clientY;
        try {
          root.setPointerCapture(e.pointerId);
        } catch (_) { /* ignore */ }
      }, { signal });

      root.addEventListener('pointermove', (e) => {
        if (!s.dragging) return;
        const dx = e.clientX - s.lastX;
        const dy = e.clientY - s.lastY;
        s.lastX = e.clientX;
        s.lastY = e.clientY;
        s.rotY += dx * ROT_Y;
        s.rotX -= dy * ROT_X;
        s.rotX = Math.max(-CLAMP_X, Math.min(CLAMP_X, s.rotX));
      }, { signal });

      function endDrag(e) {
        s.dragging = false;
        if (e && e.pointerId != null) {
          try {
            root.releasePointerCapture(e.pointerId);
          } catch (_) { /* ignore */ }
        }
      }

      root.addEventListener('pointerup', endDrag, { signal });
      root.addEventListener('pointercancel', endDrag, { signal });
      root.addEventListener('lostpointercapture', () => { s.dragging = false; }, { signal });
    });

    let lastFrame = performance.now();
    heroIntroCubesAlive = true;

    function tick(now) {
      if (!heroIntroCubesAlive) return;
      const dt = Math.min(48, now - lastFrame);
      lastFrame = now;
      for (let i = 0; i < states.length; i++) {
        const s = states[i];
        if (!s.dragging && DRIFT_DEG_PER_MS > 0) {
          s.rotY += DRIFT_DEG_PER_MS * dt;
        }
        s.axis.style.transform = `rotateX(${s.rotX.toFixed(2)}deg) rotateY(${s.rotY.toFixed(2)}deg)`;
      }
      if (heroIntroCubesAlive) {
        heroIntroCubesRaf = requestAnimationFrame(tick);
      }
    }

    heroIntroCubesRaf = requestAnimationFrame(tick);
  }

  initHeroScrollFrames();
  initHeroIntroCubes();

  /**
   * Parallax background: subtle move on scroll
   */
  const bgParallax = document.getElementById('bgParallax');
  if (bgParallax) {
    let ticking = false;
    function updateBgParallax() {
      const y = window.scrollY;
      const rate = 0.15;
      bgParallax.style.transform = `translateY(${y * rate}px)`;
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateBgParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * SPA-style nav: keep header + icons, only swap main content (no full page reload)
   */
  const appContent = document.getElementById('app-content');
  const SPA_PAGES = ['index.html', 'about.html', 'contact.html', 'interactive3d.html'];

  /** SPA: load spatial-maker assets when entering INTERACTIVE 3D */
  function syncSpatialMakerHead(doc) {
    const linkId = 'spatialMakerStyles';
    const mapId = 'spatialMakerImportMap';
    const needsMaker = !!doc.getElementById('spatial-maker');

    doc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (!href.includes('spatial-maker.css')) return;
      if (!document.getElementById(linkId)) {
        const el = document.createElement('link');
        el.id = linkId;
        el.rel = 'stylesheet';
        el.href = href;
        el.setAttribute('data-spa-managed', 'true');
        document.head.appendChild(el);
      }
    });

    const incomingMap = doc.querySelector('script[type="importmap"]');
    const existingMap = document.getElementById(mapId);
    if (needsMaker && incomingMap) {
      if (!existingMap) {
        const clone = incomingMap.cloneNode(true);
        clone.id = mapId;
        clone.setAttribute('data-spa-managed', 'true');
        document.head.appendChild(clone);
      }
    } else if (existingMap && existingMap.getAttribute('data-spa-managed') === 'true') {
      existingMap.remove();
    }

    if (!needsMaker) {
      const styleEl = document.getElementById(linkId);
      if (styleEl) styleEl.remove();
    }
  }

  let spatialMakerModulePromise = null;

  function disposeSpatialMaker() {
    if (window._spatialMakerCleanup) {
      window._spatialMakerCleanup();
      window._spatialMakerCleanup = null;
    }
  }

  async function initSpatialMaker() {
    if (!document.getElementById('spatial-maker')) return;
    disposeSpatialMaker();
    if (!spatialMakerModulePromise) {
      spatialMakerModulePromise = import('./spatial-maker.js');
    }
    const mod = await spatialMakerModulePromise;
    window._spatialMakerCleanup = mod.init();
  }

  /**
   * About page: .fade-up sections (inline script does not run after SPA innerHTML swap)
   */
  function initAboutFadeUpObserver() {
    const nodes = document.querySelectorAll("#aboutPageInner .fade-up");
    if (!nodes.length) return;
    if (window._aboutFadeIo) {
      window._aboutFadeIo.disconnect();
      window._aboutFadeIo = null;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 10% 0px" }
    );
    nodes.forEach((el) => {
      observer.observe(el);
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 32) {
        el.classList.add("visible");
      }
    });
    window._aboutFadeIo = observer;
  }

  /**
   * Index gallery: light / line ambient animations run while section is in view
   */
  function initGalleryAmbientObserver() {
    const gallerySection = document.querySelector('#gallery');
    if (!gallerySection || !gallerySection.querySelector('.gallery-ambient')) return;
    if (gallerySection._ambientIo) {
      gallerySection._ambientIo.disconnect();
      gallerySection._ambientIo = null;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          gallerySection.classList.toggle('gallery--in-view', entry.isIntersecting);
        });
      },
      { root: null, rootMargin: '0px 0px -5% 0px', threshold: [0, 0.06, 0.15] }
    );
    io.observe(gallerySection);
    gallerySection._ambientIo = io;
  }

  /**
   * Index gallery cards: cursor tracking for fluid parallax + light-follow hover.
   * Writes --px/--py (cursor position in %) and --mx/--my (-1..1) CSS vars per card.
   */
  function initGalleryCardMotion() {
    const gallerySection = document.querySelector('#gallery');
    if (!gallerySection || gallerySection._cardMotionBound) return;
    gallerySection._cardMotionBound = true;

    let raf = 0;
    let pendingCard = null;
    let pendingX = 0;
    let pendingY = 0;

    const apply = () => {
      raf = 0;
      if (!pendingCard) return;
      const rect = pendingCard.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const px = Math.min(100, Math.max(0, ((pendingX - rect.left) / rect.width) * 100));
      const py = Math.min(100, Math.max(0, ((pendingY - rect.top) / rect.height) * 100));
      pendingCard.style.setProperty('--px', px.toFixed(2) + '%');
      pendingCard.style.setProperty('--py', py.toFixed(2) + '%');
      pendingCard.style.setProperty('--mx', (px / 50 - 1).toFixed(3));
      pendingCard.style.setProperty('--my', (py / 50 - 1).toFixed(3));
    };

    gallerySection.addEventListener('pointermove', (e) => {
      const card = e.target.closest && e.target.closest('a.gallery-item');
      if (!card) return;
      pendingCard = card;
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    });

    gallerySection.addEventListener('pointerout', (e) => {
      const card = e.target.closest && e.target.closest('a.gallery-item');
      if (!card || card.contains(e.relatedTarget)) return;
      if (pendingCard === card) pendingCard = null;
      card.style.setProperty('--px', '50%');
      card.style.setProperty('--py', '50%');
      card.style.setProperty('--mx', '0');
      card.style.setProperty('--my', '0');
    });
  }

  /**
   * Index gallery: smooth flowing aurora background behind the cards (WebGL).
   * Deep purple / magenta / crimson tones with soft diagonal light streaks.
   * Renders at low resolution, only animates while the section is in view.
   */
  function initGalleryAurora() {
    const gallerySection = document.querySelector('#gallery');
    const canvas = gallerySection && gallerySection.querySelector('.gallery-ambient__canvas');
    if (!canvas || canvas._auroraInit) return;
    canvas._auroraInit = true;

    const ambient = canvas.parentElement;
    let gl = null;
    try {
      gl = canvas.getContext('webgl', {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
        powerPreference: 'low-power'
      });
    } catch {
      /* fall through to CSS fallback */
    }
    if (!gl) {
      canvas.style.display = 'none';
      ambient.classList.add('gallery-ambient--fallback');
      return;
    }

    const vsSrc = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}';
    const fsSrc = [
      'precision mediump float;',
      'uniform vec2 uRes;',
      'uniform float uTime;',
      'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
      'float noise(vec2 p){',
      '  vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.0-2.0*f);',
      '  return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),u.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x),u.y);',
      '}',
      'float fbm(vec2 p){',
      '  float v=0.0;float a=0.5;',
      '  for(int k=0;k<4;k++){v+=a*noise(p);p*=2.03;a*=0.5;}',
      '  return v;',
      '}',
      'void main(){',
      '  vec2 uv=gl_FragCoord.xy/uRes;',
      '  vec2 p=uv*vec2(uRes.x/uRes.y,1.0)*1.5;',
      '  float t=uTime*0.045;',
      // domain-warped fbm drives the fluid color flow
      '  vec2 q=vec2(fbm(p+vec2(0.0,t)),fbm(p+vec2(5.2,t*1.3)));',
      '  float n=fbm(p+2.2*q+vec2(t*0.7,-t*0.4));',
      '  vec3 deep=vec3(0.015,0.025,0.075);',
      '  vec3 indigo=vec3(0.06,0.10,0.32);',
      '  vec3 blue=vec3(0.10,0.28,0.62);',
      '  vec3 violet=vec3(0.24,0.14,0.52);',
      '  vec3 darkPurple=vec3(0.14,0.06,0.30);',
      '  vec3 col=mix(deep,darkPurple,smoothstep(0.15,0.55,n));',
      '  col=mix(col,indigo,smoothstep(0.40,0.75,q.x)*0.9);',
      '  col=mix(col,blue,smoothstep(0.45,0.85,q.y)*0.75);',
      '  col=mix(col,violet,smoothstep(0.62,0.95,n)*0.8);',
      // soft diagonal light streaks drifting through the field
      '  float axis=dot(uv-0.5,vec2(0.7071,0.7071));',
      '  float streaks=0.5+0.5*sin(axis*9.0+n*4.0+t*1.4);',
      '  col+=vec3(0.03,0.07,0.13)*pow(streaks,3.0);',
      // vignette so the field melts into the page's black background
      '  float vig=smoothstep(0.92,0.30,distance(uv,vec2(0.5,0.45)));',
      '  col*=mix(0.25,1.0,vig);',
      '  gl_FragColor=vec4(col,1.0);',
      '}'
    ].join('\n');

    function compile(type, src) {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    }

    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) {
      canvas.style.display = 'none';
      ambient.classList.add('gallery-ambient--fallback');
      return;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const locA = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(locA);
    gl.vertexAttribPointer(locA, 2, gl.FLOAT, false, 0, 0);

    const locRes = gl.getUniformLocation(prog, 'uRes');
    const locTime = gl.getUniformLocation(prog, 'uTime');

    // Low internal resolution keeps the gradient silky and the GPU cost tiny
    function resize() {
      const w = Math.max(1, Math.min(960, Math.round(canvas.clientWidth * 0.4)));
      const h = Math.max(1, Math.round(w * (canvas.clientHeight / Math.max(1, canvas.clientWidth))));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    const t0 = performance.now() - Math.random() * 60000;

    function draw() {
      resize();
      gl.uniform2f(locRes, canvas.width, canvas.height);
      gl.uniform1f(locTime, (performance.now() - t0) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      requestAnimationFrame(draw);
      return;
    }

    let raf = 0;
    let inView = false;

    function loop() {
      if (!canvas.isConnected) {
        raf = 0;
        io.disconnect();
        return;
      }
      draw();
      raf = inView ? requestAnimationFrame(loop) : 0;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inView = entry.isIntersecting;
          if (inView && !raf) raf = requestAnimationFrame(loop);
        });
      },
      { rootMargin: '10% 0px 10% 0px' }
    );
    io.observe(gallerySection);
  }

  /**
   * Nested gallery project view: open card content inside #gallery without a full page reload.
   */
  let galleryDetailSwiper = null;
  let galleryDetailOpen = false;
  let galleryDetailLoading = false;

  function isGalleryDetailPath(path) {
    const name = (path || '').replace(/^.*\//, '');
    return /^gallery\d+[a-z]?\.html$/i.test(name);
  }

  function disposeGalleryDetailSwiper() {
    if (!galleryDetailSwiper) return;
    try {
      galleryDetailSwiper.destroy(true, true);
    } catch {
      /* ignore */
    }
    galleryDetailSwiper = null;
  }

  function disposeGalleryDetailNest() {
    disposeGalleryDetailSwiper();
    const gallery = document.getElementById('gallery');
    const nest = document.getElementById('gallery-detail-nest');
    const body = document.getElementById('gallery-detail-body');
    gallery?.classList.remove('is-detail-open');
    if (nest) {
      nest.setAttribute('hidden', '');
      nest.setAttribute('aria-hidden', 'true');
      nest.classList.remove('is-loading');
    }
    if (body) body.innerHTML = '';
    galleryDetailOpen = false;
    galleryDetailLoading = false;
  }

  function initGalleryDetailSwiper(root) {
    disposeGalleryDetailSwiper();
    const el = root?.querySelector('.slides-1');
    if (!el || typeof Swiper === 'undefined') return;
    galleryDetailSwiper = new Swiper(el, {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 30000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: el.querySelector('.swiper-pagination') || root.querySelector('.swiper-pagination'),
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: root.querySelector('.swiper-button-next'),
        prevEl: root.querySelector('.swiper-button-prev'),
      }
    });
  }

  function closeGalleryDetailNest(opts = {}) {
    const pushHistory = opts.pushHistory !== false;
    const gallery = document.getElementById('gallery');
    if (!gallery || !galleryDetailOpen) {
      disposeGalleryDetailNest();
      return;
    }
    disposeGalleryDetailNest();
    if (pushHistory) {
      const indexUrl = new URL('index.html', window.location.href);
      history.pushState({ path: indexUrl.pathname + '#gallery', galleryNest: false }, '', indexUrl.pathname + '#gallery');
    }
    const titleEl = document.querySelector('head title');
    if (titleEl && !titleEl.dataset.defaultTitle) {
      /* keep current if already on index */
    }
    requestAnimationFrame(() => {
      gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  async function openGalleryDetailNest(href, opts = {}) {
    const pushHistory = opts.pushHistory !== false;
    const gallery = document.getElementById('gallery');
    const nest = document.getElementById('gallery-detail-nest');
    const body = document.getElementById('gallery-detail-body');
    if (!appContent || !gallery || !nest || !body) {
      window.location.href = href;
      return;
    }
    if (galleryDetailLoading) return;
    galleryDetailLoading = true;

    gallery.classList.add('is-detail-open');
    nest.removeAttribute('hidden');
    nest.setAttribute('aria-hidden', 'false');
    nest.classList.add('is-loading');
    disposeGalleryDetailSwiper();
    body.innerHTML = '<p class="gallery-detail-nest__loading">Loading project…</p>';
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try {
      const res = await fetch(href, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
      if (!res.ok) throw new Error(String(res.status));
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const main = doc.getElementById('main');
      if (!main) throw new Error('missing main');

      const pageHeader = main.querySelector('.page-header');
      const gallerySingle = main.querySelector('#gallery-single');
      body.innerHTML = '';
      if (pageHeader) body.appendChild(document.importNode(pageHeader, true));
      if (gallerySingle) body.appendChild(document.importNode(gallerySingle, true));
      if (!body.children.length) throw new Error('empty detail');

      nest.classList.remove('is-loading');
      initGalleryDetailSwiper(body);
      if (doc.title) document.title = doc.title;
      galleryDetailOpen = true;

      if (pushHistory) {
        const u = new URL(href, window.location.href);
        history.pushState({ path: u.pathname, galleryNest: true }, '', u.pathname);
      }
    } catch {
      disposeGalleryDetailNest();
      window.location.href = href;
      return;
    } finally {
      galleryDetailLoading = false;
    }
  }

  document.addEventListener('click', (e) => {
    if (!document.getElementById('app-content')) return;

    const card = e.target.closest('#gallery a.gallery-item');
    if (card) {
      const href = card.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      if (!isGalleryDetailPath(getPath(href))) return;
      e.preventDefault();
      openGalleryDetailNest(new URL(href, window.location.href).href);
      return;
    }

    if (e.target.closest('#gallery-detail-close')) {
      e.preventDefault();
      closeGalleryDetailNest({ pushHistory: true });
      return;
    }

    const nestBack = e.target.closest('#gallery-detail-nest .gallery-back-link');
    if (nestBack) {
      e.preventDefault();
      closeGalleryDetailNest({ pushHistory: true });
    }
  });

  function getPath(href) {
    if (!href) return '';
    const path = href.split('?')[0].split('#')[0];
    return path.endsWith('/') ? path + 'index.html' : path;
  }

  function isSpaPage(path) {
    const name = path.replace(/^.*\//, '');
    return SPA_PAGES.includes(name) || (path === '' || path === '/' || path.endsWith('/'));
  }

  function setActiveNav(href) {
    const navPill = document.querySelector('.navbar-pill');
    if (!navPill) return;
    const path = getPath(href);
    const name = path.replace(/^.*\//, '') || 'index.html';
    navPill.querySelectorAll('a[href]').forEach(a => {
      const aPath = getPath(a.getAttribute('href'));
      const aName = aPath.replace(/^.*\//, '') || 'index.html';
      a.classList.toggle('active', aName === name);
    });
    const active = navPill.querySelector('a.active');
    if (active && window.positionPillIndicator) window.positionPillIndicator(active);
  }

  /**
   * SPA helper: bring page-scoped styles from fetched document head.
   * Needed for about.html because SPA swaps #app-content only.
   */
  function syncPageScopedStyles(doc) {
    const styleId = 'aboutPageStyles';
    const incoming = doc.getElementById(styleId);
    const existing = document.getElementById(styleId);

    if (incoming) {
      if (!existing || existing.textContent !== incoming.textContent) {
        const clone = incoming.cloneNode(true);
        clone.setAttribute('data-spa-managed', 'true');
        if (existing) existing.replaceWith(clone);
        else document.head.appendChild(clone);
      }
      return;
    }

    if (existing && existing.getAttribute('data-spa-managed') === 'true') {
      existing.remove();
    }
  }

  // Preload mount module only on Home
  if (pageBasename(window.location.pathname) === 'index.html') {
    loadIntroPlayMount();
  }

  function loadPage(href, pushState = true) {
    if (!appContent) return;
    const url = new URL(href, window.location.href);
    const path = getPath(url.pathname);
    if (!isSpaPage(path)) {
      window.location.href = href;
      return;
    }

    const nextBase = path.replace(/^.*\//, '') || 'index.html';
    // Never SPA into Home — full document load is required for a reliable WebGL intro
    if (nextBase === 'index.html') {
      navigateHomeHard();
      return;
    }

    const doFetch = () => {
      fetch(url.href, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(async (html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const newContent = doc.getElementById('app-content');
          if (!newContent) {
            pageTxClear();
            window.location.href = href;
            return;
          }
          disposeHeroScrollFrames();
          disposeHeroIntroCubes();
          disposeSpatialMaker();
          disposeGalleryDetailNest();
          await syncIntroPlayForHome(false);
          syncPageScopedStyles(doc);
          syncSpatialMakerHead(doc);
          appContent.innerHTML = newContent.innerHTML;
          if (doc.title) document.title = doc.title;
          setActiveNav(href);
          if (path.includes('interactive3d')) document.body.classList.add('page-interactive3d');
          else document.body.classList.remove('page-interactive3d');
          if (nextBase === 'about.html') document.body.classList.add('page-about');
          else document.body.classList.remove('page-about');
          window.scrollTo(0, 0);
          if (pushState) history.pushState({ path: href }, '', href);
          if (typeof AOS !== 'undefined') AOS.refresh();
          initHeroScrollFrames();
          initHeroIntroCubes();
          initGalleryAmbientObserver();
          initGalleryCardMotion();
          initGalleryAurora();
          initAboutFadeUpObserver();
          initSpatialMaker();
          if (document.getElementById('intro-play')) {
            document.body.classList.add('page-home');
            requestAnimationFrame(() => ensureIntroPlayReady({ force: true }));
          }
          pageTxPlayEnter();
        })
        .catch(() => {
          pageTxClear();
          window.location.href = href;
        });
    };

    pageTxExitThen(doFetch);
  }

  if (appContent) {
    document.querySelectorAll('.navbar-pill a[href]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        if (href.startsWith('http') && !href.includes(window.location.host)) return;
        if (!isSpaPage(getPath(href))) return;
        const curName = getPath(window.location.pathname).replace(/^.*\//, '') || 'index.html';
        const nextName = getPath(href).replace(/^.*\//, '') || 'index.html';
        if (curName === nextName) {
          // Same page: Home still full-reloads so the WebGL intro always boots
          if (nextName === 'index.html') {
            navigateHomeHard(e);
          }
          return;
        }
        e.preventDefault();
        this.classList.add('active');
        document.querySelectorAll('.navbar-pill a.active').forEach(a => { if (a !== this) a.classList.remove('active'); });
        if (window.positionPillIndicator) window.positionPillIndicator(this);
        // Home includes WebGL intro — full reload boots it cleanly (avoids blank/flashy SPA remounts)
        if (nextName === 'index.html') {
          navigateHomeHard(e);
          return;
        }
        // Leaving Home must full-load so #intro-play (outside #app-content) is gone
        if (curName === 'index.html') {
          syncIntroPlayForHome(false);
          pageTxNavigateFull(new URL(href, window.location.href));
          return;
        }
        loadPage(new URL(href, window.location.href).href);
      });
    });

    window.addEventListener('popstate', (e) => {
      const pathNow = getPath(window.location.pathname);
      const nameNow = pathNow.replace(/^.*\//, '') || 'index.html';

      // Back/forward to Home always full-reloads so the play intro boots
      if (nameNow === 'index.html' && !window.location.hash) {
        window.location.reload();
        return;
      }

      if (e.state && e.state.galleryNest && isGalleryDetailPath(pathNow)) {
        if (document.getElementById('gallery-detail-nest')) {
          openGalleryDetailNest(window.location.href, { pushHistory: false });
          return;
        }
        navigateHomeHard();
        return;
      }

      if (galleryDetailOpen && (nameNow === 'index.html' || !isGalleryDetailPath(pathNow))) {
        closeGalleryDetailNest({ pushHistory: false });
        if (window.location.hash === '#gallery') {
          const g = document.getElementById('gallery');
          if (g) requestAnimationFrame(() => g.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        }
        if (nameNow === 'index.html' || window.location.hash) return;
      }

      if (e.state && e.state.path) loadPage(e.state.path, false);
      else loadPage(window.location.href, false);
    });
  }

  /**
   * Pill nav: sliding oval indicator
   */
  const navPill = document.querySelector('.navbar-pill');
  const navPillIndicator = document.getElementById('navPillIndicator');
  if (navPill && navPillIndicator) {
    function positionIndicator(el) {
      if (!el || !navPill) return;
      const navRect = navPill.getBoundingClientRect();
      const linkRect = el.getBoundingClientRect();
      navPillIndicator.style.left = (linkRect.left - navRect.left) + 'px';
      navPillIndicator.style.top = (linkRect.top - navRect.top) + 'px';
      navPillIndicator.style.width = linkRect.width + 'px';
      navPillIndicator.style.height = linkRect.height + 'px';
      navPillIndicator.style.opacity = '1';
    }
    window.positionPillIndicator = positionIndicator;

    const activeLink = navPill.querySelector('a.active');
    if (activeLink) positionIndicator(activeLink);

    window.addEventListener('resize', () => {
      const active = navPill.querySelector('a.active');
      if (active) positionIndicator(active);
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  const slides1 = document.querySelector('.slides-1');
  if (slides1) {
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 30000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  const slides3 = document.querySelector('.slides-3');
  if (slides3) {
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 30000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    if (typeof AOS === 'undefined') return;
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  initGalleryAmbientObserver();
  initGalleryCardMotion();
  initGalleryAurora();
  initAboutFadeUpObserver();
  initSpatialMaker();

  /* AOS early so inner pages can animate header → body; refresh after assets load */
  aos_init();
  window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') AOS.refresh();
  });

});