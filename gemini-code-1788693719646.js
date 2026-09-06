/* ==========================================================================
   KRISHNA PHARMA - MASTER CONFIGURATION
   Edit your business details, services, and medicines in this section.
   ========================================================================== */

const PHARMA_CONFIG = {
  // Business Basics
  businessName: "KRISHNA PHARMA",
  licenceNumber: "RLF20BR2026001372",
  tagline: "Retail Pharmacy & Healthcare",
  summary: "Reliable pharmacy providing genuine prescription medicines, baby care, surgical items, and emergency support in Bhagwanpur Desua, Samastipur.",

  // Contact Information
  phone: "+91 99349 76337",
  phoneNumeric: "919934976337", // Digits only with country code for links
  email: "kmprasad69@gmail.com",
  
  // Location & Map
  address: "RR4Q+PWP Medicine Store, Desua, Bishunpur Sahthu, Bihar 848132",
  locality: "Bhagwanpur Desua, Ujiarpur, Samastipur, Bihar",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=RR4Q%2BPWP+Medicine+Store+Desua+Bishunpur+Sahthu+Bihar+848132",

  // Working Timings
  dailyOpeningTime: "Opens at 6:00 AM every day",
  storeTimings: "6:00 AM – 10:00 PM (Every Day)",
  emergencySupport: "24×7 Emergency Support Available",

  // Services List
  services: [
    {
      icon: "💊",
      title: "Prescription Medicines",
      desc: "All branded and quality generic medicines dispensed according to registered medical prescriptions."
    },
    {
      icon: "🩹",
      title: "First Aid & Surgical Goods",
      desc: "Bandages, sterile dressings, antiseptics, syringes, IV sets, and immediate wound-care products."
    },
    {
      icon: "👶",
      title: "Baby & Mother Care",
      desc: "Infant nutrition, diapers, baby skincare, hygienic wipes, and maternal healthcare supplements."
    },
    {
      icon: "🩺",
      title: "Health Monitoring Devices",
      desc: "Digital blood pressure monitors, glucometers with strips, vaporizers, and thermometers."
    },
    {
      icon: "📲",
      title: "WhatsApp Prescription Order",
      desc: "Upload a picture of your prescription on WhatsApp to keep your medicines packed and ready for quick pickup."
    },
    {
      icon: "🚨",
      title: "24×7 Emergency Supply",
      desc: "Immediate on-call availability for urgent and life-saving medications day or night."
    }
  ],

  // Medicine & Category Directory
  medicines: [
    {
      icon: "🌿",
      name: "OTC & General Wellness",
      category: "Pain relief, antacids, digestive syrups, cough lozenges, and seasonal cold remedies."
    },
    {
      icon: "❤️",
      name: "Chronic Care Medicines",
      category: "Authentic medicines for hypertension, diabetes, cardiac care, thyroid, and cholesterol."
    },
    {
      icon: "🧴",
      name: "Derma & Personal Hygiene",
      category: "Medicated soaps, anti-fungal powders, skin creams, sanitizers, and antiseptic lotions."
    },
    {
      icon: "⚡",
      name: "Vitamins & Nutritional Supplements",
      category: "Multivitamins, Calcium D3, Protein powders, iron supplements, and immunity boosters."
    }
  ]
};

/* ==========================================================================
   PAGE INITIALIZATION (Do not alter unless modifying structure)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderBusinessDetails();
  renderServices();
  renderMedicines();
  initMobileMenu();
});

// Populate all data fields dynamically
function renderBusinessDetails() {
  const cfg = PHARMA_CONFIG;

  // Header & Brand Elements
  document.getElementById("nav-store-name").textContent = cfg.businessName;
  document.getElementById("footer-store-name").textContent = cfg.businessName;
  document.getElementById("footer-copyright-name").textContent = cfg.businessName;

  // Licence Numbers
  document.getElementById("card-licence-no").textContent = cfg.licenceNumber;
  document.getElementById("about-licence").textContent = cfg.licenceNumber;
  document.getElementById("footer-licence").textContent = cfg.licenceNumber;

  // Timings
  document.getElementById("daily-timings").textContent = cfg.storeTimings;
  document.getElementById("emergency-timings").textContent = cfg.emergencySupport;

  // Contact Info Elements
  document.getElementById("contact-address").textContent = cfg.address;
  document.getElementById("contact-phone").textContent = cfg.phone;
  document.getElementById("contact-email").textContent = cfg.email;
  document.getElementById("footer-location-brief").textContent = cfg.locality;
  document.getElementById("footer-phone-brief").textContent = cfg.phone;
  document.getElementById("footer-email-brief").textContent = cfg.email;

  // URLs and Links
  const phoneHref = `tel:${cfg.phoneNumeric}`;
  const waOrderText = encodeURIComponent(`Hello ${cfg.businessName}, I would like to inquire about medicines / send my prescription.`);
  const waHref = `https://wa.me/${cfg.phoneNumeric}?text=${waOrderText}`;
  const mailHref = `mailto:${cfg.email}?subject=Medicine Inquiry - ${encodeURIComponent(cfg.businessName)}`;

  // Bind Buttons
  document.getElementById("top-emergency-btn").href = phoneHref;
  document.getElementById("hero-call-btn").href = phoneHref;
  document.getElementById("hero-wa-btn").href = waHref;
  document.getElementById("hero-maps-btn").href = cfg.googleMapsUrl;
  document.getElementById("card-wa-order-btn").href = waHref;
  document.getElementById("emergency-action-btn").href = phoneHref;

  document.getElementById("contact-maps-link").href = cfg.googleMapsUrl;
  document.getElementById("contact-call-btn").href = phoneHref;
  document.getElementById("contact-wa-btn").href = waHref;
  document.getElementById("contact-email-btn").href = mailHref;

  // Mobile Bottom Bar
  document.getElementById("float-call-btn").href = phoneHref;
  document.getElementById("float-wa-btn").href = waHref;

  // Dynamic Year in Footer
  document.getElementById("year").textContent = new Date().getFullYear();
}

// Render Services Grid
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = PHARMA_CONFIG.services.map(service => `
    <div class="service-card">
      <div class="card-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    </div>
  `).join("");
}

// Render Medicine Categories Grid
function renderMedicines() {
  const container = document.getElementById("medicines-grid");
  if (!container) return;

  container.innerHTML = PHARMA_CONFIG.medicines.map(item => `
    <div class="medicine-card">
      <div class="card-icon">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.category}</p>
    </div>
  `).join("");
}

// Mobile Hamburger Navigation Handler
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}