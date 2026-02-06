import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Copy, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "dohaberrachid53@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-6">Let's Work Together</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I'm currently available for freelance work and open to full-time opportunities.
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={handleCopy}
              className="group relative flex items-center gap-3 bg-slate-800 px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all w-full md:w-auto justify-center min-w-[300px]"
            >
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-200 font-mono text-lg">{email}</span>
              <div className="absolute right-4 text-slate-500">
                {copied ? <Check className="text-green-400" size={20} /> : <Copy className="group-hover:text-cyan-400 transition-colors" size={20} />}
              </div>
              
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500/10 text-green-400 text-xs py-1 px-3 rounded border border-green-500/20"
                >
                  Copied!
                </motion.span>
              )}
            </button>

            <div className="flex gap-6 mt-8">
              {[Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 0 ? "https://github.com/Doha-brd" : "https://www.linkedin.com/in/doha-berrachid-555312350/"}

                  className="p-3 bg-slate-800 rounded-full border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all transform hover:-translate-y-1"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
