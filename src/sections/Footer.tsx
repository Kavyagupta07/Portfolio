import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Kavya</h2>
          <p className="text-white/40 text-sm">AI-ML Engineer & Product Analyst</p>
        </div>

        <div className="flex items-center gap-8">
          <a href={portfolioData.personal.socials.find(s => s.name === "GitHub")?.url} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" title="GitHub"><Github size={20} /></a>
          <a href={portfolioData.personal.socials.find(s => s.name === "LinkedIn")?.url} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-white/40 hover:text-gold transition-colors" title="Email"><Mail size={20} /></a>
          <a href={portfolioData.personal.resume} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" title="Resume"><FileText size={20} /></a>
        </div>

        <p className="text-white/20 text-xs font-mono">
          © {currentYear} Kavya Kumari Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
