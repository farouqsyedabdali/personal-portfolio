import React from "react";
import {
  FaUniversity,
  FaCode,
  FaRobot,
  FaHeart,
  FaJava,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import CircleIcon from "../components/circleIcon";

const About = () => {
  const [setRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="bg-base-200 z-10">
      <div ref={setRef} className="max-w-4xl mx-auto px-4 py-12">
        <div
          className={`text-center transition-opacity duration-10 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-6xl font-bold mb-6">
            <span style={{ color: "oklch(var(--s))" }}>About</span> Me
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Passionate about blending technology with creativity to solve
            complex challenges.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaUniversity className="mr-2" />
              My Journey
            </h2>
            <p className="text-lg text-gray-600">
              As a Software Engineering student at Carleton University, I'm
              deeply engaged in transforming ideas into reality through coding
              and robotics, exploring new technologies, and building projects
              that matter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaCode className="mr-2" />
              My Skills
            </h2>
            <div className="flex justify-center space-x-4">
              <CircleIcon icon={FaJava} />
              <CircleIcon icon={FaJsSquare} />
              <CircleIcon icon={FaReact} />
              <CircleIcon icon={FaNodeJs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
