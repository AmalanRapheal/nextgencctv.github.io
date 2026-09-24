import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <ShieldCheckIcon className="w-7 h-7 text-blue-500" />
            <span className="text-xl font-bold text-white">NextGen CCTV</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="/#home" className="hover:text-white transition-colors">Home</a>
            <a href="/#about" className="hover:text-white transition-colors">About</a>
            <a href="/#services" className="hover:text-white transition-colors">Services</a>
            <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook profile" className="text-gray-400 hover:text-white transition-colors">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram profile" className="text-gray-400 hover:text-white transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" aria-label="WhatsApp contact" className="text-gray-400 hover:text-white transition-colors">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Next Generation CCTV. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 mb-2 text-sm">
            <Link to="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-and-conditions" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link>
          </div>
          <p>Powered by <a href="https://jaazdigitalsolutions.com" className='hover:text-blue-500 transition-colors'>JAAZ DIGITAL SOLUTIONS PVT LTD</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
