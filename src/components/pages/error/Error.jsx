import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  let err =
    "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000";
  return (
    <div className="h-screen">
      <div className="container w-fit text-center mx-auto py-32">
        <img src={err} className="w-fit h-96 mx-auto" />
        <p className="text-2xl font-semibold lg:text-3xl mb-8">
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
