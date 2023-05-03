import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const { user, signIn, handleGoogleSignIn, handleGithubSignIn } =
    useContext(AuthContext);
  const [err, setErr] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setErr("");
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signIn(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };

  const googleHandle = () => {
    handleGoogleSignIn(googleProvider);
  };

  const githubHandle = () => {
    handleGithubSignIn(githubProvider);
  };

  return (
    <div className="hero min-h-[calc(100vh-300px)] bg-base-200 ">
      <div className="hero-content flex-col w-3/6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleLogin} className="card-body">
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
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {err && (
                <>
                  <p className="text-sm text-red-600 mt-5">{err}</p>
                </>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control m-5">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Create an account?
              <span className="ms-1 underline hover:text-red-500">
                <Link to="/signUp">Signup</Link>
              </span>
            </p>
          </form>
          <div className="divider">OR</div>
          <div className=" text-center mb-10">
            <button
              onClick={googleHandle}
              className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md me-5"
            >
              Google
            </button>
            <button
              onClick={githubHandle}
              className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md"
            >
              Git-Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
