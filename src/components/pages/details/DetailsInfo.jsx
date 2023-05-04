import React from "react";

const DetailsInfo = (props) => {
  const { image_url, name, details, cooking_method, ingredients, rating } =
    props.recipe;

  return (
    <div className="lg:col-span-2 text-black lg:px-10">
      <h1 className="text-3xl text-blue-700 font-bold">{name}</h1>

      <img src={image_url} className="rounded-md lg:ms-10 mt-5 mb-2 lg:w-4/5" />

      <ul className="grid grid-cols-2 lg:grid-cols-5 justify-items-center mb-4">
        <li>
          Rating: <span className="text-blue-700">{rating}</span>
        </li>
        <li>
          Prep Time: <span className="text-blue-700">10mnt</span>
        </li>
        <li>
          Cook Time: <span className="text-blue-700">10mnt</span>
        </li>
        <li>
          Ready In: <span className="text-blue-700">15mnt</span>
        </li>
      </ul>

      <article className="mb-3">
        <h1 className="text-2xl underline text-green-500">About:</h1>
        <p className="ms-2">{details}</p>
      </article>
      <article className="mb-3">
        <h1 className="text-2xl underline text-green-500">Ingredients:</h1>
        <ul className="list-disc list-inside">
          {ingredients?.map((itm, index) => (
            <li key={index}>{itm}</li>
          ))}
        </ul>
      </article>
      <article>
        <h1 className="text-2xl underline text-green-500">Cooking Method:</h1>
        <p className="ms-2">{cooking_method}</p>
      </article>
    </div>
  );
};

export default DetailsInfo;
