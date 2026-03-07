// ============================================
//  FOCUS KUSA - main.js (Shared Logic)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  initParticles();
});

// ============================================
//  NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  const mobileLinks = document.querySelectorAll('.navbar__mobile .navbar__link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Set active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
//  SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (reveals.length === 0) return;

  // Set stagger indices
  document.querySelectorAll('.stagger-children').forEach(parent => {
    [...parent.children].forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ============================================
//  COUNTER ANIMATION
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
    const current = Math.floor(eased * target);
    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}

// ============================================
//  FLOATING PARTICLES (Hero)
// ============================================
function initParticles() {
  const container = document.querySelector('.hero__particles');
  if (!container) return;

  const particleCount = 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero__particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.width = (Math.random() * 3 + 1) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

// ============================================
//  NAVBAR HTML INJECTION
// ============================================
export function renderNavbar(activePage) {
  const pages = [
    { name: 'Home', href: 'index.html' },
    { name: 'About', href: 'about.html' },
    { name: 'Projects', href: 'projects.html' },
    { name: 'Board', href: 'board.html' },
    { name: 'Contact', href: 'contact.html' },
  ];

  const linksHTML = pages.map(p =>
    `<a href="${p.href}" class="navbar__link ${p.href === activePage ? 'active' : ''}">${p.name}</a>`
  ).join('');

  const mobileLinksHTML = pages.map(p =>
    `<a href="${p.href}" class="navbar__link ${p.href === activePage ? 'active' : ''}">${p.name}</a>`
  ).join('');

  return `
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="index.html" class="navbar__logo">
        <img src="./assets/images/logo-white.png" alt="FOCUS KUSA Logo">
      </a>
      <div class="navbar__links">
        ${linksHTML}
        <a href="contact.html" class="navbar__cta">Get Involved</a>
      </div>
      <button class="navbar__hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar__mobile" id="mobileMenu">
      ${mobileLinksHTML}
      <a href="contact.html" class="btn btn--primary btn--sm">Get Involved</a>
    </div>
  </nav>
  `;
}

// ============================================
//  FOOTER HTML INJECTION
// ============================================
export function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="./assets/images/logo-white.png" alt="FOCUS KUSA" class="footer__logo">
          <p class="footer__desc">
            FOCUS KUSA is a nonprofit, student-led association formed by university students from Kinniya to empower the educational and personal growth of their community through mentorship, academic support, leadership, and service.
          </p>
          <div class="footer__socials">
            <a href="https://www.facebook.com/share/1FzvnTp96W/" target="_blank" class="footer__social" aria-label="Facebook"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="icon" class="icon-img" /></a>
            <a href="https://www.instagram.com/focus_kusa?utm_source=qr&igsh=MXhoNmJhdDhmbTcxaQ==" target="_blank" class="footer__social" aria-label="Instagram"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="icon" class="icon-img" /></a>
            <a href="https://www.youtube.com/@FOCUS_KUSA" target="_blank" class="footer__social" aria-label="YouTube"><img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="icon" class="icon-img" /></a>
            <a href="https://www.linkedin.com/in/focus-kusa" target="_blank" class="footer__social" aria-label="LinkedIn"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="icon" class="icon-img" /></a>
            <a href="https://whatsapp.com/channel/0029Vb7KQKZLY6cxS4UT2h47" target="_blank" class="footer__social" aria-label="WhatsApp"><img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png" alt="icon" class="icon-img" /></a>
          </div>
        </div>
        <div>
          <h4 class="footer__heading">Quick Links</h4>
          <a href="index.html" class="footer__link">Home</a>
          <a href="about.html" class="footer__link">About Us</a>
          <a href="projects.html" class="footer__link">Our Projects</a>
          <a href="board.html" class="footer__link">Executive Board</a>
          <a href="contact.html" class="footer__link">Contact</a>
        </div>
        <div>
          <h4 class="footer__heading">Key Projects</h4>
          <a href="projects.html" class="footer__link">UniVision</a>
          <a href="projects.html" class="footer__link">Explore A/L</a>
          <a href="projects.html" class="footer__link">Pi Challenge</a>
          <a href="projects.html" class="footer__link">Focus Stride</a>
          <a href="projects.html" class="footer__link">GreenRise</a>
        </div>
        <div>
          <h4 class="footer__heading">Contact</h4>
          <p class="footer__link"><img src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" alt="icon" class="icon-img" /> Kinniya, Trincomalee, Sri Lanka</p>
          <a href="mailto:focuskusa2019@gmail.com" class="footer__link"><img src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png" alt="icon" class="icon-img" /> focuskusa2019@gmail.com</a>
          <a href="https://wa.me/+94753992019" target="_blank" class="footer__link"><img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="icon" class="icon-img" /> 0753992019</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">© ${new Date().getFullYear()} FOCUS KUSA. All rights reserved.</p>
        <p class="footer__copyright" style="font-size: 0.75rem;">Follow One Course Until Success</p>
      </div>
    </div>
  </footer>
  `;
}
