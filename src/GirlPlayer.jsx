// src/GirlPlayer.jsx
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GirlPlayer() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        videoRef.current.play();
      }
    }, 500);
  };

  const handleClose = () => {
    if (videoRef.current) {
      let vol = videoRef.current.volume;
      const fade = setInterval(() => {
        if (vol > 0.1) {
          vol -= 0.1;
          videoRef.current.volume = Math.max(vol, 0);
        } else {
          clearInterval(fade);
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setShowVideo(false);
        }
      }, 50);
    } else {
      setShowVideo(false);
    }
  };

  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center text-center z-10">
      {!showVideo && (
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all text-lg font-medium z-20"
        >
          Pencet untuk melihat my girl, hehee
        </motion.button>
      )}

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-2xl shadow-[0_0_80px_10px_rgba(255,255,255,0.1)] rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={handleClose}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 right-2 z-10 bg-white text-black dark:bg-black dark:text-white p-2 rounded-full shadow hover:scale-105 transition"
              >
                ✕
              </motion.button>
              <video
                ref={videoRef}
                controls
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              >
                <source src="https://i.supa.codes/d6dnpm" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
