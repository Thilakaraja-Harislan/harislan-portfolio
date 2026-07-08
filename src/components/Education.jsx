import { motion } from 'framer-motion';
import { GraduationCap, Calendar, FileText, Download, Award, BookOpen } from 'lucide-react';

const courses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (Java)',
  'Database Management Systems (MySQL / MongoDB)',
  'Web Application Development (React / Node.js)',
  'Software Architecture & Design Patterns',
  'Operating Systems & Networking'
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-slate-950/20">
      {/* Background Glow */}
      <div className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-cyber-purple/5 blur-[130px] pointer-events-none" />

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
          className="flex flex-col mb-12 text-left"
        >
          <span className="text-sm font-semibold tracking-widest text-cyber-cyan uppercase mb-2">Education & Resume</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display">
            Academic & <span className="text-gradient-cyan-purple">Professional Assets</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Education Timeline (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-200 flex items-center gap-2">
              <GraduationCap className="text-cyber-cyan" size={24} />
              <span>Academic Pathway</span>
            </h3>

            {/* University Entry */}
            <motion.div 
              initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ 
                type: 'spring',
                stiffness: 85,
                damping: 22,
                mass: 0.8
              }}
              className="glass-card rounded-2xl p-6 border border-slate-900 bg-slate-950/40 relative"
            >
              {/* Vertical timeline bar decoration */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-900" />
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-100 font-display">
                    B.Sc. (Hons) in Software Engineering
                  </h4>
                  <span className="text-sm text-cyber-cyan font-medium block mt-0.5">
                    University of Kelaniya
                  </span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-950 text-xs font-semibold text-slate-400">
                  <Calendar size={13} />
                  <span>2024 - 2028 (Expected)</span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Enrolled in the honors program, focusing on engineering principles, system analysis, 
                and building enterprise-level full stack ecosystems. Combining theoretical computer science 
                with modern industry practices.
              </p>

              {/* Syllabus Highlights */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                  <BookOpen size={13} />
                  <span>Key Coursework</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {courses.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-purple shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Resume Download Block (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-200 flex items-center gap-2">
              <Award className="text-cyber-purple" size={24} />
              <span>Resume File</span>
            </h3>

            <motion.div 
              initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ 
                type: 'spring',
                stiffness: 85,
                damping: 22,
                mass: 0.8,
                delay: 0.1
              }}
              className="glass-card rounded-2xl p-6 border border-slate-900 bg-slate-950/25 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-cyber-cyan shadow-inner">
                  <FileText size={32} />
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-slate-100 font-display">
                    Thilakaraja_Harislan_Resume.pdf
                  </h4>
                  <p className="text-xs text-slate-500">
                    PDF Document &bull; 1.3 KB &bull; Styled Standard CV
                  </p>
                  <span className="inline-block text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-400/5 border border-emerald-500/10 px-2 py-0.5 rounded">
                    Verified Secure
                  </span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Download my comprehensive CV detailing my academic syllabus projects, technical skill benchmarks, 
                and core communication strengths. Ready for HR evaluation and interview screening.
              </p>

              <a
                href="/Thilakaraja_Harislan_Resume.pdf"
                download="Thilakaraja_Harislan_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyber-cyan to-cyber-indigo shadow-lg shadow-cyber-cyan/10 hover:shadow-cyber-cyan/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
              >
                <Download size={16} />
                <span>Download Resume PDF</span>
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
