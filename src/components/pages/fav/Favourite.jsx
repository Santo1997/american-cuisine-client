import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../../../App";
import FavData from "./FavData";
import { loadStrData } from "../../../utilities/fakeDB";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const recipies = useContext(RecipeContext);
  const loadData = loadStrData(recipies);
  const navigate = useNavigate();

  const remove = () => {
    localStorage.removeItem("recipies-cart");
    navigate("/", { replace: true });
  };

  console.log(loadData.length);

  return (
    <div className="min-h-[calc(100vh-340px)]">
      {loadData.length == 0 ? (
        <>
          <div className="text-center pt-36">
            <h1 className="text-3xl text-red-500">No Items Added</h1>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            <button onClick={remove} className="btn btn-error text-xl">
              Remove All
            </button>
          </div>
          <div className="grid gap-3 w-11/12 lg:w-4/5 shadow-2xl mx-auto border my-5">
            {loadData.map((itm) => (
              <FavData itm={itm} key={itm.recipe_id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favourite;
