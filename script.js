const refinementStyles = document.createElement('link');
refinementStyles.rel = 'stylesheet';
refinementStyles.href = 'refinements.css';
document.head.appendChild(refinementStyles);

document.documentElement.classList.add('js-ready');

const statementBand = document.querySelector('.statement-band');
if (statementBand) {
  statementBand.innerHTML = `
    <div class="container vision-grid reveal">
      <p class="vision-label">Our Vision</p>
      <div class="vision-content">
        <h2>A South Florida where getting help for your health feels clear, connected, and within reach.</h2>
        <p>I started Close the Gap because I have seen how easily people can be left trying to navigate healthcare with too little information, too few trusted connections, and no clear place to begin. The problem is not always that resources do not exist. Too often, the path to them is fragmented, difficult to understand, or disconnected from the communities they are meant to serve.</p>
        <p>Our vision is to shorten that distance. We want residents to know where to turn, young people to see themselves as future health leaders, and community, healthcare, and funding partners to work together around needs that people actually identify.</p>
        <p class="vision-principle">The gap closes when people are heard, trusted resources are easier to reach, and good organizations are connected instead of working in isolation.</p>
      </div>
    </div>`;
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
