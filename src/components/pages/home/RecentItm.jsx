import React from "react";
import { Link } from "react-router-dom";

const RecentItm = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.recentRecipe;

  let img =
    "https://thumbs.dreamstime.com/b/spices-open-recipe-book-space-text-selection-cooking-blank-pages-53759813.jpg";

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-40">
      <figure>
        <img src={img} className="w-full h-full" />
      </figure>
      <div className="card-body p-2 relative">
        <h2 className="card-title">{name}</h2>
        <p className="inline-block w-fit absolute top-3 right-5">
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

export default RecentItm;
