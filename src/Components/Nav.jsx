import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav id={style.nav}>
      <Link to="/">Create User</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Nav;
