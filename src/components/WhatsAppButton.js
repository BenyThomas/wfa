import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+255766695018"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      title="Chat with us on WhatsApp"
    >
      <img src="/WhatsApp-Brand-Resource-Center/01_Glyph/01_Digital/02_SVG/Green/Digital_Glyph_Green.svg" alt="WhatsApp Icon" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
