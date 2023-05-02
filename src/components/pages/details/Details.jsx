import React, { useEffect, useState } from "react";
import DetailsInfo from "./DetailsInfo";
import FilterCart from "../../layouts/FilterCart";
import { useParams } from "react-router-dom";

const Details = () => {
  let recipeId = useParams().id;
  //const [loader, setLoader] = useState();
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    fetch(
      `https://chef-recipe-server-santo1997.vercel.app/recipies/${recipeId}`
    )
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      <DetailsInfo recipe={recipe} />
      <FilterCart />
    </div>
  );
};

export default Details;
