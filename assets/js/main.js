/* ==========================================================================
   Celestial Pathway — Behaviour
   --------------------------------------------------------------------------
   - Wires WhatsApp / contact links from config.js
   - Sticky header state
   - Mobile nav toggle
   - Scroll reveal animations (IntersectionObserver)
   - Inquiry form -> WhatsApp handoff (no backend required)
   ========================================================================== */
(function () {
  "use strict";

  var cfg = window.CP_CONFIG || {};

  /* --- WhatsApp link builder ------------------------------------------- */
  function waLink(message) {
    var num = (cfg.WHATSAPP_NUMBER || "").replace(/\D/g, "");
    var msg = encodeURIComponent(message || cfg.WHATSAPP_DEFAULT_MSG || "");
    return "https://wa.me/" + num + (msg ? "?text=" + msg : "");
  }

  /* --- Wire all data-driven contact links ------------------------------ */
  function wireLinks() {
    // Generic WhatsApp buttons. Optional data-service for tailored message.
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var service = el.getAttribute("data-service");
      var msg =
        (service && cfg.WHATSAPP_SERVICE_MSG && cfg.WHATSAPP_SERVICE_MSG[service]) ||
        cfg.WHATSAPP_DEFAULT_MSG;
      el.setAttribute("href", waLink(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });

    document.querySelectorAll("[data-email]").forEach(function (el) {
      el.setAttribute("href", "mailto:" + cfg.EMAIL);
      if (el.hasAttribute("data-fill")) el.textContent = cfg.EMAIL;
    });

    document.querySelectorAll("[data-phone]").forEach(function (el) {
      el.setAttribute("href", "tel:" + (cfg.PHONE_DISPLAY || "").replace(/\s/g, ""));
      if (el.hasAttribute("data-fill")) el.textContent = cfg.PHONE_DISPLAY;
    });

    document.querySelectorAll("[data-instagram]").forEach(function (el) {
      el.setAttribute("href", cfg.INSTAGRAM_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
      if (el.hasAttribute("data-fill")) el.textContent = cfg.INSTAGRAM_HANDLE;
    });
  }

  /* --- Sticky header shadow on scroll ---------------------------------- */
  function stickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --- Mobile nav ------------------------------------------------------ */
  function mobileNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- Scroll reveal --------------------------------------------------- */
  function reveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  /* --- Inquiry form -> WhatsApp ---------------------------------------- */
  /* No server needed: builds a message and opens WhatsApp. Easy to swap for
     a real backend later. */
  function inquiryForm() {
    var form = document.querySelector("[data-inquiry-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var service = (data.get("service") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();
      var lines = ["Hello Celestial Pathway,"];
      if (name) lines.push("My name is " + name + ".");
      if (service) lines.push("I'm interested in: " + service + ".");
      if (message) lines.push(message);
      lines.push("Looking forward to booking a session.");
      window.open(waLink(lines.join(" ")), "_blank", "noopener");
    });
  }

  /* --- Footer year ----------------------------------------------------- */
  function footerYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireLinks();
    stickyHeader();
    mobileNav();
    reveal();
    inquiryForm();
    footerYear();
  });
})();
