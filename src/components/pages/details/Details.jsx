import React, { useEffect, useState } from "react";
import DetailsInfo from "./DetailsInfo";
import FilterCart from "../../layouts/FilterCart";
import { useParams } from "react-router-dom";

const Details = () => {
  let recipeId = useParams().id;
  const [recipe, setRecipe] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      `https://chef-recipe-server-santo1997.vercel.app/recipies/${recipeId}`
    )
      .then((res) => res.json())
      .then((data) => setRecipe(data));
    setLoader(false);
  }, []);

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 gap-2">
            <DetailsInfo recipe={recipe} />
            <FilterCart />
          </div>
        </>
      )}
    </>
  );
};

export default Details;
