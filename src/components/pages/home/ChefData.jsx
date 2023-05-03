import React from "react";
import { Link } from "react-router-dom";

const ChefData = (props) => {
  const { id, name, img, experience, num_recipes, likes } = props.chef;

  let imgs =
    "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg";
  return (
    <div className="hero  bg-base-200  h-48 rounded-e-xl ">
      <div className="hero-content flex-col lg:flex-row-reverse p-0 h-48">
        <img src={imgs} className="w-fit h-full rounded-e-xl" />
        <div>
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
