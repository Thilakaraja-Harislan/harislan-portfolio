import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const LogoIcon = () => (
  <svg className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--accent-cyan)" />
        <stop offset="50%" stopColor="var(--accent-purple)" />
        <stop offset="100%" stopColor="var(--accent-indigo)" />
      </linearGradient>
      <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Background Shape - matches glassmorphic cards */}
    <rect 
      x="15" 
      y="15" 
      width="70" 
      height="70" 
      rx="20" 
      fill="var(--bg-card)" 
      stroke="url(#logo-grad)" 
      strokeWidth="4" 
      className="transition-colors duration-300"
    />
    {/* Stylized H Logo */}
    <path d="M35 30 V70" stroke="url(#logo-grad)" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
    <path d="M65 30 V70" stroke="url(#logo-grad)" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
    <path d="M35 50 H65" stroke="url(#logo-grad)" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
    
    {/* Subtle Dot Accent */}
    <circle cx="65" cy="30" r="3.5" fill="var(--accent-cyan)" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Monitor scroll for header background and active sections
  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      
      // Edge-case: If scrolled to the absolute bottom of the document, highlight the last section
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      // Active section highlight logic using viewport bounding rects
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section intersects a horizontal trigger line at 120px from the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };


    window.addEventListener('scroll', handleScroll);
    // Trigger scroll logic on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate absolute top offset relative to the document
      const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
      const offsetTop = absoluteTop - 80; // nav height offset
      
      if (window.lenis) {
        window.lenis.scrollTo(offsetTop, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
      setActiveSection(targetId);
    }
  };


  return (
    <header className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-slate-800 px-5 py-3 bg-slate-950/80 backdrop-blur-lg shadow-xl shadow-black/30">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <LogoIcon />
            <span className="text-xl font-bold tracking-tight font-display text-gradient-cyan-purple">
              Harislan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 focus:outline-none
                    ${isActive 
                      ? 'text-cyber-cyan bg-slate-900/80 border border-slate-800' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/40'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Button (Desktop Only) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900/40 border border-slate-800/80 transition-all duration-300 hover:rotate-12 active:scale-90 focus:outline-none flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href="#resume"
              onClick={(e) => handleLinkClick(e, '#education')}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl text-slate-200 border border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:border-slate-700 hover:text-cyber-cyan transition-all duration-300 btn-premium"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900/40 border border-slate-800/80 transition-all duration-300 hover:rotate-12 active:scale-90 focus:outline-none flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 border border-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-[500px] opacity-100 mt-4 border-t border-slate-900/80 pt-4 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors
                    ${isActive 
                      ? 'text-cyber-cyan bg-slate-950/80 border border-slate-900' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#resume"
              onClick={(e) => handleLinkClick(e, '#education')}
              className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3 text-base font-semibold rounded-xl text-slate-200 border border-slate-800 bg-slate-950/80 hover:bg-slate-900 transition-colors"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
