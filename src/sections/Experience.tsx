import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience & Training</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent transform -translate-x-1/2 hidden md:block" />
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gold/30 md:hidden" />

        <div className="space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-deep-black border-2 border-gold transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-12 md:pl-0`}>
                <div className="glass p-8 rounded-3xl hover:border-gold/30 transition-colors group">
                  <span className="text-gold font-mono text-sm mb-2 block">{item.period}</span>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-gold transition-colors">{item.title}</h3>
                  {item.company && (
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-bold">{item.company}</p>
                  )}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
