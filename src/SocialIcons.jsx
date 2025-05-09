
// src/SocialIcons.jsx
import { motion } from "framer-motion";

export default function SocialIcons() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/joo-devweb",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg",
    },
    {
      name: "Email",
      url: "mailto:jrevanaldi@gmail.com",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/maildotru.svg",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-4 z-50">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 15px 5px #c1ff12",
          }}
        >
          <img src={link.icon} alt={link.name} className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
}
