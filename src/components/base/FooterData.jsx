import React from "react";
import { Link } from "react-router-dom";

const FooterData = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.recipies;

  return (
    <>
      <div className="card lg:card-side h-fit w-fit p-1 text-white rounded-none last:border-t-2 last:pt-3 ">
        <figure className="me-2">
          <img src={image_url} className="w-fit h-16" />
        </figure>
        <div className="card-body w-full p-1">
          <Link to={`/details/${recipe_id}`}>
            <h2 className="card-title text-base hover:underline hover:text-red-500">
              {name}
            </h2>
          </Link>
          <p className="text-gray-500">{details.substr(0, 30) + "....."}</p>
        </div>
      </div>
    </>
  );
};

export default FooterData;
