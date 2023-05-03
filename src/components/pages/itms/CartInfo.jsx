import React from "react";
import { Link } from "react-router-dom";

const CartInfo = (props) => {
  const {
    recipe_id,
    image_url,
    name,
    details,
    cooking_method,
    ingredients,
    rating,
  } = props.recipe;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-fit">
      <figure>
        <img src={image_url} className="w-full h-full" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="inline-block w-fit ">
          Rating: <span className=" text-green-500">{rating}</span>
        </p>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${recipe_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
