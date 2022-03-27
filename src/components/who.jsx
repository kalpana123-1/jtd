import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const data = [
  "girls aged 20-22 years studing for bachelores degree in a tier3 college having 90% chances of getting married right after college with below values",
  "humility",
  "self-driven",
  "Resilience",
  "Paying it forword",
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
        <Link to="/why" className="button-next">
          <button>WHY</button>
        </Link>
      </div>
    </>
  );
}
