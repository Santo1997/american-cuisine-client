import React, { useContext, useEffect, useState } from "react";
import { ChefContext } from "../../../App";
import AllChefs from "./AllChefs";
import { Link } from "react-router-dom";

const Chefs = () => {
  const chefsData = useContext(ChefContext);

  const bannerChefData = chefsData.slice(0, 1);
  const { id, name, img, experience, num_recipes, likes } = bannerChefData[0];

  const showChefsData = chefsData.slice(1, chefsData.length);

  return (
    <div>
      <div className="hero w-4/6 place-items-start bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
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
              <button className="btn btn-sm btn-primary text-base">
                <Link to={`/chef_details/${id}`}>View Repipe</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl m-5 w-1/5 font-bold border-b-2 border-green-500">
          Others <span className="text-green-500 ">Chef's</span>
        </h1>
        <div className="grid grid-cols-5 gap-2  mt-5">
          {showChefsData.map((allchefs) => (
            <AllChefs allchefs={allchefs} key={allchefs.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
