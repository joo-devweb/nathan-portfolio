// src/App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import RevealText from "./RevealText";
import CustomCursor from "./CustomCursor";
import Preloader from "./Preloader";
import BackgroundParticles from "./BackgroundParticles";
import SocialIcons from "./SocialIcons";
import AnimatedTextHover from "./AnimatedTextHover";
import ThemeToggle from "./ThemeToggle";

export default import { useState } from "react";
import CinematicIntro from "./CinematicIntro";

function App() {
  const [introDone, setIntroDone] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  if (loading) return <Preloader onComplete={() => setLoading(false)} />;

  const projectData = [
    {
      title: "Portfolio Website",
      image: "https://source.unsplash.com/random/800x600?web",
      description: "Personal site showcasing my work and skills.",
    },
    {
      title: "Creative Landing Page",
      image: "https://source.unsplash.com/random/800x601?design",
      description: "A high-conversion landing page with interactive elements.",
    },
    {
      title: "Dashboard UI",
      image: "https://source.unsplash.com/random/800x602?dashboard",
      description: "Responsive admin dashboard for managing analytics.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {!introDone && <CinematicIntro onFinish={() => setIntroDone(true)} />}
      {introDone && (

    <div className="relative w-full min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans overflow-x-hidden transition-colors duration-500">
      <CustomCursor />
      <BackgroundParticles />
      <ThemeToggle />

      <div className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
        <div className="text-xl font-bold tracking-wide">Nathan</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="uppercase tracking-widest font-medium text-sm hover:text-[#c1ff12] transition-colors"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-black flex flex-col justify-center items-center z-40"
          >
            <nav className="space-y-6 text-4xl font-medium">
              {["Home", "About", "Work", "Contact"].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="hover:text-[#c1ff12] transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <PageTransition>
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
          >
            Nathan is a developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl sm:text-2xl text-neutral-600 dark:text-gray-400 max-w-2xl mt-6"
          >
            Crafting immersive, high-performance web experiences for the modern world.
          </motion.p>
        </section>

        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold mb-4"
          >
            <RevealText text={`About Me
I'm Nathan, a passionate front-end developer with a strong sense of design and interactivity. I specialize in building responsive and expressive user interfaces using React, Tailwind CSS, and animation tools. Every pixel matters.`} />
          </motion.h2>
        </section>

        <section id="work" className="min-h-screen flex flex-col justify-center items-center px-6">
          <h2 className="text-4xl font-semibold mb-8">Selected Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {projectData.map((project, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                className="group relative rounded-xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:scale-[1.015] transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-neutral-700 dark:text-gray-400">{project.description}</p>
                </div>
                <div className="absolute inset-0 bg-white/5 dark:bg-white/10 group-hover:bg-white/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="min-h-[60vh] flex flex-col justify-center items-center px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg text-neutral-600 dark:text-gray-400 mb-4 max-w-xl">
            Let's collaborate on something special. Feel free to drop me a message.
          </p>
          <a
            href="mailto:nathan@example.com"
            className="mt-2 inline-block px-6 py-3 bg-white dark:bg-white text-black rounded-full text-sm font-medium tracking-wide hover:scale-105 transition"
          >
            <AnimatedTextHover text="Say Hello" />
          </a>
        </section>

        <footer className="text-center text-sm text-gray-600 dark:text-gray-500 py-8">
          © {new Date().getFullYear()} Nathan. Crafted with passion.
        </footer>
      </PageTransition>
      <SocialIcons />
    </div>
  );
}
