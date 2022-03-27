import React from "react";

const data = ["Palamaner - Andhra pradesh  (a town 150kms from Banglore)"];

export default function WHERE() {
  return (
    <div className="div-col">
      <p className="tag-head">WHERE</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
