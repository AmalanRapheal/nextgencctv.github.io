import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import TrustedBy from './TrustedBy';
import Projects from './Projects';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <TrustedBy />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
