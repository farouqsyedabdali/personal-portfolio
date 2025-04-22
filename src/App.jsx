import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Testing from "./pages/testing";
import Projects from "./pages/projects";
import Experience from "./pages/experience";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar/>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Hero;
