// Main JS for the Balasooriya Pvt Hospital website.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out. This form is not yet connected to a backend — a real submission system will be added later.');
      form.reset();
    });
  }

  initIntroVideo();
  initMobileNav();
  initScrollReveal();
});

// Fades sections in as they scroll into view.
//
// The .js-motion class is what switches the reveal CSS on. It is added here
// rather than sitting in the HTML so that if this script fails to load or
// throws, the class never lands and every section stays visible — content
// hidden by CSS that JS was supposed to reveal is a page nobody can read.
//
// Anyone who has asked their system for reduced motion is skipped entirely:
// no class, no observer, everything simply visible.
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) return;

  // The emergency bar and header are deliberately excluded — urgent contact
  // details must never wait on an animation.
  const targets = document.querySelectorAll('.section, .facts');
  if (!targets.length) return;

  document.documentElement.classList.add('js-motion');

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      reveal(entry.target);
      observer.unobserve(entry.target);   // reveal once, not on every pass
    });
  }, {
    // Trigger slightly before the element reaches the viewport edge so the
    // motion finishes about when it is properly in view.
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.05
  });

  targets.forEach((el) => observer.observe(el));

  // Safety net. IntersectionObserver only runs while the page is actually
  // rendering — in a background tab, a non-compositing embed, or a headless
  // browser it may never fire, and requestAnimationFrame is paused by the
  // same pipeline so it is no use as a backup. A plain timer is not, so if
  // anything is still hidden shortly after load it is shown unconditionally.
  //
  // Worst case someone misses a fade. The alternative failure — a page of
  // permanently invisible content — is not acceptable on a hospital site.
  window.setTimeout(() => {
    targets.forEach((el) => {
      if (el.classList.contains('is-visible')) return;
      reveal(el);
      observer.unobserve(el);
    });
  }, 1200);
}

// Sets the stagger index on children, then marks the group visible.
function reveal(el) {
  el.querySelectorAll('.card, .quick-link, .fact')
    .forEach((child, i) => child.style.setProperty('--i', i));
  el.classList.add('is-visible');
}

// Mobile menu: the nav is collapsed behind a button under 700px so the
// header doesn't take a quarter of a phone screen.
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.textContent = open ? '✕' : '☰';
  }

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('is-open'));
  });

  // Tapping a link navigates away; close first so returning via back button
  // doesn't show a stuck-open menu.
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // If the viewport grows past the breakpoint, drop the mobile-only state.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700 && nav.classList.contains('is-open')) setOpen(false);
  });
}

// Intro video popup: shows once per browsing session on the home page and
// closes itself after 10 seconds. Autoplay starts muted because browsers
// block audible autoplay; the Sound button turns audio on.
function initIntroVideo() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  // Only show once per session, so navigating back to Home doesn't replay it.
  if (sessionStorage.getItem('introSeen') === 'yes') return;

  const video = document.getElementById('intro-video');
  const soundBtn = document.getElementById('intro-sound');
  const timerLabel = document.getElementById('intro-timer');
  const DURATION = 10;

  let remaining = DURATION;
  let countdownId = null;
  let closed = false;

  overlay.hidden = false;
  timerLabel.textContent = `Closing in ${remaining}s`;
  sessionStorage.setItem('introSeen', 'yes');
  document.body.style.overflow = 'hidden';

  const play = video.play();
  if (play && typeof play.catch === 'function') {
    // If the browser refuses even muted autoplay, the controls still let the
    // visitor play it, and the countdown continues either way.
    play.catch(() => video.setAttribute('controls', ''));
  }

  function close() {
    if (closed) return;
    closed = true;
    clearInterval(countdownId);
    video.pause();
    // Fade the full-screen intro out to reveal the site; must match the
    // 0.6s .is-closing animation in the stylesheet.
    overlay.classList.add('is-closing');
    setTimeout(() => {
      overlay.hidden = true;
      overlay.classList.remove('is-closing');
      document.body.style.overflow = '';
    }, 600);
    document.removeEventListener('keydown', onKeydown);
  }

  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }

  countdownId = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      close();
    } else {
      timerLabel.textContent = `Closing in ${remaining}s`;
    }
  }, 1000);

  soundBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    soundBtn.textContent = video.muted ? '🔇 Sound' : '🔊 Sound';
    soundBtn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
  });

  // No skip button and no click-to-dismiss — the intro is meant to play
  // through. Escape still works: it is not a visible way out, so it does not
  // undermine that, but it means a visitor is never trapped behind a
  // full-screen overlay.
  document.addEventListener('keydown', onKeydown);

  // Failsafe. If the video cannot load — a bad file, a blocked request, a
  // slow connection — the overlay would otherwise cover the whole site with
  // nothing playing and no way past it. Close immediately instead.
  video.addEventListener('error', close);
}
