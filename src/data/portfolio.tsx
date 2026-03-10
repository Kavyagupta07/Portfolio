import { 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Terminal,
  Layers,
  BarChart3,
  MessageSquare,
  Smartphone
} from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Kavya Kumari Gupta",
    title: "AI / ML Engineer",
    subtitles: ["AI-ML Engineer", "Product Analyst"],
    availability: "Available for Internships • Freelance • Full-Time Roles",
    email: "kg3512138@gmail.com",
    phone: "+91 9330883465",
    location: "Kolkata, West Bengal, India",
    cgpa: "7.9",
    degree: "B.Tech CSE (AI & ML)",
    profilePic: "https://drive.google.com/thumbnail?id=1S3AutAhMvV1nJiUwNhQf1u3Bkwbkmjbw&sz=w1000",
    resume: "https://drive.google.com/file/d/1Lb8zSE9xLBd2LXrFHjyPyiDPONnGxx1q/view?usp=drive_link",
    about: "AI/ML undergraduate specializing in machine learning systems, full-stack applications, and product analysis. Interested in building intelligent products that combine AI engineering, product thinking, and finance insights.",
    socials: [
      { name: "GitHub", url: "https://github.com/Kavyagupta07", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kavyagupta23/", icon: Linkedin },
      { name: "LeetCode", url: "https://leetcode.com/u/kavyagupta07/", icon: Code2 },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/kg351biid", icon: Terminal },
      { name: "Email", url: "mailto:kg3512138@gmail.com", icon: Mail },
    ]
  },
  skills: [
    {
      category: "Programming",
      items: [
        { name: "C++", url: "https://en.wikipedia.org/wiki/C%2B%2B" },
        { name: "Python", url: "https://www.python.org/" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "React", url: "https://react.dev/" },
        { name: "Node.js", url: "https://nodejs.org/" },
        { name: "Express", url: "https://expressjs.com/" },
        { name: "MongoDB", url: "https://www.mongodb.com/" }
      ]
    },
    {
      category: "AI / ML",
      items: [
        { name: "Machine Learning", url: "https://en.wikipedia.org/wiki/Machine_learning" },
        { name: "NLP", url: "https://en.wikipedia.org/wiki/Natural_language_processing" },
        { name: "Data Analysis", url: "https://en.wikipedia.org/wiki/Data_analysis" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", url: "https://git-scm.com/" },
        { name: "Linux", url: "https://www.linux.org/" },
        { name: "Firebase", url: "https://firebase.google.com/" }
      ]
    }
  ],
  codingStats: [
    { platform: "LeetCode", solved: "250+", ranking: "Top 15%", rating: "1650", badges: ["Knight", "50 Days Badge"] },
    { platform: "GeeksforGeeks", solved: "300+", ranking: "Top 5%", rating: "2100", badges: ["Problem Solver"] },
    { platform: "HackerRank", solved: "150+", ranking: "Gold Badge", rating: "5 Stars", badges: ["Problem Solving"] }
  ],
  projects: [
    {
      category: "AI / ML Projects",
      items: [
        { 
          name: "Ship Trajectory Anomaly Detection", 
          desc: "Advanced system for detecting anomalies in maritime vessel trajectories using machine learning techniques.", 
          tech: ["Python", "Machine Learning", "Data Analysis", "Geospatial Data"],
          github: "https://github.com/Kavyagupta07/Detection-of-Anomalies-in-Ship-Trajectories",
          details: "https://github.com/Kavyagupta07/Detection-of-Anomalies-in-Ship-Trajectories",
          image: "https://drive.google.com/thumbnail?id=1HfxipodgIAKUrzn7n1_UiXQk0-ZDi4sq&sz=w1000"
        },
        { 
          name: "Audio Classifier using SVM", 
          desc: "Robust audio classification system utilizing Support Vector Machines for accurate sound category identification.", 
          tech: ["Python", "SVM", "Signal Processing", "Librosa"],
          github: "https://github.com/Kavyagupta07/Audio-Classifier-using-SVM",
          details: "https://github.com/Kavyagupta07/Audio-Classifier-using-SVM",
          image: "https://drive.google.com/thumbnail?id=1FNBZztpimLYd0LvF3W_pAUOIb8_izobm&sz=w1000"
        }
      ]
    },
    {
      category: "Full-Stack Projects",
      items: [
        { 
          name: "QRify", 
          desc: "A versatile QR code generator for URLs, text, and contact information.", 
          tech: ["React", "Node.js", "Express", "QR API"],
          github: "https://github.com/Kavyagupta07/QRify",
          details: "https://github.com/Kavyagupta07/QRify",
          image: "https://drive.google.com/thumbnail?id=1z8-WsUMWk6kgEyy1YRtZug3_g2NEmJPQ&sz=w1000"
        },
        { 
          name: "FlashFeed", 
          desc: "TikTok-Style Social Media App featuring short-form video content and interactive social feed.", 
          tech: ["React Native", "Firebase", "Node.js"],
          github: "https://github.com/Kavyagupta07/TikTok-Style-Social-Feed-App",
          details: "https://github.com/Kavyagupta07/TikTok-Style-Social-Feed-App",
          image: "https://drive.google.com/thumbnail?id=1wwLIrS4CTNnBRx6oHa5wkkDqnOKXe8_x&sz=w1000"
        },
        { 
          name: "Monthly Expense Analyzer", 
          desc: "Automated analysis of bank statements using Puppeteer for data extraction and financial insights.", 
          tech: ["Puppeteer", "Node.js", "Data Analysis"],
          github: "https://github.com/Kavyagupta07/Monthly-Expense-Analyzer-from-Bank-Statements",
          details: "https://github.com/Kavyagupta07/Monthly-Expense-Analyzer-from-Bank-Statements",
          image: "https://drive.google.com/thumbnail?id=1Y9PfcfG5L89ChH-BoGw3FRxVzycRzhs1&sz=w1000"
        }
      ]
    },
    {
      category: "Product Teardowns",
      items: [
        { 
          name: "Amazon Product Teardown", 
          desc: "Comprehensive analysis of Amazon's user experience and conversion optimization strategies.", 
          tech: ["Product Analysis", "UX Research"],
          image: "https://drive.google.com/thumbnail?id=1tWLxDCb0vm58eymk41v_sVlakOHtp6JC&sz=w1000",
          linkedin: "https://www.linkedin.com/posts/kavyagupta23_amazon-teardown-activity-7351948581487984641-Be-A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQCn44Bi9u6CFCTVzuXR0c2mdWaXyCYpS8",
          details: "https://drive.google.com/file/d/1tWLxDCb0vm58eymk41v_sVlakOHtp6JC/view?usp=sharing"
        },
        { 
          name: "Blinkit Product Teardown", 
          desc: "Deep dive into Blinkit's quick commerce model and user retention mechanics.", 
          tech: ["Market Analysis", "Product Strategy"],
          image: "https://drive.google.com/thumbnail?id=1vlpVYOzYLG3VUv-u6pPTL2iIV6U61iAV&sz=w1000",
          linkedin: "https://www.linkedin.com/posts/kavyagupta23_blinkit-teardown-activity-7338934846896951300-GMjh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQCn44Bi9u6CFCTVzuXR0c2mdWaXyCYpS8",
          details: "https://drive.google.com/file/d/1vlpVYOzYLG3VUv-u6pPTL2iIV6U61iAV/view?usp=drive_link"
        }
      ]
    }
  ],
  experience: [
    { title: "Product Manager Intern", company: "Languify.in", period: "2026 - Present", desc: "Driving product strategy and user experience improvements." },
    { title: "MERN Stack, DevOps, Cloud Computing", company: "Self-Paced Learning", period: "2026 - Present", desc: "Mastering full-stack development and cloud infrastructure." },
    { title: "Product Management Learning", company: "Cipher School", period: "2025 - Present", desc: "Deep dive into product lifecycle and strategic analysis." },
    { title: "ML & Deep Learning", company: "Simplilearn", period: "2025 - Present", desc: "Advanced training in neural networks and machine learning models." },
    { title: "Red Hat Linux Training", company: "LPU", period: "2025", desc: "System administration and enterprise Linux environments." },
    { title: "Teaching Assistant", company: "NOAH'S ARK NGO", period: "2024", desc: "Mentoring students and assisting in educational programs." },
    { title: "AI / ML Research Analyst", company: "Placify Technology", period: "2024", desc: "Conducting research and analysis on machine learning applications." },
    { title: "C++ Programming (OOP & DSA Training)", company: "Training", period: "2023", desc: "Intensive focus on Object-Oriented Programming and Data Structures." },
    { title: "B.Tech CSE with specialization in AI/ML", company: "LPU", period: "2023", desc: "Commenced undergraduate studies in Computer Science and Artificial Intelligence." }
  ],
  certifications: [
    { 
      title: "Red-Hat Certificate", 
      institution: "LPU", 
      year: "July 2025", 
      link: "https://drive.google.com/file/d/1vxRhbIdJiF53MdRyVsot9bJW-W6UTdqb/view?usp=sharing"
    },
    { 
      title: "AI Analyst", 
      institution: "Placify Technology", 
      year: "Sep 2024", 
      link: "https://drive.google.com/file/d/15j-8o8PM-QGJ6QeQ4rHFufUouTXMPvw9/view?usp=sharing"
    },
    { 
      title: "Computer Communication", 
      institution: "Coursera", 
      year: "Nov 2024", 
      link: "https://drive.google.com/file/d/1Qz2BKOOHSt9ZWc11S8BkQBfdeV7-J0lv/view?usp=sharing"
    },
    { 
      title: "English Certificate", 
      institution: "Coursera - University of California, Irvine", 
      year: "May 2024", 
      link: "https://drive.google.com/file/d/1V1XwwR-Me63GBUQOSVTJShrrBBPy2QoD/view?usp=sharing"
    },
    { 
      title: "Product Manager", 
      institution: "Cipher School", 
      year: "July 2025", 
      link: "https://drive.google.com/file/d/1kyWdYdUVwD-2PdOcpK12gHWey7ual-F9/view?usp=sharing"
    }
  ],
  languages: [
    { name: "Hindi", level: "Native", percent: 100 },
    { name: "English", level: "Native / Fluent", percent: 100 },
    { name: "Bengali", level: "Conversational", percent: 80 },
    { name: "Japanese", level: "Beginner", percent: 20 }
  ],
  updates: [
    { title: "Product Teardowns", content: "Published comprehensive product teardowns for Amazon and Blinkit on LinkedIn.", icon: Linkedin },
    { title: "GitHub Activity", content: "Recently pushed updates to my AI/ML repositories, including new model training scripts.", icon: Github },
    { title: "LeetCode Progress", content: "Successfully solved a challenging problem on Dynamic Programming, continuing my daily streak.", icon: Code2 }
  ],
  hobbies: {
    writing: [
      {
        title: "The cage i called a home, vol-1",
        link: "https://drive.google.com/file/d/1COLzm1MYsat-Cf_t72GGgXWi1VwIQ7yj/view?usp=sharing",
        desc: "A personal exploration of home, identity, and the spaces we inhabit."
      },
      {
        title: "The emotions i see",
        link: "https://docs.google.com/document/d/1KeNMhiAGHnAoMou9sUGNs6TYSa9ovfAg/edit?usp=drive_link&ouid=102791475033951247414&rtpof=true&sd=true",
        desc: "A collection of reflections on human emotions and perception."
      }
    ],
    music: {
      desc: "Music is my escape and inspiration. I enjoy exploring diverse genres and the emotional depth they offer.",
      interests: ["Classical", "Lo-fi", "Instrumental", "Acoustic"]
    }
  }
};

function Rocket(props: any) {
  return <Globe {...props} />;
}
