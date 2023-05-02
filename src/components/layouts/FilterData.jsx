import React from "react";

const FilterData = (props) => {
  const { recipe_id, image_url, name, details, rating } = props.recipies;

  //   console.log(props.recipies);

  let img =
    "https://thumbs.dreamstime.com/b/spices-open-recipe-book-space-text-selection-cooking-blank-pages-53759813.jpg";

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-32 p-2  rounded-none">
      <figure className="me-2">
        <img src={img} className="w-72 h-full" />
      </figure>
      <div className="card-body p-1">
        <h2 className="card-title">{name}</h2>
        <p>{details.substr(0, 88) + "....."}</p>
      </div>
    </div>
  );
};

export default FilterData;