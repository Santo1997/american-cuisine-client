import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllChefs = (props) => {
  const { id, name, img, experience, num_recipes, likes } = props.allchefs;

  return (
    <div className="card w-full  shadow-xl h-96 text-black">
      <figure>
        <img src={img} className="h-full w-full" />
      </figure>
      <div className="card-body p-3">
        <div>
          <h1 className="text-2xl font-bold text-blue-700">{name}</h1>
          <ul className="list-disc list-inside ">
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
          <div className="text-center mt-5">
            <button className="btn btn-sm btn-primary text-base">
              <Link to={`/chef_details/${id}`}>View Repipe</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChefs;
