import React from "react";
import { Link } from "react-router-dom";

const RecentItm = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.recentRecipe;

  return (
    <div className="card lg:card-side  shadow-md border text-black border-blue-700 lg:h-40">
      <figure>
        <img src={image_url} className="w-full h-full" />
      </figure>
      <div className="card-body p-2 relative w-full">
        <h2 className="card-title text-blue-700">{name}</h2>
        <p className="inline-block w-fit absolute top-3 right-10">
          Rating: <span className=" text-blue-700">{rating}</span>
        </p>
        <p>{details}</p>
        <div className="card-actions justify-end relative">
          <Link to={`/details/${recipe_id}`}>
            <button className="btn btn-primary btn-sm lg:absolute bottom-2 right-3">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentItm;
