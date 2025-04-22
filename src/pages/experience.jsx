import React from "react";
import softEng from "../assets/software-engineer.png";

const Experience = () => {
  return (
    <div className="bg-base-200 z-10 text-center mx-max px-4 py-12">
      <h1 className="text-6xl font-bold mb-6">
        My <span style={{ color: "oklch(var(--s))" }}>Experience</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Innovating with technology to create practical solutions
      </p>
      <div>
        <img
          src={softEng}
          alt="Software Engineer"
          className="mx-auto mb-8 bg-white rounded-3xl shadow-lg w-96 h-96 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Experience;
