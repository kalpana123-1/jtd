import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const data = [
  "20-21",
  "determination",
  "Data Driven",
  "Humble",
  "Resilient",
  "Patience",
  "Curious",
];

export default function WHO() {
  return (
    <>
      <div className="div-col">
        <p className="tag-head">WHO</p>
        <ul className="col-ul">
          {data.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <Link to="/what" className="button-next">
          WHAT
        </Link>
      </div>
    </>
  );
}
