/**
 * QUALITY ROOFERS LTD — 7-STEP INTERACTIVE QUOTE ENGINE
 * Provides step-by-step guidance, property diagnostics, file-upload simulation,
 * validation, and dynamic tender summary generation.
 */

class ArchitecturalQuoteWizard {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.currentStep = 1;
    this.totalSteps = 7;
    this.formData = {
      service: "Roof Replacement",
      propertyType: "Residential Detached",
      postcode: "",
      timeline: "Within 2 Weeks",
      files: [],
      contactMethod: "Phone & Email Tender",
      fullName: "",
      phone: "",
      email: "",
      notes: ""
    };

    this.init();
  }

  init() {
    this.bindOptionSelectors();
    this.bindNavigationButtons();
    this.bindDropzone();
    this.bindFormInputs();
    this.updateUI();
  }

  bindOptionSelectors() {
    const choiceButtons = this.container.querySelectorAll('.wizard-choice-btn');
    choiceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.wizard-options-grid');
        const field = group.getAttribute('data-field');
        const value = btn.getAttribute('data-value');

        group.querySelectorAll('.wizard-choice-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        if (field) {
          this.formData[field] = value;
          this.updateSummaryPreview();
        }
      });
    });
  }

  bindNavigationButtons() {
    const nextBtns = this.container.querySelectorAll('[data-wizard-next]');
    const prevBtns = this.container.querySelectorAll('[data-wizard-prev]');
    const submitBtn = this.container.querySelector('#wizardSubmitBtn');

    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => this.nextStep());
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => this.prevStep());
    });

    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.submitQuote();
      });
    }

    // Step nodes jump click (only to visited steps)
    const stepNodes = this.container.querySelectorAll('.wizard-step-node');
    stepNodes.forEach(node => {
      node.addEventListener('click', () => {
        const targetStep = parseInt(node.getAttribute('data-step'), 10);
        if (targetStep < this.currentStep) {
          this.goToStep(targetStep);
        }
      });
    });
  }

  bindDropzone() {
    const dropzone = this.container.querySelector('#quoteDropzone');
    const fileInput = this.container.querySelector('#quoteFileInput');
    const filesList = this.container.querySelector('#uploadedFilesList');

    if (!dropzone || !fileInput) return;

    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--copper-primary)';
      dropzone.style.backgroundColor = 'rgba(200, 122, 56, 0.1)';
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.style.borderColor = 'var(--border-medium)';
      dropzone.style.backgroundColor = 'transparent';
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--border-medium)';
      dropzone.style.backgroundColor = 'transparent';
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        this.handleFiles(e.dataTransfer.files, filesList);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        this.handleFiles(fileInput.files, filesList);
      }
    });
  }

  handleFiles(files, listElement) {
    if (!listElement) return;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.formData.files.push(file.name);
      
      const badge = document.createElement('div');
      badge.className = 'uploaded-file-pill';
      badge.style.cssText = 'display: inline-flex; align-items: center; gap: 0.5rem; background: var(--bg-tertiary); border: 1px solid var(--border-medium); padding: 0.35rem 0.75rem; border-radius: 4px; font-size: 0.8rem; margin: 0.4rem 0.4rem 0 0; color: #fff; font-family: var(--font-mono);';
      badge.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
        <span>${file.name}</span>
        <span style="color: #4ade80;">✓</span>
      `;
      listElement.appendChild(badge);
    }
  }

  bindFormInputs() {
    const postcodeIn = this.container.querySelector('#wizardPostcodeInput');
    if (postcodeIn) {
      postcodeIn.addEventListener('input', (e) => {
        this.formData.postcode = e.target.value.toUpperCase();
        this.updateSummaryPreview();
      });
    }

    const nameIn = this.container.querySelector('#wizardFullName');
    if (nameIn) {
      nameIn.addEventListener('input', (e) => {
        this.formData.fullName = e.target.value;
        this.updateSummaryPreview();
      });
    }

    const phoneIn = this.container.querySelector('#wizardPhone');
    if (phoneIn) {
      phoneIn.addEventListener('input', (e) => {
        this.formData.phone = e.target.value;
      });
    }

    const emailIn = this.container.querySelector('#wizardEmail');
    if (emailIn) {
      emailIn.addEventListener('input', (e) => {
        this.formData.email = e.target.value;
      });
    }

    const notesIn = this.container.querySelector('#wizardNotes');
    if (notesIn) {
      notesIn.addEventListener('input', (e) => {
        this.formData.notes = e.target.value;
      });
    }
  }

  validateCurrentStep() {
    if (this.currentStep === 3) {
      const postcodeIn = this.container.querySelector('#wizardPostcodeInput');
      if (!postcodeIn || !postcodeIn.value.trim()) {
        alert("Please enter your property postcode or postal area.");
        postcodeIn?.focus();
        return false;
      }
      this.formData.postcode = postcodeIn.value.trim().toUpperCase();
    }
    return true;
  }

  nextStep() {
    if (!this.validateCurrentStep()) return;
    if (this.currentStep < this.totalSteps) {
      this.goToStep(this.currentStep + 1);
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.goToStep(this.currentStep - 1);
    }
  }

  goToStep(stepNumber) {
    this.currentStep = stepNumber;
    this.updateUI();
    this.updateSummaryPreview();

    // Scroll smoothly to wizard top
    this.container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  updateUI() {
    // Update step panels
    const panels = this.container.querySelectorAll('.wizard-step-panel');
    panels.forEach(p => {
      const pStep = parseInt(p.getAttribute('data-step'), 10);
      if (pStep === this.currentStep) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // Update progress nodes
    const nodes = this.container.querySelectorAll('.wizard-step-node');
    nodes.forEach(n => {
      const nStep = parseInt(n.getAttribute('data-step'), 10);
      n.classList.remove('active', 'completed');
      if (nStep === this.currentStep) {
        n.classList.add('active');
      } else if (nStep < this.currentStep) {
        n.classList.add('completed');
      }
    });

    // Update progress fill bar
    const fill = this.container.querySelector('.wizard-progress-fill');
    if (fill) {
      const percent = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
      fill.style.width = `${percent}%`;
    }
  }

  updateSummaryPreview() {
    const sumService = this.container.querySelector('#sumService');
    const sumProperty = this.container.querySelector('#sumProperty');
    const sumPostcode = this.container.querySelector('#sumPostcode');
    const sumTimeline = this.container.querySelector('#sumTimeline');

    if (sumService) sumService.textContent = this.formData.service || "Roofing Service";
    if (sumProperty) sumProperty.textContent = this.formData.propertyType || "Residential";
    if (sumPostcode) sumPostcode.textContent = this.formData.postcode || "CR8 (Kenley / Surrey)";
    if (sumTimeline) sumTimeline.textContent = this.formData.timeline || "Standard Schedule";
  }

  submitQuote() {
    const nameIn = this.container.querySelector('#wizardFullName');
    const phoneIn = this.container.querySelector('#wizardPhone');
    const emailIn = this.container.querySelector('#wizardEmail');

    if (!nameIn?.value.trim() || (!phoneIn?.value.trim() && !emailIn?.value.trim())) {
      alert("Please provide your name and at least one contact channel (phone or email) so our surveyors can reach you.");
      return;
    }

    this.formData.fullName = nameIn.value.trim();
    this.formData.phone = phoneIn.value.trim();
    this.formData.email = emailIn.value.trim();

    // Generate unique reference code
    const refId = `QR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const confirmationPanel = this.container.querySelector('#wizardConfirmation');
    const formPanels = this.container.querySelector('#wizardFormArea');

    if (formPanels) formPanels.style.display = 'none';
    if (confirmationPanel) {
      confirmationPanel.style.display = 'block';
      const refElement = confirmationPanel.querySelector('#confirmedRefId');
      if (refElement) refElement.textContent = refId;

      const confService = confirmationPanel.querySelector('#confService');
      const confProperty = confirmationPanel.querySelector('#confProperty');
      const confPostcode = confirmationPanel.querySelector('#confPostcode');

      if (confService) confService.textContent = this.formData.service;
      if (confProperty) confProperty.textContent = this.formData.propertyType;
      if (confPostcode) confPostcode.textContent = this.formData.postcode;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('quoteWizard')) {
    window.quoteWizard = new ArchitecturalQuoteWizard('quoteWizard');
  }
});
