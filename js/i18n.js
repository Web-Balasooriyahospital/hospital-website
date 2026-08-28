// Bilingual support for the Balasooriya Hospital site — English and Sinhala.
//
// How this works, and why:
//
// English lives in the HTML itself. It is not stored in a dictionary here.
// That means the page reads correctly with JavaScript disabled, with this file
// missing, or if it throws — the visitor sees English rather than a page of
// blank elements or raw translation keys. For a hospital site that carries
// emergency phone numbers, silent failure has to leave the content readable.
//
// Sinhala is applied on top by swapping textContent. The original English is
// captured from the DOM the first time a language switch happens, so switching
// back needs no second dictionary and the two can never drift apart.
//
// TRANSLATION REVIEW: these strings were written by a developer, not a
// certified medical translator. Department and specialty names especially
// should be checked by a Sinhala-speaking member of clinical staff before
// launch — a mistranslated department name can send a patient to the wrong
// place. Anything not yet reviewed falls back to English, which is safe.

(function () {
  'use strict';

  var STORAGE_KEY = 'preferredLang';

  var SINHALA = {
    // --- emergency bar: highest-stakes strings on the site ---
    'bar.open': 'දිනකට පැය 24, වසරකට දින 365 විවෘතව',
    'bar.emergency': 'හදිසි ප්‍රතිකාර ඒකකය (ETU):',
    'bar.ambulance': 'ගිලන් රථ:',

