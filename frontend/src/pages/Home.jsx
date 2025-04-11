import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact';
import TestimonialSection from '../components/TestimonialSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <ServicesSection />
    <TestimonialSection />
    <ContactForm />
    <Footer />
   </div>
  );
};

export default Home;
