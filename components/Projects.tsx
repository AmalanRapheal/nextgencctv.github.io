import React from 'react';

const projects = [
  {
    image: 'https://picsum.photos/seed/office-security/600/400',
    category: 'Commercial',
    title: 'Corporate Office Security System',
    description: 'A complete overhaul of an outdated security system for a multi-floor corporate office. Installed 50+ high-definition IP cameras, integrated access control, and set up a central monitoring station.',
  },
  {
    image: 'https://picsum.photos/seed/home-cctv/600/400',
    category: 'Residential',
    title: 'Suburban Home Protection',
    description: 'Designed a custom surveillance plan for a large family home, focusing on perimeter protection. Included night-vision cameras, motion detection alerts, and full mobile app integration for remote viewing.',
  },
  {
    image: 'https://picsum.photos/seed/retail-cam/600/400',
    category: 'Retail',
    title: 'Boutique Store Anti-Theft Solution',
    description: 'Implemented a discreet yet powerful camera system for a high-end retail boutique. The solution helps with loss prevention and provides valuable insights into customer traffic patterns.',
  },
  {
    image: 'https://picsum.photos/seed/warehouse-security/600/400',
    category: 'Industrial',
    title: 'Warehouse & Inventory Monitoring',
    description: 'Secured a 50,000 sq. ft. warehouse with durable, weather-proof cameras and advanced analytics for inventory tracking and after-hours monitoring, significantly reducing incidents of theft.',
  },
];

const ProjectCard: React.FC<typeof projects[0]> = ({ image, category, title, description }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300">
    <div className="overflow-hidden">
      <img src={`${image}.webp`} alt={title} loading="lazy" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
    </div>
    <div className="p-6">
      <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
        {category}
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Project Showcase</h2>
          <p className="text-lg text-gray-400 mt-2">See Our Expertise in Action</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
