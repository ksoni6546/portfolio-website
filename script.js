// ===== YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  cursorGlow.style.transform = `translate(${e.clientX - 240}px, ${e.clientY - 240}px)`;
});
window.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; });
window.addEventListener('mouseenter', () => { cursorGlow.style.opacity = '1'; });

// ===== TYPED HERO TEXT =====
const phrases = [
  'whoami',
  'building games & web apps',
  'shipping a crm right now'
];
const typedEl = document.getElementById('typedText');
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = deleting ? 35 : 65;
  setTimeout(typeLoop, speed);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
  typedEl.textContent = phrases[0];
} else {
  typeLoop();
}

// ===== NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navInner = document.querySelector('.nav-inner');
navToggle.addEventListener('click', () => {
  navInner.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navInner.classList.remove('menu-open'));
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
const barFills = document.querySelectorAll('.bar-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');

      // trigger skill bar fills inside this element
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.classList.add('in-view');
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ===== NAVBAR ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => sectionObserver.observe(sec));

// ===== CONTACT FORM (front-end only) =====
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = '✓ Message ready — connect a backend (Formspree, EmailJS, etc.) to send this for real.';
  form.reset();
});
