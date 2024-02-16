import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Footer from './components/footer';
import Contact from './pages/contact';

function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default Hero;
