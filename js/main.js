/**
 * main.js — Shared functionality across all pages
 * Mobile menu + Scroll-reveal (IntersectionObserver)
 */

(function () {
  'use strict';

  // ── Mobile Menu ──────────────────────────────────────
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuCloseBtn = document.getElementById('menu-close');

  function openMenu() {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
    mobileMenu.classList.add('opacity-100');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuCloseBtn.focus();
  }

  function closeMenu() {
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    mobileMenu.classList.remove('opacity-100');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
  }

  menuToggle?.addEventListener('click', openMenu);
  menuCloseBtn?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu?.getAttribute('aria-hidden') === 'false') {
      closeMenu();
    }
  });

  // ── Scroll-reveal (fade-up) ──────────────────────────
  var fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    fadeObserver.observe(el);
  });
})();
