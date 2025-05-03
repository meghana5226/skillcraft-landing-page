// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  