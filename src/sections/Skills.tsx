import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-gold font-display text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                {category.category}
              </h3>
              <div className="grid gap-3">
                {category.items.map((skill, sIdx) => (
                  <motion.a
                    key={sIdx}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                    className="glass p-4 rounded-xl flex items-center justify-between group transition-all"
                  >
                    <span className="text-white/80 group-hover:text-gold font-medium">
                      {skill.name}
                    </span>
                    <ExternalLink size={14} className="text-white/20 group-hover:text-gold transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
