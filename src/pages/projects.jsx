import React from "react";
import linkedinProfilePic from "../assets/linkedin profile pic.jpg";
import softEng from "../assets/software-engineer.png";
import Card from "../components/card";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import textBasedFacebook from "../assets/text-based-facebook.png";
import p2p from "../assets/p2p.png";
import pos from "../assets/pos.png";
import reactChatApp from "../assets/react-chat-app.png";
import sudoku from "../assets/sudoku.png"
import customoji from "../assets/customoji.png";

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
        <div id="projects" className="text-center">
          <h1 className="text-6xl font-bold">
            My <span style={{ color: "oklch(var(--s))" }}>Projects</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Explore some of the projects I've worked on.
          </p>
        </div>

        
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true}
          infinite={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="py-10"
        >
          <Card
            title={"Customoji"}
            description={"A custom emoji creator built using Vue.js, allowing users to create and share custom emojis using a variety of assets."}
            image={customoji}
            link={"https://github.com/farouqsyedabdali/custom-emoji-creator"}
            demoLink={"https://farouqsyedabdali.github.io/custom-emoji-creator/"}
          />
          <Card
            title={"SwiftShare"}
            description={"A Peer-to-Peer file sharing system built in Python, allowing users to share files in chunks over a network."}
            image={p2p}
            link={"https://github.com/farouqsyedabdali/p2p-file-sharing-system"}
            onlyGithub={true}
          />
          <Card
            title={"RetailVerse"}
            description={
              "A full-stack POS system using React, Node.js/Express, and MySQL, with features for product management, transactions, and admin oversight."
            }
            image={pos}
            link={"https://github.com/farouqsyedabdali/POS-system"}
            onlyGithub={true}
          />
          <Card
            title={"ChatterBox"}
            description={
              "A web-based chat application built using React and Firebase for user authentication and real-time messaging."
            }
            image={reactChatApp}
            link={"https://github.com/farouqsyedabdali/react-chat-app"}
            onlyGithub={true}
          />
          <Card
            title={"Sudoku Solver"}
            description={
              "A Java-based GUI application where users enter a Sudoku puzzle and the program solves it using backtracking."
            }
            image={sudoku}
            link={"https://github.com/farouqsyedabdali/sudoku-solver"}
            onlyGithub={true}
          />
          <Card
            title={"Text Based Facebook"}
            description={
              "A text-based Facebook replica built in C where users can post, add or remove friends, and interact with others on the platform."
            }
            image={textBasedFacebook}
            link={"https://github.com/farouqsyedabdali/text-based-facebook"}
            onlyGithub={true}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
