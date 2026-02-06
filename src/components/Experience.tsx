import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    title: "Full Stack Web Development",
    institution: "OFPPT",
    year: "2022 - 2024",
    description: "Specialized training in modern web technologies, software architecture, and agile methodologies. Gained hands-on experience in building scalable applications."
  },
  {
    title: "Baccalaureate",
    institution: "High School",
    year: "2023",
    description: "Scientific Baccalaureate ."
  }
];

export const Experience = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
          Education Timeline
        </motion.h2>

        <div className="relative border-l border-slate-700 ml-4 md:ml-10 space-y-12">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", bounce: 0.3 }}
              className="relative pl-8 md:pl-12 group"
            >
              <motion.span 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-cyan-500 rounded-full ring-4 ring-slate-900 z-10" 
              />
              <span className="absolute left-[-4px] top-2 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping" />
              
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 hover:bg-slate-800/60 group-hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <GraduationCap className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                    {item.title}
                  </h3>
                  <div className="flex items-center text-slate-400 text-sm bg-slate-900/50 px-3 py-1 rounded-full w-fit border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    <Calendar size={14} className="mr-2 text-cyan-500/70" />
                    {item.year}
                  </div>
                </div>
                
                <h4 className="text-cyan-400 mb-2 font-medium tracking-wide">{item.institution}</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
