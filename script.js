const refinementStyles = document.createElement('link');
refinementStyles.rel = 'stylesheet';
refinementStyles.href = 'refinements.css';
document.head.appendChild(refinementStyles);

document.documentElement.classList.add('js-ready');

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&display=swap';
document.head.appendChild(fontLink);

const typographyStyles = document.createElement('style');
typographyStyles.textContent = `
  body { font-family: 'Source Sans 3', Arial, sans-serif; }
  .hero h1,
  .section h2,
  .contact-section h2,
  .work-name h3,
  .nextgen-program h3,
  .partner-grid h3,
  .partner-cta h3,
  .founder-panel h2,
  .founder-signature,
  .vision-copy h2 {
    font-family: 'Source Serif 4', Georgia, serif;
  }
  .hero h1,
  .section h2,
  .contact-section h2 { letter-spacing: -.025em; }
  .brand-monogram {
    font-family: 'Source Serif 4', Georgia, serif;
    font-style: normal;
    font-weight: 700;
  }
  .statement-band { padding: 68px 0 72px; }
  .statement-grid.vision-grid {
    grid-template-columns: .42fr 1.58fr;
    gap: 72px;
    align-items: start;
  }
  .vision-label-wrap { padding-top: 7px; }
  .vision-kicker {
    display: block;
    margin-top: 12px;
    color: #fffdfa;
    font-size: .92rem;
    font-weight: 600;
    letter-spacing: .02em;
  }
  .vision-copy { max-width: 930px; }
  .vision-copy h2 {
    margin: 0 0 24px;
    color: #fffdfa;
    font-size: clamp(2.15rem, 3.8vw, 4.1rem);
    line-height: 1.08;
    font-weight: 600;
    letter-spacing: -.025em;
  }
  .vision-copy p {
    margin: 0 0 15px;
    max-width: 840px;
    color: #d9cdca;
    font-size: 1.08rem;
    line-height: 1.68;
  }
  .vision-copy p:last-child {
    margin-bottom: 0;
    color: #fffdfa;
    font-weight: 600;
  }
  @media (max-width: 980px) {
    .statement-grid.vision-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
`;
document.head.appendChild(typographyStyles);

const statementGrid = document.querySelector('.statement-grid');
if (statementGrid) {
  statementGrid.classList.add('vision-grid');
  statementGrid.innerHTML = `
    <div class="vision-label-wrap">
      <p class="statement-label">WHY CLOSE THE GAP</p>
      <span class="vision-kicker">Our Vision</span>
    </div>
    <div class="vision-copy">
      <h2>Healthcare should feel reachable before a crisis makes it urgent.</h2>
      <p>Close the Gap began with something personal: seeing how often people are expected to navigate healthcare with too little information, too few trusted connections, and too much uncertainty.</p>
      <p>Our vision is a South Florida where people do not have to know the right person, understand a complicated system, or wait until a problem becomes a crisis to find help. We want communities to have clearer pathways to care, trusted health information, and organizations that work together around the needs people actually express.</p>
      <p>That means listening before building, strengthening what already works, and closing the distance between resources and the people they are meant to reach.</p>
    </div>
  `;
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
