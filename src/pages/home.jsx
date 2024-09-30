import React, { useEffect, useState } from "react";
import linkedinProfilePic from "../assets/linkedin profile pic.jpg";
import "../index.css";
import Resume from "../assets/Farouq_Tech_Resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import WaterDropGrid from "../components/waterDropGrid";
import Testing from "./testing";
import { color } from "framer-motion";
import ReactParticles from "../components/reactParticles";
import CanvasBackground from "../components/canvasBackground";


const Home = () => {
  const [hover, setHover] = useState(false);

  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeInH1, setFadeInH1] = useState(false);
  const [fadeInP, setFadeInP] = useState(false);
  const [fadeInButton, setFadeInButton] = useState(false);
  const [fadeInButton2, setFadeInButton2] = useState(false);

  const navbarHeight = 50; // Replace with the actual height of your navbar

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  useEffect(() => {
    const timeoutIdImage = setTimeout(() => setFadeInImage(true), 500);
    const timeoutIdH1 = setTimeout(() => setFadeInH1(true), 1000);
    const timeoutIdP = setTimeout(() => setFadeInP(true), 1500);
    const timeoutIdButton = setTimeout(() => setFadeInButton(true), 2000);
    const timeoutIdButton2 = setTimeout(() => setFadeInButton2(true), 2500);

    return () => {
      clearTimeout(timeoutIdImage);
      clearTimeout(timeoutIdH1);
      clearTimeout(timeoutIdP);
      clearTimeout(timeoutIdButton);
      clearTimeout(timeoutIdButton2);
    };
  }, []);



  const [text] = useTypewriter({
    words: [
      " Developer",
      " Designer",
      " Student",
      " Learner",
      " Creator",
      " Engineer",
    ],
    loop: {},
    typeSpeed: 100,
  });

  return (
    <>
    {/*<Testing /> */}
    <ReactParticles />
      <div className={`hero min-h-screen relative`}>
        <div className="hero-content relative z-10">
          {" "}
          {/* Ensure content is above the background */}
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="max-w-md mx-auto">
                <h1
                  className={`text-8xl font-bold transition-opacity duration-1000 ${
                    fadeInH1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Hi, I'm <span style={{ color: "oklch(var(--s))" }}>Farouq</span>
                </h1>
                <p
                  className={`py-6 transition-opacity duration-1000 text-3xl ${
                    fadeInP ? "opacity-100" : "opacity-0"
                  }`}
                >
                  I'm a Computer Mathematics Student at Carleton University
                </p>
                <button
                  className={`btn btn-neutral mr-3 transition-opacity duration-1000 hover:shadow-2xl transform hover:scale-105 hover:btn-secondary transition-all ease-in-out duration-500 m-auto ${
                    fadeInButton ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={() => scrollToElement("projects")}
                >
                  View Projects
                </button>
                <button
                  className={`btn btn-neutral transition-opacity duration-1000 hover:shadow-2xl transform hover:scale-105 hover:btn-secondary transition-all ease-in-out duration-500 m-auto ${
                    fadeInButton2 ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={openResume}
                >
                  Open Resume
                </button>
                {/*}
                <div>
                  <h1 className="mt-12">
                    I'm a
                    <span className="font-bold text-green-500">{text}</span>
                    <Cursor />
                  </h1>
                </div>
                */}
              </div>
            </div>
            <div
              className={`w-96 h-96 mx-auto mt-4 rounded-3xl overflow-hidden transition-opacity duration-1000 ${
                fadeInImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                id="profile-pic"
                src={linkedinProfilePic}
                alt="LinkedIn Profile Pic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
