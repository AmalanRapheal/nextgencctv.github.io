import React from 'react';
import { BrandAIcon } from './icons/BrandAIcon';
import { BrandBIcon } from './icons/BrandBIcon';
import { BrandCIcon } from './icons/BrandCIcon';
import { BrandDIcon } from './icons/BrandDIcon';
import { BrandEIcon } from './icons/BrandEIcon';

const TrustedBy: React.FC = () => {
  const brands = [
    { name: 'Brand A', icon: <BrandAIcon className="h-10 w-auto text-gray-400 hover:text-white transition-colors" /> },
    { name: 'Brand B', icon: <BrandBIcon className="h-10 w-auto text-gray-400 hover:text-white transition-colors" /> },
    { name: 'Brand C', icon: <BrandCIcon className="h-10 w-auto text-gray-400 hover:text-white transition-colors" /> },
    { name: 'Brand D', icon: <BrandDIcon className="h-10 w-auto text-gray-400 hover:text-white transition-colors" /> },
    { name: 'Brand E', icon: <BrandEIcon className="h-10 w-auto text-gray-400 hover:text-white transition-colors" /> },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Leading Brands
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-8">
          {brands.map((brand) => (
            <div key={brand.name} title={brand.name}>
              {brand.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
