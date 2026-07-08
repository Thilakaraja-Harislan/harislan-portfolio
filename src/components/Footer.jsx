import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const LogoIcon = () => (
  <svg className="h-9 w-9 transition-transform duration-300 hover:scale-105" viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--accent-cyan)" />
        <stop offset="50%" stopColor="var(--accent-purple)" />
        <stop offset="100%" stopColor="var(--accent-indigo)" />
      </linearGradient>
      <filter id="footer-glow" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Background Shape */}
    <rect 
      x="15" 
      y="15" 
      width="70" 
      height="70" 
      rx="20" 
      fill="var(--bg-card)" 
      stroke="url(#footer-logo-grad)" 
      strokeWidth="4" 
      className="transition-colors duration-300"
    />
    {/* Stylized H Logo */}
    <path d="M35 30 V70" stroke="url(#footer-logo-grad)" strokeWidth="6" strokeLinecap="round" filter="url(#footer-glow)" />
    <path d="M65 30 V70" stroke="url(#footer-logo-grad)" strokeWidth="6" strokeLinecap="round" filter="url(#footer-glow)" />
    <path d="M35 50 H65" stroke="url(#footer-logo-grad)" strokeWidth="6" strokeLinecap="round" filter="url(#footer-glow)" />
    
    {/* Subtle Dot Accent */}
    <circle cx="65" cy="30" r="3.5" fill="var(--accent-cyan)" />
  </svg>
);

const footerLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Education', href: 'education' },
  { name: 'Contact', href: 'contact' },
];

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative footer-bg py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand/Logo */}
        <div className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-lg font-bold font-display text-slate-100 tracking-tight">
            Harislan
          </span>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs font-semibold text-slate-500 hover:text-cyber-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Socials */}
          <div className="flex gap-4 text-slate-600">
            <a 
              href="https://github.com/Thilakaraja-Harislan" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyber-cyan hover:-translate-y-0.5 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/thilakaraja-harislan-harislan-b979382b9" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyber-purple hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:harislanharis05@gmail.com" 
              className="hover:text-cyber-cyan hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </div>

          <span className="text-[11px] text-slate-600 text-center md:text-right">
            &copy; {currentYear} Thilakaraja Harislan. All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
