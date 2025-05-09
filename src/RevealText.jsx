
// src/RevealText.jsx
import { motion } from "framer-motion";

export default function RevealText({ text }) {
  return (
    <div className="max-w-3xl mx-auto space-y-2 text-left text-lg leading-relaxed">
      {text.split('\n').map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
