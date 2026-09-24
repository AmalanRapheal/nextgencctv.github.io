import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-32 max-w-4xl text-gray-300 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl text-white mt-8">1. Introduction</h2>
        <p>Welcome to Next Generation CCTV Solutions. We respect your privacy and are committed to protecting your personal data.</p>
        <h2 className="text-2xl text-white mt-8">2. Data We Collect</h2>
        <p>We may collect and process personal data about you such as your name, contact information (email address, phone number), and any other information you provide when you contact us for services.</p>
        <h2 className="text-2xl text-white mt-8">3. How We Use Your Data</h2>
        <p>Your information is used solely to provide and improve our services, communicate with you regarding your inquiries, and fulfill contractual obligations.</p>
        <h2 className="text-2xl text-white mt-8">4. Data Security</h2>
        <p>We implement strict security measures to ensure your personal information is protected from unauthorized access or disclosure.</p>
        <h2 className="text-2xl text-white mt-8">5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at our physical location or via the phone number provided on our contact page.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
