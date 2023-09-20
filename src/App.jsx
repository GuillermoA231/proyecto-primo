import React from 'react';
import NavigationBar from './components/Navigation/NavigationBar';
import HeroSection from './components/Home/HeroSection';
import About from './components/Home/About';
import Features from './components/Home/Features';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <About />
      <Features />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
