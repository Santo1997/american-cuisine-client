import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecepiesInfo from "./RecepiesInfo";
import { RecipeContext } from "../../../App";
import { toast } from "react-hot-toast";

const ChefDetails = () => {
  let chefId = useParams().id;
  const [chefNRecipies, setChefNRecipies] = useState("");
  const [loader, setLoader] = useState(true);
  const recipes = useContext(RecipeContext);

  useEffect(() => {
    fetch(`https://chef-recipe-server-santo1997.vercel.app/chefData/${chefId}`)
      .then((res) => res.json())
      .then((data) => setChefNRecipies(data));
    setLoader(false);
  }, []);

  const { id, name, img, experience, num_recipes, likes, details } =
    chefNRecipies;

  const chefRecepies = recipes.filter(
    (itm) => itm.chefs_name.chef1 == name || itm.chefs_name.chef2 === name
  );

  return (
    <div>
      <div className="hero place-items-start bg-base-200 w-fit p-5">
        <div className="hero-content flex-col lg:flex-row items-start">
          <img src={img} className="w-fit h-96" />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <ul className="list-disc list-inside ms-10 my-4">
              <li>
                Years of experience:
                <span className="text-green-500 font-bold"> {experience}</span>
              </li>
              <li>
                Numbers of recipes:
                <span className="text-green-500 font-bold"> {num_recipes}</span>
              </li>
              <li>
                Likes:
                <span className="text-green-500 font-bold"> {likes}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <article>
        <h1 className="text-2xl underline">About</h1>
        <p className="ms-2">{details}</p>
      </article>

      <div className="mb-5">
        <h1 className="text-2xl underline my-5">Recipies</h1>
        <div className="grid grid-cols-1 gap-2">
          {loader ? (
            <>
              <progress className="progress w-56"></progress>
            </>
          ) : (
            chefRecepies.map((recipe) => (
              <RecepiesInfo recipe={recipe} key={recipe.recipe_id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
