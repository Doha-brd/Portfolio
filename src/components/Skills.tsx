import { motion } from "framer-motion";

const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  Backend: ["Laravel", "Node.js", "PHP"],
  Database: ["MySQL", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "Docker", "VS Code", "Figma", "Postman"]
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
          Technical Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-cyan-500/10" />
              
              <h3 className="text-xl font-bold text-cyan-400 mb-6 border-b border-slate-700 pb-2 group-hover:border-cyan-500/30 transition-colors relative z-10">
                {category}
              </h3>
              <ul className="space-y-3 relative z-10">
                {items.map((skill, idx) => (
                  <motion.li 
                    key={skill} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (idx * 0.05) + 0.2 }}
                    className="text-slate-300 flex items-center gap-2 group-hover:text-slate-100 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
