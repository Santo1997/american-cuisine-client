import React, { useContext } from "react";
import Slider from "./Slider";
import Chef from "./Chef";
import { ChefContext, RecipeContext } from "../../../App";

const Home = () => {
  const recipies = useContext(RecipeContext);
  const chefData = useContext(ChefContext);

  const recentRecipies = recipies.filter((rec) => rec.popularity === "Recent");

  return (
    <div>
      <Slider />
      <Chef chefData={chefData} />
    </div>
  );
};

export default Home;
