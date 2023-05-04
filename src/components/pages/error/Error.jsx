import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();

  return (
    <div className="h-screen">
      <div className="container w-fit text-center mx-auto py-20">
        <img
          src="https://i.ibb.co/R7qY2R2/oops-404-error.jpg"
          className="w-fit h-96 mx-auto rounded-md"
        />
        <p className="text-2xl font-semibold lg:text-3xl m-8 text-red-800">
          {error?.message || "No route matches URL"}
        </p>
        <Link to="/" className="btn rounded btn-primary text-white">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};
export default Error;
