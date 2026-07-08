import { useEffect } from 'react';
import Lenis from 'lenis';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';

import HeroAboutSection from './components/HeroAboutSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Global Lenis Smooth Scroll and cursor tracking
  useEffect(() => {
    // Initialize Lenis with buttery-smooth linear interpolation
    const lenis = new Lenis({
      lerp: 0.07, // Smoother glide deceleration tail
      wheelMultiplier: 0.9, // Softer wheel input
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Track mouse move for hover glows
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-cyber-cyan/20 selection:text-cyber-cyan transition-colors duration-300">
      {/* Interactive Floating constellation background */}
      <BackgroundCanvas />
      
      {/* Page Layout */}
      <Navbar />
      
      <main className="relative flex flex-col w-full">
        {/* Unified Hero and About Biography with sticky 3D scroll-flipping image */}
        <div className="glow-hover">
          <HeroAboutSection />
        </div>
        
        {/* Focus Areas Core Pillars */}
        <div className="glow-hover">
          <About />
        </div>

        
        {/* Skills Section */}
        <div className="glow-hover">
          <Skills />
        </div>
        
        {/* Projects Section */}
        <div className="glow-hover">
          <Projects />
        </div>
        
        {/* Education Section */}
        <div className="glow-hover">
          <Education />
        </div>
        
        {/* Contact Section */}
        <div className="glow-hover">
          <Contact />
        </div>
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
