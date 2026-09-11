// Doctor directory: search and filter across the 28 consultants, and Sinhala
// specialty labels on the listing cards.
//
// The cards are plain HTML rather than rendered from data.js. That is
// deliberate — the directory is the page a patient is most likely to open on
// a slow connection, and static markup means the names are on screen at first
// paint with no script involved. This file only enhances what is already
// readable: with JavaScript off, all 28 doctors are still listed, just
// without the search box.

(function () {
  'use strict';

  var cards, groups, input, status;
  var englishSpecialty = new Map();

  function specialtyEl(card) {
    // Card shape: <div class="doctor-photo">, <h3>name</h3>, <p>specialty</p>
    return card.querySelector('h3 + p');
  }

  function nameOf(card) {
    var h = card.querySelector('h3');
    return h ? h.textContent : '';
  }

  function translateSpecialties() {
    var si = document.documentElement.lang === 'si';
    cards.forEach(function (card) {
      var el = specialtyEl(card);
      if (!el) return;
      if (!englishSpecialty.has(card)) englishSpecialty.set(card, el.textContent.trim());
      var english = englishSpecialty.get(card);
      // specialtyFor() falls back to English on its own, so an untranslated
      // specialty shows in English rather than disappearing.
      el.textContent = (si && typeof specialtyFor === 'function')
        ? specialtyFor(english)
        : english;
    });
  }

  function matches(card, q) {
    if (!q) return true;
    var english = englishSpecialty.get(card) || '';
    var shown = specialtyEl(card) ? specialtyEl(card).textContent : '';
    // Search English and the currently displayed text, so a Sinhala reader
    // can type either script and still find someone.
    return (nameOf(card) + ' ' + english + ' ' + shown).toLowerCase().indexOf(q) !== -1;
  }

  function filter() {
    var q = input.value.trim().toLowerCase();
    var shown = 0;

    cards.forEach(function (card) {
      var hit = matches(card, q);
      card.hidden = !hit;
      if (hit) shown++;
    });

    // Hide a specialty heading once every doctor under it is filtered out,
    // otherwise the page is a column of empty headings.
    groups.forEach(function (g) {
      var any = g.cards.some(function (c) { return !c.hidden; });
      if (g.heading) g.heading.hidden = !any;
      g.wrap.hidden = !any;
    });

    var si = document.documentElement.lang === 'si';
    if (shown === 0) {
      status.textContent = si
        ? 'ගැලපෙන වෛද්‍යවරයෙක් හමු නොවීය. වෙනත් නමක් හෝ විශේෂත්වයක් උත්සාහ කරන්න.'
        : 'No doctors match that search. Try another name or specialty.';
    } else if (q) {
      status.textContent = si
        ? ('වෛද්‍යවරු ' + shown + ' දෙනෙක් හමු විය')
        : (shown + (shown === 1 ? ' doctor found' : ' doctors found'));
    } else {
      status.textContent = '';
    }
  }

  