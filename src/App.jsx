import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import ABCMemory from './components/ABCMemory';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import RefundPolicy from './components/RefundPolicy';
import Shipping from './components/Shipping';
import Contact from './components/Contact';
import FixedCTA from './components/FixedCTA';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" />
      <ScrollToTop />
      <Navbar />
      <FixedCTA />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Services />
              <Testimonials />
              <Benefits />
              <ABCMemory />
              <Instructor />
              <FAQ />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
