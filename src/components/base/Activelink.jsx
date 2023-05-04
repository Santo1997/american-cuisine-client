import React from "react";
import { NavLink } from "react-router-dom";

const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "btn-outline btn-md btn-primary border" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
