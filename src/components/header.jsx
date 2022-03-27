import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HEADER = () => {
  return (
    <>
      <div className="nav_container">
        <div className="nav_logo"></div>
        <div className="nav_links">
          <Link to="/who">
            <button>WHO</button>
          </Link>
          <Link to="/why">
            <button>WHY</button>
          </Link>
          <Link to="/what">
            <button>WHAT</button>
          </Link>
          <Link to="/how">
            <button>HOW</button>
          </Link>
          <Link to="/when">
            <button>WHEN</button>
          </Link>
          <Link to="/where">
            <button>WHERE</button>
          </Link>
        </div>
      </div>
      ;
    </>
  );
};

export default HEADER;
