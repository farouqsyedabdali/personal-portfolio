import React, { useEffect, useState } from 'react';
import linkedinProfilePic from '../assets/linkedin profile pic.jpg';

const Home = () => {
  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeInH1, setFadeInH1] = useState(false);
  const [fadeInP, setFadeInP] = useState(false);
  const [fadeInButton, setFadeInButton] = useState(false);

  useEffect(() => {
    const timeoutIdImage = setTimeout(() => setFadeInImage(true), 500); // Adjust the delay as needed
    const timeoutIdH1 = setTimeout(() => setFadeInH1(true), 1000); // Adjust the delay as needed
    const timeoutIdP = setTimeout(() => setFadeInP(true), 1500); // Adjust the delay as needed
    const timeoutIdButton = setTimeout(() => setFadeInButton(true), 2000); // Adjust the delay as needed
    
    return () => {
      clearTimeout(timeoutIdImage);
      clearTimeout(timeoutIdH1);
      clearTimeout(timeoutIdP);
      clearTimeout(timeoutIdButton);
    };
  }, []);

  return (
    <div className={`hero min-h-screen bg-base-200`}>
      <div className="hero-content">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="max-w-md mx-auto">
              <h1 className={`text-5xl font-bold transition-opacity duration-1000 ${fadeInH1 ? 'opacity-100' : 'opacity-0'}`}>Hello there</h1>
              <p className={`py-6 transition-opacity duration-1000 ${fadeInP ? 'opacity-100' : 'opacity-0'}`}>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
              </p>
              <button className={`btn btn-primary transition-opacity duration-1000 ${fadeInButton ? 'opacity-100' : 'opacity-0'}`}>Get Started</button>
            </div>
          </div>
          <div className={`w-96 h-96 mx-auto mt-4 rounded-3xl overflow-hidden transition-opacity duration-1000 ${fadeInImage ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={linkedinProfilePic}
              alt="LinkedIn Profile Pic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
