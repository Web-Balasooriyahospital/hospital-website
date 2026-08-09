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
});

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
  const closeBtn = document.getElementById('intro-close');
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

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', onKeydown);
}
