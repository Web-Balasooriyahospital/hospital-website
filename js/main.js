// Main JS for the Balasooriya Pvt Hospital website.
// Day 1 (Fri) 1:45-4:00 PM - Core build block 3: contact form handling.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out. This form is not yet connected to a backend — a real submission system will be added later.');
      form.reset();
    });
  }
});
