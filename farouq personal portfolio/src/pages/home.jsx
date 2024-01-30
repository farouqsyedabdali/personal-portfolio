import React, { useEffect, useState } from "react";
import linkedinProfilePic from "../assets/linkedin profile pic.jpg";
import "../index.css";
import Card from "../components/card";
import Resume from "../assets/Farouq_Tech_Resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeInH1, setFadeInH1] = useState(false);
  const [fadeInP, setFadeInP] = useState(false);
  const [fadeInButton, setFadeInButton] = useState(false);
  const [fadeInButton2, setFadeInButton2] = useState(false);

  const navbarHeight = 64; // Replace with the actual height of your navbar

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

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    document.getElementById("spotlight").style.setProperty("--x", `${x}px`);
    document.getElementById("spotlight").style.setProperty("--y", `${y}px`);
  });

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
      <div id="spotlight"></div>
      <div className={`hero min-h-screen bg-base-200 `}>
        <div className="hero-content">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="max-w-md mx-auto">
                <h1
                  className={`text-5xl font-bold transition-opacity duration-1000 ${
                    fadeInH1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Hello there
                </h1>
                <p
                  className={`py-6 transition-opacity duration-1000 ${
                    fadeInP ? "opacity-100" : "opacity-0"
                  }`}
                >
                  I'm a Software Engineering Student at Carleton University
                </p>
                <button
                  className={`btn btn-primary mr-3 transition-opacity duration-1000 hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out duration-500 m-auto ${
                    fadeInButton ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={() => scrollToElement("projects")}
                >
                  View Projects
                </button>
                <button
                  className={`btn btn-primary transition-opacity duration-1000 hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out duration-500 m-auto ${
                    fadeInButton2 ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={openResume}
                >
                  Open Resume
                </button>
                <div>
                  <h1 className="m-12">
                    I'm a
                    <span className="font-bold text-green-500">{text}</span>
                    <Cursor />
                  </h1>
                </div>
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
      <div className="max-w-7xl mx-auto px-4 py-12">
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
            title={"Farouq's Shoe"}
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
    </>
  );
};

export default Home;
