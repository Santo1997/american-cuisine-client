import React, { useState } from "react";
import { Link } from "react-router-dom";

const FavData = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.itm;
  console.log(props.removeRecipe);

  return (
    <div className="hero rounded-lg shadow-2xl w-full">
      <div className="hero-content flex-col lg:flex-row text-black">
        <img src={image_url} className="lg:max-w-sm " />
        <div>
          <h1 className="text-3xl text-blue-700 font-bold">{name}</h1>
          <h2 className="inline-block w-fit mb-3">
            Rating: <span className=" text-blue-700">{rating}</span>
          </h2>

          <p className="pb-6"> {details}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => props.removeRecipe(recipe_id)}
              className="btn btn-primary"
            >
              Remove
            </button>
            <Link to={`/details/${recipe_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavData;
