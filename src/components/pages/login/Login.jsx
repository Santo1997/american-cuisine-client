import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-[calc(100vh-300px)] bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control m-5">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Need an account?
              <span className="ms-1 underline hover:text-red-500">
                <Link to="/signUp">Signup</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
