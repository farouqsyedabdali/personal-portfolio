import React from "react";
import linkedinProfilePic from "../assets/linkedin profile pic.jpg";
import Card from "../components/card";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Projects = () => {
  const [setRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="bg-base-300 z-10" ref={setRef}>
      <div
        className={`max-w-7xl mx-auto px-4 py-12 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div id="projects" className="text-center mb-12">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-lg text-gray-600 mt-4">
            Explore some of the projects I've worked on.
          </p>
        </div>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <Card
            title={"Full Stack Point of Sale (POS) System"}
            description={"This is a test"}
            image={linkedinProfilePic}
            link={"https://www.google.com/"}
          />
          {/* Card 2 */}
          <Card
            image={
              "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            }
          />
          {/* Card 3 */}
          <Card />
          {/* Card 4 */}
          <Card />
          {/* Card 5 */}
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
