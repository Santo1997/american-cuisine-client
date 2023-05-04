import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefData = (props) => {
  const { id, name, img, experience, num_recipes, likes } = props.chef;

  return (
    <div className="hero  bg-base-200 w-fit h-52 rounded-s-xl ">
      <div className="hero-content  flex-col lg:flex-row-reverse gap-0 p-0 h-full">
        <LazyLoad height={200} width={250} threshold={0.95} offset={300}>
          <img src={img} data-src={img} className="w-52 h-full" />
        </LazyLoad>

        <div className="w-full p-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          <ul className="list-disc list-inside my-4">
            <li>
              Years of experience:
              <span className="text-green-500 font-bold"> {experience}</span>
            </li>
            <li>
              Numbers of recipes:
              <span className="text-green-500 font-bold"> {num_recipes}</span>
            </li>
            <li>
              Likes: <span className="text-green-500 font-bold"> {likes}</span>
            </li>
          </ul>
          <div className="text-center">
            <Link to={`/chef_details/${id}`}>
              <button className="btn btn-primary btn-sm">View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefData;
