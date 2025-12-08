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

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Stats />
              <Services />
              <Testimonials />
              <Benefits />
              <ABCMemory />
              <Instructor />
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </div>
  );
}

export default App;
