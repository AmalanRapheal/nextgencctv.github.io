import React from 'react';
import { UsersIcon } from './icons/UsersIcon';
import { TargetIcon } from './icons/TargetIcon';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Next Generation CCTV Solutions</h2>
          <p className="text-lg text-gray-400 mt-2">Protecting What Matters Most to You</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/team/600/400.webp" 
              alt="Next Generation CCTV Solutions Team" 
              loading="lazy"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Next Generation CCTV Solutions was founded with a single mission: to provide reliable, advanced, and affordable security systems to our community. With over a decade of experience in the industry, our team of certified professionals is dedicated to designing and installing custom security solutions that meet the unique needs of each client.
            </p>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <TargetIcon className="w-10 h-10 text-blue-500"/>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                <p className="text-gray-400">To deliver unparalleled security and peace of mind through cutting-edge technology and exceptional customer service.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="flex-shrink-0">
                <UsersIcon className="w-10 h-10 text-blue-500"/>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Our Team</h3>
                <p className="text-gray-400">Our technicians are highly trained, licensed, and passionate about security. We invest in continuous training to stay ahead of technological advancements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;