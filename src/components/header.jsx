import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HEADER = () => {
  return (
    <>
      <div className="nav_container">
        <div className="nav_logo">
          <Link to="/">
            <img src="jtb.jpeg" className="nav-logo" alt="jtb_logo"></img>
          </Link>
        </div>
        <div className="nav_links">
          <Link to="/who">WHO</Link>
          <Link to="/why">WHY</Link>
          <Link to="/what">WHAT</Link>
          <Link to="/how">HOW</Link>
          <Link to="/when">WHEN</Link>
          <Link to="/where">WHERE</Link>
        </div>
      </div>
    </>
  );
};

export default HEADER;
