import React, { useContext, useState } from "react";
import FilterData from "./FilterData";
import { Link, useLocation } from "react-router-dom";
import { RecipeContext } from "../../App";

const FilterCart = () => {
  const recipies = useContext(RecipeContext);

  const [recipeType, setRecipeType] = useState("Popular");
  const location = useLocation();

  const handleFilter = (type) => {
    setRecipeType(type);
  };

  const filteredData =
    recipeType === "Popular"
      ? recipies.filter((rec) => rec.popularity === "Popular")
      : recipies.filter((rec) => rec.popularity === recipeType);

  return (
    <div className=" lg:col-span-1 ">
      <h1 className="text-3xl m-5 lg:w-2/4 font-bold border-b-2 text-green-500 border-green-500">
        Category
      </h1>
      <div className="text-center mb-5 w-11/12 mx-auto ">
        {location.pathname !== "/" && (
          <button
            onClick={() => handleFilter("Recent")}
            className="btn btn-sm btn-info btn-outline me-3 "
          >
            Recent
          </button>
        )}

        <button
          onClick={() => handleFilter("Popular")}
          className="btn btn-sm btn-info btn-outline me-3 "
        >
          Popular
        </button>
        <button
          onClick={() => handleFilter("Random")}
          className="btn btn-sm btn-info btn-outline  "
        >
          Random
        </button>
      </div>
      <div className="grid gap-2 p-2 rounded-md bg-gray-300">
        {filteredData.map((itm) => (
          <FilterData recipies={itm} key={itm.recipe_id} />
        ))}
      </div>

      {location.pathname !== "/itms" && (
        <div className="text-center mt-10">
          <Link to={"/itms"}>
            <button className="btn btn-primary btn-sm">Check Out</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FilterCart;
