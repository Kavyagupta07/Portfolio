import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Trophy, Target, Star, Award } from 'lucide-react';

export default function CodingStats() {
  const { codingStats } = portfolioData;

  return (
    <section id="coding" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Competitive Coding</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {codingStats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={80} />
            </div>
            
            <h3 className="text-2xl font-bold text-gold mb-6">{stat.platform}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/60">
                  <Target size={16} />
                  <span>Solved</span>
                </div>
                <span className="font-mono text-white font-bold">{stat.solved}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/60">
                  <Star size={16} />
                  <span>Ranking</span>
                </div>
                <span className="font-mono text-white font-bold">{stat.ranking}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/60">
                  <Award size={16} />
                  <span>Rating</span>
                </div>
                <span className="font-mono text-gold font-bold">{stat.rating}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {stat.badges.map((badge, bIdx) => (
                <span key={bIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/60">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Tracker Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-12"
      >
        <div className="glass p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Live Activity Feed
          </h3>
          <div className="space-y-6">
            {[
              { platform: "LeetCode", problem: "Longest Palindromic Substring", time: "2 hours ago", difficulty: "Medium" },
              { platform: "GeeksforGeeks", problem: "Detect Cycle in Directed Graph", time: "5 hours ago", difficulty: "Hard" },
              { platform: "LeetCode", problem: "Two Sum", time: "1 day ago", difficulty: "Easy" },
              { platform: "LeetCode", problem: "Merge Intervals", time: "2 days ago", difficulty: "Medium" }
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-bold text-white/90">{item.problem}</p>
                  <p className="text-xs text-white/40">{item.platform} • {item.time}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  item.difficulty === 'Easy' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' :
                  item.difficulty === 'Medium' ? 'border-gold/30 text-gold bg-gold/5' :
                  'border-red-500/30 text-red-400 bg-red-500/5'
                }`}>
                  {item.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-6">Problem Solving Progress</h3>
            <div className="space-y-8">
              {[
                { label: "Easy", count: 120, total: 200, color: "bg-emerald-500" },
                { label: "Medium", count: 85, total: 150, color: "bg-gold" },
                { label: "Hard", count: 45, total: 100, color: "bg-red-500" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">{item.label}</span>
                    <span className="text-white/90 font-mono">{item.count}/{item.total}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.count / item.total) * 100}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Total Problems Solved</p>
            <p className="text-4xl font-bold text-gold">700+</p>
          </div>
        </div>
      </motion.div>

      {/* GitHub Style Heatmap Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <div className="w-2 h-6 bg-dark-green rounded-full" />
            Activity Heatmap
          </h3>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>Less</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-3 h-3 rounded-sm ${i === 1 ? 'bg-white/5' : i === 2 ? 'bg-emerald-900/40' : i === 3 ? 'bg-emerald-800/60' : i === 4 ? 'bg-emerald-700/80' : 'bg-emerald-500'}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
        
        <div className="grid grid-cols-7 sm:grid-cols-14 md:grid-cols-28 lg:grid-cols-52 gap-1 overflow-x-auto pb-2">
          {Array.from({ length: 364 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-sm shrink-0 ${Math.random() > 0.7 ? (Math.random() > 0.5 ? 'bg-emerald-600' : 'bg-emerald-800') : 'bg-white/5'}`} 
            />
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-white/40 italic">
          Consistent daily contributions across platforms
        </p>
      </motion.div>
    </section>
  );
}
