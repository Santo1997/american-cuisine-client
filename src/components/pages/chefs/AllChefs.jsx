import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllChefs = (props) => {
  const { id, name, img, experience, num_recipes, likes } = props.allchefs;
  let imgs =
    "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg";
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="card w-full bg-base-100 shadow-xl h-96 border">
      <figure>
        <img src={imgs} className="h-full w-full" />
      </figure>
      <div className="card-body p-3">
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <ul className="list-disc list-inside ">
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
              className="btn btn-sm inline w-fit mb-3 btn-otline btn-info"
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
  );
};

export default AllChefs;
