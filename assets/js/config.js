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
    "Hello Celestial Pathway, I'd like to book a session. Could you please share the details?",

  // Per-service pre-filled messages (used on service cards / buttons).
  WHATSAPP_SERVICE_MSG: {
    reiki: "Hello Celestial Pathway, I'm interested in a Reiki Healing session.",
    numerology: "Hello Celestial Pathway, I'd like to book a Numerology reading.",
    palmistry: "Hello Celestial Pathway, I'd like to book a Palmistry reading.",
  },

  // TODO(Himanshu): confirm these public contact links.
  EMAIL: "hello@celestialpathway.com",
  PHONE_DISPLAY: "+91 92057 84072",
  INSTAGRAM_URL: "https://instagram.com/celestialpathway",
  INSTAGRAM_HANDLE: "@celestialpathway",
};
