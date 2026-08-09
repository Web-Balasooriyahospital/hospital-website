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
});

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
    overlay.classList.add('is-closing');
    setTimeout(() => {
      overlay.hidden = true;
      overlay.classList.remove('is-closing');
      document.body.style.overflow = '';
    }, 350);
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
