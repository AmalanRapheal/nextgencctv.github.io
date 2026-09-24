import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-32 max-w-4xl text-gray-300 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
      <div className="space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl text-white mt-8">1. Agreement to Terms</h2>
        <p>By accessing this website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.</p>
        <h2 className="text-2xl text-white mt-8">2. Services Provided</h2>
        <p>Next Generation CCTV Solutions offers installation, maintenance, and monitoring of security systems. All services are subject to a separate service agreement.</p>
        <h2 className="text-2xl text-white mt-8">3. Warranties</h2>
        <p>Equipment provided comes with standard manufacturer warranties. Our installation services carry a limited warranty as defined in your contract.</p>
        <h2 className="text-2xl text-white mt-8">4. Limitations</h2>
        <p>In no event shall Next Generation CCTV Solutions be liable for any damages arising out of the use or inability to use the materials on our website or the performance of our installed systems beyond what is explicitly stated in our service agreements.</p>
      </div>
    </div>
  );
};

export default TermsConditions;
