import React, { useState, useRef } from "react";
import { FaBeer } from "react-icons/fa"; // Use a placeholder icon

const CircleIconCard = ({
  icon: Icon = FaBeer,
  onClick,
  widthClass = "w-32",
  heightClass = "h-16",
  iconSizeClass = "text-3xl",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(0.2); // Reduced spotlight visibility
  };

  const handleMouseEnter = () => {
    setOpacity(0.2); // Reduced spotlight visibility on mouse enter
  };

  const handleMouseLeave = () => {
    setOpacity(0); // Hide spotlight on mouse leave
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`flex items-center mb-2 justify-center rounded-full bg-base-100 shadow-xl border-solid border-2 border-[oklch(var(--s))] hover:shadow-2xl hover:bg-[oklch(var(--s))] hover:text-black transition duration-300 cursor-pointer ${widthClass} ${heightClass}`}
      style={{
        position: "relative",
        overflow: "hidden", // Ensure the spotlight effect does not overflow the card boundaries
        lineHeight: 0, // Center icon vertically
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity, // Controlled by state for smooth transition
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 90%)`, // More subtle effect
          transition: "opacity 0.3s ease",
        }}
      />
      <Icon className={iconSizeClass} />
    </div>
  );
};

export default CircleIconCard;
