import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Footer from './components/footer';
import Contact from './pages/contact';

function Hero() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component here */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
