import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecepiesInfo from "./RecepiesInfo";
import { RecipeContext } from "../../../App";
import { toast } from "react-hot-toast";

const ChefDetails = () => {
  let chefId = useParams().id;
  const [isFavorited, setIsFavorited] = useState(false);
  const [chefNRecipies, setChefNRecipies] = useState("");

  const recipes = useContext(RecipeContext);

  useEffect(() => {
    fetch(`https://chef-recipe-server-santo1997.vercel.app/chefData/${chefId}`)
      .then((res) => res.json())
      .then((data) => setChefNRecipies(data));
  }, []);

  const { id, name, img, experience, num_recipes, likes, details } =
    chefNRecipies;

  const chefRecepies = recipes.filter(
    (itm) => itm.chefs_name.chef1 == name || itm.chefs_name.chef2 === name
  );

  const addFav = () => {
    setIsFavorited(true);
    toast.success("Added As Favourite");
  };

  let imgs =
    "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg";
  return (
    <div>
      <div className="hero place-items-start bg-base-200 w-fit p-5">
        <div className="hero-content flex-col lg:flex-row items-start">
          <img src={imgs} className="w-fit h-96" />
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
            <div className="text-center mt-5">
              <button
                disabled={isFavorited}
                onClick={addFav}
                className="btn btn-otline btn-info"
              >
                {isFavorited ? (
                  <>
                    <span className="text-green-600">Added</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-green-600 inline ms-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Add Faourite</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline ms-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <article>
        <h1 className="text-2xl underline">About</h1>
        <p className="ms-2">{details}</p>
      </article>

      <div className="mb-5">
        <h1 className="text-2xl underline my-5">Recipies</h1>
        <div className="grid grid-cols-3 gap-2">
          {chefRecepies.map((recipe) => (
            <RecepiesInfo recipe={recipe} key={recipe.recipe_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
