// Require image so webpack knows to include it
const tom1 = require('../public/tom1.png');

// ===== SET HERO IMAGE =====
document.getElementById('hero-img').src = tom1;

// ===== CONTACT MODAL =====
document.getElementById('contact-btn').addEventListener('click', () => {
  document.getElementById('contact-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('contact-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('contact-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});