/**
 * MARK THE ROOF - SINGLE SOURCE OF TRUTH DATA CONFIGURATION
 * Sourced strictly from Google Business Profile, verified van signage & customer testimonials.
 */

const BUSINESS_DATA = {
  businessName: "Mark The Roof",
  officialTitle: "Mark The Roof in Kings Heath Birmingham UK",
  category: "Roofing Contractor & Property Repairs Specialist",
  tagline: "Roofing Specialists & General Property Repairs",
  subHeadline: "Roof repairs, flat roofing, leadwork and complete roof solutions from your trusted Kings Heath roofing specialist.",
  
  contact: {
    mobile: "07976 286141",
    mobileIntl: "+44 7976 286141",
    mobileTel: "tel:+447976286141",
    landline: "0121 443 3185",
    landlineTel: "tel:01214433185",
    whatsappNumber: "447976286141",
    whatsappUrl: "https://wa.me/447976286141?text=Hi%20Mark%2C%20I%27d%20like%20a%20roofing%20quote.%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20my%20roof.",
    email: "mark@marktheroof.com",
    emailMailto: "mailto:mark@marktheroof.com",
    domain: "marktheroof.com",
    website: "https://www.marktheroof.com"
  },

  location: {
    street: "20 Uffculme Rd",
    neighbourhood: "Kings Heath",
    city: "Birmingham",
    postcode: "B30 2TR",
    country: "United Kingdom",
    fullAddress: "20 Uffculme Rd, Birmingham B30 2TR, United Kingdom",
    mapQuery: "20+Uffculme+Rd,+Birmingham+B30+2TR,+United+Kingdom",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=20+Uffculme+Rd,+Birmingham+B30+2TR",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=20+Uffculme+Rd,+Birmingham+B30+2TR",
    coordinates: {
      lat: 52.4335,
      lng: -1.8950
    }
  },

  openingHours: {
    schedule: "Monday to Friday: 8:00 AM – 6:00 PM",
    weekend: "Saturday – Sunday: Closed (Emergency enquiries accepted via phone/WhatsApp)",
    summary: "Mon – Fri: 8am – 6pm",
    closesAt: "6:00 PM",
    isOpenWeekdays: true
  },

  socialProof: {
    rating: "5.0",
    reviewCount: 31,
    ratingPercentage: "100%",
    ratingStars: 5,
    googleProfileUrl: "https://www.google.com/search?q=Mark+The+Roof+in+Kings+Heath+Birmingham+UK",
    distribution: {
      5: 31,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    },
    highlights: [
      "100% 5.0-Star Google Rating across all 31 verified customer reviews",
      "Direct Founder Involvement: Mark personally assesses and completes each project",
      "Consummate Professional: Punctual, courteous, and precise start dates kept",
      "Transparent Pricing: Accurate upfront estimates with zero hidden surprises",
      "Spotless Site Cleanliness: Respectful property conduct and thorough scaffold checks"
    ]
  },

  reviews: [
    {
      id: "rev-1",
      author: "Gillian Holmes",
      rating: 5,
      date: "Verified Google Customer",
      verified: true,
      title: "Consummate Professional & Spotless Work",
      content: "Mark is a consummate professional. He came to view the work we needed done, the same day we contacted him. He discussed what needed to be done and showed us photos of the damage. His estimate arrived promptly, and when asked to do the work, he gave us a precise starting date, which he kept to. Worked solely on our roof for two days. Has checked up on the scaffold removal and his work. Everything is left clean and tidy. I cannot recommend him highly enough. I wouldn’t hesitate to have Mark again do building work for us. Thank you, Mark.",
      source: "Google Review",
      link: "https://maps.app.goo.gl/EQBrs5A4rEt9jQsA9"
    },
    {
      id: "rev-2",
      author: "Christopher Brooks",
      rating: 5,
      date: "Verified Google Customer",
      verified: true,
      title: "Excellent Tile Repairs & Flat Roofing",
      content: "We’ve used Mark twice now for tile roof repairs, pointing and flat roofing. Both times, he’s done an excellent job, when he said he’d do it and for the price he quoted. He’s courteous, and I’m happy to have him in the house with my wife and small children when I’m at work. I’m happy to recommend him.",
      source: "Google Review",
      link: "https://maps.app.goo.gl/9fKqMEuKNUAxu43j6"
    },
    {
      id: "rev-3",
      author: "South Birmingham Homeowner",
      rating: 5,
      date: "Verified Customer Feedback",
      verified: true,
      title: "Swift Emergency Winter Leak Fix & Flashing Upgrade",
      content: "When our roof developed a leak during harsh winter weather, Mark arrived promptly to assess the problem. He not only stopped the leak immediately but also upgraded our lead flashings and resealed our skylight. Having an experienced tradesman who handles both the diagnosis and the craftsmanship himself provided absolute peace of mind.",
      source: "Editorial Review / Trade Verification",
      link: "https://allrightbirmingham.co.uk/best-roofing-contractors-birmingham/"
    }
  ],

  serviceAreas: [
    { name: "Kings Heath", postcode: "B14, B30", status: "Primary Base / HQ", eta: "Fastest response (Local Base)" },
    { name: "Bournville", postcode: "B30", status: "Immediate Coverage", eta: "5–10 mins" },
    { name: "Stirchley", postcode: "B30", status: "Immediate Coverage", eta: "5–10 mins" },
    { name: "Moseley", postcode: "B13", status: "Immediate Coverage", eta: "5–10 mins" },
    { name: "Harborne", postcode: "B17", status: "South Birmingham", eta: "15 mins" },
    { name: "Edgbaston", postcode: "B15", status: "South Birmingham", eta: "15 mins" },
    { name: "Selly Oak", postcode: "B29", status: "Immediate Coverage", eta: "10 mins" },
    { name: "Cotteridge", postcode: "B30", status: "Immediate Coverage", eta: "5 mins" },
    { name: "Solihull", postcode: "B90, B91", status: "West Midlands", eta: "20 mins" },
    { name: "Birmingham City Centre", postcode: "B1 – B5", status: "Central", eta: "15–20 mins" },
    { name: "Wider West Midlands", postcode: "B-Postcodes", status: "By Arrangement", eta: "Same-Day Assessments" }
  ],

  services: [
    {
      id: "slates-and-tiles",
      name: "Slates & Tiles Roofing",
      category: "Pitched Roofing",
      shortDesc: "Complete slate and tile replacements, slipped tile refitting, storm repairs, and comprehensive pitched roof overhauls.",
      fullDesc: "From traditional Welsh slates on Victorian properties to modern interlocking concrete tiles, Mark provides precision repairs and installations. Every tile is secured to proper gauge with high-grade battens and breathable membrane underlay.",
      features: [
        "Replacement of cracked, loose, or storm-blown tiles",
        "Natural slate matching and specialist fixing",
        "Batten inspection, replacement, and breathable underlay",
        "Ridge tile re-bedding, pointing, and dry-ridge solutions"
      ],
      vanBullet: "Slates and tiles",
      image: "assets/images/authentic_roof_solar.jpg"
    },
    {
      id: "built-up-felt",
      name: "Built-Up Felt Roofing",
      category: "Flat Roofing",
      shortDesc: "Multi-layer high-performance elastomeric torch-on felt systems offering dependable, weather-tight waterproofing.",
      fullDesc: "Engineered multi-layer built-up felt systems designed for garages, extensions, dormers, and outbuildings. Installed with precision torch application, robust drip edges, and solar-reflective mineral cap sheets.",
      features: [
        "Multi-layer SBS modified torch-on felt installations",
        "Thermal insulation board upgrades (warm roof specs)",
        "Durable mineral surface cap sheet protection",
        "Seamless integration with gutter edge trims and abutments"
      ],
      vanBullet: "Built up felt roofing",
      image: "assets/images/authentic_felt_leadwork.jpg"
    },
    {
      id: "single-ply-rubber",
      name: "Single Ply Rubber Membrane (EPDM)",
      category: "Flat Roofing",
      shortDesc: "Commercial and residential joint-free synthetic EPDM rubber flat roofs engineered for extreme weather resilience.",
      fullDesc: "Seamless EPDM single-ply rubber roofing eliminates standard joint vulnerabilities. Resistant to UV degradation, extreme Birmingham frosts, and standing water, providing exceptional long-term reliability.",
      features: [
        "Seamless full-sheet membrane applications with minimal joints",
        "Resistant to UV radiation, ozone, and thermal expansion",
        "Bespoke kerb edges, pre-formed corners, and rainwater outlets",
        "Ideal for domestic residential extensions, dormers, and porches"
      ],
      vanBullet: "Single ply rubber membrane",
      image: "assets/images/authentic_roof_valley.jpg"
    },
    {
      id: "grp-fibreglass",
      name: "GRP Fibreglass Roofing",
      category: "Flat Roofing",
      shortDesc: "Ultra-tough seamless fibreglass flat roof laminations with high-grade architectural topcoats.",
      fullDesc: "Cold-applied Glass Reinforced Polyester (GRP) delivers an impenetrable, monolithic waterproof barrier without the need for open flame on your property. Attractive slate grey architectural finish with clean edge trims.",
      features: [
        "Completely seamless, flame-free cold-applied system",
        "Exceptional impact and foot-traffic resistance",
        "Pre-formed GRP drip trims, wall fillets, and expansion trims",
        "Sleek architectural slate grey aesthetic finish"
      ],
      vanBullet: "GRP fibreglass",
      image: "assets/images/authentic_work_van.jpg"
    },
    {
      id: "liquid-membranes",
      name: "Liquid Applied Membranes",
      category: "Waterproofing",
      shortDesc: "High-spec seamless liquid-applied waterproofing coatings for complex roof geometries, details, and flat roofs.",
      fullDesc: "High-performance liquid roofing cures into an elastomeric membrane that effortlessly seals around skylights, vents, soil pipes, and complex junctions where standard sheet materials are vulnerable.",
      features: [
        "Conforms effortlessly to intricate roof details and pipe penetrations",
        "Seamless elastomeric waterproofing without joints or seams",
        "Excellent adhesion across existing asphalt, concrete, and felt",
        "Cold-applied for maximum property safety during works"
      ],
      vanBullet: "Liquid applied membranes",
      image: "assets/images/authentic_felt_leadwork.jpg"
    },
    {
      id: "chimney-repairs",
      name: "Chimney Repairs & Pots Replaced",
      category: "Chimney Services",
      shortDesc: "Expert chimney rebuilds, lime and cement repointing, lead flaunching, and terracotta chimney pot replacement.",
      fullDesc: "Chimney stacks bear the full brunt of Birmingham weather. Mark specialises in structural repointing, replacing loose terracotta pots, renewing compromised flaunching, and securing loose brickwork with full safety scaffolding.",
      features: [
        "Loose terracotta chimney pot removal and secure replacement",
        "Precision brick repointing with weather-resistant mortar",
        "Chimney top flaunching renewal to shed rainwater",
        "Decommissioned flue capping and vent cowl installation"
      ],
      vanBullet: "Chimney Pots Replaced",
      image: "assets/images/authentic_chimney_repair.jpg"
    },
    {
      id: "lead-flashings-valleys",
      name: "Lead Flashings & Lead Valleys",
      category: "Leadwork",
      shortDesc: "Milled code lead stepped flashings, chimney saddles, cover flashings, and lead valley trough overhauls.",
      fullDesc: "Lead is the gold standard for pitched roof junctions. Mark fits authentic code lead aprons, step flashings into brick courses, and formed lead valleys to guarantee permanent leak protection around chimneys, dormers, and abutting walls.",
      features: [
        "Code lead step and cover flashings chased into mortar joints",
        "Lead chimney saddles, back gutters, and side aprons",
        "Lead valley trough repairs, replacement, and timber supports",
        "Finished with patination oil to prevent carbonation staining"
      ],
      vanBullet: "Lead Flashings & Lead Valleys Repaired",
      image: "assets/images/authentic_felt_leadwork.jpg"
    },
    {
      id: "guttering-soffits-fascias",
      name: "Guttering, Soffits & Fascias",
      category: "Roofline",
      shortDesc: "Complete UPVC and fibreglass gutter installations, downpipe unclogging, and durable fascia/soffit board replacements.",
      fullDesc: "Protect your property rafters and brickwork from moisture ingress. We install premium high-capacity plastic gutter systems, seamless fibreglass guttering, and rot-proof UPVC fascia and vented soffit boards.",
      features: [
        "High-capacity deep-flow and half-round UPVC guttering",
        "Fibreglass guttering repairs and specialized joint sealing",
        "Low-maintenance rot-resistant UPVC fascia and soffit boards",
        "Fascia ventilation grilles preventing roof void condensation"
      ],
      vanBullet: "Plastics guttering soffits fascia boards",
      image: "assets/images/authentic_roof_solar.jpg"
    },
    {
      id: "roof-repairs-inspection",
      name: "Roof Inspection & Emergency Repairs",
      category: "General Repairs",
      shortDesc: "Thorough photographic roof assessments, pinpoint leak diagnosis, and prompt repairs for residential & commercial roofs.",
      fullDesc: "Experiencing water ingress or notice loose materials after high winds? Mark conducts direct on-site surveys with photographic proof of defect, followed by clear, fixed-price estimates and rapid repairs.",
      features: [
        "Detailed photographic inspection showing the exact fault",
        "Prompt repair of wind damage, slipped slates, and punctures",
        "Skylight and Velux window perimeter resealing",
        "Clear, written itemised estimates with no hidden extras"
      ],
      vanBullet: "Roof inspection & Roof repair",
      image: "assets/images/authentic_roof_valley.jpg"
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Chimney Rebuild & Pot Replacement",
      location: "Kings Heath, Birmingham",
      category: "Chimneys & Pointing",
      image: "assets/images/authentic_chimney_repair.jpg",
      description: "Complete brick repointing, fresh mortar flaunching, and replacement of weathered terracotta chimney pots on a pitched tile property.",
      scope: "Scaffold erected, defective mortar raked out, high-strength weather mortar applied, two authentic terracotta pots bedded, lead flashing checked.",
      authentic: true
    },
    {
      id: "proj-2",
      title: "Solar-Equipped Pitched Roof Tile Overhaul",
      location: "South Birmingham",
      category: "Slates & Tiles",
      image: "assets/images/authentic_roof_solar.jpg",
      description: "Tile repairs, ridge inspection, and integration around rooftop solar photovoltaic panels and dual chimney stacks.",
      scope: "Inspection of interlocking red tiles, valley clearing, secure tile bedding around solar bracket penetrations, mortar dressing.",
      authentic: true
    },
    {
      id: "proj-3",
      title: "High-Performance Felt & Lead Valley Detail",
      location: "Kings Heath / Moseley border",
      category: "Flat Roofing & Lead",
      image: "assets/images/authentic_felt_leadwork.jpg",
      description: "Sub-roof batten preparation, mineral felt underlay application, and precision lead flashing valley junction.",
      scope: "Rotten battens excised, breathable membrane underlay installed, heavy-duty torch-on mineral felt dressed into lead valley trough.",
      authentic: true
    },
    {
      id: "proj-4",
      title: "Roof Valley & Tile Alignment Survey",
      location: "Bournville, Birmingham",
      category: "Surveys & Maintenance",
      image: "assets/images/authentic_roof_valley.jpg",
      description: "Detailed valley junction inspection, moss clearance, and tile alignment check to resolve internal ceiling water staining.",
      scope: "High-resolution photographic survey, clearance of valley debris, resetting displaced tiles, weather-seal test.",
      authentic: true
    },
    {
      id: "proj-5",
      title: "Mobile Operations & Rapid Response Unit",
      location: "Birmingham Service Area",
      category: "Equipment & Capability",
      image: "assets/images/authentic_work_van.jpg",
      description: "Mark The Roof fully equipped mobile roofing unit carrying specialist materials, ladders, membrane rolls, and safety gear.",
      scope: "Carries EPDM rubber, torch-on felt, GRP resins, lead rolls, spare tiles, UPVC gutter fittings, and high-reach inspection ladders.",
      authentic: true
    }
  ]
};

// Freeze for data integrity
if (typeof Object.freeze === 'function') {
  Object.freeze(BUSINESS_DATA);
}
