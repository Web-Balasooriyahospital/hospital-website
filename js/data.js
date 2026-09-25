/* Shared data for the doctor and department profile pages.
 *
 * Source: balasooriyahospital.lk specialist directory and services menu.
 * Keeping this in one place means doctors.html, departments.html and the two
 * profile templates cannot drift apart — the listing pages and the detail
 * pages are generated from the same records.
 *
 * `id` values are used in the URL (doctor.html?id=...), so changing one
 * breaks existing links. Add new entries rather than renaming.
 */

const DEPARTMENTS = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    summary: 'Handles emergencies and chronic conditions.',
    description:
      'The general medicine department manages both acute presentations and the ' +
      'long-term care of chronic conditions such as diabetes, hypertension and ' +
      'respiratory disease, and is the usual first point of contact for adult ' +
      'patients arriving without a referral.',
    group: 'Core'
  },
  {
    id: 'emergency',
    name: 'Emergency Treatment Unit',
    directLine: { display: '032-226-5200', tel: '+94322265200' },
    summary: '24/7 emergency care team.',
    description:
      'The Emergency Treatment Unit (ETU) is staffed around the clock, every day ' +
      'of the year. For a medical emergency, call the ETU directly on ' +
      '032-226-5200 or the ambulance line on 032-226-6266 rather than booking ' +
      'an appointment.',
    group: 'Core',
    urgent: true
  },
  {
    id: 'operation-theater',
    name: 'Operation Theater',
    summary: 'Surgical procedures with specialist consultants.',
    description:
      'Fully equipped theatre supporting general, orthopaedic, ophthalmic and ' +
      'obstetric surgery under consultant supervision.',
    group: 'Core'
  },
  {
    id: 'subfertility',
    name: 'Subfertility Clinic',
    summary: 'Consultation and treatment for fertility care.',
    description:
      'Consultation, investigation and treatment for couples experiencing ' +
      'difficulty conceiving, run by the hospital’s consultant OB/GYN team.',
    group: 'Core'
  },
  {
    id: 'skin-care',
    name: 'Skin Care Unit',
    summary: 'Dermatology consultation and treatment.',
    description:
      'Dermatology consultation covering skin, hair and nail conditions, ' +
      'including chronic conditions requiring ongoing review.',
    group: 'Core'
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    directLine: { display: '032-329-4165', tel: '+94323294165' },
    summary: 'On-site diagnostics.',
    description:
      'On-site diagnostic laboratory and a member of the Randox International ' +
      'Quality Assessment Scheme (UK). Mobile sample collection is available ' +
      'for patients who cannot travel.',
    group: 'Core'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    directLine: { display: '032-329-4162', tel: '+94323294162' },
    summary: '24-hour retail, wholesale, and OPD pharmacy.',
    description:
      'Open 24 hours with retail, wholesale and outpatient sections. Direct ' +
      'line: 032-329-4162.',
    group: 'Core'
  },
  {
    id: 'cardiology',
    name: 'Cardiology & Echocardiogram',
    summary: 'Cardiac imaging and diagnostics.',
    description:
      'Cardiac assessment including echocardiogram and ECG, with consultant ' +
      'cardiology review. Paediatric cardiology is also available.',
    group: 'Diagnostics'
  },
  {
    id: 'radiology',
    name: 'Radiology & Imaging',
    summary: 'X-Ray, ECG, and ultrasound scanning.',
    description:
      'X-Ray, ECG and 2D/3D/4D ultrasound scanning, reported by a consultant ' +
      'radiologist.',
    group: 'Diagnostics'
  },
  {
    id: 'respiratory',
    name: 'Respiratory & Lung Function',
    summary: 'Spirometry and chest medicine.',
    description:
      'Lung function spirometry and consultant chest and respiratory medicine ' +
      'for conditions including asthma and COPD.',
    group: 'Diagnostics'
  },
  {
    id: 'endoscopy',
    name: 'Video Endoscopy & Colonoscopy',
    summary: 'Gastrointestinal diagnostics.',
    description:
      'Video endoscopy and colonoscopy for investigation of gastrointestinal ' +
      'symptoms, performed in the theatre suite.',
    group: 'Diagnostics'
  },
  {
    id: 'ent-audiometry',
    name: 'ENT & Audiometric Testing',
    summary: 'Hearing assessment and ENT surgery.',
    description:
      'Ear, nose and throat consultation and surgery, together with audiometric ' +
      '(hearing) assessment.',
    group: 'Diagnostics'
  },
  {
    id: 'eye-care',
    name: 'Opticians & Eye Care',
    summary: 'Eye examination and surgery.',
    description:
      'Eye examination, prescription and consultant eye surgery.',
    group: 'Clinics'
  },
  {
    id: 'dental',
    name: 'Dental Treatment',
    summary: 'General dental care.',
    description:
      'General dental treatment provided by the hospital’s dental surgeons.',
    group: 'Clinics'
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy & Rehabilitation',
    summary: 'Rehabilitation and physical therapy.',
    description:
      'Physiotherapy and rehabilitation following injury, surgery or stroke.',
    group: 'Clinics'
  },
  {
    id: 'speech-therapy',
    name: 'Speech Therapy',
    summary: 'Speech and language therapy.',
    description:
      'Assessment and therapy for speech, language and swallowing difficulties ' +
      'in both children and adults.',
    group: 'Clinics'
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics',
    summary: 'Care for infants, children and adolescents.',
    description:
      'Consultant paediatric care covering routine review, acute illness and ' +
      'paediatric cardiology.',
    group: 'Clinics'
  },
  {
    id: 'obgyn',
    name: 'Obstetrics & Gynaecology',
    summary: 'Women’s health, pregnancy and childbirth.',
    description:
      'Antenatal care, delivery and gynaecological consultation under ' +
      'consultant OB/GYN supervision.',
    group: 'Clinics'
  },
  {
    id: 'mental-health',
    name: 'Mental Health',
    summary: 'Psychiatry and psychological therapy.',
    description:
      'Consultant psychiatry alongside psychotherapy and psychological support.',
    group: 'Clinics'
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    summary: 'Kidney medicine.',
    description: 'Consultant assessment and management of kidney disease.',
    group: 'Clinics'
  }
];

const DOCTORS = [
  { id: 'sannasooriya', name: 'Dr. Sannasooriya', specialty: 'Consultant Physician', department: 'general-medicine' },
  { id: 'g-illanchelian', name: 'Dr. G. Illanchelian', specialty: 'Consultant Physician', department: 'general-medicine' },
  { id: 'arudchelvam', name: 'Dr. Arudchelvam', specialty: 'Consultant Physician', department: 'general-medicine' },

  { id: 'kapila-gamage', name: 'Dr. Kapila Gamage', specialty: 'Surgeon', department: 'operation-theater' },
  { id: 'kugaraj', name: 'Dr. Kugaraj', specialty: 'Surgeon', department: 'operation-theater' },
  { id: 'dbh-narenthiran', name: 'Dr. D.B.H Narenthiran', specialty: 'Consultant Hematologist & Orthopedic Surgeon', department: 'operation-theater' },
  { id: 'danuka-weerasinghe', name: 'Dr. Danuka Weerasinghe', specialty: 'Consultant Eye Surgeon', department: 'eye-care' },

  { id: 'sunil-senadeera', name: 'Dr. Sunil Senadeera', specialty: 'Consultant OB/GYN', department: 'obgyn' },
  { id: 'dilan-malinda', name: 'Dr. Dilan Malinda', specialty: 'Consultant OB/GYN', department: 'obgyn' },
  { id: 'mhtln-mahanama', name: 'Dr. M.H.T.L.N Mahanama', specialty: 'Consultant Pediatric Cardiologist', department: 'paediatrics' },
  { id: 'janaki-keerthiwansha', name: 'Dr. Janaki Keerthiwansha', specialty: 'Consultant Pediatrician', department: 'paediatrics' },
  { id: 'sudewa-lokuge', name: 'Dr. Sudewa L Lokuge', specialty: 'Consultant Pediatrician', department: 'paediatrics' },

  { id: 'tharanga-fernando', name: 'Dr. Tharanga Fernando', specialty: 'Consultant Cardiologist', department: 'cardiology' },
  { id: 'thushara-galaboda', name: 'Dr. Thushara Galaboda', specialty: 'Consultant Chest Physician', department: 'respiratory' },
  { id: 'sibly', name: 'Dr. Sibly', specialty: 'Consultant Respiratory Physician', department: 'respiratory' },

  { id: 'upeksha-vidanage', name: 'Dr. Upeksha Vidanage', specialty: 'Consultant ENT Surgeon', department: 'ent-audiometry' },
  { id: 'chandika-epitakaduwa', name: 'Dr. Chandika Epitakaduwa', specialty: 'Consultant Histopathologist', department: 'laboratory' },
  { id: 'parthipan', name: 'Dr. Parthipan', specialty: 'Consultant Radiologist', department: 'radiology' },
  { id: 'udana-premarathna', name: 'Dr. Udana Premarathna', specialty: 'Consultant Nephrologist', department: 'nephrology' },
  { id: 's-sukumaran', name: 'Dr. S. Sukumaran', specialty: 'Consultant Dermatologist', department: 'skin-care' },
  { id: 'piumi-perera', name: 'Dr. Piumi Perera', specialty: 'Consultant STD', department: 'skin-care' },
  { id: 'mnl-hakeem', name: 'Dr. M.N.L Hakeem', specialty: 'Consultant Psychotherapist & Psychologist', department: 'mental-health' },
  { id: 'gemunu-rambukwella', name: 'Dr. Gemunu Rambukwella', specialty: 'Consultant Psychiatrist', department: 'mental-health' },

  { id: 'dulani', name: 'Dr. Dulani', specialty: 'Dental Surgeon', department: 'dental' },
  { id: 'janana', name: 'Dr. Janana', specialty: 'Dental Surgeon', department: 'dental' },
  { id: 'thasmeeha', name: 'Dr. Thasmeeha', specialty: 'Dietitian', department: 'general-medicine' },
  { id: 'thasneem', name: 'Mr. Thasneem', specialty: 'Physiotherapist', department: 'physiotherapy' },
  { id: 'randika', name: 'Mr. Randika', specialty: 'Speech Therapist', department: 'speech-therapy' }
];

// Shared across every specialist — the hospital publishes one set of hours
// rather than per-doctor schedules.
const CONSULTATION_HOURS =
  'Monday–Friday 6:00–8:00 AM and after 4:00 PM; ' +
  'Saturday–Sunday 6:00 AM–8:00 PM. Night on-call service available.';

// Initials for the placeholder avatar, e.g. "Dr. Kapila Gamage" -> "KG".
function initialsFor(doctor) {
  const words = doctor.name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s*/, '').split(/\s+/);
  return words.slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join('');
}

function departmentById(id) {
  return DEPARTMENTS.find((d) => d.id === id) || null;
}

function doctorById(id) {
  return DOCTORS.find((d) => d.id === id) || null;
}

function doctorsInDepartment(departmentId) {
  return DOCTORS.filter((d) => d.department === departmentId);
}
