import React, { useContext, useState } from "react";
import { ChefContext } from "../../../App";
import AllChefs from "./AllChefs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Chefs = () => {
  const chefsData = useContext(ChefContext);
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isFavorited, setIsFavorited] = useState(false);

  const bannerChefData = chefsData.slice(0, 1);
  const { id, name, img, experience, num_recipes, likes } = bannerChefData[0];

  const allChefsData = chefsData.slice(1, chefsData.length);

  let imgs =
    "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg";

  return (
    <div>
      <div className="hero w-4/6 place-items-start bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img src={imgs} className="max-w-sm rounded-lg shadow-2xl" />
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
              <button
                disabled={isFavorited}
                className="btn btn-sm me-3 btn-otline btn-info"
              >
                {isFavorited ? (
                  <>
                    <span className="text-green-600">Added</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-green-600 inline ms-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Add Faourite</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline ms-2"
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
          {allChefsData.map((allchefs) => (
            <AllChefs allchefs={allchefs} key={allchefs.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
