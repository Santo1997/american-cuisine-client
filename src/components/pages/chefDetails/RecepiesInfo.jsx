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

  let img =
    "https://thumbs.dreamstime.com/b/spices-open-recipe-book-space-text-selection-cooking-blank-pages-53759813.jpg";

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-auto relative">
      <figure>
        <img src={img} className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary"> rating: {rating}</div>
          <button className="badge badge-secondary">
            {isFavorited ? <span>Added</span> : <span>Add</span>}
          </button>
        </h2>
        <span>{details}</span>
        <h3 className="text-xl underline">Ingredients</h3>
        <ul className="list-disc list-inside">
          {ingredients.map((itm, index) => (
            <li key={index}>{itm}</li>
          ))}
        </ul>
        <p className="w-4/5">
          <strong className="underline">Cooking method:</strong>
          <span> {cooking_method}</span>
        </p>
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
