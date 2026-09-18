/**
 * MARK THE ROOF - INTERACTIVE ARCHITECTURAL SCRIPT
 * Manages responsive navigation, hero image switcher, portfolio lightbox,
 * live UK opening status, quote calculation, and WhatsApp dispatch.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveHours();
  initHeader();
  initMobileNav();
  initHeroMedia();
  initPortfolioFilters();
  initLightbox();
  initQuoteForm();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. LIVE UK OPENING HOURS STATUS
   -------------------------------------------------------------------------- */
function initLiveHours() {
  const statusBadge = document.getElementById('liveOpeningStatus');
  if (!statusBadge) return;

  // Compute UK Time
  const now = new Date();
  const ukTimeString = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
  const ukDate = new Date(ukTimeString);
  const day = ukDate.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
  const hour = ukDate.getHours();
  const minute = ukDate.getMinutes();
  const currentMinutes = hour * 60 + minute;

  const openMinutes = 8 * 60;   // 08:00
  const closeMinutes = 18 * 60; // 18:00

  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    statusBadge.innerHTML = `
      <span class="pulse-dot" style="background-color: #25D366; box-shadow: 0 0 6px #25D366;"></span>
      <span style="color: #25D366;">Open Now</span> · Closes 6:00 PM
    `;
  } else if (isWeekday && currentMinutes < openMinutes) {
    statusBadge.innerHTML = `
      <span class="pulse-dot" style="background-color: #F59E0B;"></span>
      Opens Today at 8:00 AM
    `;
  } else {
    statusBadge.innerHTML = `
      <span class="pulse-dot" style="background-color: #FFA585;"></span>
      Emergency Calls & WhatsApp Active
    `;
  }
}

/* --------------------------------------------------------------------------
   2. STICKY HEADER SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  const closeMenu = () => {
    navMenu.classList.remove('open');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });

  // Close when clicking nav links
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking drawer contact buttons
  navMenu.querySelectorAll('.drawer-contact-btn').forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on window resize beyond mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080 && navMenu.classList.contains('open')) {
      closeMenu();
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. HERO IMAGE INTERACTIVE SWITCHER
   -------------------------------------------------------------------------- */
function initHeroMedia() {
  const mainPhoto = document.getElementById('heroMainPhoto');
  const tagLabel = document.getElementById('heroPhotoTagLabel');
  const thumbBtns = document.querySelectorAll('.hero-thumb-btn');
  if (!mainPhoto || !thumbBtns.length) return;

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const newSrc = btn.dataset.src;
      const newTag = btn.dataset.tag;

      mainPhoto.style.opacity = '0.4';
      setTimeout(() => {
        mainPhoto.src = newSrc;
        if (tagLabel) tagLabel.textContent = newTag;
        mainPhoto.style.opacity = '1';
      }, 150);
    });
  });
}

/* --------------------------------------------------------------------------
   5. PORTFOLIO FILTER TABS
   -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  if (!filterBtns.length || !projectItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.dataset.filter;

      projectItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (filterCategory === 'all' || itemCategory === filterCategory) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. ACCESSIBLE IMAGE LIGHTBOX
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const projectCards = document.querySelectorAll('.project-item, .project-card');

  if (!modal || !lightboxImg) return;

  function openLightbox(src, title, desc) {
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.project-title')?.textContent || 'Completed Roofing Project';
      const desc = card.querySelector('.project-desc')?.textContent || '';
      if (img) {
        openLightbox(img.src, title, desc);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------------
   7. HIGH-CONVERSION QUOTE INTAKE FORM
   -------------------------------------------------------------------------- */
function initQuoteForm() {
  const form = document.getElementById('roofQuoteForm');
  const confirmation = document.getElementById('quoteConfirmation');
  const fileInput = document.getElementById('photoUploadInput');
  const uploadDropzone = document.getElementById('uploadDropzone');
  const uploadText = document.getElementById('uploadText');

  if (uploadDropzone && fileInput) {
    uploadDropzone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        uploadText.textContent = `${fileInput.files.length} photograph(s) selected for inspection`;
        uploadDropzone.style.borderColor = '#25D366';
        uploadDropzone.style.backgroundColor = 'rgba(37, 211, 102, 0.08)';
      }
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="customer_name"]')?.value || 'Homeowner';
    const phone = form.querySelector('[name="customer_phone"]')?.value || '';
    const postcode = form.querySelector('[name="customer_postcode"]')?.value || 'Birmingham';
    const service = form.querySelector('[name="service_required"]')?.value || 'Roof Repair';
    const description = form.querySelector('[name="problem_description"]')?.value || '';

    // Simulate swift dispatch
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"/>
        </svg>
        Transmitting Enquiry to Mark...
      `;
    }

    setTimeout(() => {
      form.style.display = 'none';
      if (confirmation) {
        confirmation.classList.add('visible');
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Update WhatsApp quick-link with pre-filled details
        const waLink = document.getElementById('waConfirmLink');
        if (waLink) {
          const text = encodeURIComponent(`Hi Mark, I have submitted an online quote request.\nName: ${name}\nPhone: ${phone}\nPostcode: ${postcode}\nService: ${service}\nDetails: ${description}`);
          waLink.href = `https://wa.me/447976286141?text=${text}`;
        }
      }
    }, 900);
  });
}

/* --------------------------------------------------------------------------
   8. SMOOTH SCROLL & QUOTE FORM CENTERING REDIRECT
   -------------------------------------------------------------------------- */
function scrollToQuoteForm() {
  const targetEl = document.getElementById('roofQuoteForm') ||
                   document.getElementById('online-request') ||
                   document.getElementById('quote');
  if (targetEl) {
    targetEl.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    // Gently focus the first input for convenience
    const firstInput = targetEl.querySelector('input, select');
    if (firstInput && document.activeElement !== firstInput) {
      setTimeout(() => {
        firstInput.focus({ preventScroll: true });
      }, 400);
    }
    return true;
  }
  return false;
}

function initSmoothScroll() {
  // Check if page loaded with #quote, #online-request, or #roofQuoteForm hash
  const initialHash = window.location.hash;
  if (initialHash === '#quote' || initialHash === '#online-request' || initialHash === '#roofQuoteForm') {
    setTimeout(() => {
      scrollToQuoteForm();
    }, 250);
  }

  // Intercept all quote buttons to center the Online Request form
  document.querySelectorAll('.header-quote-btn, .quote-btn, a[href="#quote"], a[href="#online-request"], a[href="#roofQuoteForm"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (scrollToQuoteForm()) {
        e.preventDefault();
        try {
          history.pushState(null, null, '#quote');
        } catch (err) {}
      }
    });
  });

  // Handle general internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      if (targetId === '#quote' || targetId === '#online-request' || targetId === '#roofQuoteForm') {
        if (scrollToQuoteForm()) {
          e.preventDefault();
          return;
        }
      }

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

