/**
 * Elmdon Roofing Services - Interactive Website Engine
 * High-performance, lightweight, accessible JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initBeforeAfterSlider();
  initGalleryFilter();
  initRoofingCalculator();
  initReviewsCarousel();
  initFaqAccordion();
  initContactForm();
});

/* ==========================================================================
   1. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const navLinks = document.querySelectorAll('.mobile-drawer-link');

  if (!toggle || !drawer || !backdrop) return;

  const openDrawer = () => {
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) closeDrawer();
    else openDrawer();
  });

  backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. INTERACTIVE BEFORE / AFTER SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.querySelector('.ba-slider-wrapper');
  if (!container) return;

  const afterWrap = container.querySelector('.ba-img-after-wrap');
  const afterImg = container.querySelector('.ba-img-after');
  const divider = container.querySelector('.ba-divider');
  if (!afterWrap || !afterImg || !divider) return;

  let isDragging = false;

  // Sync after-image fixed width with container width
  const syncWidth = () => {
    const width = container.offsetWidth;
    afterImg.style.width = `${width}px`;
  };

  window.addEventListener('resize', syncWidth);
  syncWidth();

  const setPosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;
    container.style.setProperty('--ba-split', `${percent}%`);
    afterWrap.style.clipPath = `inset(0 calc(100% - ${percent}%) 0 0)`;
    afterWrap.style.webkitClipPath = `inset(0 calc(100% - ${percent}%) 0 0)`;
    divider.style.left = `${percent}%`;
    divider.setAttribute('aria-valuenow', Math.round(percent).toString());
  };

  // Mouse / Pointer events
  container.addEventListener('pointerdown', (e) => {
    isDragging = true;
    container.setPointerCapture(e.pointerId);
    setPosition(e.clientX);
  });

  container.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    setPosition(e.clientX);
  });

  container.addEventListener('pointerup', (e) => {
    isDragging = false;
    try { container.releasePointerCapture(e.pointerId); } catch (err) {}
  });

  container.addEventListener('pointercancel', () => {
    isDragging = false;
  });

  // Keyboard Accessibility
  divider.setAttribute('tabindex', '0');
  divider.setAttribute('role', 'slider');
  divider.setAttribute('aria-label', 'Before and after roof repair comparison slider');
  divider.setAttribute('aria-valuemin', '0');
  divider.setAttribute('aria-valuemax', '100');
  divider.setAttribute('aria-valuenow', '50');

  divider.addEventListener('keydown', (e) => {
    const rect = container.getBoundingClientRect();
    const currentPercent = parseFloat(divider.style.left) || 50;
    let newPercent = currentPercent;

    if (e.key === 'ArrowLeft') newPercent = Math.max(0, currentPercent - 5);
    else if (e.key === 'ArrowRight') newPercent = Math.min(100, currentPercent + 5);
    else return;

    e.preventDefault();
    container.style.setProperty('--ba-split', `${newPercent}%`);
    afterWrap.style.clipPath = `inset(0 calc(100% - ${newPercent}%) 0 0)`;
    afterWrap.style.webkitClipPath = `inset(0 calc(100% - ${newPercent}%) 0 0)`;
    divider.style.left = `${newPercent}%`;
    divider.setAttribute('aria-valuenow', Math.round(newPercent).toString());
  });
}

/* ==========================================================================
   4. PROJECT GALLERY FILTER
   ========================================================================== */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (!filterBtns.length || !galleryCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. INTERACTIVE ROOFING COST ESTIMATOR
   ========================================================================== */
function initRoofingCalculator() {
  const calcContainer = document.querySelector('.calculator-card');
  if (!calcContainer) return;

  const propertyOptions = calcContainer.querySelectorAll('[data-calc-property]');
  const serviceOptions = calcContainer.querySelectorAll('[data-calc-service]');
  const resultDisplay = calcContainer.querySelector('.calc-result-range');
  const quoteBtn = calcContainer.querySelector('.btn-calc-apply');

  let selectedProperty = 'semi';
  let selectedService = 'repair';

  // Base estimates matrix (in GBP £) based on British trade averages
  const pricingMatrix = {
    'terraced': {
      'repair': '£180 – £450',
      'ridge': '£350 – £750',
      'reroof': '£3,800 – £5,500',
      'flat': '£1,100 – £2,200',
      'roofline': '£800 – £1,500'
    },
    'semi': {
      'repair': '£200 – £550',
      'ridge': '£450 – £950',
      'reroof': '£4,800 – £6,800',
      'flat': '£1,300 – £2,600',
      'roofline': '£1,100 – £1,900'
    },
    'detached': {
      'repair': '£250 – £650',
      'ridge': '£550 – £1,200',
      'reroof': '£6,500 – £9,800',
      'flat': '£1,600 – £3,400',
      'roofline': '£1,500 – £2,800'
    },
    'flat-garage': {
      'repair': '£180 – £380',
      'ridge': '£250 – £450',
      'reroof': '£2,200 – £3,800',
      'flat': '£950 – £1,850',
      'roofline': '£600 – £1,100'
    }
  };

  const updateEstimate = () => {
    const range = pricingMatrix[selectedProperty]?.[selectedService] || '£250 – £600';
    if (resultDisplay) {
      resultDisplay.textContent = range;
    }
  };

  propertyOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      propertyOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedProperty = opt.getAttribute('data-calc-property');
      updateEstimate();
    });
  });

  serviceOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      serviceOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedService = opt.getAttribute('data-calc-service');
      updateEstimate();
    });
  });

  // When clicking "Claim This Written Quote", smoothly scroll to contact form and pre-fill
  if (quoteBtn) {
    quoteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceSelect = document.getElementById('enquiry-service');
      const msgArea = document.getElementById('enquiry-message');
      const contactSection = document.getElementById('contact');

      if (serviceSelect) {
        // Map service value to select option
        if (selectedService === 'repair') serviceSelect.value = 'Roof Repair / Leaks';
        else if (selectedService === 'reroof') serviceSelect.value = 'New Roof / Re-Roofing';
        else if (selectedService === 'flat') serviceSelect.value = 'Flat Roofing (EPDM / Felt)';
        else if (selectedService === 'ridge') serviceSelect.value = 'Lead Work & Chimney';
        else if (selectedService === 'roofline') serviceSelect.value = 'Fascias, Soffits & Gutters';
      }

      if (msgArea) {
        msgArea.value = `Hi Elmdon Roofing, I used your online estimator for my ${selectedProperty} property and would like a formal site inspection for ${selectedService}.`;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  updateEstimate();
}

/* ==========================================================================
   6. REVIEWS CAROUSEL
   ========================================================================== */
function initReviewsCarousel() {
  const track = document.querySelector('.reviews-track');
  const prevBtn = document.querySelector('.rev-prev');
  const nextBtn = document.querySelector('.rev-next');
  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.querySelectorAll('.review-slide');
  if (slides.length <= 1) return;

  let currentIndex = 0;

  const updateSlide = () => {
    const isDesktop = window.innerWidth >= 768;
    const maxIndex = isDesktop ? Math.max(0, slides.length - 2) : slides.length - 1;
    
    if (currentIndex > maxIndex) currentIndex = 0;
    if (currentIndex < 0) currentIndex = maxIndex;

    const slideWidth = slides[0].offsetWidth + 24; // width + gap
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlide();
  });

  window.addEventListener('resize', updateSlide);
}

/* ==========================================================================
   7. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others for clean UX
      faqItems.forEach(other => {
        other.classList.remove('active');
        const btn = other.querySelector('.faq-question');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   8. HIGH-CONVERTING CONTACT / ENQUIRY FORM
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('roofing-enquiry-form');
  if (!form) return;

  const statusMsg = document.getElementById('form-status');
  const fileInput = document.getElementById('photo-upload');
  const previewZone = document.getElementById('file-preview-list');

  // Photo upload preview
  if (fileInput && previewZone) {
    fileInput.addEventListener('change', () => {
      previewZone.innerHTML = '';
      const files = Array.from(fileInput.files);
      if (!files.length) return;

      files.forEach(file => {
        const pill = document.createElement('span');
        pill.className = 'preview-pill';
        const sizeKb = Math.round(file.size / 1024);
        pill.textContent = `📷 ${file.name} (${sizeKb} KB)`;
        previewZone.appendChild(pill);
      });
    });
  }

  // Submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Spam honeypot check
    const honeypot = form.querySelector('input[name="website_hp"]');
    if (honeypot && honeypot.value.trim() !== '') {
      return; // Silently drop bot
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Request';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Enquiry...';
    }

    // Simulate reliable dispatch
    setTimeout(() => {
      if (statusMsg) {
        statusMsg.className = 'form-status-msg success';
        statusMsg.innerHTML = `
          <strong>Thank you! Your quote request has been received.</strong><br>
          One of our Birmingham roofing specialists will call or WhatsApp you on the number provided within 1 business hour.
        `;
        statusMsg.style.display = 'block';
      }

      form.reset();
      if (previewZone) previewZone.innerHTML = '';

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '✓ Enquiry Submitted';
      }
    }, 900);
  });
}
