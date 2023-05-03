import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Signup = () => {
  const { user, createUser } = useContext(AuthContext);
  const [err, setErr] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setErr("");
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const pass = form.password.value;
    const img = form.photo.value;

    createUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };
  return (
    <div className="hero min-h-[calc(100vh-300px)] bg-base-200 ">
      <div className="hero-content flex-col w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />

              {err && (
                <>
                  <p className="text-sm text-red-600 mt-5">{err}</p>
                </>
              )}
            </div>
            <div className="form-control m-5 ">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Already an account?
              <span className="ms-1 underline hover:text-red-500">
                <Link to="/login">Signin</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
