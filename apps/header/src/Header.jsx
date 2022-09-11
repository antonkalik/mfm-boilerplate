import React from "react";
import "./index.css";

const Header = ({ count = 0 }) => (
  <header>
    <p>Remote Header / count: {count}</p>
  </header>
);

export default Header;
