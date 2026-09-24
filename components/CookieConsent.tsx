import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 z-50 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-300">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <button 
          onClick={handleAccept} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full whitespace-nowrap transition-colors"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
