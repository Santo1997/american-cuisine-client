import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecepiesInfo from "./RecepiesInfo";
import { RecipeContext } from "../../../App";
import LazyLoad from "react-lazy-load";

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
      <div className="hero place-items-start shadow-2xl rounded-md text-black w-fit lg:p-5">
        <div className="hero-content flex-col lg:flex-row-reverse  items-center">
          <LazyLoad threshold={0.95} offset={300}>
            <img src={img} data-src={img} />
          </LazyLoad>
          <div className="lg:me-10">
            <h1 className="text-3xl font-bold text-blue-700">{name}</h1>
            <ul className="list-disc list-inside ms-8 my-4">
              <li>
                Years of experience:
                <span className="text-blue-700 font-bold"> {experience}</span>
              </li>
              <li>
                Numbers of recipes:
                <span className="text-blue-700 font-bold"> {num_recipes}</span>
              </li>
              <li>
                Likes:
                <span className="text-blue-700 font-bold"> {likes}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <article className="text-black">
        <h1 className="text-2xl underline my-5 text-green-500">About:</h1>
        <p className="ms-2">{details}</p>
      </article>

      <div className="mb-5">
        <h1 className="text-2xl underline my-5 text-green-500">Recipies:</h1>
        <div className="grid grid-cols-1 gap-3">
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
