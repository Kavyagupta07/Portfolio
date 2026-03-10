import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { PenTool, Music, ExternalLink, Book, X, Send, Lock } from 'lucide-react';

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
    const userName = formData.get("name");
    const userEmail = formData.get("email");
    const userMessage = formData.get("message");

    // Constructing a clean HTML email body for the owner
    const htmlMessage = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #333;">Access Request</h2>
        <p><strong>User:</strong> ${userName} (${userEmail})</p>
        <p><strong>Writing:</strong> ${selectedWork.title}</p>
        <p><strong>Message:</strong> ${userMessage}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <div style="display: flex; gap: 10px;">
          <a href="mailto:${userEmail}?subject=Access Granted: ${selectedWork.title}&body=Hi ${userName}, I have granted you access. You can view it here: ${selectedWork.link}" 
             style="background-color: #d4af37; color: black; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
            ALLOW
          </a>
          <a href="mailto:${userEmail}?subject=Access Denied: ${selectedWork.title}&body=Hi ${userName}, unfortunately I cannot grant access at this time." 
             style="background-color: #333; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin-left: 10px;">
            DON'T ALLOW
          </a>
        </div>
      </div>
    `;

    formData.append("access_key", "666812ce-be2f-4f67-a29e-f4a402873b4f");
    formData.append("subject", `New Access Request from ${userName}`);
    formData.append("from_name", "Portfolio Admin");
    formData.append("message", htmlMessage); // Web3Forms will treat this as the message content

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setStatus("Request Sent! The owner will contact you via email.");
      setTimeout(() => setIsModalOpen(false), 3000);
    } else {
      setStatus("Error sending request. Please try again.");
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

        {/* Music Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border-gold/10 hover:border-gold/30 transition-all group"
        >
          {/* ... existing music section ... */}
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

      {/* Modal Overlay */}
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
