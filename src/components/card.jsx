import React from "react";

const Card = ({ title, description, image, link, alt }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 m-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">View Project</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
