import React from "react";
import { Link } from "react-router-dom";

const data = ["BY end of 2023"];

export default function WHEN() {
  return (
    <div className="div-col">
      <p className="tag-head">WHERE</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
      <Link to="/where" className="button-next">
        <button>WHERE</button>
      </Link>
    </div>
  );
}
