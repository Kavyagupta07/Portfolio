import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { PenTool, Music, ExternalLink, Book } from 'lucide-react';

export default function Hobbies() {
  const { hobbies } = portfolioData as any;

  return (
    <section id="hobbies" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Hobbies & Interests</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Writing Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border-gold/10 hover:border-gold/30 transition-all group"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <PenTool size={24} />
            </div>
            <h3 className="text-2xl font-bold">Writing</h3>
          </div>

          <div className="space-y-6">
            {hobbies.writing.map((work: any, idx: number) => (
              <motion.a
                key={idx}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="block p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 hover:bg-gold/5 transition-all group/item"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Book className="text-gold mt-1 shrink-0" size={18} />
                    <div>
                      <h4 className="font-bold text-white group-hover/item:text-gold transition-colors">{work.title}</h4>
                      <p className="text-white/40 text-sm mt-1">{work.desc}</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/20 group-hover/item:text-gold transition-colors shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Music Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border-gold/10 hover:border-gold/30 transition-all group"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <Music size={24} />
            </div>
            <h3 className="text-2xl font-bold">Music</h3>
          </div>

          <div className="space-y-6">
            <p className="text-white/60 leading-relaxed italic">
              "{hobbies.music.desc}"
            </p>
            
            <div className="flex flex-wrap gap-3">
              {hobbies.music.interests.map((interest: string, idx: number) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Visualizer Mockup */}
            <div className="pt-8 flex items-end gap-1 h-12">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    height: [10, Math.random() * 40 + 10, 10],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 1 + Math.random(), 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex-1 bg-gold rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
