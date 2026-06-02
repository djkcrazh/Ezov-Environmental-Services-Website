/* =============================================================
   EZOV Environmental Services — Main JavaScript
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. Navigation — transparent ↔ solid on scroll
     ---------------------------------------------------------- */
  const navbar  = document.getElementById('navbar');
  const isHome  = document.body.dataset.page === 'home';

  function setNavState() {
    if (!navbar) return;
    if (isHome && window.scrollY < 80) {
      navbar.classList.add('is-transparent');
      navbar.classList.remove('is-solid');
    } else {
      navbar.classList.remove('is-transparent');
      navbar.classList.add('is-solid');
    }
  }

  if (navbar) {
    setNavState();
    window.addEventListener('scroll', setNavState, { passive: true });
  }


  /* ----------------------------------------------------------
     2. Mobile drawer toggle
     ---------------------------------------------------------- */
  const hamburger   = document.getElementById('hamburger');
  const drawer      = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  function openDrawer() {
    drawer.classList.add('is-open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  // Close on any drawer link click
  if (drawer) {
    drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeDrawer));
  }


  /* ----------------------------------------------------------
     3. Scroll-reveal animations (IntersectionObserver)
     ---------------------------------------------------------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* ----------------------------------------------------------
     4. Animated counters
     ---------------------------------------------------------- */
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 2200;
    const fps      = 60;
    const steps    = Math.round(duration / (1000 / fps));
    const inc      = target / steps;
    let   current  = 0;
    let   frame    = 0;

    const tick = () => {
      frame++;
      current = Math.min(current + inc, target);
      el.textContent = Math.floor(current).toLocaleString() + suffix;
      if (frame < steps) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));


  /* ----------------------------------------------------------
     5. NOTE — Form submission is handled by @formspree/ajax
        (loaded via CDN in each HTML page). The library reads
        data-fs-field, data-fs-error, data-fs-success, and
        data-fs-submit-btn attributes and manages state.
        No custom fetch handler needed here.
     ---------------------------------------------------------- */


  /* ----------------------------------------------------------
     6. Smooth scroll for in-page anchor links
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (navbar?.offsetHeight ?? 80) + 8;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });


  /* ----------------------------------------------------------
     7. Back-to-top button
     ---------------------------------------------------------- */
  const backBtn = document.getElementById('back-to-top');

  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
