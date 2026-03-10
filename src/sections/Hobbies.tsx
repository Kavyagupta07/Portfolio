import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { PenTool, Music, ExternalLink, Book, X, Send, Lock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Hobbies() {
  const { hobbies } = portfolioData as any;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const [status, setStatus] = useState<string>("");

  const handleRequestAccess = (work: any) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    setStatus("");
  };

  const onSubmitRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending Request...");

    const formData = new FormData(e.currentTarget);
    const userName = formData.get("name") as string;
    const userEmail = formData.get("email") as string;
    const userMessage = formData.get("message") as string;

    const templateParams = {
      name: userName,
      email: userEmail,
      title: selectedWork.title,
      message: userMessage,
      allow_link: `mailto:${userEmail}?subject=Access Granted: ${selectedWork.title}&body=Hello ${userName},%0D%0A%0D%0AI have reviewed your request and I am happy to grant you access to view "${selectedWork.title}".%0D%0A%0D%0AYou can access it here: ${selectedWork.link}%0D%0A%0D%0ABest regards,%0D%0AKavya Kumari Gupta`,
      deny_link: `mailto:${userEmail}?subject=Access Denied: ${selectedWork.title}&body=Hello ${userName},%0D%0A%0D%0AThank you for your interest. Unfortunately, I cannot grant access to "${selectedWork.title}" at this time.%0D%0A%0D%0ABest regards,%0D%0AKavya Kumari Gupta`
    };

    try {
      const result = await emailjs.send(
        'kavya07',
        'template_2j3b1ib',
        templateParams,
        'mXbvKYb_mDK9Pc6uM'
      );

      if (result.status === 200) {
        setStatus("Request Sent! The owner will contact you via email.");
        setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setStatus(`EmailJS Response Error: ${result.text}`);
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus(`EmailJS Error: ${error?.text || error?.message || "Unknown error"}`);
    }
  };

  return (
    <section id="hobbies" className="py-24 px-6 max-w-6xl mx-auto relative">
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
              <motion.button
                key={idx}
                onClick={() => handleRequestAccess(work)}
                whileHover={{ x: 10 }}
                className="w-full text-left block p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 hover:bg-gold/5 transition-all group/item"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Book className="text-gold mt-1 shrink-0" size={18} />
                    <div>
                      <h4 className="font-bold text-white group-hover/item:text-gold transition-colors flex items-center gap-2">
                        {work.title}
                        <Lock size={12} className="text-white/30" />
                      </h4>
                      <p className="text-white/40 text-sm mt-1">{work.desc}</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/20 group-hover/item:text-gold transition-colors shrink-0" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

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

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg glass p-8 rounded-3xl border-gold/30 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Access Restricted</h3>
                  <p className="text-white/60 text-sm">Permission required to view this content</p>
                </div>
              </div>

              <p className="text-white/80 mb-8 font-light">
                Please send a message to the owner to get access to: <span className="text-gold font-bold italic">{selectedWork?.title}</span>.
              </p>

              <form onSubmit={onSubmitRequest} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 outline-none text-white text-sm"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 outline-none text-white text-sm"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Why do you want to access this?"
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 outline-none text-white text-sm resize-none"
                />

                <button
                  type="submit"
                  disabled={status.includes("Request Sent")}
                  className="w-full py-3 bg-gold text-deep-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                  Send Request
                </button>

                {status && (
                  <p className={`text-center text-sm mt-4 ${status.includes("Error") ? "text-red-400" : "text-gold"}`}>
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
