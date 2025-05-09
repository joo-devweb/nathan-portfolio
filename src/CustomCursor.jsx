
// src/CustomCursor.jsx
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => setClicked(true);
  const onMouseUp = () => setClicked(false);
  const onMouseEnter = () => setHidden(false);
  const onMouseLeave = () => setHidden(true);

  const cursorClasses = `
    fixed z-[9999] top-0 left-0 w-6 h-6 pointer-events-none rounded-full border-2 border-[#c1ff12]
    transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out
    ${clicked ? "scale-75 bg-[#c1ff12]" : "bg-transparent"}
    ${hidden ? "opacity-0" : "opacity-100"}
  `;

  return <div className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
}
