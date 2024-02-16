import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Icons for email and phone
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Icons for GitHub and LinkedIn

const Contact = () => {
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
    <div className="bg-base-300">
      <div className="container mx-auto px-4 py-10 flex justify-center">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
      </div>
      <div className="container mx-auto px-4 py-10 flex">
        <div className="w-1/2 space-y-4">
          <a
            href="mailto:farouqsyedabdali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg inline-flex items-center"
          >
            <MdEmail className="mr-2" size={24} />
            farouqsyedabdali@gmail.com
          </a>
          <p className="text-lg flex items-center">
            <MdPhone className="mr-2" size={24} />
            416-871-8834
          </p>
          <a
            href="https://github.com/farouqsyedabdali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg inline-flex items-center"
          >
            <FaGithub className="mr-2" size={24} />
            github.com/farouqsyedabdali
          </a>
          <a
            href="https://www.linkedin.com/in/farouq-syed-abdali/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg inline-flex items-center"
          >
            <FaLinkedin className="mr-2" size={24} />
            linkedin.com/in/farouq-syed-abdali
          </a>
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
