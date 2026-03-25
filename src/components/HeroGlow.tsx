import { useEffect, useRef } from "react";

const HeroGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, hsl(170 60% 50% / 0.04), transparent 60%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
    />
  );
};

export default HeroGlow;
