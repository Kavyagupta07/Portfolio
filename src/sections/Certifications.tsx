import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="min-w-[280px] md:min-w-[320px] glass p-8 rounded-3xl relative group overflow-hidden snap-center"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award size={80} />
              </div>
              
              <div className="mb-6 p-4 rounded-2xl bg-gold/10 w-fit text-gold">
                <Award size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{cert.title}</h3>
              <p className="text-white/40 text-sm mb-1">{cert.institution}</p>
              <p className="text-gold/60 font-mono text-xs mb-8">{cert.year}</p>
              
              <motion.a
                href={cert.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl border border-gold/30 text-gold text-sm font-bold flex items-center justify-center gap-2 hover:bg-gold hover:text-deep-black transition-all"
              >
                <ExternalLink size={16} />
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
