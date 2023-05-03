import React, { useContext } from "react";
import Activelink from "./Activelink";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 border-b-2 border-green-500">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>SignUp</a>
            </li>
          </ul>
        </div>
        <h1 className="btn btn-ghost normal-case text-4xl">
          <Link to={"/"}>Chef Site</Link>
        </h1>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Activelink to="/">Home</Activelink>
          </li>
          <li>
            <Activelink to="/itms">Items</Activelink>
          </li>
          <li>
            <Activelink to="/blog">Blog</Activelink>
          </li>

          {user ? (
            <>
              <li>
                <button onClick={handleLogOut}>LogOut</button>
              </li>
              <li>
                <Activelink>
                  {user.photoURL && (
                    <>
                      <span>
                        <div className="avatar online inline">
                          <div className="w-7 rounded-full overflow-hidden">
                            <img src={user.photoURL} />
                          </div>
                        </div>
                      </span>
                    </>
                  )}

                  <span>
                    {user.displayName == null ? user.email : user.displayName}
                  </span>
                </Activelink>
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
  );
};

export default Header;
