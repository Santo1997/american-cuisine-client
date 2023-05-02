import React from "react";
import { Link } from "react-router-dom";

const RecepiesInfo = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.recipe;

  let img =
    "https://thumbs.dreamstime.com/b/spices-open-recipe-book-space-text-selection-cooking-blank-pages-53759813.jpg";

  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <img src={img} />
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
          <Link to={`/details/${recipe_id}`}>
            <button className="btn btn-primary btn-sm">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecepiesInfo;
<h1>dc</h1>;
