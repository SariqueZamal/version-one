/**
 * QUALITY ROOFERS LTD — CENTRAL CMS-READY DATA REPOSITORY
 * Architectural Roofing, Engineering Specs, Case Studies & Knowledge Base
 * 
 * VERIFIED BUSINESS DATA:
 * - Founded: 2000 (26+ Years of Proven Roofing Heritage)
 * - Freephone: 0800 915 3205 / +44 0800 915 3205
 * - Primary Service Area: Kenley, England (Surrey, Croydon, Purley, Coulsdon & Greater London)
 * - Official Emblem: 5-Star Double Roof Crest with Royal Blue & Warm Architectural Gold
 */

const QR_DATA = {
  company: {
    name: "Quality Roofers Ltd",
    legalStatus: "Quality Roofers Ltd (Private Roofing Specialists)",
    founded: 2000,
    experienceYears: "26+ Years",
    registeredOffice: "Kenley, Surrey / Greater London, England",
    tradingAddress: "Kenley, England, UK",
    phone: "0800 915 3205",
    phoneRaw: "+448009153205",
    phoneIntl: "+44 0800 915 3205",
    emergencyPhone: "0800 915 3205",
    email: "info@qualityroofersltd.co.uk",
    logoPath: "assets/images/logo.png",
    serviceAreas: [
      "Kenley, England (Primary Hub)",
      "Purley, Coulsdon & Caterham",
      "Croydon, Bromley & South London",
      "Surrey & Greater London Envelopes"
    ],
    projectsCompleted: "3,500+",
    insuranceLiability: "£5,000,000 to £10,000,000 Comprehensive Public & Employers' Liability",
    guarantees: "10 to 25 Years Underwritten Workmanship & System Warranties"
  },

  trustStats: [
    {
      value: "26+ Yrs",
      label: "Heritage Since 2000",
      caption: "Founded in 2000 · Over a quarter-century of master roofing"
    },
    {
      value: "5-Star",
      label: "Guild Craftsmanship",
      caption: "Endorsed 5-star standard across Kenley & Surrey"
    },
    {
      value: "10–25 Yrs",
      label: "Underwritten Warranties",
      caption: "Multi-decade structural guarantee on new roofs & replacements"
    },
    {
      value: "Freephone",
      label: "0800 915 3205",
      caption: "Direct surveyor consultation & fast local Kenley response"
    }
  ],

  // Full breakdown of the 16 verified specialties
  specialties: [
    {
      id: "roofing-general",
      title: "Architectural Roofing",
      category: "Core Construction",
      desc: "Complete structural envelope engineering for residential and commercial properties in Kenley and Surrey. Built to British Standards BS 5534.",
      icon: "roof"
    },
    {
      id: "roof-repair",
      title: "Precision Roof Repairs",
      category: "Remediation",
      desc: "Targeted structural repairs for slipped slates, storm displacement, and concealed timber decay with prompt same-day make-safe triage.",
      icon: "repair"
    },
    {
      id: "roof-replacement",
      title: "Complete Roof Replacement",
      category: "Core Construction",
      desc: "Comprehensive strip down to rafters, timber preservation treatment, high-tensile breathable underlay, and new slate or tile coverings.",
      icon: "replacement"
    },
    {
      id: "leak-detection",
      title: "Leak Detection & Repairs",
      category: "Diagnostics",
      desc: "Advanced forensic water-testing and moisture tracing to pinpoint elusive ingress points behind chimneys, dormers, and valleys before internal rot occurs.",
      icon: "leak"
    },
    {
      id: "pitched-roofs",
      title: "Pitched Roofs",
      category: "Pitched Systems",
      desc: "Traditional and contemporary pitched roofs engineered with C24 timber trusses, counter-batten ventilation voids, and interlocking architectural tiles.",
      icon: "pitched"
    },
    {
      id: "flat-roofs",
      title: "Flat Roofs (EPDM & GRP)",
      category: "Flat Systems",
      desc: "Monolithic, joint-free synthetic rubber (EPDM) and seamless GRP fibreglass systems with warm-roof insulation schemes to eradicate standing water.",
      icon: "flatroof"
    },
    {
      id: "felting",
      title: "High-Performance Felting",
      category: "Flat Systems",
      desc: "Multi-layer elastomeric torch-on mineral felt systems with SBS polymer modifiers, delivering high puncture resistance and flexible weathering.",
      icon: "felting"
    },
    {
      id: "slates-and-tiling",
      title: "Slates & Tiling",
      category: "Coverings",
      desc: "Master installation of authentic Welsh and Spanish natural slates, hand-made clay tiles, and modern interlocking concrete tiles fixed with copper ring nails.",
      icon: "slate"
    },
    {
      id: "ridge-hip-tiles",
      title: "Ridge Tiles & Hip Tiles",
      category: "Capping & Weathering",
      desc: "Mechanical dry-fix ridge and hip systems and traditional lime mortar bedding ensuring extreme wind uplift resistance along critical roof apexes.",
      icon: "ridge"
    },
    {
      id: "lead-flashing",
      title: "Lead Flashing Repairs & Replacement",
      category: "Metalwork",
      desc: "BS EN 12588 Code 4 & 5 milled lead dressed to chimneys, dormer cheeks, and abutments, treated with patination oil to prevent oxidation.",
      icon: "lead"
    },
    {
      id: "chimney-repointing",
      title: "Chimney Repointing & Stacks",
      category: "Structural Masonry",
      desc: "Complete chimney stack dismantling, brick replacement, hydraulic lime repointing, anti-downdraught cowls, and lead damp-proof trays.",
      icon: "chimney"
    },
    {
      id: "valley-gutters",
      title: "Valley Gutters",
      category: "Drainage",
      desc: "Handcrafted Code 5 lead valleys and high-flow GRP dry valleys engineered to channel intense rainwater volumes smoothly into guttering.",
      icon: "valley"
    },
    {
      id: "fascias-soffits",
      title: "Fascia & Soffit Repairs – Replacement or Covering",
      category: "Roofline",
      desc: "Marine-grade timber, high-impact cellular uPVC fascia replacements, over-fascia ventilation strips, and decorative soffit boarding.",
      icon: "fascia"
    },
    {
      id: "moss-removal-cleaning",
      title: "Moss Removal & Roof Cleaning",
      category: "Maintenance",
      desc: "Gentle manual scraping and biocidal wash treatments that eliminate moss and lichen without damaging delicate tile surfaces or pressure-washing granular coatings.",
      icon: "cleaning"
    },
    {
      id: "conservatory-solar-cleaning",
      title: "Conservatory Roof & Solar Panel Cleaning",
      category: "Specialist Care",
      desc: "Pure de-ionised water purification cleaning for glass and polycarbonate conservatory roofs and photovoltaic solar arrays, restoring 100% solar efficiency.",
      icon: "solar"
    },
    {
      id: "new-roofs",
      title: "New Roofs (Bespoke Construction)",
      category: "Core Construction",
      desc: "Ground-up architectural roofs for extensions, residential conversions, and bespoke new properties built to exceed Building Regulations Part L.",
      icon: "newroof"
    }
  ],

  projects: [
    {
      id: "project-kenley-heritage",
      title: "Kenley Private Estate Slate & Lead Restoration",
      category: "Slates & Tiling",
      location: "Kenley, England (Surrey)",
      year: "2024",
      scope: "Complete Welsh Slate Strip & Re-Roof, Code 5 Lead Flashings, Dry-Fix Ridge System",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
      challenge: "Historic Victorian villa in Kenley with nail fatigue, deteriorating lime mortar along hip ridges, and dampness around twin chimney stacks.",
      approach: "Erected edge protection, replaced decaying timber battens with BS 5534 treated laths, re-hung Welsh slates with copper fixings, and re-cast Code 5 lead trays around chimneys.",
      result: "Pristine historical restoration, eliminating all moisture ingress with a 25-year written structural guarantee.",
      specs: {
        "Location": "Kenley, England",
        "Covering": "Welsh Penrhyn S1 Slate",
        "Leadwork": "BS EN 12588 Code 5 Milled Lead",
        "Ventilation": "Eaves-to-Ridge Air Permeable Membrane"
      }
    },
    {
      id: "project-purley-villa",
      title: "Purley Luxury Villa Monolithic Flat Roof & Solar Integration",
      category: "Flat Roofs",
      location: "Purley, Surrey (Near Kenley)",
      year: "2024",
      scope: "Seamless EPDM Rubber Flat Roof, Warm-Roof PIR Insulation & Solar Array Pre-Fit",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
      challenge: "Aging bitumen flat roof suffering from severe water ponding over a modern rear extension and kitchen terrace.",
      approach: "Engineered tapered PIR insulation falls (1:60), laid a monolithic 1.52mm EPDM synthetic rubber membrane, and cleaned the adjacent glass conservatory roof.",
      result: "100% zero-ponding performance, superior U-value thermal retention, and a 20-year underwritten guarantee.",
      specs: {
        "Location": "Purley / Kenley Corridor",
        "Membrane": "1.52mm Commercial EPDM Vulcanized Rubber",
        "Insulation": "120mm Kingspan Rigid PIR (0.18 U-Value)",
        "Warranty": "20-Year Underwritten Workmanship"
      }
    },
    {
      id: "project-caterham-chimney",
      title: "Caterham Hill Chimney Rebuild & Valley Gutters",
      category: "Chimney Repointing",
      location: "Caterham, Surrey",
      year: "2023",
      scope: "Twin Chimney Repointing, Code 4 Lead Step Flashings, GRP High-Flow Valley Gutters",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      challenge: "Cracked chimney haunching and porous mortar causing dampness to percolate down through first-floor bedrooms during westerly gales.",
      approach: "Raked out failed mortar, repointed with hydraulic lime mix (NHL 3.5), installed anti-downdraught terracotta cowls, and renewed deteriorated lead soakers.",
      result: "Completely watertight chimney envelope; client praised clean site management and clear pricing.",
      specs: {
        "Location": "Caterham, Surrey",
        "Mortar": "Natural Hydraulic Lime NHL 3.5",
        "Lead Flashings": "Code 4 Patinated Lead Soakers",
        "Valleys": "High-Flow Reinforced Valleys"
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  window.QR_DATA = QR_DATA;
}
