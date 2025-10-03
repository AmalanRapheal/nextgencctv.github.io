import React from 'react';
import { CertificateIcon } from './icons/CertificateIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { ClockIcon } from './icons/ClockIcon';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <CertificateIcon className="w-10 h-10 text-blue-500" />,
      title: 'Certified Experts',
      description: 'Our technicians are industry-certified, ensuring professional and reliable installations every time.',
    },
    {
      icon: <LightBulbIcon className="w-10 h-10 text-blue-500" />,
      title: 'Latest Technology',
      description: 'We use state-of-the-art equipment to provide you with the clearest images and most robust security features.',
    },
    {
      icon: <ClockIcon className="w-10 h-10 text-blue-500" />,
      title: '24/7 Customer Support',
      description: 'Your security doesn\'t sleep, and neither do we. Our support team is available around the clock to assist you.',
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why NextGen CCTV?</h2>
            <div className="w-24 h-1 bg-blue-600 mb-6 rounded"></div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Choosing the right security partner is crucial. We are committed to excellence, from the quality of our products to the professionalism of our service. We don't just sell security systems; we build long-term relationships based on trust and reliability.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/tech/600/700" 
              alt="Security technology" 
              className="rounded-lg shadow-2xl object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;