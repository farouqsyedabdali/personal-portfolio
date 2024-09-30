import React from "react";
import {
  FaUniversity,
  FaCode,
  FaJava,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiMysql, DiHtml5 } from "react-icons/di";
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
      <div ref={setRef} className="mx-auto px-4 py-12">
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
          className={`grid md:grid-cols-2 gap-8 mx-10 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h2 className="text-2xl text-base-content font-bold mb-4 flex items-center">
              <FaUniversity className="mr-2" />
              My Journey
            </h2>
            <p className="text-lg text-base-content">
              In an effort to relieve my boredom in the heart of a pandemic, I
              stumbled across a Python tutorial on YouTube. Unbeknownst to me,
              this would be the most pivotal moment of my life. Today, I'm
              studying Computer Mathematics at Carleton University. I'm working
              on building projects I'm passionate about, such as a Full Stack
              POS System and exploring different emerging technologies.
              <span className="font-bold text-[oklch(var(--s))]">
                {" "}
                Currently, I'm seeking Software Engineering Internship roles for
                Winter and Summer 2025
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaCode className="mr-2" />
              My Skills
            </h2>
            <div className="flex justify-center mr-20 space-x-4">
              <CircleIcon icon={FaJava} />
              <CircleIcon icon={FaJsSquare} />
              <CircleIcon icon={FaReact} />
              <CircleIcon icon={FaNodeJs} />
            </div>
            <div className="flex justify-center mr-20 space-x-4">
              <CircleIcon icon={FaPython} />
              <CircleIcon icon={SiTypescript} />
              <CircleIcon icon={DiMysql} />
              <CircleIcon icon={DiHtml5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
