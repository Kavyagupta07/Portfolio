import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-20">
          {projects.map((category, cIdx) => (
            <div key={cIdx}>
              <h3 className="text-2xl font-bold mb-8 text-gold/80 flex items-center gap-4">
                {category.category}
                <div className="h-px bg-gold/20 flex-1" />
              </h3>
              
              <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x snap-mandatory">
                {category.items.map((project, pIdx) => (
                  <motion.div
                    key={pIdx}
                    whileHover={{ y: -10 }}
                    className="glass rounded-3xl overflow-hidden group border-white/5 hover:border-gold/20 transition-all duration-500 w-[280px] md:w-[360px] flex-shrink-0 snap-center"
                  >
                    <div className="h-48 bg-gradient-to-br from-dark-green/20 to-gold/5 relative overflow-hidden">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                           <div className="w-32 h-32 rounded-full border-4 border-gold/20 animate-pulse" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-deep-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <div className="flex gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-mono text-white/70">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h4 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{project.name}</h4>
                      <p className="text-white/60 text-sm mb-8 line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <motion.a
                          href={project.details}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-2 rounded-xl bg-gold text-deep-black text-center text-sm font-bold flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={14} />
                          View Details
                        </motion.a>
                        
                        {(project as any).github && (
                          <motion.a
                            href={(project as any).github}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            className="p-2 rounded-xl border border-white/10 text-white/60"
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                        
                        {(project as any).linkedin && (
                          <motion.a
                            href={(project as any).linkedin}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            className="p-2 rounded-xl border border-white/10 text-white/60"
                          >
                            <Linkedin size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
