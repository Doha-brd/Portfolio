import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "React",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    description: "A full-featured online store with cart functionality, payment integration, and admin dashboard.",
    tech: ["React", "Redux", "Stripe", "Tailwind"]
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Laravel",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    description: "Collaborative project management tool with real-time updates and team workspace features.",
    tech: ["Laravel", "Vue.js", "MySQL", "Pusher"]
  },
  {
    id: 3,
    title: "Portfolio Template",
    category: "React",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Modern, responsive portfolio template for developers with dark mode support.",
    tech: ["React", "Framer Motion", "Tailwind"]
  },
  {
    id: 4,
    title: "Real Estate API",
    category: "Laravel",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    description: "RESTful API for real estate listings with advanced search and filtering capabilities.",
    tech: ["Laravel", "PostgreSQL", "Redis", "Docker"]
  }
];

const categories = ["All", "React", "Laravel"];

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-100 flex items-center gap-4"
          >
            <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
            Featured Projects
          </motion.h2>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/25" 
                    : "bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700 hover:border-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                key={project.id}
                className="group bg-slate-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-400 border border-slate-700 shadow-lg">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                     <div className="flex gap-3 bg-slate-900/80 backdrop-blur p-2 rounded-lg border border-slate-700">
                      <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110">
                        <Github size={20} />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
