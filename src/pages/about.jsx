import React from 'react';

const About = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-700 mb-8">
            Welcome to my personal space. Let's dive into who I am!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Biography</h2>
            <p className="text-lg text-gray-700">
              Tell the story of who you are, where you come from, and what you are doing now. Include any education or experiences that define you.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Skills & Hobbies</h2>
            <p className="text-lg text-gray-700">
              Detail your skills and hobbies. Mention the things you are good at and what you enjoy doing in your spare time.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-lg text-gray-700">
              Let people know how they can reach you. You might include an email address, phone number, or links to your social media profiles here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
