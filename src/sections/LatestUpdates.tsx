import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export default function LatestUpdates() {
  const { updates } = portfolioData;

  return (
    <section id="updates" className="py-24 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Latest Updates</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((update, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl relative group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-dark-green/20 w-fit text-emerald-400">
                <update.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{update.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {update.content}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Read More
                <div className="w-8 h-px bg-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
