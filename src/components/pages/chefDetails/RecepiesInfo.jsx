import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const RecepiesInfo = (props) => {
  const [isFavourite, setIsFavourite] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(false);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  function addFavourite(id) {
    setIsFavourite(id);
    toast.success("Added As Favourite");
  }

  const {
    recipe_id,
    image_url,
    name,
    details,
    rating,
    ingredients,
    cooking_method,
  } = props.recipe;

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          <div className="card lg:card-side  shadow-2xl h-auto relative text-black">
            <figure>
              <img src={image_url} className="w-96 h-full" />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title text-2xl text-blue-700 font-bold">
                {name}
              </h2>
              <div className="w-fit">
                <div className="badge badge-info font-bold me-4 p-3 ">
                  rating: {rating}
                </div>
                <button
                  disabled={isFavourite === recipe_id}
                  onClick={() => addFavourite(recipe_id)}
                  className="badge bg-slate-200 border-0 font-bold p-3 "
                >
                  {isFavourite !== recipe_id && (
                    <>
                      <span className="text-red-700">Add Favourite</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-700"
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

              <p>{details}</p>

              <div className="grid lg:grid-cols-3  items-start">
                <ul className="list-disc list-inside ">
                  <h3 className="text-xl underline text-green-500">
                    Ingredients:
                  </h3>
                  {ingredients.map((itm, index) => (
                    <li key={index}>{itm}</li>
                  ))}
                </ul>
                <p className="col-span-2 mt-5 lg:mt-0">
                  <span className="text-xl underline inline text-green-500">
                    Cooking method:
                  </span>
                  <br />
                  <span> {cooking_method}</span>
                </p>
              </div>
              <div className="card-actions justify-center mt-5 lg:absolute bottom-4 right-10">
                <button className="btn btn-primary">
                  <Link to={`/details/${recipe_id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RecepiesInfo;
<h1>dc</h1>;
