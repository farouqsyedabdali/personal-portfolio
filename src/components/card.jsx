import React, { useState, useRef } from "react";

const Card = ({ title, description, image, link, alt }) => {
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
      className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 m-auto"
      style={{
        position: 'relative',
        overflow: 'hidden', // Ensure the spotlight effect does not overflow the card boundaries
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity, // Controlled by state for smooth transition
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 90%)`, // More subtle effect
          transition: 'opacity 0.3s ease',
        }}
      />
      <figure>
        <img src={image} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
