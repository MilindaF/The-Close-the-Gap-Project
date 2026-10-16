const refinementStyles = document.createElement('link');
refinementStyles.rel = 'stylesheet';
refinementStyles.href = 'refinements.css';
document.head.appendChild(refinementStyles);

document.documentElement.classList.add('js-ready');

// Keep the homepage purpose-driven and institutional rather than founder-centered.
const statementBand = document.querySelector('.statement-band');
if (statementBand) {
  statementBand.innerHTML = `
    <div class="container purpose-grid reveal">
      <p class="purpose-label">WHY CLOSE THE GAP</p>
      <div class="purpose-content">
        <h2>Health resources can exist and still remain out of reach.</h2>
        <p>Close the Gap works to make the path between people and care clearer by listening to communities, connecting organizations, strengthening access to trusted resources, and building programs around needs people actually identify.</p>
      </div>
    </div>`;
}

// Reframe the core work as public health impact while preserving the existing section structure.
const workSection = document.querySelector('.work-section');
if (workSection) {
  const eyebrow = workSection.querySelector('.work-heading .eyebrow');
  const heading = workSection.querySelector('.work-heading h2');
  if (eyebrow) eyebrow.textContent = 'Public Health Impact';
  if (heading) heading.textContent = 'How we work to close the gap.';
}

// Clarify who CTG works with without changing the partnership layout the user likes.
const partnersSection = document.querySelector('.partners-section');
if (partnersSection) {
  const eyebrow = partnersSection.querySelector('.partners-heading .eyebrow');
  if (eyebrow) eyebrow.textContent = 'Who We Work With';
}

// Replace the founder-centered About section with organizational Vision, Mission, and Goals.
const aboutSection = document.querySelector('#about');
if (aboutSection) {
  aboutSection.className = 'section about-section';
  aboutSection.innerHTML = `
    <div class="container about-heading reveal">
      <p class="eyebrow">About Close the Gap</p>
      <h2>Built to make community health support easier to find, understand, and use.</h2>
    </div>

    <div class="container about-principles reveal">
      <article class="about-card">
        <span>01</span>
        <p class="about-card-label">Vision</p>
        <h3>A future where no one is left behind because care was too hard to find, understand, or reach.</h3>
        <p>We envision healthier, more connected communities where people can navigate care with confidence, trusted resources reach the people they are meant to serve, and organizations work together so access to health and opportunity is not determined by circumstance.</p>
      </article>

      <article class="about-card">
        <span>02</span>
        <p class="about-card-label">Mission</p>
        <h3>Listen locally. Connect intentionally. Build with communities.</h3>
        <p>Close the Gap brings residents, community organizations, healthcare partners, educators, and funders together to identify barriers to care, strengthen access to trusted resources, and develop community-informed health initiatives.</p>
      </article>

      <article class="about-card goals-card">
        <span>03</span>
        <p class="about-card-label">Goals</p>
        <div class="goal-list">
          <div><strong>Listen & Learn</strong><p>Understand the barriers, priorities, and strengths communities identify for themselves.</p></div>
          <div><strong>Connect & Strengthen</strong><p>Make trusted resources easier to find and strengthen connections among organizations already doing good work.</p></div>
          <div><strong>Develop & Educate</strong><p>Create community-informed programming and prepare young people to become future health leaders.</p></div>
          <div><strong>Measure & Share</strong><p>Evaluate what works, communicate impact clearly, and report back to the communities and partners involved.</p></div>
        </div>
      </article>
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
