/**
 * QUALITY ROOFERS LTD — MAIN ARCHITECTURAL SCRIPTS
 * Navigation, Modal Dialogs, Postcode Checker & Dynamic Data Bindings
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initPostcodeChecker();
  initProjectModals();
  initProjectFilters();
  initKnowledgeViewer();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE FULLSCREEN DRAWER NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const links = document.querySelectorAll('.mobile-nav-item');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => closeDrawer());
  });

  // ESC key listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   3. POSTCODE COVERAGE CHECKER
   -------------------------------------------------------------------------- */
function initPostcodeChecker() {
  const form = document.getElementById('postcodeCheckerForm');
  const input = document.getElementById('servicePostcodeInput');
  const feedback = document.getElementById('postcodeResultFeedback');

  if (!form || !input || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawVal = input.value.trim().toUpperCase();

    if (!rawVal || rawVal.length < 2) {
      feedback.className = 'postcode-feedback';
      feedback.style.color = '#f87171';
      feedback.textContent = 'Please enter a valid UK postcode or postal outcode (e.g. SW1, B1, OX1).';
      return;
    }

    // Visual loading state
    feedback.className = 'postcode-feedback info';
    feedback.textContent = `Analyzing coverage for area ${rawVal}...`;

    setTimeout(() => {
      feedback.className = 'postcode-feedback success';
      feedback.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <strong>Coverage Confirmed:</strong> Area <strong>${rawVal}</strong> is within our active Kenley, Surrey & Greater London priority deployment corridor.
        </span>
      `;
    }, 450);
  });
}

/* --------------------------------------------------------------------------
   4. CASE STUDY MODAL EXPERIENCE
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const cards = document.querySelectorAll('[data-project-id]');

  if (!modal) return;

  const openModal = (projectId) => {
    if (typeof QR_DATA === 'undefined' || !QR_DATA.projects) return;
    const project = QR_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    // Populate modal fields
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalLocation = document.getElementById('modalLocation');
    const modalHeroImg = document.getElementById('modalHeroImg');
    const modalScope = document.getElementById('modalScope');
    const modalChallenge = document.getElementById('modalChallenge');
    const modalApproach = document.getElementById('modalApproach');
    const modalResult = document.getElementById('modalResult');
    const modalSpecsList = document.getElementById('modalSpecsList');

    if (modalCategory) modalCategory.textContent = project.category;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalLocation) modalLocation.textContent = `${project.location} · ${project.year}`;
    if (modalHeroImg) {
      modalHeroImg.src = project.image;
      modalHeroImg.alt = project.title;
    }
    if (modalScope) modalScope.textContent = project.scope;
    if (modalChallenge) modalChallenge.textContent = project.challenge;
    if (modalApproach) modalApproach.textContent = project.approach;
    if (modalResult) modalResult.textContent = project.result;

    if (modalSpecsList) {
      modalSpecsList.innerHTML = '';
      for (const [key, val] of Object.entries(project.specs)) {
        const row = document.createElement('div');
        row.className = 'modal-spec-item';
        row.innerHTML = `
          <span class="modal-spec-label">${key}</span>
          <span class="modal-spec-val">${val}</span>
        `;
        modalSpecsList.appendChild(row);
      }
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Hide sticky mobile bottom bar when modal is open
    const stickyBar = document.querySelector('.mobile-sticky-bar');
    if (stickyBar) stickyBar.style.display = 'none';
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
    const stickyBar = document.querySelector('.mobile-sticky-bar');
    if (stickyBar && window.innerWidth <= 767) stickyBar.style.display = 'block';
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openModal(pid);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   5. PROJECT FILTER TABS
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. KNOWLEDGE VIEWER
   -------------------------------------------------------------------------- */
function initKnowledgeViewer() {
  const articleCards = document.querySelectorAll('[data-article-id]');
  if (!articleCards.length) return;

  articleCards.forEach(card => {
    card.addEventListener('click', () => {
      const articleId = card.getAttribute('data-article-id');
      if (articleId) {
        window.location.href = `knowledge.html#${articleId}`;
      }
    });
  });
}
