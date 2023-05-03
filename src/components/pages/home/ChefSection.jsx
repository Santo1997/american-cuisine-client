import React, { useEffect, useState } from "react";
import ChefData from "./ChefData";
import { Link } from "react-router-dom";

const ChefSection = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props) {
      setIsLoading(false);
    }
  }, []);

  const showChefs = props.chefData.slice(0, 3);

  return (
    <div className="mb-5">
      <h1 className="text-3xl m-5 w-1/4 font-bold border-b-2 border-green-500">
        The <span className="text-green-500 ">Chef's</span>
      </h1>
      {isLoading ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2">
            {showChefs.map((chef) => (
              <ChefData chef={chef} key={chef.id} />
            ))}
          </div>
        </>
      )}
      <div className="text-center mt-5">
        <Link to="/chefs">
          <button className="btn btn-sm btn-primary text-lg">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default ChefSection;
