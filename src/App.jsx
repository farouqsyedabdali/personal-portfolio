import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Testing from "./pages/testing";
import Projects from "./pages/projects";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personal-portfolio/testing" element={<Testing />} />
        </Routes>
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer className="footer" />
    </div>
  );
}

export default Hero;
