/**
 * QUALITY ROOFERS LTD — INTERACTIVE BEFORE / AFTER SLIDER
 * Supports mouse drag, touch swipe, keyboard navigation & scenario toggle.
 */

class BeforeAfterSlider {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.afterLayer = this.container.querySelector('.comparison-after-layer');
    this.afterImg = this.afterLayer ? this.afterLayer.querySelector('img') : null;
    this.beforeImg = this.container.querySelector('.comparison-image-layer img');
    this.handle = this.container.querySelector('.comparison-slider-handle');
    this.isDragging = false;
    this.positionPercent = 50;

    // Scenarios data
    this.scenarios = {
      slate: {
        before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        after: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
        labelBefore: "Original Deteriorated Slating & Fractured Mortar",
        labelAfter: "Restored Welsh Penrhyn Slate & Code 5 Lead Valleys",
        caption: "Case Study: Heritage Estate Restoration — Kenley & Surrey Hills, UK"
      },
      flatroof: {
        before: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
        after: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
        labelBefore: "Porous Degraded Mineral Felt with Severe Ponding",
        labelAfter: "Monolithic 1.52mm EPDM Rubber with Tapered Insulation Falls",
        caption: "Case Study: Commercial Logistics Flat Roof Envelope — Greater London Corridor"
      }
    };

    this.init();
  }

  init() {
    this.updateSlider(50);

    // Mouse Events
    this.handle.addEventListener('mousedown', (e) => this.startDrag(e));
    window.addEventListener('mouseup', () => this.stopDrag());
    window.addEventListener('mousemove', (e) => this.onDrag(e));

    // Touch Events (passive: false to prevent background scroll interference during drag)
    this.handle.addEventListener('touchstart', (e) => this.startDrag(e), { passive: false });
    window.addEventListener('touchend', () => this.stopDrag());
    window.addEventListener('touchmove', (e) => this.onDrag(e), { passive: false });

    // Keyboard Accessibility
    this.handle.setAttribute('tabindex', '0');
    this.handle.setAttribute('role', 'slider');
    this.handle.setAttribute('aria-label', 'Before and after comparison slider');
    this.handle.setAttribute('aria-valuenow', '50');
    this.handle.setAttribute('aria-valuemin', '0');
    this.handle.setAttribute('aria-valuemax', '100');

    this.handle.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        this.updateSlider(Math.max(0, this.positionPercent - 5));
        e.preventDefault();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        this.updateSlider(Math.min(100, this.positionPercent + 5));
        e.preventDefault();
      }
    });

    // Resize sync to keep image width synchronized
    window.addEventListener('resize', () => this.syncDimensions());
    this.syncDimensions();

    // Scenario Switchers
    const scenarioBtns = document.querySelectorAll('.comparison-tab-btn');
    scenarioBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        scenarioBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const scenarioKey = btn.getAttribute('data-scenario');
        this.switchScenario(scenarioKey);
      });
    });
  }

  startDrag(e) {
    this.isDragging = true;
    this.container.classList.add('is-dragging');
    if (e.type.startsWith('touch')) {
      e.stopPropagation();
    } else {
      e.preventDefault();
    }
  }

  stopDrag() {
    if (this.isDragging) {
      this.isDragging = false;
      this.container.classList.remove('is-dragging');
    }
  }

  onDrag(e) {
    if (!this.isDragging) return;

    let clientX = e.clientX;
    if (e.type.startsWith('touch')) {
      clientX = e.touches[0].clientX;
    }

    const rect = this.container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    let percent = (offsetX / rect.width) * 100;

    percent = Math.max(0, Math.min(100, percent));
    this.updateSlider(percent);
  }

  updateSlider(percent) {
    this.positionPercent = percent;
    if (this.afterLayer) {
      this.afterLayer.style.width = `${percent}%`;
    }
    if (this.handle) {
      this.handle.style.left = `${percent}%`;
      this.handle.setAttribute('aria-valuenow', Math.round(percent));
    }
    this.syncDimensions();
  }

  syncDimensions() {
    if (this.container && this.afterImg) {
      const containerWidth = this.container.offsetWidth;
      this.afterImg.style.width = `${containerWidth}px`;
    }
  }

  switchScenario(key) {
    const data = this.scenarios[key];
    if (!data) return;

    if (this.beforeImg) this.beforeImg.src = data.before;
    if (this.afterImg) this.afterImg.src = data.after;

    const badgeBefore = this.container.querySelector('.badge-before');
    const badgeAfter = this.container.querySelector('.badge-after');
    const infoText = document.getElementById('comparison-caption');

    if (badgeBefore) badgeBefore.textContent = "BEFORE";
    if (badgeAfter) badgeAfter.textContent = "AFTER";
    if (infoText) infoText.textContent = data.caption;

    this.updateSlider(50);
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('beforeAfterSlider')) {
    window.mainSlider = new BeforeAfterSlider('beforeAfterSlider');
  }
});
