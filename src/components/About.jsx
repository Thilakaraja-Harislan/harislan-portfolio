import { motion } from 'framer-motion';
import { GraduationCap, Code2, BookOpen, Target } from 'lucide-react';

const cardData = [
  {
    icon: <GraduationCap className="text-cyber-cyan" size={24} />,
    title: 'Background',
    desc: "I'm 3rd-year Undergraduate student in Software Engineering at the University of Kelaniya, building a strong academic and practical foundation.",
    glowColor: 'hover:border-cyber-cyan/30 hover:shadow-cyber-cyan/5'
  },
  {
    icon: <Code2 className="text-cyber-purple" size={24} />,
    title: 'Interests',
    desc: 'Deeply interested in Web Development, system design, and building smooth user interfaces alongside scalable backends.',
    glowColor: 'hover:border-cyber-purple/30 hover:shadow-cyber-purple/5'
  },
  {
    icon: <BookOpen className="text-cyber-cyan" size={24} />,
    title: 'Currently Learning',
    desc: 'Expanding knowledge by diving into ASP.NET Core Web API, microservice architectures, and modern cloud deployment flows.',
    glowColor: 'hover:border-cyber-cyan/30 hover:shadow-cyber-cyan/5'
  },
  {
    icon: <Target className="text-cyber-purple" size={24} />,
    title: 'Career Goals',
    desc: ' Secure a Software Engineering Internship where I can contribute to real-world projects, collaborate with experienced developers, and continue growing as a full-stack engineer.',
    glowColor: 'hover:border-cyber-purple/30 hover:shadow-cyber-purple/5'
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
    <section id="about-details" className="relative pt-2 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-slate-950/20">
      {/* Decorative Divider */}
      <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent mb-8" />

      <div className="max-w-6xl w-full mx-auto z-10">
        <div className="space-y-12">
          {/* Header */}
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
            className="flex flex-col text-center items-center"
          >
            <span className="text-sm font-semibold tracking-widest text-cyber-purple uppercase mb-2">Focus Areas</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100 font-display">
              Core Professional <span className="text-gradient-cyan-indigo">Pillars</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-md mt-2">
              A comprehensive view of my current academic alignment, active goals, and engineering core focus.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cardData.map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group glass-card about-card-bg rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${card.glowColor}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 group-hover:border-slate-700/80 transition-colors">
                      {card.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 group-hover:text-slate-500 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold font-display text-slate-200 group-hover:text-cyber-cyan transition-colors">
                    {card.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
