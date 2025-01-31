import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference animate-cursor"
      style={{
        background: "linear-gradient(135deg, #8B5CF6, #D946EF)",
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
};

export default CustomCursor;