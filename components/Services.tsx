
import React from 'react';
import { CameraIcon } from './icons/CameraIcon';
import { ShieldLockIcon } from './icons/ShieldLockIcon';
import { CogIcon } from './icons/CogIcon';
import { KeyIcon } from './icons/KeyIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-blue-500/20 hover:scale-105 transform transition-all duration-300">
    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-700">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <CameraIcon className="w-8 h-8 text-blue-500" />,
      title: 'CCTV Installation',
      description: 'High-definition camera systems tailored to your property. We install, configure, and ensure optimal coverage.'
    },
    {
      icon: <ShieldLockIcon className="w-8 h-8 text-blue-500" />,
      title: '24/7 Monitoring',
      description: 'Professional monitoring services that alert authorities at the first sign of trouble, day or night.'
    },
    {
      icon: <KeyIcon className="w-8 h-8 text-blue-500" />,
      title: 'Access Control',
      description: 'Secure your premises with advanced access control systems, including keycards, biometrics, and electronic locks.'
    },
    {
      icon: <CogIcon className="w-8 h-8 text-blue-500" />,
      title: 'Maintenance & Support',
      description: 'Keep your security systems running smoothly with our regular maintenance plans and responsive support.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Security Services</h2>
          <p className="text-lg text-gray-400 mt-2">Comprehensive Solutions for Complete Protection</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
