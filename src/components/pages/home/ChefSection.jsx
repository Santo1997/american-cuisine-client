import React, { useEffect, useState } from "react";
import ChefData from "./ChefData";

const ChefSection = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="mb-5">
      <h1 className="text-3xl m-5 lg:w-1/4 font-bold border-b-2 border-green-500 text-blue-700">
        The <span className="text-green-500 ">Chef's</span>
      </h1>
      {isLoading ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 gap-2">
            {props.chefData.map((chef) => (
              <ChefData chef={chef} key={chef.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChefSection;
