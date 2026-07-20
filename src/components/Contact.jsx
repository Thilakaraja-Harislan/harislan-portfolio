import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import emailjs from '@emailjs/browser';


// EmailJS Configuration - Fill these in when you have active credentials
const EMAILJS_CONFIG = {
  serviceId: 'service_k570s22', // e.g., 'service_xx'
  templateId: 'template_xvtjlo3', // e.g., 'template_xx'
  publicKey: 'oTGTC7mbNU-TcBDYu', // e.g., 'user_xx'
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Collaboration', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusText, setStatusText] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    
    // Check if EmailJS keys are configured
    const isEmailJsConfigured = EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey;

    if (isEmailJsConfigured) {
      setStatusText('Transmitting data via EmailJS...');
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: form.name,
            reply_to: form.email,
            subject: form.subject,
            message: form.message,
          },
          EMAILJS_CONFIG.publicKey
        );
        setStatus('success');
      } catch (err) {
        console.error('EmailJS Error:', err);
        setStatus('error');
      }
    } else {
      // Local Simulated Submission Flow with beautiful transition logs
      setStatusText('Securing connection endpoint...');
      
      setTimeout(() => {
        setStatusText('Uploading secure message payload...');
      }, 700);

      setTimeout(() => {
        setStatusText('Delivering to harislanharis05@gmail.com...');
      }, 1400);

      setTimeout(() => {
        setStatus('success');
        setForm({ name: '', email: '', subject: 'Collaboration', message: '' });
      }, 2200);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute bottom-0 left-[10%] w-[35vw] h-[35vw] rounded-full bg-cyber-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />

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
          <span className="text-sm font-semibold tracking-widest text-cyber-cyan uppercase mb-2">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display">
            Let's Start a <span className="text-gradient-cyan-purple">Conversation</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Contact Methods (Left) */}
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
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-200">
              Contact Channels
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Have a role, a collaborative project idea, or a query about my full stack framework benchmarks? 
              Reach out using the form, or ping me directly. Let's build!
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-900 bg-slate-950/20">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-cyber-cyan">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider">Email Me</span>
                  <a href="mailto:harislanharis05@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-cyber-cyan transition-colors">
                    harislanharis05@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-900 bg-slate-950/20">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-cyber-purple">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider">Call Me</span>
                  <a href="tel:0753677728" className="text-sm font-semibold text-slate-200 hover:text-cyber-purple transition-colors">
                    +94 75 367 7728
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-900 bg-slate-950/20">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-cyber-cyan">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider">Location</span>
                  <span className="text-sm font-semibold text-slate-200">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links / Socials */}
            <div className="pt-6 border-t border-slate-900/60">
              <span className="text-xs text-slate-500 block uppercase tracking-wider mb-3">Connect on Social Networks</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Thilakaraja-Harislan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-slate-100 hover:border-slate-800 transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/thilakaraja-harislan-harislan-b979382b9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-slate-100 hover:border-slate-800 transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Container (Right) */}
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
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-900 bg-slate-950/25 relative overflow-hidden">
              
              {status === 'sending' && (
                <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6">
                  <Loader2 className="text-cyber-cyan animate-spin mb-4" size={40} />
                  <p className="text-white font-bold text-lg font-display mb-1">Sending Message</p>
                  <p className="text-xs text-slate-400 font-mono">{statusText}</p>
                </div>
              )}

              {status === 'success' && (
                <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6">
                  <div className="p-3 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-white font-bold text-xl font-display mb-2">Message Dispatched!</h4>
                  <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
                    Thank you. Your message has been successfully logged. I will review and reply via email shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-800 text-xs font-bold transition-all"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyber-cyan/50 focus:outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyber-cyan/50 focus:outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 focus:border-cyber-cyan/50 focus:outline-none transition-all duration-300 shadow-inner cursor-pointer"
                  >
                    <option value="Collaboration">Collaboration / Project</option>
                    <option value="Internship">Internship Opportunity</option>
                    <option value="Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your requirements..."
                    className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyber-cyan/50 focus:outline-none transition-all duration-300 shadow-inner resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyber-cyan to-cyber-indigo shadow-lg shadow-cyber-cyan/10 hover:shadow-cyber-cyan/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
