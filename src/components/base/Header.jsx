import React, { useContext, useState } from "react";
import Activelink from "./Activelink";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-50 bg-slate-300 w-full text-center lg:text-left p-5 lg:px-10 text-4xl text-green-600 font-bold">
        <h1>American Cuisine</h1>
      </div>

      <div className="navbar  bg-green-600 text-white  font-bold mt-20">
        <div className="navbar-start">
          <div className="dropdown bg-green-600">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact bg-slate bg-green-600 dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li>
                <Activelink to="/">Home</Activelink>
              </li>
              <li>
                <Activelink to="/itms">Items</Activelink>
              </li>
              <li>
                <Activelink to="/chefs">Chefs</Activelink>
              </li>
              <li>
                <Activelink to="/blog">Blog</Activelink>
              </li>
              {user ? (
                <>
                  <li>
                    <button onClick={handleLogOut}>LogOut</button>
                  </li>
                  <li className="hover:disabled">
                    {user.displayName !== null ? user.displayName : user.email}

                    {user.displayName == null && user.email}
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Activelink to="/login">Login</Activelink>
                  </li>
                  <li>
                    <Activelink to="/signUp">SignUp</Activelink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <h1 className="btn btn-ghost normal-case text-xl">
            <Link to={"/"}>American Cuisine</Link>
          </h1>
        </div>
        <div className="navbar-end hidden lg:flex text-md">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Activelink to="/">Home</Activelink>
            </li>
            <li>
              <Activelink to="/itms">Items</Activelink>
            </li>
            <li>
              <Activelink to="/chefs">Chefs</Activelink>
            </li>
            <li>
              <Activelink to="/blog">Blog</Activelink>
            </li>

            {user ? (
              <>
                <li>
                  <button onClick={handleLogOut}>LogOut</button>
                </li>
                <li className="hover:disabled">
                  {user.photoURL && (
                    <>
                      <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="avatar inline relative  px-10 py-2 "
                      >
                        <div className="w-9  rounded-full overflow-hidden">
                          <img src={user.photoURL} />
                          <span>{user.displayName}</span>
                        </div>
                        {isHovered && (
                          <p className="hoverPoint   p-1 text-sm  rounded inline text-center text-blue-700 font-bold bg-gray-300">
                            {user.displayName}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <span>{user.displayName == null && user.email}</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Activelink to="/login">Login</Activelink>
                </li>
                <li>
                  <Activelink to="/signUp">SignUp</Activelink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
