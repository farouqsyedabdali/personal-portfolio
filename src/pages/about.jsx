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
          className={`text-center transition-opacity duration-10
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
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
            <ul className="list-none space-y-2">
              <li className="flex items-center text-lg text-gray-600">
                <FaJava className="text-orange-500 mr-2" size={32} />
                Java - Backend development and algorithms
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <FaJsSquare className="text-yellow-500 mr-2" size={32} />
                JavaScript - Frontend magic and interactive web applications
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <FaReact className="text-blue-500 mr-2" size={32} />
                React - Seamless user interfaces and user experiences
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <FaNodeJs className="text-green-500 mr-2" size={32} />
                Node.js - Scalable backend services and APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
