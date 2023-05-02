import React from "react";

const DetailsInfo = (props) => {
  const { image_url, name, details, cooking_method, ingredients, rating } =
    props.recipe;

  let img =
    "https://thumbs.dreamstime.com/b/spices-open-recipe-book-space-text-selection-cooking-blank-pages-53759813.jpg";

  return (
    <div className="col-span-2">
      <h1 className="text-3xl">{name}</h1>

      <img src={img} className="rounded-md ms-10 mt-5 mb-2 w-4/5" />

      <ul className="grid grid-cols-5 justify-items-center mb-4">
        <li>
          Rating: <span className="text-green-500">{rating}</span>
        </li>
        <li>
          Prep Time: <span className="text-green-500">10mnt</span>
        </li>
        <li>
          Cook Time: <span className="text-green-500">10mnt</span>
        </li>
        <li>
          Ready In: <span className="text-green-500">15mnt</span>
        </li>
      </ul>

      <article className="mb-3">
        <h1 className="text-2xl underline">About</h1>
        <p className="ms-2">{details}</p>
      </article>
      <article className="mb-3">
        <h1 className="text-2xl underline">Ingredients</h1>
        <ul className="list-disc list-inside">
          {ingredients?.map((itm, index) => (
            <li key={index}>{itm}</li>
          ))}
        </ul>
      </article>
      <article>
        <h1 className="text-2xl underline">Cooking Method</h1>
        <p className="ms-2">{cooking_method}</p>
      </article>
    </div>
  );
};

export default DetailsInfo;
