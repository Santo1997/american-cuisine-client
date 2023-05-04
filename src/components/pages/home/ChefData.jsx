import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefData = (props) => {
  const { id, name, img, experience, num_recipes, likes } = props.chef;

  return (
    <div className="hero border-2 text-black border-blue-700 lg:w-fit lg:h-52 overflow-hidden rounded-s-xl ">
      <div className="flex  flex-col lg:flex-row-reverse gap-0 p-0 h-full">
        {/* height={200} width={250} */}
        <LazyLoad threshold={0.95} offset={300}>
          <img src={img} data-src={img} className=" lg:w-96  h-full" />
        </LazyLoad>
        <div className="w-full p-2">
          <h1 className="text-2xl font-bold text-blue-900">{name}</h1>
          <ul className="list-disc list-inside my-4">
            <li>
              Years of experience:
              <span className="text-blue-700 font-bold"> {experience}</span>
            </li>
            <li>
              Numbers of recipes:
              <span className="text-blue-700 font-bold"> {num_recipes}</span>
            </li>
            <li>
              Likes: <span className="text-blue-700 font-bold"> {likes}</span>
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
