import React from "react";

const FilterData = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.recipies;

  return (
    <>
      <div className="card lg:card-side lg:h-28 p-2 text-black rounded-none">
        <figure className="me-2">
          <img src={image_url} className="w-full h-full" />
        </figure>
        <div className="card-body w-full p-1">
          <h2 className="card-title text-blue-700 text-base">{name}</h2>
          <p>{details.substr(0, 55) + "....."}</p>
        </div>
      </div>
      <div className="divider m-1"></div>{" "}
    </>
  );
};

export default FilterData;
