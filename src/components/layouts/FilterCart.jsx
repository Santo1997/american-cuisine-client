import React, { useContext, useState } from "react";
import FilterData from "./FilterData";
import { RecipeContext } from "../../App";

const FilterCart = () => {
  const recipies = useContext(RecipeContext);

  return (
    <div className="col-span-1">
      <h1 className="text-3xl m-5 w-2/4 font-bold border-b-2 border-green-500">
        Category
      </h1>
      <div className="text-center mb-5">
        <button className="btn btn-sm btn-info btn-outline me-3 ">
          Recent
        </button>

        <button className="btn btn-sm btn-info btn-outline me-3 ">
          Popular
        </button>
        <button className="btn btn-sm btn-info btn-outline  ">Random</button>
      </div>
      <div className="grid gap-2">
        {recipies.map((itm) => (
          <FilterData recipies={itm} key={itm.recipe_id} />
        ))}
      </div>

      {location.pathname !== "/itms" && (
        <div className="text-center mt-10">
          <button className="btn btn-primary btn-sm">Check Out</button>
        </div>
      )}
    </div>
  );
};

export default FilterCart;
