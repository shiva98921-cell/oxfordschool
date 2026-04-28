/* ============================================
   OXFORD INTERNATIONAL SCHOOL — Scripts
============================================ */

(function () {
  'use strict';

  // ---------- 1. Set current year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- 2. Sticky nav shadow on scroll ----------
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- 3. Mobile nav toggle ----------
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- 4. Reveal-on-scroll using IntersectionObserver ----------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0, 10);
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- 5. Animated counters ----------
  const counters = document.querySelectorAll('.stat__num[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => counterObs.observe(c));
  } else {
    counters.forEach((c) => animateCounter(c));
  }

  // ---------- 6. Image fallback to placeholder gradient ----------
  // Already handled via inline onerror in HTML; this adds a safety net
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function () {
      const parent = this.parentElement;
      if (parent && !parent.classList.contains('placeholder')) {
        parent.classList.add('placeholder');
        this.remove();
      }
    });
  });

  // ---------- 7. Smooth scroll offset for sticky nav ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

// ---------- 8. Toast helper ----------
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ---------- 9. Admission form submission ----------
function submitAdmission(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const parent = data.get('parent');
  const phone = data.get('phone');
  const child = data.get('child');
  const cls = data.get('class');
  const message = data.get('message') || '';

  // Build a WhatsApp message and open chat — works without a backend
  const text =
    `Hello Oxford International School! 👋%0A%0A` +
    `*Admission Enquiry*%0A` +
    `Parent's Name: ${encodeURIComponent(parent)}%0A` +
    `Mobile: ${encodeURIComponent(phone)}%0A` +
    `Child's Name: ${encodeURIComponent(child)}%0A` +
    `Class: ${encodeURIComponent(cls)}%0A` +
    (message ? `Message: ${encodeURIComponent(message)}%0A` : '') +
    `%0AKindly call me back with the admission details. Thank you!`;

  const waUrl = `https://wa.me/918077450903?text=${text}`;
  window.open(waUrl, '_blank');

  showToast('✓ Your registration is on its way via WhatsApp!');
  form.reset();
  return false;
}
