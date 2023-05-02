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

  let img =
    "https://thumbs.dreamstime.com/b/spices-open-recipe-book-space-text-selection-cooking-blank-pages-53759813.jpg";

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-72">
      <figure>
        <img src={img} className="w-96 h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <div className="grid grid-cols-2 ">
          <p className="inline-block w-fit ">
            Rating: <span className=" text-green-500">{rating}</span>
          </p>
          <button className="inline btn btn-sm w-fit">Add Fav</button>
        </div>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
