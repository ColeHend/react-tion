import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  listStyleType: "none",
};
const itemStyle = {
  display: "inline",
  margin: "5px",
};
export default function NavBar(props) {
  return (
    <div>
      <ul style={navStyle}>
        <li style={itemStyle}>
          <NavLink to="/">ListPage</NavLink>
        </li>
        <li style={itemStyle}>
          <NavLink to="/cards">Cards</NavLink>
        </li>
      </ul>
    </div>
  );
}
