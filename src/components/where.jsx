import React from "react";
import { Link } from "react-router-dom";

const data = ["Palamaner - Andhra pradesh  (town 150kms from Banglore"];

export default function WHERE() {
  return (
    <div className="div-col">
      <p className="tag-head">WHERE</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
      <Link to="/" className="button-next">
        <button>HOME</button>
      </Link>
    </div>
  );
}
