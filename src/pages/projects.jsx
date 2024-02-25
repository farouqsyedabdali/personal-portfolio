import React from "react";
import linkedinProfilePic from "../assets/linkedin profile pic.jpg";
import softEng from "../assets/software-engineer.png";
import Card from "../components/card";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const [setRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="h-[650px]"
        >
          <Card
            title={"Full Stack Point of Sale (POS) System"}
            description={"Testing description"}
            image={linkedinProfilePic}
            link={"https://github.com/farouqsyedabdali/POS-system"}
          />
          <Card 
            title={"React Chat App"}
            description={"Testing description"}
            image={softEng}
            link={"https://www.youtube.com"}
          />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
