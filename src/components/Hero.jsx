import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import avatar from '../assets/avatar_cartoon.jpg';



export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
      const offsetTop = absoluteTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-cyber-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-cyber-cyan/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 order-2 lg:order-1">
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

            {/* Headline */}
            <div className="space-y-2">
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg font-medium text-slate-400 font-sans"
              >
                Hi there, I'm
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.15]"
              >
                Thilakaraja <span className="text-gradient-cyan-purple">Harislan</span>
              </motion.h1>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold font-display text-slate-300 flex items-center gap-2 mt-1"
              >
                Software Engineering Undergraduate
              </motion.h3>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm font-semibold tracking-wider uppercase text-cyber-cyan border-b border-cyber-cyan/30 pb-1 w-fit"
              >
                Full Stack Developer
              </motion.span>
            </div>

            {/* Intro text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              A Software Engineering undergraduate passionate about Full Stack Web Development. 
              I enjoy building scalable web applications using React, Spring Boot, Node.js, 
              ASP.NET Core, and modern web technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
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
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-5 pt-6 text-slate-500"
            >
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
            </motion.div>
          </div>

          {/* Hero Right Content (Visual Profile) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 pl-17">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative w-84 h-84 sm:w-104 sm:h-104 md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] aspect-square"
            >
              {/* Spinning Tech Outer Rings */}
              <svg className="absolute inset-0 w-full h-full animate-spin-slow text-cyber-cyan/20" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="48" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.75" 
                  strokeDasharray="4 8" 
                />
              </svg>

              <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-slow text-cyber-purple/20 [animation-direction:reverse]" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="47" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  strokeDasharray="12 6 3 6" 
                />
              </svg>

              <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] text-cyber-cyan/30" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="48" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.75" 
                  strokeDasharray="40 10" 
                  className="animate-dash-border"
                />
              </svg>

              {/* Photo Mask Area */}
              <div className="absolute inset-8 rounded-full bg-slate-950 border-2 border-slate-800 overflow-hidden flex items-center justify-center shadow-2xl shadow-indigo-950/40">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 via-transparent to-cyber-purple/20 z-10 mix-blend-color-dodge" />
                <motion.img 
                  src={avatar} 
                  alt="Thilakaraja Harislan Profile" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
