
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
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
        <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
