// Sinhala names for departments and specialties.
//
// Kept in its own file rather than mixed into data.js so that a translator
// can be handed one file to review without reading through the English
// records, and so a missing or broken translation file cannot take the
// English data down with it.
//
// CLINICAL REVIEW STILL OUTSTANDING: these were written by a developer using
// standard Sinhala medical vocabulary. A department name that sends a patient
// to the wrong floor is a safety problem, not a copy problem, so every entry
// below needs sign-off from Sinhala-speaking clinical staff before the
// language switch is announced to patients. Anything absent here falls back
// to English, which is always safe.

const DEPARTMENTS_SI = {
  'general-medicine': 'සාමාන්‍ය වෛද්‍ය අංශය',
  'emergency': 'හදිසි ප්‍රතිකාර ඒකකය',
  'operation-theater': 'ශල්‍යාගාරය',
  'subfertility': 'සුඛෝත්පාදන සායනය',
  'skin-care': 'සම රෝග ඒකකය',
  'laboratory': 'රසායනාගාරය',
  'pharmacy': 'ඖෂධ ශාලාව',
  'cardiology': 'හෘද රෝග හා එකෝ කාඩියෝග්‍රෑම්',
  'radiology': 'විකිරණ විද්‍යා හා රූපගත කිරීම්',
  'respiratory': 'ශ්වසන හා පෙනහළු පරීක්ෂණ',
  'endoscopy': 'වීඩියෝ එන්ඩොස්කොපි හා කොලනොස්කොපි',
  'ent-audiometry': 'කන් නාසය උගුර හා ශ්‍රවණ පරීක්ෂණ',
  'eye-care': 'අක්ෂි සත්කාර හා උපැස් යුරු',
  'dental': 'දන්ත ප්‍රතිකාර',
  'physiotherapy': 'භෞත චිකිත්සාව හා පුනරුත්ථාපනය',
  'speech-therapy': 'කථන චිකිත්සාව',
  'paediatrics': 'ළමා රෝග අංශය',
  'obgyn': 'ප්‍රසූති හා නාරිවේද අංශය',
  'mental-health': 'මානසික සෞඛ්‍ය',
  'nephrology': 'වකුගඩු රෝග අංශය'
};

