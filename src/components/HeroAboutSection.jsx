import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Mail, MapPin, GraduationCap } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import avatarCartoon from '../assets/avatar_cartoon.jpg';
import avatarColor from '../assets/about_photo_blue.jpg';

function AnimatedSubheading() {
  const words = ['Full Stack Developer', 'Software Engineering Undergraduate'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 45 : 85;

    if (!isDeleting && displayedText === currentWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === '') {
      // Done deleting, go to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Animate character modification
      timer = setTimeout(() => {
        setDisplayedText(prev => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentWord.slice(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <h3 className="text-2xl sm:text-3xl font-bold font-display text-cyber-cyan select-none min-h-[36px] flex items-center gap-0.5">
      <span>{displayedText}</span>
      <span className="w-[3px] h-[22px] sm:h-[28px] bg-cyber-cyan animate-pulse inline-block" />
    </h3>
  );
}

// Generate bubble configurations once to prevent re-creation and keep layouts smooth
const bubbleCount = 24;
const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
  const size = Math.floor(Math.random() * 10) + 4; // 4px to 14px
  const left = Math.floor(Math.random() * 100);
  const delay = (Math.random() * 10).toFixed(2);
  const duration = (Math.random() * 14 + 10).toFixed(2); // 10s to 24s
  const isCyan = Math.random() > 0.5;
  
  return {
    id: i,
    size,
    left: `${left}%`,
    delay: `${delay}s`,
    duration: `${duration}s`,
    isCyan
  };
});

export default function HeroAboutSection() {
  const containerRef = useRef(null);

  // Track scroll position of the unified Hero & About biography container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Desktop 3D rotation transform (kept exactly the same as current state)
  const rotateY = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.38, 0.5, 0.62, 0.8, 1], 
    [0, 0, 15, 90, 165, 180, 180]
  );

  const smoothRotateY = useSpring(rotateY, {
    damping: 28,
    stiffness: 45,
    mass: 1.2,
    restDelta: 0.001
  });

  // Mobile-specific fast 3D rotation transform:
  // - Stays at 0° while viewing Home section content (Cartoon Avatar 100% static)
  // - Rapidly flips 0° -> 180° right as About section content appears
  // - Completes 180° early so the Color Portrait is fully visible before scrolling near the mobile navbar
  const mobileRotateY = useTransform(
    scrollYProgress,
    [0, 0.30, 0.34, 0.42, 0.46, 1],
    [0, 0, 30, 150, 180, 180]
  );

  const mobileSmoothRotateY = useSpring(mobileRotateY, {
    damping: 20,
    stiffness: 120,
    mass: 0.5,
    restDelta: 0.001
  });

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
      const offsetTop = absoluteTop - 80;
      if (window.lenis) {
        window.lenis.scrollTo(offsetTop, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full z-0">
      {/* Background Accent Glows */}
      <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-cyber-purple/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none -z-10" />

      {/* Floating bubbles background effect across the entire section corners (restricted to Home page) */}
      <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden -z-10 select-none">
        {bubbles.map((bubble) => {
          const bgColor = bubble.isCyan 
            ? 'color-mix(in srgb, var(--accent-cyan) 38%, transparent)' 
            : 'color-mix(in srgb, var(--accent-purple) 38%, transparent)';
          const glowColor = bubble.isCyan 
            ? '0 0 10px color-mix(in srgb, var(--accent-cyan) 55%, transparent)' 
            : '0 0 10px color-mix(in srgb, var(--accent-purple) 55%, transparent)';
          
          return (
            <div
              key={bubble.id}
              className="absolute rounded-full"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: bubble.left,
                bottom: '-20px',
                background: bgColor,
                boxShadow: glowColor,
                animation: `float-bubble ${bubble.duration} linear infinite`,
                animationDelay: bubble.delay,
              }}
            />
          );
        })}
      </div>

      {/* Shared Grid layout wrapper */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column (col-span-7): Text blocks for both Home and About pages */}
        <div className="lg:col-span-7 flex flex-col w-full">
          
          {/* ================= HOME SECTION ================= */}
          <motion.div 
            id="home" 
            initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ 
              type: 'spring',
              stiffness: 85,
              damping: 22,
              mass: 0.8
            }}
            className="min-h-screen flex flex-col justify-center pt-24 pb-16 space-y-6 relative overflow-hidden"
          >
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Available for Internship
              </span>
            </motion.div>

            {/* Title / Headline */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-slate-400 font-sans">Hi there, I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-slate-100 leading-[1.15]">
                Thilakaraja <span className="text-gradient-cyan-purple">Harislan</span>
              </h1>
              <AnimatedSubheading />
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              A Software Engineering undergraduate passionate about Full Stack Web Development. 
              I enjoy building scalable web applications using React, Spring Boot, Node.js, 
              ASP.NET Core, and modern web technologies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('contact')}
                className="flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-2xl bg-gradient-to-r from-cyber-cyan to-cyber-indigo text-slate-950 font-sans shadow-lg shadow-cyber-cyan/15 hover:shadow-cyber-cyan/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </button>
              
              <button
                onClick={() => handleScrollTo('projects')}
                className="flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-2xl border border-slate-800 bg-slate-950/40 hover:bg-slate-900/60 hover:border-slate-700 text-slate-200 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-6 text-slate-500">
              <a 
                href="https://github.com/Thilakaraja-Harislan" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-cyber-cyan hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/thilakaraja-harislan-harislan-b979382b9" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-cyber-purple hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:harislanharis05@gmail.com" 
                className="hover:text-cyber-cyan hover:-translate-y-1 transition-all duration-300"
                aria-label="Email Me"
              >
                <Mail size={22} />
              </a>
            </div>

            {/* MOBILE INLINE 3D FLIPPING PORTRAIT (Hero style circle with 3D Y-rotation - Hidden on desktop) */}
            <div className="flex lg:hidden justify-center pt-8">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 aspect-square flex items-center justify-center">
                {/* Concentric rotating rings */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow text-cyber-cyan/20 pointer-events-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 8" />
                </svg>
                <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-slow text-cyber-purple/20 [animation-direction:reverse] pointer-events-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="12 6 3 6" />
                </svg>
                <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] text-cyber-cyan/30 pointer-events-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="40 10" className="animate-dash-border" />
                </svg>

                {/* Static Avatar shadow container */}
                <div className="absolute inset-8 rounded-full avatar-glow pointer-events-none" />

                {/* ROTATING INNER PARTS (The 3D image flip on mobile!) */}
                <motion.div 
                  style={{ rotateY: mobileSmoothRotateY, perspective: 1500 }}
                  className="absolute inset-8 preserve-3d"
                >
                  {/* FRONT SIDE (Hero: Cartoon Circle) */}
                  <div 
                    className="absolute inset-0 backface-hidden preserve-3d rounded-full overflow-hidden border-2 border-slate-800 flex items-center justify-center bg-slate-950 shadow-2xl"
                    style={{ zIndex: 2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 via-transparent to-cyber-purple/20 z-10 mix-blend-color-dodge" />
                    <img 
                      src={avatarCartoon} 
                      alt="Harislan Cartoon Avatar" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* BACK SIDE (About: Color Circle + Badge) */}
                  <div 
                    className="absolute inset-0 backface-hidden preserve-3d rounded-full overflow-hidden border-2 border-slate-800 flex items-center justify-center bg-slate-950 shadow-2xl"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 via-transparent to-cyber-purple/20 z-10 mix-blend-color-dodge" />
                    <img 
                      src={avatarColor} 
                      alt="Harislan Color Portrait" 
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Floating Role Badge */}
                    <div className="absolute bottom-4 sm:bottom-6 z-20 px-3 py-1 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-sm shadow-lg text-[9px] sm:text-[10px] font-bold text-cyber-cyan tracking-wider uppercase">
                      Full Stack Developer
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ================= ABOUT ME (PAGE 1) ================= */}
          <motion.div 
            id="about" 
            initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ 
              type: 'spring',
              stiffness: 85,
              damping: 22,
              mass: 0.8
            }}
            className="min-h-screen flex flex-col justify-center lg:justify-start py-20 lg:pt-28 space-y-6"
          >
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-widest text-cyber-cyan uppercase mb-2">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display">
                My Story & <span className="text-gradient-purple-indigo">Philosophy</span>
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-3" />
            </div>

            <h3 className="text-xl font-bold font-display text-slate-200 mt-2">
             I specialize in Full Stack Web Development, creating responsive frontend layouts and modular backends using React, Spring Boot, Node.js, and ASP.NET Core.
            </h3>
            
            <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
              My journey into software development began with a curiosity about how websites and applications work behind the scenes. As I progressed through my Software Engineering degree, I discovered a passion for building full-stack applications that combine intuitive user experiences with reliable backend systems.
            </p>
          
            
            {/* Quick Facts Cards */}
            <div className="pt-6 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Current Location Card */}
              <div className="glass-card about-card-bg rounded-2xl p-4 border transition-all duration-300 flex items-center gap-4">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-cyber-cyan shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider mb-1">Current Location</span>
                  <span className="text-sm font-semibold text-slate-100">Colombo, Sri Lanka</span>
                </div>
              </div>
              
              {/* Syllabus Studies Card */}
              <div className="glass-card about-card-bg rounded-2xl p-4 border transition-all duration-300 flex items-center gap-4">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-cyber-purple shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider mb-1">Syllabus Studies</span>
                  <span className="text-sm font-semibold text-slate-100 font-display">Software Engineering (Hons)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column (col-span-5): Sticky Container for 3D Flipping Card (Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-5 sticky top-0 h-screen items-center justify-center pointer-events-none">
          <div className="relative w-[480px] h-[480px] aspect-square pointer-events-auto flex items-center justify-center">
            
            {/* STATIC OUTER PARTS (Not rotating Y!) */}
            {/* Outer rotating rings */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow text-cyber-cyan/20 pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 8" />
            </svg>
            <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-slow text-cyber-purple/20 [animation-direction:reverse] pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="12 6 3 6" />
            </svg>
            <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] text-cyber-cyan/30 pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="40 10" className="animate-dash-border" />
            </svg>

            {/* Static Avatar shadow container (sits behind the rotating image) */}
            <div className="absolute inset-8 rounded-full avatar-glow pointer-events-none" />

            {/* ROTATING INNER PARTS (The image flip!) */}
            <motion.div 
              style={{ rotateY: smoothRotateY, perspective: 1500 }}
              className="absolute inset-8 preserve-3d"
            >
              {/* ================= FRONT SIDE (Hero: Cartoon Circle) ================= */}
              <div 
                className="absolute inset-0 backface-hidden preserve-3d rounded-full overflow-hidden border-2 border-slate-800 flex items-center justify-center bg-slate-950 shadow-2xl"
                style={{ zIndex: 2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 via-transparent to-cyber-purple/20 z-10 mix-blend-color-dodge" />
                <motion.img 
                  src={avatarCartoon} 
                  alt="Thilakaraja Harislan Cartoon Profile" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              {/* ================= BACK SIDE (About: Color Circle) ================= */}
              <div 
                className="absolute inset-0 backface-hidden preserve-3d rounded-full overflow-hidden border-2 border-slate-800 flex items-center justify-center bg-slate-950 shadow-2xl"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 via-transparent to-cyber-purple/20 z-10 mix-blend-color-dodge" />
                <motion.img 
                  src={avatarColor} 
                  alt="Thilakaraja Harislan Color Profile" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Rounded Floating Role Badge at bottom */}
                <div className="absolute bottom-6 z-20 px-3 py-1 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-sm shadow-lg text-[10px] font-bold text-cyber-cyan tracking-wider uppercase">
                  Full Stack Developer
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
