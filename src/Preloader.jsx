
// src/Preloader.jsx
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const name = "NATHAN";
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < name.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(onComplete, 1000);
        return prev;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [name.length, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center text-white text-6xl font-black tracking-widest select-none">
      {[...name].map((char, i) => (
        <span
          key={i}
          className={`transition-all duration-500 ease-out transform
            ${i <= currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            ${i === currentIndex ? "text-shadow-glow" : "text-shadow-dim"}
          `}
        >
          {char}
        </span>
      ))}
      <style jsx>{`
        .text-shadow-glow {
          text-shadow: 0 0 15px white, 0 0 30px white;
        }
        .text-shadow-dim {
          text-shadow: 0 0 0 transparent;
        }
      `}</style>
    </div>
  );
}
