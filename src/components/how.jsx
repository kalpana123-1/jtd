import React from "react";
import { Link } from "react-router-dom";
const data = [
  "source students from 5 degree college in Palamaner",
  "Secure laptop loans for 100 laptops",
  "Conduct selection tests",
  "Conduct Value fit interviews",
  "monitor and mentor during pre- bootcamp mile stones",
  "help students to select the bootcamp",
  "monitor and mentor on bootcamp mile stones",
  "Provide psychological support during interview milestone",
];

export default function HOW() {
  return (
    <div className="div-col">
      <p className="tag-head">WHEN</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>

      <Link to="/when" className="button-next">
        <button>WHEN</button>
      </Link>
    </div>
  );
}
