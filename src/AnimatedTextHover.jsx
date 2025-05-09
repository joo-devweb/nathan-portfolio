
// src/AnimatedTextHover.jsx
import { motion } from "framer-motion";

export default function AnimatedTextHover({ text, className = "" }) {
  return (
    <motion.span
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px #c1ff12",
        transition: { type: "spring", stiffness: 300 },
      }}
      className={`inline-block cursor-pointer ${className}`}
    >
      {text}
    </motion.span>
  );
}
