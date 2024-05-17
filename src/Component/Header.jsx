import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: "DarkRed",
        padding: "25px 0px",
        color: "White",
        textAlign: "center",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          columnGap: "20px",
          fontSize: "18px",
        }}
      >
        <li>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "white" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/product"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Product
          </Link>
        </li>
        <li>
          <Link to={"/blog"} style={{ textDecoration: "none", color: "white" }}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={"/contact-us"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
