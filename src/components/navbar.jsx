import "./navbar.css";
import { useEffect } from "react";
import softeng from "../assets/software-engineer.png";

const Navbar = () => {

  return (
    <div className="navbar bg-base-200 z-10">
      <div className="navbar-start z-10">
        <a href="/personal-portfolio/" className="btn btn-ghost normal-case text-xl">
          <img src={softeng} alt="Software Engineer" className="w-12 h-12 inline-block" />
          Farouq Syed Abdali
        </a>
      </div>
    </div>
  );
};

export default Navbar;
