import React, { useContext } from "react";
import SliderSection from "./SliderSection";
import RecipiesSection from "./RecipiesSection";
import ChefSection from "./ChefSection";
import FilterCart from "../../layouts/FilterCart";
import { ChefContext, RecipeContext } from "../../../App";
import RecentItm from "./RecentItm";

const Home = () => {
  const recipies = useContext(RecipeContext);
  const chefData = useContext(ChefContext);

  const recentRecipies = recipies.filter((rec) => rec.popularity === "Recent");

  return (
    <div>
      <SliderSection />
      <ChefSection chefData={chefData} />
      <RecipiesSection recipies={recipies} />
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <h1 className="text-3xl m-5 w-1/4 font-bold border-b-2 text-green-500 border-green-500">
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
