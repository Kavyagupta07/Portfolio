import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Download, ExternalLink, MessageSquare, Hand } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20 lg:pt-0 gap-12 lg:gap-24 overflow-hidden">
      {/* Left Side: Profile Picture */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Waving Woman Avatar */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 40, opacity: 0, x: 20 }}
              animate={{ y: -60, opacity: 1, x: 40 }}
              exit={{ y: 40, opacity: 0, x: 20 }}
              className="absolute z-0 pointer-events-none"
            >
              <div className="relative">
                {/* Speech Bubble */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -top-12 -right-4 bg-gold text-deep-black px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg"
                >
                  HII! 👋
                  <div className="absolute -bottom-1 left-2 w-2 h-2 bg-gold rotate-45" />
                </motion.div>
                
                {/* Cartoon Woman SVG (Matching Demo Image) */}
                <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-2xl">
                  {/* Body/Shirt (Purple) */}
                  <path d="M25 95 Q50 75 75 95 L75 100 L25 100 Z" fill="#9b86bd" />
                  <path d="M35 80 Q50 75 65 80 L65 95 L35 95 Z" fill="#9b86bd" />
                  
                  {/* Neck */}
                  <rect x="45" y="70" width="10" height="10" fill="#f5d0b0" />

                  {/* Curly Hair (Back Layer) */}
                  <path d="M25 60 Q20 50 25 40 Q30 30 40 25 Q50 20 60 25 Q70 30 75 40 Q80 50 75 60" fill="#1a1a1a" />
                  <circle cx="25" cy="45" r="8" fill="#1a1a1a" />
                  <circle cx="75" cy="45" r="8" fill="#1a1a1a" />
                  <circle cx="30" cy="35" r="8" fill="#1a1a1a" />
                  <circle cx="70" cy="35" r="8" fill="#1a1a1a" />
                  <circle cx="40" cy="28" r="8" fill="#1a1a1a" />
                  <circle cx="60" cy="28" r="8" fill="#1a1a1a" />
                  <circle cx="50" cy="25" r="8" fill="#1a1a1a" />

                  {/* Face */}
                  <circle cx="50" cy="55" r="18" fill="#f5d0b0" />
                  
                  {/* Curly Hair (Front/Side Curls) */}
                  <circle cx="32" cy="50" r="6" fill="#1a1a1a" />
                  <circle cx="68" cy="50" r="6" fill="#1a1a1a" />
                  <circle cx="30" cy="60" r="7" fill="#1a1a1a" />
                  <circle cx="70" cy="60" r="7" fill="#1a1a1a" />
                  <circle cx="35" cy="70" r="6" fill="#1a1a1a" />
                  <circle cx="65" cy="70" r="6" fill="#1a1a1a" />

                  {/* Eyes */}
                  <circle cx="43" cy="55" r="2.5" fill="#fff" />
                  <circle cx="43" cy="55" r="1.2" fill="#4a3728" />
                  <circle cx="57" cy="55" r="2.5" fill="#fff" />
                  <circle cx="57" cy="55" r="1.2" fill="#4a3728" />

                  {/* Glasses */}
                  <circle cx="43" cy="55" r="5" fill="none" stroke="#333" strokeWidth="0.5" />
                  <circle cx="57" cy="55" r="5" fill="none" stroke="#333" strokeWidth="0.5" />
                  <line x1="48" y1="55" x2="52" y2="55" stroke="#333" strokeWidth="0.5" />
                  <line x1="38" y1="55" x2="35" y2="54" stroke="#333" strokeWidth="0.5" />
                  <line x1="62" y1="55" x2="65" y2="54" stroke="#333" strokeWidth="0.5" />

                  {/* Smile */}
                  <path d="M45 64 Q50 68 55 64" fill="none" stroke="#8b5e3c" strokeWidth="1" strokeLinecap="round" />
                  
                  {/* Waving Hand */}
                  <motion.g
                    animate={{ rotate: [0, 15, -5, 15, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "75px", originY: "85px" }}
                  >
                    {/* Arm */}
                    <path d="M75 85 L88 65" stroke="#f5d0b0" strokeWidth="7" strokeLinecap="round" />
                    {/* Palm */}
                    <circle cx="88" cy="65" r="6" fill="#f5d0b0" />
                    {/* Fingers */}
                    <line x1="88" y1="65" x2="88" y2="55" stroke="#f5d0b0" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="88" y1="65" x2="83" y2="57" stroke="#f5d0b0" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="88" y1="65" x2="93" y2="57" stroke="#f5d0b0" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="88" y1="65" x2="79" y2="62" stroke="#f5d0b0" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="88" y1="65" x2="97" y2="62" stroke="#f5d0b0" strokeWidth="2.5" strokeLinecap="round" />
                  </motion.g>
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-gold/30 p-2 relative z-10 bg-deep-black/50 backdrop-blur-sm">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-green relative gold-glow">
            <img 
              src={personal.profilePic} 
              alt={personal.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Animated Glow Rings */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-gold/20 -z-10"
          />
        </div>
      </motion.div>

      {/* Right Side: Text Content */}
      <div className="flex-1 text-center lg:text-left max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Hi, I am
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            {personal.name}
          </h1>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            {personal.subtitles.map((sub, i) => (
              <span key={i} className="px-4 py-1 rounded-full glass text-sm font-medium text-white/80 border-gold/20">
                {sub}
              </span>
            ))}
          </div>

          <p className="text-white/60 text-lg mb-10 font-light leading-relaxed">
            {personal.about}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <motion.a 
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gold text-deep-black font-bold rounded-full flex items-center gap-2 hover:bg-white transition-colors"
            >
              <Download size={18} />
              View Resume
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass text-white font-bold rounded-full flex items-center gap-2 hover:bg-gold/20 transition-colors"
            >
              <ExternalLink size={18} />
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gold/30 text-gold font-bold rounded-full flex items-center gap-2 hover:bg-gold/10 transition-colors"
            >
              <MessageSquare size={18} />
              Contact Me
            </motion.button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6">
            {personal.socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                whileHover={{ y: -5, color: "#d4af37" }}
                className="text-white/40 transition-colors"
                title={social.name}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
