import React from "react";
import ChefData from "./ChefData";

const Chef = (props) => {
  return (
    <div className="mb-5">
      <h1 className="text-3xl m-5 w-1/4 font-bold border-b-2 border-green-500">
        The <span className="text-green-500 ">Chef's</span>
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {props.chefData.map((chef) => (
          <ChefData chef={chef} key={chef.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
