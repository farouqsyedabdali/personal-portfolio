import React from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Icons for email and phone
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Icons for GitHub and LinkedIn

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center text-white bg-base-200 z-10">
      <div className="container pt-4">
        <div className="pb-4 flex justify-center text-lg">
          <p>
            © 2025 | Built by{" "}
            <span className="font-bold text-[oklch(var(--s))]">Farouq</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
