import React from "react";
import ItmData from "./ItmData";

const Items = ({ recipies }) => {
  const ShowRecipies = recipies.slice(0, 4);
  return (
    <div className="mb-5">
      <h1 className="text-3xl m-5 w-1/4 font-bold border-b-2 border-green-500">
        What's <span className="text-green-500 ">Hot</span>
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {ShowRecipies.map((itm) => (
          <ItmData itms={itm} key={itm.recipe_id} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-primary text-xl">Show All</button>
      </div>
    </div>
  );
};

export default Items;
