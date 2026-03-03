/**
* Template Name: PhotoFolio - v1.1.1
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

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

  function loadPage(href, pushState = true) {
    if (!appContent) return;
    const url = new URL(href, window.location.href);
    const path = getPath(url.pathname);
    if (!isSpaPage(path)) {
      window.location.href = href;
      return;
    }
    fetch(url.href, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.getElementById('app-content');
        if (!newContent) { window.location.href = href; return; }
        appContent.innerHTML = newContent.innerHTML;
        if (doc.title) document.title = doc.title;
        setActiveNav(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (pushState) history.pushState({ path: href }, '', href);
        if (typeof AOS !== 'undefined') AOS.refresh();
      })
      .catch(() => { window.location.href = href; });
  }

  if (appContent) {
    document.querySelectorAll('.navbar-pill a[href]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        if (href.startsWith('http') && !href.includes(window.location.host)) return;
        if (!isSpaPage(getPath(href))) return;
        e.preventDefault();
        this.classList.add('active');
        document.querySelectorAll('.navbar-pill a.active').forEach(a => { if (a !== this) a.classList.remove('active'); });
        if (window.positionPillIndicator) window.positionPillIndicator(this);
        loadPage(new URL(href, window.location.href).href);
      });
    });

    window.addEventListener('popstate', (e) => {
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
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});