import Background3D from './components/Background3D';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import CodingStats from './sections/CodingStats';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Languages from './sections/Languages';
import LatestUpdates from './sections/LatestUpdates';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-gold/30 selection:text-gold">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <Background3D />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <CodingStats />
        <Projects />
        <Experience />
        <Certifications />
        <Languages />
        <LatestUpdates />
        <Hobbies />
        <Contact />
        <Footer />
      </main>

      {/* Navigation Helper (Optional, but good for UX) */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 glass rounded-full z-50 hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
        <a href="#" className="hover:text-gold transition-colors">Home</a>
        <a href="#about" className="hover:text-gold transition-colors">About</a>
        <a href="#skills" className="hover:text-gold transition-colors">Skills</a>
        <a href="#projects" className="hover:text-gold transition-colors">Projects</a>
        <a href="#hobbies" className="hover:text-gold transition-colors">Hobbies</a>
        <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
      </nav>
    </div>
  );
}
