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

const SPECIALTIES_SI = {
  'Consultant Physician': 'උපදේශක වෛද්‍ය නිලධාරී',
  'Consultant Cardiologist': 'උපදේශක හෘද රෝග විශේෂඥ',
  'Consultant Chest Physician': 'උපදේශක පපුවේ රෝග විශේෂඥ',
  'Consultant Dermatologist': 'උපදේශක සම රෝග විශේෂඥ',
  'Consultant ENT Surgeon': 'උපදේශක කන් නාසය උගුර ශල්‍ය වෛද්‍ය',
  'Consultant Eye Surgeon': 'උපදේශක අක්ෂි ශල්‍ය වෛද්‍ය',
  'Consultant Hematologist & Orthopedic Surgeon': 'උපදේශක රුධිර රෝග හා අස්ථි ශල්‍ය වෛද්‍ය',
  'Consultant Histopathologist': 'උපදේශක පටක රෝග විශේෂඥ',
  'Consultant Nephrologist': 'උපදේශක වකුගඩු රෝග විශේෂඥ',
  'Consultant OB/GYN': 'උපදේශක ප්‍රසූති හා නාරිවේද විශේෂඥ',
  'Consultant Pediatric Cardiologist': 'උපදේශක ළමා හෘද රෝග විශේෂඥ',
  'Consultant Pediatrician': 'උපදේශක ළමා රෝග විශේෂඥ',
  'Consultant Psychiatrist': 'උපදේශක මනෝ වෛද්‍ය',
  'Consultant Psychotherapist & Psychologist': 'උපදේශක මනෝ චිකිත්සක හා මනෝ විද්‍යාඥ',
  'Consultant Radiologist': 'උපදේශක විකිරණ විද්‍යා විශේෂඥ',
  'Consultant Respiratory Physician': 'උපදේශක ශ්වසන රෝග විශේෂඥ',
  'Consultant STD': 'උපදේශක ලිංගාශ්‍රිත රෝග විශේෂඥ',
  'Dental Surgeon': 'දන්ත ශල්‍ය වෛද්‍ය',
  'Dietitian': 'පෝෂණවේදී',
  'Physiotherapist': 'භෞත චිකිත්සක',
  'Speech Therapist': 'කථන චිකිත්සක',
  'Surgeon': 'ශල්‍ය වෛද්‍ය'
};

