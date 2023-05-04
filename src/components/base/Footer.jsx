import React, { useContext } from "react";
import { RecipeContext } from "../../App";
import FooterData from "./FooterData";
import FilterData from "../layouts/FilterData";
import { Link } from "react-router-dom";

const Footer = () => {
  const recipiesData = useContext(RecipeContext);
  const popularItm = recipiesData.filter((rec) => rec.popularity === "Popular");
  const shwItm = popularItm.slice(0, 2);

  return (
    <footer className="footer p-10 bg-black text-base-content">
      <div className="bg-black">
        <h1 className="text-4xl text-green-500">American Cuisine</h1>
        <p className="lg:w-96">
          ACME Industries Ltd.
          <br />
          American cuisine is a diverse and varied culinary tradition that
          reflects the country's melting pot of cultures and influences. It
          incorporates a wide range of ingredients, flavors, and cooking styles
          from around the world, as well as unique regional specialties that
          have developed over time.
        </p>
      </div>
      <div className="bg-black w-full">
        <span className="footer-title  w-full capitalize text-xl text-green-500">
          Popular Items
        </span>
        {shwItm.map((itm) => (
          <FooterData recipies={itm} key={itm.recipe_id} />
        ))}
      </div>

      <div>
        <span className="footer-title w-full capitalize text-xl  text-green-500">
          News
        </span>
        <div className="card lg:card-side mx-auto lg:h-fit w-fit p-1 text-white rounded-none last:border-t-2 last:pt-3 ">
          <figure className="me-2">
            <img
              src="https://i.ibb.co/qyHvvRM/hamburger-with-fries.jpg"
              className="w-fit h-24 lg:h-16"
            />
          </figure>
          <div className="card-body w-full p-1">
            <Link to={`/itms`}>
              <h2 className="card-title text-base hover:underline hover:text-red-500">
                Cheeseburger
              </h2>
            </Link>
            <p className="text-gray-500">
              An iconic American dish consisting.....
            </p>
          </div>
        </div>
        <div className="card lg:card-side mx-auto h-fit w-fit p-1 text-white rounded-none last:border-t-2 last:pt-3 ">
          <figure className="me-2">
            <img
              src="https://i.ibb.co/d5zTpNG/main-header.jpg"
              className="w-fit h-24 lg:h-16"
            />
          </figure>
          <div className="card-body w-full p-1">
            <Link to={`/itms`}>
              <h2 className="card-title text-base hover:underline hover:text-red-500">
                Southern Fried Chicken
              </h2>
            </Link>

            <p className="text-gray-500">
              Chicken pieces marinated in butter.....
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
