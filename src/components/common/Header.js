import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        <button className="btn btn btn-success btn-lg">Home</button>
      </NavLink>
      {"  "}
      <NavLink to="/library" activeStyle={activeStyle}>
        <button className="btn btn btn-success btn-lg">Library</button>
      </NavLink>
      {"  "}
      <NavLink to="/about" activeStyle={activeStyle}>
        <button className="btn btn btn-success btn-lg">About</button>
      </NavLink>
    </nav>
  );
};

export default Header;
