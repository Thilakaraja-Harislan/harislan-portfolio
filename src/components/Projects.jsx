import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Shield, CheckCircle2, TrendingUp, Grid3X3, QrCode,
  ChevronLeft, ChevronRight, Home, MessageSquare, Heart, MapPin, Bed, Bath
} from 'lucide-react';
import { Github } from './BrandIcons';

// Import project screenshots
import expenseDashboard from '../assets/expense_dashboard.png';
import expenseIncome from '../assets/expense_income.png';
import expenseExpenses from '../assets/expense_expenses.png';
import expenseProfile from '../assets/expense_profile.png';
import realestateLanding from '../assets/realestate_landing.png';
import realestateCatalog from '../assets/realestate_catalog.png';
import realestateDetail from '../assets/realestate_detail.png';
import bookfairSignup from '../assets/bookfair_signup.png';
import bookfairEvents from '../assets/bookfair_events.png';
import bookfairDetail from '../assets/bookfair_detail.png';

function ExpenseTrackerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    { title: 'Dashboard Overview', img: expenseDashboard, url: 'expensetracker.harislan.dev/dashboard' },
    { title: 'Income Streams', img: expenseIncome, url: 'expensetracker.harislan.dev/income' },
    { title: 'Expense Analytics', img: expenseExpenses, url: 'expensetracker.harislan.dev/expenses' },
    { title: 'User Profile Settings', img: expenseProfile, url: 'expensetracker.harislan.dev/profile' }
  ];

  return (
    <div className="w-full h-full bg-[#0a0b10] border border-slate-900 rounded-xl flex flex-col justify-between overflow-hidden select-none group/carousel relative">
      {/* Top Browser Toolbar Header */}
      <div className="flex items-center justify-between border-b border-slate-900/80 bg-slate-950/80 px-4 py-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/85" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/85" />
          <span className="w-2 h-2 rounded-full bg-green-500/85" />
        </div>
        <span className="text-[9px] text-slate-500 font-mono tracking-wide max-w-[150px] sm:max-w-none truncate">{slides[activeIndex].url}</span>
        <span className="text-[8px] text-cyber-cyan font-bold px-1.5 py-0.5 bg-slate-900/80 rounded border border-slate-800 font-display uppercase tracking-wider">{slides[activeIndex].title}</span>
      </div>

      {/* Main Image Viewport */}
      <div className="flex-1 relative overflow-hidden bg-slate-950 flex items-center justify-center">
        <img 
          src={slides[activeIndex].img} 
          alt={slides[activeIndex].title}
          className="w-full h-full object-cover object-top transition-all duration-300"
        />

        {/* Carousel Floating Navigation Arrows */}
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1)); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/90 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 shadow-lg shadow-black/50"
        >
          <ChevronLeft size={12} />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1)); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/90 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 shadow-lg shadow-black/50"
        >
          <ChevronRight size={12} />
        </button>
      </div>

      {/* Bottom slide dots selector */}
      <div className="flex items-center justify-center gap-1 py-1.5 bg-slate-950/90 border-t border-slate-900/60">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(i); }}
            className={`w-1 h-1 rounded-full transition-all cursor-pointer ${activeIndex === i ? 'bg-cyber-cyan w-3' : 'bg-slate-700 hover:bg-slate-500'}`}
          />
        ))}
      </div>
    </div>
  );
}

function RealEstateCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    { title: 'Landing Page', img: realestateLanding, url: 'realestatepro.harislan.dev/' },
    { title: 'Properties Catalog', img: realestateCatalog, url: 'realestatepro.harislan.dev/catalog' },
    { title: 'Property Details', img: realestateDetail, url: 'realestatepro.harislan.dev/property/test-empty-numbers' }
  ];

  return (
    <div className="w-full h-full bg-[#0a0b10] border border-slate-900 rounded-xl flex flex-col justify-between overflow-hidden select-none group/carousel relative">
      {/* Top Browser Toolbar Header */}
      <div className="flex items-center justify-between border-b border-slate-900/80 bg-slate-950/80 px-4 py-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/85" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/85" />
          <span className="w-2 h-2 rounded-full bg-green-500/85" />
        </div>
        <span className="text-[9px] text-slate-500 font-mono tracking-wide max-w-[150px] sm:max-w-none truncate">{slides[activeIndex].url}</span>
        <span className="text-[8px] text-cyber-cyan font-bold px-1.5 py-0.5 bg-slate-900/80 rounded border border-slate-800 font-display uppercase tracking-wider">{slides[activeIndex].title}</span>
      </div>

      {/* Main Image Viewport */}
      <div className="flex-1 relative overflow-hidden bg-slate-950 flex items-center justify-center">
        <img 
          src={slides[activeIndex].img} 
          alt={slides[activeIndex].title}
          className="w-full h-full object-cover object-top transition-all duration-300"
        />

        {/* Carousel Floating Navigation Arrows */}
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1)); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/90 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 shadow-lg shadow-black/50"
        >
          <ChevronLeft size={12} />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1)); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/90 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 shadow-lg shadow-black/50"
        >
          <ChevronRight size={12} />
        </button>
      </div>

      {/* Bottom slide dots selector */}
      <div className="flex items-center justify-center gap-1 py-1.5 bg-slate-950/90 border-t border-slate-900/60">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(i); }}
            className={`w-1 h-1 rounded-full transition-all cursor-pointer ${activeIndex === i ? 'bg-cyber-cyan w-3' : 'bg-slate-700 hover:bg-slate-500'}`}
          />
        ))}
      </div>
    </div>
  );
}

function BookFairCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    { title: 'Upcoming Book Fairs', img: bookfairEvents, url: 'bookfair.lk/events' },
    { title: 'Exhibitor Register', img: bookfairSignup, url: 'bookfair.lk/register' },
    { title: 'Stall Map & Booking', img: bookfairDetail, url: 'bookfair.lk/events/delhi-2026' }
  ];

  return (
    <div className="w-full h-full bg-[#0a0b10] border border-slate-900 rounded-xl flex flex-col justify-between overflow-hidden select-none group/carousel relative">
      {/* Top Browser Toolbar Header */}
      <div className="flex items-center justify-between border-b border-slate-900/80 bg-slate-950/80 px-4 py-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/85" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/85" />
          <span className="w-2 h-2 rounded-full bg-green-500/85" />
        </div>
        <span className="text-[9px] text-slate-500 font-mono tracking-wide max-w-[150px] sm:max-w-none truncate">{slides[activeIndex].url}</span>
        <span className="text-[8px] text-cyber-cyan font-bold px-1.5 py-0.5 bg-slate-900/80 rounded border border-slate-800 font-display uppercase tracking-wider">{slides[activeIndex].title}</span>
      </div>

      {/* Main Image Viewport */}
      <div className="flex-1 relative overflow-hidden bg-slate-950 flex items-center justify-center">
        <img 
          src={slides[activeIndex].img} 
          alt={slides[activeIndex].title}
          className="w-full h-full object-cover object-top transition-all duration-300"
        />

        {/* Carousel Floating Navigation Arrows */}
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1)); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/90 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 shadow-lg shadow-black/50"
        >
          <ChevronLeft size={12} />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1)); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/90 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 shadow-lg shadow-black/50"
        >
          <ChevronRight size={12} />
        </button>
      </div>

      {/* Bottom slide dots selector */}
      <div className="flex items-center justify-center gap-1 py-1.5 bg-slate-950/90 border-t border-slate-900/60">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(i); }}
            className={`w-1 h-1 rounded-full transition-all cursor-pointer ${activeIndex === i ? 'bg-cyber-cyan w-3' : 'bg-slate-700 hover:bg-slate-500'}`}
          />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    id: 'expense-tracker',
    title: 'ExpenseTracker',
    subtitle: 'Full-Stack MERN Application',
    desc: 'A comprehensive financial dashboard designed for managing personal budgets. Features include authentication, income/expense tracking, real-time data visualization via charts, and transaction exports to Excel format.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Axios', 'Chart.js'],
    github: 'https://github.com/Thilakaraja-Harislan/ExpenseTracker.git',
    live: '#',
    features: ['Add & Categorize Transactions', 'Secure User Authentication','Real-time Income/Expense Analytics', 'Visual Charts & Excel Export'],
    glowColor: 'group-hover:border-cyber-cyan/30 shadow-cyber-cyan/5',
    mockup: <ExpenseTrackerCarousel />
  },
  {
    id: 'bookfair-stall-reservation',
    title: 'BookFair Stall Reservation System',
    subtitle: 'Spring Boot & React Reservation Portal',
    desc: 'An enterprise-grade reservation ecosystem created for the Colombo International Book Fair. It enables exhibitors to book physical stalls, process advance booking payments, receive QR-based entry tickets, and provides admins with a detailed management dashboard.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Axios', 'Tailwind CSS', 'QR Code API'],
    github: 'https://github.com/Thilakaraja-Harislan/bookfair-stall-reservation-system.git',
    live: '#',
    features: ['Interactive Stall Layout Grid', 'Secure Advance Payment Processing', 'Automated QR-Code Entry Generation', 'Exhibitor & Sales Admin Analytics'],
    glowColor: 'group-hover:border-cyber-purple/30 shadow-cyber-purple/5',
    mockup: <BookFairCarousel />
  },
  {
    id: 'realestate-platform',
    title: 'RealEstate Pro',
    subtitle: 'React & Spring Boot Platform',
    desc: 'RealEstate Pro is a full-stack real estate management platform built with React and Spring Boot. It connects property seekers (customers) with property agents and administrators, enabling seamless property discovery and real-time communication.',
    tech: ['React.js', 'Spring Boot', 'Express.js', 'MySQL', 'Axios'],
    github: 'https://github.com/Thilakaraja-Harislan/RealEstate-Platform.git',
    live: '#',
    features: ['Property Listing Management', 'Secure Authentication & Roles', 'Real-Time Chat System', 'Wishlist & Customer Support'],
    glowColor: 'group-hover:border-cyber-cyan/30 shadow-cyber-cyan/5',
    mockup: <RealEstateCarousel />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Decors */}
      <div className="absolute top-[30%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[35%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-cyber-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ 
            type: 'spring',
            stiffness: 85,
            damping: 22,
            mass: 0.8
          }}
          className="flex flex-col mb-14 text-left"
        >
          <span className="text-sm font-semibold tracking-widest text-cyber-cyan uppercase mb-2">My Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display">
            Featured <span className="text-gradient-purple-indigo">Engineering Projects</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-3" />
        </motion.div>

        {/* Projects Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 85,
                  damping: 22,
                  mass: 0.8
                }}
                className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-900 bg-slate-950/20 hover:border-slate-800 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/card"
              >
                {/* Decorative spotlight radial gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/5 to-cyber-purple/5 opacity-50 group-hover/card:opacity-100 transition-opacity pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Project Visual Mockup (Desktop alternate ordering) */}
                  <div className={`lg:col-span-6 w-full aspect-[16/10] bg-slate-950/40 border border-slate-900/60 rounded-2xl p-2 sm:p-3.5 relative group hover:border-slate-800 transition-all duration-300 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    {/* Decorative glowing gradient border behind mockup */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/10 to-cyber-purple/10 rounded-2xl opacity-40 group-hover:opacity-80 blur-xl transition-opacity -z-10" />
                    
                    {/* Interactive mockup element */}
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl relative">
                      {project.mockup}
                    </div>
                  </div>

                  {/* Project Description (Desktop alternate ordering) */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div>
                      <span className="text-xs font-semibold tracking-wider text-cyber-cyan uppercase">{project.subtitle}</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-100 mt-1">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                      {project.desc}
                    </p>

                    {/* Feature Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 size={15} className="text-cyber-cyan shrink-0" />
                          <span className="text-xs sm:text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs font-semibold tracking-wide px-2.5 py-1 rounded-lg border border-slate-900 bg-slate-950/60 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-900/60">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-950/40 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-colors font-semibold text-sm cursor-pointer"
                      >
                        <Github size={16} />
                        <span>Repository</span>
                      </a>
                      
                      <a
                        href={project.live}
                        className="flex items-center gap-1.5 text-cyber-cyan hover:text-cyber-cyan/80 hover:underline text-sm font-semibold transition-all cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
