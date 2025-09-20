// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

// Close nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Shadow on scroll
const header = document.querySelector('.header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.style.boxShadow = y > 4 ? '0 6px 20px rgba(0,0,0,.25)' : 'none';
  header.style.transform = y > lastY && y > 80 ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Prevent form submit
document.querySelector('.contact')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! This is a demo form.');
});

// Animate on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

/* -------------------
   Back to Top Button
------------------- */
const backToTopBtn = document.querySelector(".back-to-top");

// Show/hide on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
