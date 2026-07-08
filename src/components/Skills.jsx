import { motion } from 'framer-motion';
import { 
  Code, Layout, Database, Terminal, Cloud, Wrench
} from 'lucide-react';

// Custom, pixel-perfect brand SVG logos for each technology
const TechLogo = ({ name }) => {
  const normalized = name.toLowerCase();
  
  if (normalized.includes('html')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17 5.75H6.25l.25 2.75h11.5l-.5 5.5-5.5 1.5-5.5-1.5-.25-2.75h2.75l.125 1.375 2.875.75 2.875-.75.25-2.875H6.75l-.5-5.5h12.5l-.25 2.75z" fill="#E34F26" />
      </svg>
    );
  }
  if (normalized.includes('css')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17 5.75H6.25l.25 2.75h11.5l-.5 5.5-5.5 1.5-5.5-1.5-.25-2.75h2.75l.125 1.375 2.875.75 2.875-.75.25-2.875H6.75l-.5-5.5h12.5l-.25 2.75z" fill="#1572B6" />
      </svg>
    );
  }
  if (normalized === 'javascript' || normalized === 'js') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm20.085 17.513c-.235-.865-.92-1.517-2.31-2.1-.847-.393-1.515-.716-1.515-1.285 0-.414.314-.73.902-.73.667 0 1.132.322 1.35.873h2.38c-.326-1.724-1.597-2.658-3.565-2.658-2.124 0-3.417 1.185-3.417 2.835 0 1.83 1.165 2.474 2.8 3.197 1.132.493 1.77.832 1.77 1.48 0 .548-.48.97-1.206.97-.935 0-1.514-.492-1.74-1.223h-2.42c.23 2.05 1.95 3.036 4.143 3.036 2.378 0 3.844-1.124 3.844-2.996h-.002zm-10.428-1.52c-.29-.444-.635-.688-1.173-.688-.567 0-.907.305-.907.828 0 1.077 3.395 1.077 3.395 3.522 0 1.543-1.144 2.65-3.1 2.65-2.115 0-3.18-1.09-3.472-2.584h2.4c.228.694.675 1.077 1.175 1.077.56 0 1.026-.297 1.026-.89 0-1.284-3.394-1.162-3.394-3.473 0-1.54 1.196-2.593 2.97-2.593 1.782 0 2.84 1.042 3.1 2.18h-2.392z" fill="#F7DF1E" />
      </svg>
    );
  }
  if (normalized.includes('react')) {
    return (
      <svg className="w-5 h-5 shrink-0 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
      </svg>
    );
  }
  if (normalized.includes('tailwind')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4" />
      </svg>
    );
  }
  if (normalized.includes('node')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.25L3.375 7.23v9.96L12 21.75l8.625-4.56V7.23L12 2.25zm.02 16.5H9.773v-9.67l2.247 1.185V18.75zm3.76-2.316l-1.928-1.02V9.664l1.928.986v5.784z" fill="#339933" />
      </svg>
    );
  }
  if (normalized.includes('express')) {
    return (
      <span className="text-[10px] font-bold font-display text-slate-100 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700 shrink-0">EX</span>
    );
  }
  if (normalized.includes('spring')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.176 16.035c-.93.93-2.605 1.196-3.81.656-.632.748-1.632 1.547-2.697 1.942.164-.817.382-2.128 1.01-2.946-.513-1.157-.282-2.736.638-3.656 1.168-1.168 3.064-.98 4.232.188s1.356 3.064-.188 4.232z" fill="#6DB33F" />
      </svg>
    );
  }
  if (normalized.includes('net') || normalized.includes('asp')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm1 14.5h-2v-5h2v5zm0-7h-2v-2h2v2z" fill="#512BD4" />
      </svg>
    );
  }
  if (normalized === 'java') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 19.5c0 .828.672 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-17c-.828 0-1.5.672-1.5 1.5zm19.8-13.8c-.8-1-2.4-1.2-3.4-.4-.5.4-.8.9-.9 1.5-.1.6.1 1.2.5 1.6.8 1 2.4 1.2 3.4.4.5-.4.8-.9.9-1.5.1-.6-.1-1.2-.5-1.6zm-5.8 4.6c.1-1.2-.5-2.3-1.5-2.8-.7-.3-1.5-.3-2.2 0-1 .5-1.6 1.6-1.5 2.8.1 1.2.7 2.3 1.7 2.8.7.3 1.5.3 2.2 0 .9-.5 1.4-1.6 1.3-2.8z" fill="#007396" />
      </svg>
    );
  }
  if (normalized === 'c#') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.5 13h-1.5v2h-1v-2H10v2H9v-2H7.5v-1H9v-2H7.5v-1H9V9H7.5V8H9V6h1v2h2V6h1v2h1.5v1H13v2h1.5v1H13v2h1.5v1zm-2.5-3H10v2h2v-2z" fill="#239120" />
      </svg>
    );
  }
  if (normalized === 'php') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.564 12.302h-1.215l-.265 1.464H11.7l.265-1.464H10.74l-.264 1.464H9.09l.264-1.464H8.163v-.931h1.365l.264-1.465H8.427v-.93h1.539l.265-1.465H11.62l-.265 1.465H12.56l.265-1.465h1.385v.93H12.825l-.265 1.465h1.216v.931z" fill="#777BB4" />
      </svg>
    );
  }
  if (normalized === 'c') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.66 0 3.14.81 4.05 2.05l-1.8 1.08C13.73 9.42 12.92 9 12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.92 0 1.73-.42 2.25-1.08l1.8 1.08C15.14 16.19 13.66 17 12 17z" fill="#A8B9CC" />
      </svg>
    );
  }
  if (normalized.includes('mysql')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.015 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zm1.5 13.5h-3v-7.5h3v7.5z" fill="#4479A1" />
      </svg>
    );
  }
  if (normalized.includes('mongodb') && !normalized.includes('atlas')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-.39 0-.77.16-1.05.45C9.17 2.22 8 5.75 8 9.5c0 3.86 1.72 6.84 3.45 8.16-.3.62-.45 1.31-.45 2.02v2.82c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2.82c0-.71-.15-1.4-.45-2.02C15.28 16.34 17 13.36 17 9.5c0-3.75-1.17-7.28-2.95-9.05C13.77.16 13.39 0 13 0h-1z" fill="#47A248" />
      </svg>
    );
  }
  if (normalized.includes('atlas')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#47A248" />
      </svg>
    );
  }
  if (normalized.includes('cloudinary')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#3448C5" />
      </svg>
    );
  }
  if (normalized.includes('jwt')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 20.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l3.79-3.79C10.93 18.68 12.33 19 13.8 19c4.97 0 9-4.03 9-9s-4.03-9-9-9zm1.8 10.8h-3.6v-3.6h3.6v3.6z" fill="#D63AFF" />
      </svg>
    );
  }
  if (normalized === 'git') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.384 11.196L12.804.616c-.82-.82-2.15-.82-2.97 0L8.264 2.186l3.23 3.23c.7-.23 1.49-.03 2.03.51.55.55.75 1.35.51 2.06l3.22 3.22c.71-.24 1.52-.04 2.06.51.78.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0-.56-.56-.76-1.37-.5-2.08l-3.13-3.13c-.7.25-1.51.05-2.05-.5-.54-.54-.74-1.33-.52-2.03l-3.23-3.23-5.26 5.27c-.82.82-.82 2.15 0 2.97l10.58 10.58c.82.82 2.15.82 2.97 0l10.57-10.57c.83-.81.83-2.14.01-2.96z" fill="#F05032" />
      </svg>
    );
  }
  if (normalized === 'github') {
    return (
      <svg className="w-5 h-5 shrink-0 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }
  if (normalized.includes('postman')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.176 16.035c-.93.93-2.605 1.196-3.81.656-.632.748-1.632 1.547-2.697 1.942.164-.817.382-2.128 1.01-2.946-.513-1.157-.282-2.736.638-3.656 1.168-1.168 3.064-.98 4.232.188s1.356 3.064-.188 4.232z" fill="#FF6C37" />
      </svg>
    );
  }
  if (normalized.includes('code') || normalized.includes('vs')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.985 6.83l-3.36-3.36a.63.63 0 00-.89 0L12 11.23 4.26 3.47a.63.63 0 00-.89 0L.015 6.83a.63.63 0 000 .89l7.74 7.74-7.74 7.74a.63.63 0 000 .89l3.36 3.36c.12.12.28.18.44.18s.32-.06.44-.18L12 19.65l7.74 7.74c.12.12.28.18.44.18s.32-.06.44-.18l3.36-3.36a.63.63 0 000-.89l-7.74-7.74 7.74-7.74a.63.63 0 000-.89z" fill="#007ACC" />
      </svg>
    );
  }

  // Fallback
  return (
    <svg className="w-4 h-4 shrink-0 text-cyber-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
};

// Specialized data arrays for the custom layout panels
const frontendSkills = [
  { name: 'HTML', color: 'hover:border-orange-400/40 hover:shadow-orange-500/10' },
  { name: 'CSS', color: 'hover:border-blue-400/40 hover:shadow-blue-500/10' },
  { name: 'JavaScript', color: 'hover:border-yellow-400/40 hover:shadow-yellow-500/10' },
  { name: 'React.js', color: 'hover:border-cyber-cyan/40 hover:shadow-cyber-cyan/15' },
  { name: 'Tailwind CSS', color: 'hover:border-sky-400/40 hover:shadow-sky-500/10' }
];

const languagesSkills = [
  { name: 'JavaScript', ext: '.js', paradigm: 'Prototype-based / Scripting', color: 'hover:border-yellow-500/40 hover:shadow-[0_4px_16px_rgba(247,223,30,0.12)]' },
  { name: 'Java', ext: '.java', paradigm: 'Class-based OOP / Concurrent', color: 'hover:border-orange-500/40 hover:shadow-[0_4px_16px_rgba(0,115,150,0.12)]' },
  { name: 'C#', ext: '.cs', paradigm: 'Component-oriented / OOP', color: 'hover:border-purple-400/40 hover:shadow-[0_4px_16px_rgba(35,145,32,0.12)]' },
  { name: 'PHP', ext: '.php', paradigm: 'Server Scripting / Web', color: 'hover:border-indigo-400/40 hover:shadow-[0_4px_16px_rgba(119,123,180,0.12)]' },
  { name: 'C', ext: '.c', paradigm: 'System / Procedural', color: 'hover:border-cyan-400/40 hover:shadow-[0_4px_16px_rgba(168,185,204,0.12)]' }
];

const backendSkills = [
  { name: 'Spring Boot', desc: 'Enterprise Java Framework', color: 'hover:border-green-500/40 hover:shadow-green-500/10' },
  { name: 'Node.js', desc: 'V8 Javascript Runtime', color: 'hover:border-emerald-400/40 hover:shadow-emerald-400/10' },
  { name: 'ASP.NET Core Web API', desc: 'High Perf C# Web API', color: 'hover:border-violet-400/40 hover:shadow-violet-400/10' },
  { name: 'Express.js', desc: 'Minimalist Node API Server', color: 'hover:border-slate-400/40 hover:shadow-slate-400/10' },
  { name: 'PHP', desc: 'Server scripting runtime', color: 'hover:border-indigo-400/40 hover:shadow-indigo-500/10' }
];

const toolsSkills = [
  { name: 'Git', color: 'hover:border-orange-500/40 hover:shadow-orange-500/10' },
  { name: 'GitHub', color: 'hover:border-slate-400/40 hover:shadow-slate-100/10' },
  { name: 'Postman', color: 'hover:border-orange-400/40 hover:shadow-orange-400/10' },
  { name: 'VS Code', color: 'hover:border-sky-400/40 hover:shadow-sky-500/10' }
];

const cloudSkills = [
  { name: 'MongoDB Atlas', desc: 'Cloud Database', status: 'Asset Active', color: 'hover:border-green-400/40 hover:shadow-green-500/10' },
  { name: 'Cloudinary', desc: 'Media Storage CDN', status: 'CDN Secure', color: 'hover:border-sky-400/40 hover:shadow-sky-500/10' },
  { name: 'JWT Authentication', desc: 'Secure Auth Token', status: 'AES Encrypt', color: 'hover:border-red-400/40 hover:shadow-red-500/10' }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(4px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { 
        type: 'spring',
        stiffness: 85,
        damping: 22,
        mass: 0.8
      }
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-slate-950/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyber-indigo/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto z-10">
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
          className="flex flex-col mb-16 text-left"
        >
          <span className="text-sm font-semibold tracking-widest text-cyber-cyan uppercase mb-2">My Toolkit</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display">
            Technical <span className="text-gradient-cyan-purple">Competencies</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-3" />
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8"
        >
          {/* ================= CARD 1: FRONTEND DEVELOPMENT (lg:col-span-4) ================= */}
          <motion.div
            variants={cardVariants}
            className="glass-card skills-bg-1 rounded-2xl p-6 border border-slate-900 transition-all duration-300 hover:border-slate-800/80 shadow-lg hover:shadow-2xl hover:shadow-cyber-cyan/10 hover:-translate-y-1 lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-900/60">
              <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <Layout className="text-cyber-cyan" size={22} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-200">Frontend Development</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {frontendSkills.map((skill, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl p-3 border border-slate-900 bg-slate-950/40 flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-800/80 hover:shadow-[0_4px_16px_rgba(0,240,255,0.12)] cursor-default group ${skill.color}`}
                >
                  <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-800/60 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0">
                    <TechLogo name={skill.name} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-300 font-display line-clamp-1">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= CARD 2: PROGRAMMING LANGUAGES (lg:col-span-2, row-span-2) ================= */}
          <motion.div
            variants={cardVariants}
            className="glass-card skills-bg-2 rounded-2xl p-6 border border-slate-900 transition-all duration-300 hover:border-slate-800/80 shadow-lg hover:shadow-2xl hover:shadow-cyber-cyan/10 hover:-translate-y-1 lg:col-span-2 lg:row-span-2 flex flex-col h-full justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-900/60">
                <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <Code className="text-cyber-cyan" size={22} />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-200">Languages</h3>
              </div>

              {/* Stack of Language Cards (OOP, extension details) */}
              <div className="flex flex-col gap-3">
                {languagesSkills.map((lang, i) => (
                  <div
                    key={i}
                    className={`glass-card rounded-xl p-3 border border-slate-900 bg-slate-950/40 flex items-center justify-between gap-3 transition-all duration-300 hover:border-slate-800/80 hover:translate-x-1 cursor-default group ${lang.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-800/60 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
                        <TechLogo name={lang.name} />
                      </div>
                      <div className="flex flex-col text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs sm:text-sm font-semibold text-slate-300">{lang.name}</span>
                          <span className="text-[10px] text-cyber-cyan font-mono">{lang.ext}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">{lang.paradigm}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= CARD 3: BACKEND SYSTEMS (lg:col-span-2) ================= */}
          <motion.div
            variants={cardVariants}
            className="glass-card skills-bg-3 rounded-2xl p-6 border border-slate-900 transition-all duration-300 hover:border-slate-800/80 shadow-lg hover:shadow-2xl hover:shadow-cyber-purple/10 hover:-translate-y-1 lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-900/60">
              <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <Terminal className="text-cyber-purple" size={22} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-200">Backend Systems</h3>
            </div>

            <div className="flex flex-col gap-3">
              {backendSkills.map((skill, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl p-3 border border-slate-900 bg-slate-950/40 flex items-center justify-between gap-3 transition-all duration-300 hover:border-slate-800/80 hover:translate-x-1 cursor-default group ${skill.color}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-slate-900/50 rounded-lg border border-slate-800/60 group-hover:scale-105 transition-transform duration-300">
                      <TechLogo name={skill.name} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs sm:text-sm font-semibold text-slate-300">{skill.name}</span>
                      <span className="text-[10px] text-slate-500 font-medium">{skill.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= CARD 4: DATABASES COMPARISON (lg:col-span-2) ================= */}
          <motion.div
            variants={cardVariants}
            className="glass-card skills-bg-4 rounded-2xl p-6 border border-slate-900 transition-all duration-300 hover:border-slate-800/80 shadow-lg hover:shadow-2xl hover:shadow-cyber-purple/10 hover:-translate-y-1 lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-900/60">
                <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <Database className="text-cyber-purple" size={22} />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-200">Databases</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider text-left">SQL Relational</span>
                  <div className="glass-card rounded-xl p-3 border border-slate-900 bg-slate-950/40 flex flex-col items-center gap-2.5 hover:border-sky-500/40 hover:shadow-[0_4px_16px_rgba(68,121,161,0.15)] transition-all duration-300 group">
                    <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-800/60 group-hover:scale-110 transition-transform duration-300">
                      <TechLogo name="MySQL" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 font-display">MySQL</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider text-left">NoSQL Document</span>
                  <div className="glass-card rounded-xl p-3 border border-slate-900 bg-slate-950/40 flex flex-col items-center gap-2.5 hover:border-green-500/40 hover:shadow-[0_4px_16px_rgba(71,162,72,0.15)] transition-all duration-300 group">
                    <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-800/60 group-hover:scale-110 transition-transform duration-300">
                      <TechLogo name="MongoDB" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 font-display">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= CARD 5: TOOLS & WORKFLOW TERMINAL (lg:col-span-3) ================= */}
          <motion.div
            variants={cardVariants}
            className="glass-card skills-bg-5 rounded-2xl p-6 border border-slate-900 transition-all duration-300 hover:border-slate-800/80 shadow-lg hover:shadow-2xl hover:shadow-cyber-purple/10 hover:-translate-y-1 lg:col-span-3"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-900/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <Wrench className="text-cyber-purple" size={22} />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-200">Tools & Workflow</h3>
              </div>
              
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {toolsSkills.map((skill, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl border border-slate-900 bg-slate-950/40 flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-800/80 hover:shadow-[0_4px_16px_rgba(168,85,247,0.12)] cursor-default overflow-hidden group ${skill.color}`}
                >
                  <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-900 bg-slate-950/60 w-full justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  </div>
                  <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-800/60 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0 mb-1">
                    <TechLogo name={skill.name} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-300 font-display line-clamp-1 pb-3 px-2">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= CARD 6: CLOUD & SERVICES (lg:col-span-3) ================= */}
          <motion.div
            variants={cardVariants}
            className="glass-card skills-bg-6 rounded-2xl p-6 border border-slate-900 transition-all duration-300 hover:border-slate-800/80 shadow-lg hover:shadow-2xl hover:shadow-cyber-cyan/10 hover:-translate-y-1 lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-900/60">
              <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <Cloud className="text-cyber-cyan" size={22} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-200">Cloud & Services</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cloudSkills.map((skill, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl p-4 border border-slate-900 bg-slate-950/40 flex flex-col items-center justify-between text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-slate-800/80 hover:shadow-[0_4px_16px_rgba(0,240,255,0.12)] cursor-default group ${skill.color}`}
                >
                  <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800/60 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0">
                    <TechLogo name={skill.name} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs sm:text-sm font-semibold text-slate-300 font-display line-clamp-1">
                      {skill.name}
                    </span>
                    <span className="text-[9px] text-slate-500 font-medium line-clamp-1">{skill.desc}</span>
                  </div>
                  {/* Glowing Status Bulb */}
                  <div className="flex items-center gap-1.5 mt-1 bg-slate-900/30 px-2 py-0.5 rounded-full border border-slate-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">{skill.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
