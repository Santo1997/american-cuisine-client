import React from "react";
import { Link } from "react-router-dom";

const RecipiesItm = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.itms;

  return (
    <div className="card card-compact w-auto text-black shadow-xl">
      <figure>
        <img src={image_url} className="w-full h-fit" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-blue-700">{name}</h2>
        <h3 className="inline-block w-fit text-base font-bold">
          Rating: <span className=" text-blue-700">{rating}</span>
        </h3>
        <p className="text-base">{details}</p>
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
