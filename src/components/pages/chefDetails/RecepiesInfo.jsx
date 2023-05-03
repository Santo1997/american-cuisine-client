import { space } from "postcss/lib/list";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecepiesInfo = (props) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const addFav = () => {
    setIsFavorited(true);
    toast.success("Added As Favourite");
  };

  const {
    recipe_id,
    image_url,
    name,
    details,
    rating,
    ingredients,
    cooking_method,
  } = props.recipe;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-auto relative">
      <figure>
        <img src={image_url} className="w-96 h-full" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary"> rating: {rating}</div>
          <button className="badge badge-secondary">
            {isFavorited ? <span>Added</span> : <span>Add</span>}
          </button>
        </h2>
        <span>{details}</span>

        <div className="grid grid-cols-3 items-start">
          <ul className="list-disc list-inside ">
            <h3 className="text-xl underline">Ingredients</h3>
            {ingredients.map((itm, index) => (
              <li key={index}>{itm}</li>
            ))}
          </ul>
          <p className="col-span-2 ">
            <h3 className="text-xl underline inline">Cooking method:</h3>
            <br />
            <span> {cooking_method}</span>
          </p>
        </div>
        <div className="card-actions justify-end absolute bottom-4 right-10">
          <button className="btn btn-primary">
            <Link to={`/details/${recipe_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecepiesInfo;
<h1>dc</h1>;
