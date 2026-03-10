import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export default function Languages() {
  const { languages } = portfolioData;

  return (
    <section id="languages" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Languages</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {languages.map((lang, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{lang.name}</h3>
                <p className="text-gold text-sm font-medium">{lang.level}</p>
              </div>
              <span className="text-white/40 font-mono text-sm">{lang.percent}%</span>
            </div>
            
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-dark-green to-gold"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
