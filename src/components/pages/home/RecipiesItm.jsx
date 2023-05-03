import React from "react";
import { Link } from "react-router-dom";

const RecipiesItm = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.itms;

  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} className="w-full h-fit" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="inline-block w-fit ">
          Rating: <span className=" text-green-500">{rating}</span>
        </p>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${recipe_id}`}>
            <button className="btn btn-primary btn-sm">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipiesItm;
