import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            {" "}
            <Link to={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/About"}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Nav;
