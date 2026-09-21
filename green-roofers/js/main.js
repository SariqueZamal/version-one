/**
 * GREEN ROOFERS LTD — MASTER INTERACTION ENGINE
 * High-End Architecture Studio & Living Infrastructure Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initBigIdeaObserver();
  initAudienceTabs();
  initProjectPortfolio();
  initBeforeAfterSlider();
  initLayerCutawayExplorer();
  initProjectEstimator();
  initCinematicCanvas();
  initSmoothScroll();
});

/* -------------------------------------------------------------------------- */
/* 1. STICKY HEADER & SCROLL BEHAVIOR                                         */
/* -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.header');
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

/* -------------------------------------------------------------------------- */
/* 2. MOBILE NAVIGATION DRAWER                                                */
/* -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  const toggleMenu = () => {
    const isOpen = overlay.classList.contains('open');
    if (isOpen) {
      overlay.classList.remove('open');
      toggleBtn.classList.remove('open');
      document.body.style.overflow = '';
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      overlay.classList.add('open');
      toggleBtn.classList.add('open');
      document.body.style.overflow = 'hidden';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  };

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('open');
      toggleBtn.classList.remove('open');
      document.body.style.overflow = '';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      toggleMenu();
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 3. SECTION 2: THE BIG IDEA SCROLL OBSERVER                                 */
/* -------------------------------------------------------------------------- */
function initBigIdeaObserver() {
  const statementItems = document.querySelectorAll('.statement-item');
  if (!statementItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statementItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('active');
          }, index * 260);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  const triggerSection = document.querySelector('#big-idea');
  if (triggerSection) {
    observer.observe(triggerSection);
  }
}

/* -------------------------------------------------------------------------- */
/* 4. SECTION 4: AUDIENCE TABS SWITCHER                                       */
/* -------------------------------------------------------------------------- */
function initAudienceTabs() {
  const tabButtons = document.querySelectorAll('.audience-tab-btn');
  const tabPanels = document.querySelectorAll('.audience-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetAudience = btn.getAttribute('data-audience');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`audience-${targetAudience}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 5. SECTION 5: PROJECT SHOWCASE & MODAL DRAWER                              */
/* -------------------------------------------------------------------------- */
const PROJECT_DATABASE = {
  'white-collar-factory': {
    title: 'White Collar Factory',
    location: 'Old Street, Silicon Roundabout, London EC1Y',
    clientType: 'Commercial Tech & Innovation Hub',
    system: 'Extensive & Biodiverse Living Roof',
    size: '1,450 m²',
    role: 'Specialist Green Roof Design, Supply & Precision Installation',
    summary: 'Derwent London\'s flagship sustainable office building by AHMM architects. Green Roofers Ltd engineered an ecologically-rich extensive rooftop landscape seamlessly integrated with the iconic 150-metre elevated rooftop running track, offering exceptional panoramic London views, urban biodiversity, and advanced stormwater retention.',
    specs: [
      { label: 'Planting System', value: 'Pre-grown Sedum & Native Wildflower Mix' },
      { label: 'Substrate Depth', value: '110 mm Engineered Lightweight Substrate' },
      { label: 'Water Retention', value: '78% Stormwater Runoff Absorption' },
      { label: 'Building Level', value: 'Level 16 Rooftop Terrace' }
    ],
    image: 'https://greenroofers.co.uk/wp-content/uploads/2019/02/asset-1.jpeg'
  },
  'biosolar-pv-array': {
    title: 'Biosolar Commercial PV Array',
    location: 'Central London',
    clientType: 'Commercial Renewable Infrastructure',
    system: 'Biosolar Sedum + Photovoltaic Integration',
    size: '850 m²',
    role: 'Supply & Combined Biosolar Installation',
    summary: 'A dual-functioning living roof combining high-efficiency solar photovoltaic panels with drought-resistant sedum. The living plants naturally maintain ambient surface temperatures around 25°C, preventing PV panel overheating and significantly boosting solar energy conversion efficiency.',
    specs: [
      { label: 'Plant Palette', value: 'Sedum album, Sedum acre, Sedum reflexum' },
      { label: 'Substrate Depth', value: '80 mm with Acicular Drainage Cups' },
      { label: 'PV Synergy', value: 'Ambient ~25°C Peak Performance' },
      { label: 'Weight Load', value: '95 kg/m² saturated' }
    ],
    image: 'https://greenroofers.co.uk/wp-content/uploads/2015/01/green-roof-solar-panels.jpg'
  },
  'intensive-terrace-garden': {
    title: 'Intensive Rooftop Garden & Terrace',
    location: 'Finchley & Greater London',
    clientType: 'Private Architectural Residence',
    system: 'Intensive Living Roof Garden',
    size: '420 m²',
    role: 'Ecological Design, Landscape Supply & Full Installation',
    summary: 'Replicating a natural ground-level garden on a reinforced structural concrete roof deck. Features deep nutrient-rich substrate supporting ornamental grasses, flowering shrubs, small fruit trees, timber pathways, and an automated drip-irrigation aftercare system.',
    specs: [
      { label: 'Planting System', value: 'Shrubs, Perennials, Native Forbs & Small Trees' },
      { label: 'Substrate Depth', value: '300 mm Intensive Engineered Soil' },
      { label: 'Irrigation', value: 'Automated Micro-Drip with Rain Sensors' },
      { label: 'Maintenance', value: 'Quarterly Specialist Aftercare Contract' }
    ],
    image: 'https://greenroofers.co.uk/wp-content/uploads/2014/03/intensive-rooftop-garden.jpg'
  },
  'pitched-sedum-chalet': {
    title: 'Pitched Architectural Sedum Roof',
    location: 'Surrey / London Border',
    clientType: 'Eco-Living Residential Build',
    system: 'Pitched Extensive Sedum with Geocellular Retention',
    size: '310 m²',
    role: 'Specialist Pitch Engineering, Supply & Installation',
    summary: 'Engineered for a 28° pitched architectural timber roof. Incorporates geocellular slope-stabilisation grids and structural retention battens to prevent substrate slippage while ensuring uniform rainwater distribution across the incline.',
    specs: [
      { label: 'Pitch Angle', value: '28° Slope Angle' },
      { label: 'Retention System', value: 'Geocellular Underlayment & Retention Battens' },
      { label: 'Vegetation', value: 'Pre-cultivated Reinforced Sedum Carpets' },
      { label: 'Guarantee', value: '20-Year Watertight & System Guarantee' }
    ],
    image: 'https://greenroofers.co.uk/wp-content/uploads/2015/01/pitched-sedum-green-roof.jpg'
  },
  'biodiverse-brown-habitat': {
    title: 'Biodiverse Invertebrate Sanctuary',
    location: 'Docklands, London',
    clientType: 'Urban Regeneration Scheme',
    system: 'Biodiverse Brown Roof',
    size: '960 m²',
    role: 'Ecological Consultancy, Supply & Installation',
    summary: 'Designed specifically to satisfy strict Local Authority Biodiversity Net Gain (BNG) policies. Utilises recycled crushed brick, gravel mounds, and deadwood logs to replicate brownfield habitats for rare bees, beetles, and native urban bird species.',
    specs: [
      { label: 'Habitat Elements', value: 'Deadwood logs, gravel mounds, rubble topography' },
      { label: 'Flora Selection', value: 'Native drought-tolerant pioneer wildflowers' },
      { label: 'Planning Policy', value: 'Accelerated UGF & BNG Approval' },
      { label: 'Target Species', value: 'Black Redstart & solitary bees' }
    ],
    image: 'https://greenroofers.co.uk/wp-content/uploads/2014/03/biodiverse-green-roofs-650x385.jpg'
  },
  'plug-planted-terrace': {
    title: 'Plug-Planted Microclimate Roof',
    location: 'Camden, London',
    clientType: 'Architectural Studio Extension',
    system: 'Custom Plug-Planted Green Roof',
    size: '180 m²',
    role: 'Botanical Layout, Supply & Precision Planting',
    summary: 'Installed on a rooftop with restricted crane access. Delivered using lightweight manual hoisting and hand-planted with over 3,000 individually selected plug plants tailored to partial shade and chimney microclimates.',
    specs: [
      { label: 'Installation Method', value: 'Hand Plug-Planting (20 plugs / m²)' },
      { label: 'Establishment Period', value: 'Full dense coverage within 9 months' },
      { label: 'Edge Detail', value: 'Cobbled river pebble fire-break border' },
      { label: 'Drainage', value: 'Acicular reservoir cups with geotextile fleece' }
    ],
    image: 'https://greenroofers.co.uk/wp-content/uploads/2015/02/tree-planting.jpg'
  }
};

function initProjectPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.querySelector('.project-modal-backdrop');
  const modalClose = document.querySelector('.modal-close-btn');

  if (!projectCards.length) return;

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || category.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Open
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const data = PROJECT_DATABASE[projectId];
      if (data && modal) {
        populateProjectModal(data);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Modal Close
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

function populateProjectModal(data) {
  const container = document.querySelector('.modal-dynamic-content');
  if (!container) return;

  let specsHtml = '';
  data.specs.forEach(s => {
    specsHtml += `
      <div style="background: #F7F5F0; padding: 1rem 1.25rem; border-radius: 8px; border: 1px solid #E5E1D5;">
        <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: #68716A; margin-bottom: 0.25rem;">${s.label}</div>
        <div style="font-size: 0.95rem; font-weight: 600; color: #151815;">${s.value}</div>
      </div>
    `;
  });

  container.innerHTML = `
    <div style="position: relative; height: 380px; overflow: hidden; border-top-left-radius: 24px; border-top-right-radius: 24px;">
      <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
      <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; background: rgba(8,22,15,0.85); backdrop-filter: blur(10px); color: #F7F5F0; padding: 0.5rem 1.25rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">
        ${data.system}
      </div>
    </div>
    <div style="padding: clamp(2rem, 4vw, 3rem);">
      <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #79A354; letter-spacing: 0.14em; margin-bottom: 0.5rem;">
        ${data.location}
      </div>
      <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom: 1rem; color: #151815;">
        ${data.title}
      </h2>
      <p style="font-size: 1.05rem; line-height: 1.7; color: #2A302B; margin-bottom: 2rem;">
        ${data.summary}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
        ${specsHtml}
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; justify-content: space-between; border-top: 1px solid #E5E1D5; padding-top: 1.5rem;">
        <div style="font-size: 0.85rem; color: #68716A;">
          <strong>Role:</strong> ${data.role}
        </div>
        <a href="#estimator" class="btn btn-primary btn-sm" onclick="document.querySelector('.project-modal-backdrop').classList.remove('open'); document.body.style.overflow='';">
          Enquire About Similar Project →
        </a>
      </div>
    </div>
  `;
}

/* -------------------------------------------------------------------------- */
/* 6. SECTION 6: BEFORE / AFTER TRANSFORMATION SLIDER                         */
/* -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
  const container = document.querySelector('.before-after-wrap');
  const beforeLayer = document.querySelector('.ba-before-layer');
  const handle = document.querySelector('.ba-slider-handle');

  if (!container || !beforeLayer || !handle) return;

  let isDragging = false;

  const updateContainerWidth = () => {
    const rect = container.getBoundingClientRect();
    container.style.setProperty('--ba-container-width', `${rect.width}px`);
  };

  window.addEventListener('resize', updateContainerWidth);
  updateContainerWidth();

  const setPosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;

    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percent = (offsetX / rect.width) * 100;
    beforeLayer.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;
  };

  // Mouse events
  handle.addEventListener('mousedown', () => { isDragging = true; });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setPosition(e.clientX);
  });

  // Touch events (iPhone / iPad / Android)
  const onTouchStart = (e) => {
    isDragging = true;
    if (e.touches && e.touches[0]) {
      setPosition(e.touches[0].clientX);
    }
  };

  handle.addEventListener('touchstart', onTouchStart, { passive: true });
  container.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchcancel', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    setPosition(e.touches[0].clientX);
  }, { passive: true });

  // Click on container
  container.addEventListener('click', (e) => {
    setPosition(e.clientX);
  });
}

/* -------------------------------------------------------------------------- */
/* 7. SECTION 7: INTERACTIVE GREEN ROOF 7-LAYER CUTAWAY EXPLORER              */
/* -------------------------------------------------------------------------- */
const LAYER_DATA = [
  {
    num: '01',
    name: 'Vegetation Layer',
    depth: '25 – 40 mm',
    title: 'Living Canopy & Flowering Sedum Blanket',
    desc: 'Pre-grown sedum blankets, plug-plants, or biodiverse seed mixes comprising drought-tolerant succulents, wildflowers, and native grasses. Traps airborne dust, absorbs carbon dioxide, cools the ambient rooftop microclimate, and provides immediate biophilic visual impact.',
    thickness: '25 - 40 mm',
    weight: '15 - 25 kg/m²',
    function: 'Photosynthesis, Urban Cooling & Biodiversity'
  },
  {
    num: '02',
    name: 'Engineered Growing Medium (Substrate)',
    depth: '80 – 350 mm',
    title: 'Engineered Volcanic & Organic Substrate',
    desc: 'A scientifically formulated lightweight growing medium manufactured from crushed pumice, expanded clay, and organic matter. Unlike ordinary topsoil, it resists compaction, retains optimal moisture for roots, drains excess rain rapidly, and conforms to FLL green roof guidelines.',
    thickness: '80 - 150 mm (Extensive) / Up to 350 mm (Intensive)',
    weight: '80 - 180 kg/m² saturated',
    function: 'Root Anchoring, Moisture Buffering & Nutrient Supply'
  },
  {
    num: '03',
    name: 'Filter Geotextile Fleece',
    depth: '1 – 2 mm',
    title: 'Non-Woven Thermally Bonded Filter Layer',
    desc: 'A high-tensile, non-woven geotextile fabric situated directly beneath the substrate. It allows rainwater to freely infiltrate downwards into the drainage core while preventing fine substrate particles from washing down and clogging the reservoir outlets.',
    thickness: '1.2 mm',
    weight: '130 g/m²',
    function: 'Substrate Retention & Hydraulic Filtration'
  },
  {
    num: '04',
    name: 'Drainage & Water Retention Base',
    depth: '20 – 40 mm',
    title: 'Acicular Dimpled Reservoir Drainage Core',
    desc: 'Custom-moulded recycled polymeric drainage boards featuring cups that hold reservoir water for the plants during dry spells. Surplus stormwater overflows through perforation channels and is safely routed to roof outlets, attenuating peak rainfall discharge by up to 80%.',
    thickness: '20 - 40 mm',
    weight: '1.1 kg/m²',
    function: 'Retention Storage, Free Aeration & Controlled Drainage'
  },
  {
    num: '05',
    name: 'Root Barrier Membrane',
    depth: '0.8 – 1.2 mm',
    title: 'Specialist Root Infiltration Barrier',
    desc: 'For membranes that are not inherently root-resistant (such as standard bituminous membranes), a specially engineered polymeric barrier is laid to prevent aggressive roots and rhizomes from penetrating or degrading the waterproofing structure.',
    thickness: '1.0 mm',
    weight: '1.05 kg/m²',
    function: 'Complete Root Penetration Defense'
  },
  {
    num: '06',
    name: 'Waterproof Membrane',
    depth: '2 – 4 mm',
    title: 'Certified Waterproofing System (Tested)',
    desc: 'The vital barrier of the building envelope—single-ply EPDM, hot-melt bituminous build-up, or seamless liquid-applied polyurethane. Green Roofers insists on electronic vector leak testing prior to green layer installation to ensure a 100% watertight seal.',
    thickness: '2.0 - 4.5 mm',
    weight: '2.5 - 5.0 kg/m²',
    function: 'Impermeable Building Envelope Shield'
  },
  {
    num: '07',
    name: 'Structural Roof Deck & Insulation',
    depth: 'Variable',
    title: 'Reinforced Deck Structure & Thermal Layer',
    desc: 'The building superstructure: reinforced in-situ concrete slab, profile metal decking, or heavy-duty timber deck. Incorporates rigid insulation (warm roof or inverted roof design) calculated to meet modern UK Part L thermal building regulations.',
    thickness: '150 - 300 mm Structural Slab',
    weight: 'Structural Load Rated',
    function: 'Load Bearing & Building Thermal Efficiency'
  }
];

function initLayerCutawayExplorer() {
  const layerBars = document.querySelectorAll('.layer-bar');
  const cardNum = document.querySelector('.layer-detail-num');
  const cardTitle = document.querySelector('.layer-detail-title');
  const cardDesc = document.querySelector('.layer-detail-desc');
  const specThickness = document.querySelector('#spec-thickness');
  const specWeight = document.querySelector('#spec-weight');
  const specFunction = document.querySelector('#spec-function');

  if (!layerBars.length || !cardTitle) return;

  layerBars.forEach((bar, index) => {
    bar.addEventListener('click', () => {
      layerBars.forEach(b => b.classList.remove('active'));
      bar.classList.add('active');

      const data = LAYER_DATA[index];
      if (data) {
        cardNum.textContent = `Layer ${data.num} / 07`;
        cardTitle.textContent = data.title;
        cardDesc.textContent = data.desc;
        if (specThickness) specThickness.textContent = data.thickness;
        if (specWeight) specWeight.textContent = data.weight;
        if (specFunction) specFunction.textContent = data.function;
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 8. SECTION 11: INTERACTIVE PROJECT ESTIMATOR & INTAKE FORM                 */
/* -------------------------------------------------------------------------- */
function initProjectEstimator() {
  const areaSlider = document.getElementById('roofAreaSlider');
  const areaDisplay = document.getElementById('areaDisplay');
  const systemSelect = document.getElementById('systemTypeSelect');
  const estWeight = document.getElementById('estWeight');
  const estWater = document.getElementById('estWater');
  const form = document.getElementById('specificationForm');
  const successBanner = document.getElementById('formSuccessBanner');

  if (!areaSlider || !areaDisplay) return;

  const calculateEstimates = () => {
    const area = parseInt(areaSlider.value, 10);
    areaDisplay.textContent = `${area} m²`;

    const system = systemSelect ? systemSelect.value : 'extensive';

    let weightMultiplier = 95; // kg/m²
    let waterRetentionFactor = 0.75;

    switch (system) {
      case 'extensive':
        weightMultiplier = 90;
        waterRetentionFactor = 0.78;
        break;
      case 'semi-intensive':
        weightMultiplier = 160;
        waterRetentionFactor = 0.82;
        break;
      case 'intensive':
        weightMultiplier = 280;
        waterRetentionFactor = 0.88;
        break;
      case 'biodiverse':
        weightMultiplier = 110;
        waterRetentionFactor = 0.75;
        break;
      case 'biosolar':
        weightMultiplier = 120;
        waterRetentionFactor = 0.76;
        break;
    }

    // Weight in tonnes or kg
    const totalWeightKg = area * weightMultiplier;
    const totalTonnes = (totalWeightKg / 1000).toFixed(1);
    if (estWeight) {
      estWeight.textContent = `~${totalWeightKg.toLocaleString()} kg (${totalTonnes} tonnes saturated)`;
    }

    // Water retained in UK per year (assuming 650mm average rainfall)
    // Litres = area * 650 * factor
    const annualWaterLitres = Math.round(area * 650 * waterRetentionFactor);
    if (estWater) {
      estWater.textContent = `~${annualWaterLitres.toLocaleString()} Litres / Year`;
    }
  };

  areaSlider.addEventListener('input', calculateEstimates);
  if (systemSelect) {
    systemSelect.addEventListener('change', calculateEstimates);
  }

  calculateEstimates();

  // Form Submission handling
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Transmitting Specification...';
      }

      setTimeout(() => {
        if (successBanner) {
          successBanner.style.display = 'block';
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        form.reset();
        calculateEstimates();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Specification Transmitted Successfully ✓';
        }
      }, 1000);
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 9. SECTION 10: AMBIENT BOTANICAL SEED / PARTICLE CANVAS                    */
/* -------------------------------------------------------------------------- */
function initCinematicCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let particles = [];
  let isVisible = false;

  const resize = () => {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  };

  window.addEventListener('resize', resize);
  resize();

  class SeedParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.5 + 1;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = Math.random() * -0.6 - 0.2;
      this.opacity = Math.random() * 0.5 + 0.15;
      this.wobble = Math.random() * Math.PI * 2;
      this.wobbleSpeed = Math.random() * 0.02 + 0.01;
    }

    update() {
      this.wobble += this.wobbleSpeed;
      this.x += this.speedX + Math.sin(this.wobble) * 0.3;
      this.y += this.speedY;

      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset();
        this.y = canvas.height + 10;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(148, 187, 84, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Generate 45 light organic spore particles
  for (let i = 0; i < 45; i++) {
    particles.push(new SeedParticle());
  }

  const loop = () => {
    if (!isVisible) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animationId = requestAnimationFrame(loop);
  };

  // Pause canvas when offscreen for performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible = true;
        loop();
      } else {
        isVisible = false;
        cancelAnimationFrame(animationId);
      }
    });
  }, { threshold: 0.1 });

  const parentSection = canvas.closest('.cinematic-statement-section');
  if (parentSection) {
    observer.observe(parentSection);
  }
}

/* -------------------------------------------------------------------------- */
/* 10. SMOOTH SCROLL FOR IN-PAGE ANCHORS                                      */
/* -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
