import React from "react";
import RecipiesItm from "./RecipiesItm";
import { Link } from "react-router-dom";

const RecipiesSection = ({ recipies }) => {
  const ShowRecipies = recipies.slice(0, 4);
  return (
    <div className="mb-5">
      <h1 className="text-3xl m-5 w-1/4 font-bold border-b-2 border-green-500">
        What's <span className="text-green-500 ">Hot</span>
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {ShowRecipies.map((itm) => (
          <RecipiesItm itms={itm} key={itm.recipe_id} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/itms">
          <button className="btn btn-sm btn-primary text-lg">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipiesSection;
