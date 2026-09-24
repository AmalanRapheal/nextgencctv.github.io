import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919500894934"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
