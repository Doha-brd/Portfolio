import { motion } from "framer-motion";
import { ArrowDown, Download, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative group"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative z-10 group-hover:border-cyan-500/50 transition-colors duration-500">
            {/* Placeholder Image - Replace with actual photo */}
            <img 
              src="/public/photoo.png" 
              alt="DohaDEV" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          {/* Decorative Ring */}
          <div className="absolute inset-0 -m-2 rounded-full border-2 border-cyan-500/30 border-dashed animate-spin-slow pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-cyan-400 font-mono text-xl mb-4 tracking-wide"
          >
            Hello, I am
          </motion.h2>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Doha Berrachid
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionate about crafting digital experiences using modern web technologies. 
            Transforming ideas into elegant, functional, and scalable solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
             <button 
               onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
             >
               View Projects
             </button>
             
             <a 
               href="/cv.pdf" // Placeholder link
               download="DohaDEV_CV.pdf"
               className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
             >
               <Download size={18} className="group-hover:animate-bounce" />
               Download CV
             </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
