import React, { useContext, useEffect, useState } from "react";
import ItmCart from "./ItmCart";
import FilterCart from "../../layouts/FilterCart";
import { RecipeContext } from "../../../App";

const Itms = () => {
  const recipies = useContext(RecipeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recipies) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-2">
      {isLoading ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          <ItmCart recipies={recipies} />
          <FilterCart />
        </>
      )}
    </div>
  );
};

export default Itms;
