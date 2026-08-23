/* Appointment request form: populates the department and doctor dropdowns
 * from js/data.js and validates before submitting.
 *
 * There is no backend yet, so nothing is transmitted — the form reports that
 * honestly rather than showing a fake "request sent" message, which would
 * leave a patient believing reception had their details. See README.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  if (!form) return;

  populateDepartments();
  populateDoctors();
  restrictDateToFuture();

  document.getElementById('booking-department')
    .addEventListener('change', (e) => populateDoctors(e.target.value));

  form.addEventListener('submit', handleSubmit);
});

function populateDepartments() {
  const select = document.getElementById('booking-department');
  DEPARTMENTS.forEach((dept) => {
    const opt = document.createElement('option');
    opt.value = dept.id;
    opt.textContent = dept.name;
    select.appendChild(opt);
  });
}

// Narrow the doctor list to the chosen department so the two fields can't
// disagree (e.g. Cardiology + a dental surgeon).
function populateDoctors(departmentId) {
  const select = document.getElementById('booking-doctor');
  select.innerHTML = '';

  const none = document.createElement('option');
  none.value = '';
  none.textContent = 'No preference';
  select.appendChild(none);

  const list = departmentId ? doctorsInDepartment(departmentId) : DOCTORS;
  list.forEach((doc) => {
    const opt = document.createElement('option');
    opt.value = doc.id;
    opt.textContent = `${doc.name} — ${doc.specialty}`;
    select.appendChild(opt);
  });
}

// A past appointment date is always a mistake; block it in the picker.
function restrictDateToFuture() {
  const input = document.getElementById('booking-date');
  input.min = new Date().toISOString().slice(0, 10);
}

function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('booking-status');

  const name = document.getElementById('patient-name').value.trim();
  const phone = document.getElementById('patient-phone').value.trim();
  const date = document.getElementById('booking-date').value;

  if (!name || !phone || !date) {
    status.textContent = 'Please fill in your name, phone number, and preferred date.';
    status.className = 'form-status is-error';
    return;
  }

  // Sri Lankan numbers: 10 digits local (0XXXXXXXXX) or +94 followed by 9.
  const digits = phone.replace(/[\s-]/g, '');
  if (!/^(?:\+94\d{9}|0\d{9})$/.test(digits)) {
    status.textContent = 'Please enter a valid phone number, e.g. 071 401 9149.';
    status.className = 'form-status is-error';
    return;
  }

  if (new Date(date) < new Date(new Date().toDateString())) {
    status.textContent = 'Please choose a date that is not in the past.';
    status.className = 'form-status is-error';
    return;
  }

  status.innerHTML =
    'This form is not connected to reception yet, so your request has ' +
    '<strong>not</strong> been sent. Please call ' +
    '<a href="tel:+94322266266">032-226-6266</a> to book. ' +
    'Online booking is coming soon.';
  status.className = 'form-status is-warning';
}
