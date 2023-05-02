import React, { useContext } from "react";
import Slider from "./Slider";
import Items from "./Items";
import Chef from "./Chef";
import FilterCart from "../../layouts/FilterCart";
import { ChefContext, RecipeContext } from "../../../App";
import RecentItm from "./RecentItm";

const Home = () => {
  const recipies = useContext(RecipeContext);
  const chefData = useContext(ChefContext);

  const recentRecipies = recipies.filter((rec) => rec.popularity === "Recent");

  return (
    <div>
      <Slider />
      <Chef chefData={chefData} />
      <Items recipies={recipies} />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h1 className="text-3xl m-5 w-1/4 font-bold border-b-2 border-green-500">
            Recent
          </h1>
          <div className="grid gap-2">
            {recentRecipies.map((recentRecipe) => (
              <RecentItm
                recentRecipe={recentRecipe}
                key={recentRecipe.recipe_id}
              />
            ))}
          </div>
        </div>
        <FilterCart />
      </div>
    </div>
  );
};

export default Home;
