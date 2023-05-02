import React from "react";
import CartInfo from "./CartInfo";

const ItmCart = ({ recipies }) => {
  return (
    <div className="col-span-2">
      <h1 className="text-3xl m-5 w-1/4 font-bold border-b-2 border-green-500">
        Items
      </h1>
      <div className="grid gap-3">
        {recipies.map((recipe) => (
          <CartInfo recipe={recipe} key={recipe.recipe_id} />
        ))}
      </div>
    </div>
  );
};

export default ItmCart;
