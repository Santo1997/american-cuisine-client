import React, { useContext } from "react";
import ItmCart from "./ItmCart";
import FilterCart from "../../layouts/FilterCart";
import { RecipeContext } from "../../../App";

const Itms = () => {
  const recipies = useContext(RecipeContext);

  return (
    <div className="grid lg:grid-cols-3 gap-2">
      <ItmCart recipies={recipies} />
      <FilterCart />
    </div>
  );
};

export default Itms;
