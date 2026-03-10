import { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);

    // Use our environment variable key
    formData.append("access_key", (process.env as any).WEB3FORMS_ACCESS_KEY || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Let's build something <span className="text-gold">intelligent</span> together.</h3>
          <p className="text-white/60 mb-12 text-lg font-light">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gold group-hover:bg-gold group-hover:text-deep-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                <p className="text-lg font-medium">{personal.email}</p>
              </div>
            </a>

            <a href={personal.socials.find(s => s.name === "LinkedIn")?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gold group-hover:bg-gold group-hover:text-deep-black transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">LinkedIn</p>
                <p className="text-lg font-medium">Kavya Kumari Gupta</p>
              </div>
            </a>

            <a href={personal.socials.find(s => s.name === "GitHub")?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gold group-hover:bg-gold group-hover:text-deep-black transition-all">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">GitHub</p>
                <p className="text-lg font-medium">Kavyagupta07</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl"
        >
          <form
            onSubmit={onSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-gold/50 focus:outline-none transition-colors text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-gold/50 focus:outline-none transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-gold/50 focus:outline-none transition-colors text-white resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-gold text-deep-black font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <Send size={18} />
              Send Message
            </motion.button>

            {result && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center mt-4 text-sm font-medium ${result.includes("Successfully") ? "text-green-400" : "text-gold"}`}
              >
                {result}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
