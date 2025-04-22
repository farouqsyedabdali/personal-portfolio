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
    setOpacity(0.2);
  };

  const handleMouseEnter = () => {
    setOpacity(0.2);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`flex items-center mb-2 justify-center rounded-full bg-base-100 shadow-xl border-solid border-2 border-[oklch(var(--s))] hover:shadow-2xl transition duration-300 ${widthClass} ${heightClass}`}
      style={{
        position: "relative",
        overflow: "hidden",
        lineHeight: 0,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        // style={{
        //   background: `linear-gradient(to right, transparent 50%, oklch(var(--s)) 100%)`,
        //   opacity: opacity,
        //   transition: "opacity 0.3s",
        // }}
      />
      <Icon className={iconSizeClass} />
    </div>
  );
};

export default CircleIconCard;
