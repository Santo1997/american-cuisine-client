import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../../../App";
import FavData from "./FavData";
import { loadStrData, removeToCart } from "../../../utilities/fakeDB";

const Favourite = () => {
  const [cart, setCart] = useState([]);
  const [loader, setLoader] = useState(true);
  const recipies = useContext(RecipeContext);

  useEffect(() => {
    setLoader(true);
    const loadCart = loadStrData(recipies);
    if (loadCart) {
      setLoader(false);
      setCart(loadCart);
    }
  }, []);

  const removeCart = () => {
    localStorage.removeItem("recipies-cart");
    setCart([]);
  };

  const removeRecipe = (id) => {
    setLoader(true);
    const newCart = cart.filter((itm) => itm.recipe_id !== id);
    if (newCart) {
      setCart(newCart);
      removeToCart(id);
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-340px)]">
      {cart.length == 0 ? (
        <>
          <div className="text-center pt-36">
            <h1 className="text-3xl text-red-500">No Items Added</h1>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            <button onClick={removeCart} className="btn btn-error text-xl">
              Remove All
            </button>
          </div>
          <div className="grid gap-3 w-11/12 lg:w-4/5 shadow-2xl mx-auto border my-5">
            {loader ? (
              <progress className="progress w-56"></progress>
            ) : (
              <>
                {cart.map((itm) => (
                  <FavData
                    itm={itm}
                    key={itm.recipe_id}
                    removeRecipe={removeRecipe}
                  />
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Favourite;
