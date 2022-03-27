import React from "react";

const data = ["By end of 2023"];

export default function WHEN() {
  return (
    <div className="div-col">
      <p className="tag-head">WHEN</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
