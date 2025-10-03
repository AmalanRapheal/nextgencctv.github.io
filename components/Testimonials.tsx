import React from 'react';

const TestimonialCard: React.FC<{ name: string; company: string; text: string; avatar: string; }> = ({ name, company, text, avatar }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img src={avatar} alt={name} className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500" />
    <p className="text-gray-300 italic mb-4">"{text}"</p>
    <div className="mt-auto">
      <h4 className="font-bold text-white text-lg">{name}</h4>
      <p className="text-blue-400">{company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Homeowner',
      text: 'The NextGen CCTV team was professional from start to finish. I feel so much safer at home now. The mobile app is fantastic!',
      avatar: 'https://picsum.photos/seed/person1/100',
    },
    {
      name: 'Mark Davis',
      company: 'Small Business Owner',
      text: 'Finally, a security company that understands the needs of a small business. The system is reliable and the support is top-notch.',
      avatar: 'https://picsum.photos/seed/person2/100',
    },
    {
      name: 'Emily Chen',
      company: 'Property Manager',
      text: 'We use NextGen CCTV for all our properties. Their team is responsive, and their systems are easy for our tenants to use.',
      avatar: 'https://picsum.photos/seed/person3/100',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-400 mt-2">Trust and Satisfaction are Our Top Priorities</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;