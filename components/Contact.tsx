import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { ClockIcon } from './icons/ClockIcon';
import { MapPinIcon } from './icons/MapPinIcon';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam protection: check honeypot field
    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get('bot-field');
    if (honeypot) {
      console.warn("Spam detected.");
      return; // Silently reject
    }

    // Form validation check
    const phone = formData.get('phone') as string;
    if (phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    alert('Thank you for your message. We will get back to you shortly!');
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-lg text-gray-400 mt-2">Ready to secure your property? Contact us today for a free, no-obligation quote.</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              <strong className="text-white">NEXT GENERATION</strong> - Security system installation service in Tamil Nadu.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Address</h4>
                  <p className="text-gray-400">16/70, Vivekananda Street, Papa Colony,<br />Edamalaipatti Pudur, Tamil Nadu 620012</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">095008 94934</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Business Hours</h4>
                  <p className="text-gray-400">10 AM - 9 PM</p>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="mt-8">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.489116844181!2d78.67126147355184!3d10.773800759245175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8b166a7849bd%3A0xb6fb2def3bdf2336!2sNEXT%20GENERATION!5e0!3m2!1sen!2sin!4v1790255378120!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Spam Protection Honeypot - visually hidden */}
              <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Mobile Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="w-full">
                  <label htmlFor="company" className="block text-gray-300 mb-2">Company Name</label>
                  <input type="text" id="company" name="company" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label htmlFor="reason" className="block text-gray-300 mb-2">Reason for Contact</label>
                <select id="reason" name="reason" required defaultValue="" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" disabled>Select a service</option>
                  <option value="CCTV Installation">CCTV Installation</option>
                  <option value="24/7 Monitoring">24/7 Monitoring</option>
                  <option value="Access Control">Access Control</option>
                  <option value="Maintenance & Support">Maintenance & Support</option>
                  <option value="Other">Other Query</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
