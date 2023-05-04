import React from "react";
import { Link } from "react-router-dom";

const CartInfo = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.recipe;

  return (
    <div className="card lg:card-side  text-black shadow-2xl h-fit">
      <figure>
        <img src={image_url} className="w-full h-full" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-2xl text-blue-700">{name}</h2>
        <p className="inline-block w-fit ">
          Rating: <span className=" text-blue-700">{rating}</span>
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
