import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Phone, Mail, MapPin, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  const infoItems = [
    { icon: Phone, label: "Phone", value: personal.phone },
    { icon: Mail, label: "Email", value: personal.email },
    { icon: Award, label: "CGPA", value: personal.cgpa },
    { icon: MapPin, label: "Location", value: personal.location },
    { icon: GraduationCap, label: "Degree", value: personal.degree },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
          <p className="text-xl text-white/80 leading-relaxed font-light">
            {personal.about}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-dark-green/30 border border-dark-green/50 text-emerald-400 text-sm font-medium">
              AI/ML Enthusiast
            </div>
            <div className="px-4 py-2 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-medium">
              Problem Solver
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="glass p-6 rounded-2xl flex items-start gap-4 transition-colors"
            >
              <div className="p-3 rounded-xl bg-gold/10 text-gold">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-medium text-white/90 break-all">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
