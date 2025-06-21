document.addEventListener('DOMContentLoaded', () => {
  // Card redirection
  document.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Only redirect if not clicking a button
      if (!e.target.classList.contains('more-btn')) {
        window.location.href = card.getAttribute('data-link');
      }
    });
    card.querySelector('.more-btn').addEventListener('click', function(e) {
      e.stopPropagation();
      window.location.href = card.getAttribute('data-link');
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Navigation bar scroll effect
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});
