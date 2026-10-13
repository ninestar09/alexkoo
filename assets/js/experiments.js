export function init() {
      const root = document.getElementById('xp');
      if (!root) return function () {};
      const rows = Array.from(root.querySelectorAll('.xp-row'));
      const closeBtn = document.getElementById('xp-close');
      const nav = document.getElementById('xp-nav');
      const nextLabel = document.getElementById('xp-next-label');
      const dots = Array.from(nav.querySelectorAll('.xp-dots span'));
      const SQUEEZE_MS = 380;
      const EXPAND_MS = 900;
      let current = -1;
      let busy = false;

      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      const titleOf = (row) => row.dataset.name;

      function mountStage(row) {
        const src = row.dataset.src;
        const stage = row.querySelector('.xp-detail__stage');
        if (!src || stage.querySelector('iframe')) return;
        const frame = document.createElement('iframe');
        frame.allow = 'autoplay; fullscreen; xr-spatial-tracking';
        frame.title = titleOf(row);
        frame.addEventListener('load', () => {
          if (row.hasAttribute('data-strip-chrome')) {
            try {
              const d = frame.contentDocument;
              const s = d.createElement('style');
              s.textContent = '#header,#preloader,.sm-page-header{display:none!important}';
              d.head.appendChild(s);
            } catch (e) { /* cross-origin (file://) — chrome stays visible */ }
          }
          frame.classList.add('is-loaded');
          stage.classList.add('is-ready');
        });
        frame.src = src;
        stage.appendChild(frame);
      }

      // Unmount so only one WebGL experience runs at a time
      function unmountStage(row) {
        const stage = row.querySelector('.xp-detail__stage');
        const frame = stage.querySelector('iframe');
        if (!frame) return;
        frame.remove();
        stage.classList.remove('is-ready');
      }

      function syncChrome(i) {
        const row = rows[i];
        const detail = row.querySelector('.xp-detail');
        detail.appendChild(closeBtn);
        detail.appendChild(nav);
        closeBtn.hidden = false;
        nav.hidden = false;
        nav.style.setProperty('--accent', getComputedStyle(row).getPropertyValue('--accent'));
        dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
        nextLabel.textContent = 'NEXT · ' + titleOf(rows[(i + 1) % rows.length]).toUpperCase();
        syncPaused();
      }

      async function open(i) {
        if (busy || i === current) return;
        busy = true;
        const row = rows[i];
        row.classList.add('is-squeeze');
        await wait(SQUEEZE_MS);
        row.classList.add('is-open');
        root.classList.add('has-open');
        current = i;
        syncChrome(i);
        await wait(EXPAND_MS * 0.7);
        row.classList.remove('is-squeeze');
        await wait(SQUEEZE_MS);
        mountStage(row);
        busy = false;
      }

      async function goTo(i) {
        if (busy || i === current) return;
        if (current < 0) return open(i);
        busy = true;
        const from = rows[current];
        const to = rows[i];

        from.classList.add('is-squeeze');
        await wait(SQUEEZE_MS);

        unmountStage(from);
        to.classList.add('is-squeeze');
        to.classList.add('is-open');
        from.classList.add('is-leaving');
        from.classList.remove('is-open');
        current = i;
        syncChrome(i);
        await wait(EXPAND_MS * 0.7);

        from.classList.remove('is-squeeze');
        from.classList.remove('is-leaving');
        to.classList.remove('is-squeeze');
        await wait(SQUEEZE_MS);
        mountStage(to);
        busy = false;
      }

      async function close() {
        if (busy || current < 0) return;
        busy = true;
        const row = rows[current];
        row.classList.add('is-squeeze');
        await wait(SQUEEZE_MS);
        unmountStage(row);
        closeBtn.hidden = true;
        nav.hidden = true;
        row.classList.remove('is-open');
        root.classList.remove('has-open');
        current = -1;
        syncPaused();
        await wait(EXPAND_MS * 0.7);
        row.classList.remove('is-squeeze');
        await wait(SQUEEZE_MS);
        busy = false;
      }

      // ---------- Generated art ----------
      const rand = (a, b) => a + Math.random() * (b - a);

      root.querySelectorAll('.wave[data-bars]').forEach((w) => {
        const n = Number(w.dataset.bars);
        for (let k = 0; k < n; k++) {
          const i = document.createElement('i');
          const env = Math.sin((k / (n - 1)) * Math.PI);
          i.style.height = (25 + env * 75) + '%';
          i.style.animationDuration = rand(0.5, 1.2) + 's';
          i.style.animationDelay = -rand(0, 1) + 's';
          w.appendChild(i);
        }
      });

      const dataHues = ['#5b6cff', '#8a5bff', '#c35bff', '#ff4fa3', '#7f9bff', '#b9a6ff'];
      root.querySelectorAll('.bars[data-bars]').forEach((b) => {
        const n = Number(b.dataset.bars);
        for (let k = 0; k < n; k++) {
          const i = document.createElement('i');
          const c = dataHues[Math.floor(Math.random() * dataHues.length)];
          i.style.height = rand(20, 100) + '%';
          i.style.background = `linear-gradient(180deg, ${c}, ${c}22)`;
          i.style.animationDuration = rand(2.5, 5) + 's';
          i.style.animationDelay = -rand(0, 5) + 's';
          b.appendChild(i);
        }
      });

      root.querySelectorAll('[data-drops]').forEach((art) => {
        const n = Number(art.dataset.drops);
        for (let k = 0; k < n; k++) {
          const d = document.createElement('span');
          d.className = 'drop';
          d.style.left = rand(8, 95) + '%';
          d.style.animationDuration = rand(1.4, 2.6) + 's';
          d.style.animationDelay = -rand(0, 2.6) + 's';
          art.appendChild(d);
        }
      });

      // 3DGS: a rotating cloud of soft gaussian splats (hill + tower)
      (function splats() {
        const art = root.querySelector('.art-gs');
        const canvas = art.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const row = art.closest('.xp-row');
        const pts = [];
        const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
        for (let k = 0; k < 520; k++) {
          const x = gauss() * 1.2, z = gauss() * 1.2;
          const y = -Math.exp(-(x * x + z * z) * 1.4) * 0.9 + 0.55 + rand(-0.04, 0.04);
          const g = Math.floor(rand(120, 175));
          pts.push({ x, y, z, r: rand(4, 11), c: Math.random() < 0.25 ? `rgba(90,130,${g + 40},` : `rgba(${g - 70},${g},${g - 60},` });
        }
        for (let k = 0; k < 220; k++) {
          const top = Math.random() < 0.35;
          const x = rand(-0.28, 0.28) * (top ? 1.5 : 1), z = rand(-0.28, 0.28) * (top ? 1.5 : 1);
          const y = top ? rand(-0.95, -0.82) : rand(-0.82, -0.3);
          pts.push({ x, y, z, r: rand(3, 8), c: top ? 'rgba(70,60,70,' : `rgba(${Math.floor(rand(160, 200))},${Math.floor(rand(70, 100))},60,` });
        }
        let w = 0, h = 0, dpr = 1, t = 0;
        function resize() {
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          w = canvas.clientWidth; h = canvas.clientHeight;
          canvas.width = w * dpr; canvas.height = h * dpr;
        }
        new ResizeObserver(resize).observe(canvas);
        resize();
        let raf = 0;
        function frame() {
          raf = requestAnimationFrame(frame);
          if (row.classList.contains('is-paused') || !w) return;
          t += 0.004;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.clearRect(0, 0, w, h);
          const s = h * 0.56, cx = w * 0.55, cy = h * 0.58;
          const cos = Math.cos(t), sin = Math.sin(t);
          const proj = pts.map((p) => {
            const x = p.x * cos - p.z * sin;
            const z = p.x * sin + p.z * cos;
            const k = 2.6 / (2.6 + z);
            return { sx: cx + x * s * k, sy: cy + (p.y + z * 0.18) * s * k, r: p.r * k * (h / 220), z, c: p.c };
          }).sort((a, b) => b.z - a.z);
          for (const p of proj) {
            const grd = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, p.r);
            grd.addColorStop(0, p.c + '0.55)');
            grd.addColorStop(1, p.c + '0)');
            ctx.fillStyle = grd;
            ctx.fillRect(p.sx - p.r, p.sy - p.r, p.r * 2, p.r * 2);
          }
        }
        frame();
        root._xpStopSplats = () => cancelAnimationFrame(raf);
      })();

      let playHandle = null;
      let playMounting = false;
      let shapeName = 'cube';

      function disposePlay() {
        playMounting = false;
        if (playHandle && typeof playHandle.dispose === 'function') {
          try { playHandle.dispose(); } catch (e) {}
        }
        playHandle = null;
        const stage = root.querySelector('#xp-play');
        if (stage) stage.innerHTML = '';
      }

      function mountPlay() {
        const stage = root.querySelector('#xp-play');
        if (!stage || playHandle || playMounting) return;
        playMounting = true;
        if (!document.querySelector('link[href*="blackbox-hero.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'assets/css/blackbox-hero.css?v=intro7';
          document.head.appendChild(link);
        }
        import('./blackbox-hero.js?v=shape2').then((mod) => {
          playMounting = false;
          if (!stage.isConnected || playHandle) return;
          const dataRow = stage.closest('.xp-row');
          if (dataRow && dataRow.classList.contains('is-paused')) return;
          playHandle = mod.mountBlackboxHero(stage, {
            title: '',
            subtitle: '',
            subtitleLines: [],
            logoOpacity: 0,
            hudOpacity: 0,
            popups: false,
            dynamicColor: true,
            colorSpeed: 0.28,
            colorAmp: 0.9,
            iridescence: 1.25,
            iridSpread: 1,
            glint: 0.48,
            shape: shapeName,
          });
        }).catch(() => { playMounting = false; });
      }

      function syncPlay() {
        const dataRow = root.querySelector('.xp-row[data-theme="data"]');
        if (!dataRow || dataRow.classList.contains('is-paused')) disposePlay();
        else mountPlay();
      }

      function syncPaused() {
        rows.forEach((r, k) => r.classList.toggle('is-paused', current >= 0 && k !== current));
        syncPlay();
      }

      rows.forEach((row, i) => {
        row.querySelectorAll('[data-xp-open]').forEach((el) => {
          el.addEventListener('click', () => { if (current < 0) open(i); });
        });
        row.querySelector('[data-xp-peek]').addEventListener('click', () => goTo(i));
      });

      root.querySelectorAll('[data-shape]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          shapeName = btn.dataset.shape;
          root.querySelectorAll('[data-shape]').forEach((b) => b.classList.toggle('is-on', b === btn));
          if (playHandle && playHandle.setShape) playHandle.setShape(shapeName);
        });
      });

      closeBtn.addEventListener('click', close);
      nav.querySelectorAll('[data-xp-step]').forEach((b) => {
        b.addEventListener('click', () => {
          const n = rows.length;
          goTo((current + Number(b.dataset.xpStep) + n) % n);
        });
      });

      function onKey(e) {
        if (!root.isConnected || current < 0) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo((current + 1) % rows.length);
        if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo((current - 1 + rows.length) % rows.length);
      }
      document.addEventListener('keydown', onKey);
      syncPlay();

      return function dispose() {
        document.removeEventListener('keydown', onKey);
        if (root._xpStopSplats) root._xpStopSplats();
        disposePlay();
        rows.forEach(unmountStage);
      };
}
