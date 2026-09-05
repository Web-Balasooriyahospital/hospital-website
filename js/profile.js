/* Populates the doctor and department profile templates from js/data.js.
 *
 * Values that come from the URL are only ever used to look up a record; the
 * text written to the page comes from the data file, and is written with
 * textContent rather than innerHTML. A crafted ?id= cannot inject markup.
 */

document.addEventListener('DOMContentLoaded', () => {
  render();

  // This page's text is written by script, so the textContent swap that
  // translates the rest of the site cannot reach it. Rebuild instead.
  document.addEventListener('languagechange', render);
});

function render() {
  const id = new URLSearchParams(window.location.search).get('id');

  // Clear any list built by a previous pass, or switching language twice
  // would append the doctors again under the department.
  const list = document.getElementById('department-doctors');
  if (list) list.textContent = '';

  if (document.getElementById('doctor-profile')) renderDoctor(id);
  if (document.getElementById('department-profile')) renderDepartment(id);
}

function show(el) {
  if (el) el.hidden = false;
}

function renderDoctor(id) {
  const doctor = id ? doctorById(id) : null;

  if (!doctor) {
    show(document.getElementById('doctor-missing'));
    return;
  }

  document.title = `${doctor.name} — Balasooriya Pvt Hospital`;
  document.getElementById('doctor-name').textContent = doctor.name;
  document.getElementById('doctor-heading').textContent = doctor.name;
  document.getElementById('doctor-specialty').textContent = specialtyFor(doctor.specialty);
  document.getElementById('doctor-initials').textContent = initialsFor(doctor);
  document.getElementById('doctor-hours').textContent = CONSULTATION_HOURS;

  const dept = departmentById(doctor.department);
  const deptLink = document.getElementById('doctor-department-link');
  if (dept) {
    deptLink.textContent = departmentNameFor(dept.id, dept.name);
    deptLink.href = `department.html?id=${encodeURIComponent(dept.id)}`;

    document.getElementById('department-card-name').textContent =
      departmentNameFor(dept.id, dept.name);
    document.getElementById('department-card-summary').textContent = dept.summary;
    const cardLink = document.getElementById('department-card-link');
    cardLink.href = `department.html?id=${encodeURIComponent(dept.id)}`;
    cardLink.textContent = `View ${departmentNameFor(dept.id, dept.name)} →`;
    show(document.getElementById('doctor-department-card'));
  } else {
    // Data problem rather than a bad URL — degrade quietly instead of
    // leaving an empty "Department:" line on the page.
    deptLink.replaceWith(document.createTextNode('Not assigned'));
  }

  show(document.getElementById('doctor-profile'));
  show(document.getElementById('doctor-bio'));
}

function renderDepartment(id) {
  const dept = id ? departmentById(id) : null;

  if (!dept) {
    show(document.getElementById('department-missing'));
    return;
  }

  document.title = `${dept.name} — Balasooriya Pvt Hospital`;
  document.getElementById('department-name').textContent =
    departmentNameFor(dept.id, dept.name);
  document.getElementById('department-description').textContent = dept.description;

  if (dept.urgent) show(document.getElementById('department-urgent'));

  const doctors = doctorsInDepartment(dept.id);
  if (doctors.length) {
    const wrap = document.getElementById('department-doctors');
    doctors.forEach((doc) => {
      const card = document.createElement('div');
      card.className = 'card doctor-card';

      const photo = document.createElement('div');
      photo.className = 'doctor-photo';
      photo.setAttribute('aria-hidden', 'true');
      photo.textContent = initialsFor(doc);

      const name = document.createElement('h3');
      name.textContent = doc.name;

      const specialty = document.createElement('p');
      specialty.textContent = specialtyFor(doc.specialty);

      const link = document.createElement('a');
      link.href = `doctor.html?id=${encodeURIComponent(doc.id)}`;
      link.textContent = 'View profile →';

      card.append(photo, name, specialty, link);
      wrap.appendChild(card);
    });
    show(document.getElementById('department-doctors-section'));
  }

  show(document.getElementById('department-profile'));
  // Direct line, where the hospital publishes one for that department. Only
  // three do, so the element stays hidden rather than showing an empty label
  // for the other seventeen.
  const lineEl = document.getElementById('department-direct-line');
  if (lineEl) {
    if (dept.directLine) {
      lineEl.textContent = '';
      const label = document.createElement('strong');
      label.textContent = 'Direct line: ';
      const a = document.createElement('a');
      a.href = 'tel:' + dept.directLine.tel;
      a.textContent = dept.directLine.display;
      lineEl.append(label, a);
      lineEl.hidden = false;
    } else {
      lineEl.hidden = true;
    }
  }

  show(document.getElementById('department-location'));
}
