import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import CircleIconCard from "../components/circleIcon";

const Contact = () => {
  const [setRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:farouqsyedabdali@gmail.com?subject=Website Email: from ${encodeURIComponent(
      formData.email
    )}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="bg-base-300 z-10" ref={setRef}>
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-10 flex justify-center">
          <h2 className="text-6xl font-bold text-center mb-6">
            <span style={{ color: "oklch(var(--s))" }}>Contact</span> Me
          </h2>
        </div>
        <div className="container mx-auto px-4 py-10 flex">
          <div className="w-1/2 space-y-4 text-3xl font-bold mx-20">
            <span style={{ color: "oklch(var(--s))" }}>Feel free</span> to reach
            out to me for any inquiries or collaborations. I'm always open to
            have a chat!
          </div>
          <div className="w-1/2 space-y-4">
            <p>
              <a
                href="mailto:farouqsyedabdali@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg hover:text-[oklch(var(--s))] duration-300"
              >
                <MdEmail className="mr-2" size={24} />
                farouqsyedabdali@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+1-416-871-8834"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg hover:text-[oklch(var(--s))] duration-300"
              >
                <MdPhone className="mr-2" size={24} />
                +1 (416) 871-8834
              </a>
            </p>
            <p>
              <a
                href="https://github.com/farouqsyedabdali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg hover:text-[oklch(var(--s))] duration-300"
              >
                <FaGithub className="mr-2" size={24} />
                github.com/farouqsyedabdali
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/farouq-syed-abdali/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg hover:text-[oklch(var(--s))] duration-300"
              >
                <FaLinkedin className="mr-2" size={24} />
                linkedin.com/in/farouq-syed-abdali
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
