// Main application logic

console.log("Travel Mentor Web App Initialized.");

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 25, 47, 0.9)';
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'var(--glass-bg)';
    navbar.style.boxShadow = 'none';
  }
});

// Simple routing for interactive elements (future expansion)
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-primary');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.innerText === 'Sign In') {
        alert('Sign In modal will open here.');
      } else if (e.target.innerText === 'Get Started') {
        window.location.href = '/mentors.html';
      }
    });
  });
});
