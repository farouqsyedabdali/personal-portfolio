import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Icons for email and phone
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Icons for GitHub and LinkedIn
import { color } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const LinkItem = ({ href, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-lg transition-colors duration-300"
      style={{ color: hover ? "#7480FF" : "currentColor" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
};

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
    // Handle the form submission
    const mailtoLink = `mailto:farouqsyedabdali@gmail.com?subject=Website Email: from ${encodeURIComponent(
      formData.email
    )}&body=${encodeURIComponent(formData.message)}`;

    // Open the mailto link in a new tab/window
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
          <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        </div>
        <div className="container mx-auto px-4 py-10 flex">
          <div className="w-1/2 space-y-4">
            <LinkItem href="mailto:farouqsyedabdali@gmail.com">
              <MdEmail className="mr-2" size={24} />
              farouqsyedabdali@gmail.com
            </LinkItem>
            <p>
              <LinkItem href="tel:+1-416-871-8834">
                <MdPhone className="mr-2" size={24} />
                +1 (416) 871-8834
              </LinkItem>
            </p>
            <LinkItem href="https://github.com/farouqsyedabdali">
              <FaGithub className="mr-2" size={24} />
              github.com/farouqsyedabdali
            </LinkItem>
            <LinkItem href="https://www.linkedin.com/in/farouq-syed-abdali/">
              <FaLinkedin className="mr-2" size={24} />
              linkedin.com/in/farouq-syed-abdali
            </LinkItem>
          </div>

          <div className="w-1/2 ml-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="textarea textarea-bordered w-full h-32"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary mr-3 transition-opacity duration-1000 hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out duration-500 m-auto">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
