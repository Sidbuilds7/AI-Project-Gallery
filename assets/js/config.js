/* ==========================================================================
   Celestial Pathway — Site Config
   --------------------------------------------------------------------------
   HANDOFF NOTE (Himanshu): This is the SINGLE place to update contact details.
   Every WhatsApp button, phone, email and Instagram link on the site reads
   from here. Change a value once and it updates everywhere.

   - WHATSAPP_NUMBER: international format, digits only, no "+" or spaces.
   - Default WhatsApp message is pre-filled when a visitor taps "Book".
   ========================================================================== */
window.CP_CONFIG = {
  // TODO(Himanshu): replace with the official business WhatsApp number.
  // Currently using the helpline number listed on the live site.
  WHATSAPP_NUMBER: "919205784072",

  // Optional default message pre-filled in WhatsApp chat.
  WHATSAPP_DEFAULT_MSG:
    "Hi Vinita, I found Celestial Pathway online and I'd like to book a session. Could you help me choose the right one?",

  // Per-service pre-filled messages (used on service cards / buttons).
  WHATSAPP_SERVICE_MSG: {
    reiki: "Hi Vinita, I'd like to book a Reiki Healing session. I've been feeling stressed/heavy and would love some guidance.",
    numerology: "Hi Vinita, I'd like a Numerology reading to get clarity on my life path and decisions.",
    palmistry: "Hi Vinita, I'd like to book a Palmistry reading to understand myself and my path better.",
    products: "Hi Vinita, I'm interested in your crystals/bracelets. Could you share what's available and the prices?",
  },

  // TODO(Himanshu): confirm these public contact links.
  EMAIL: "hello@celestialpathway.com",
  PHONE_DISPLAY: "+91 92057 84072",
  INSTAGRAM_URL: "https://instagram.com/celestialpathway",
  INSTAGRAM_HANDLE: "@celestialpathway",
};
