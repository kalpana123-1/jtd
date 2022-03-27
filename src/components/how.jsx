import React from "react";

const data = [
  "Source students from 5 degree college in Palamaner",
  "Secure laptop loans for 100 laptops",
  "Conduct selection tests",
  "Conduct Value fit interviews",
  "Monitor and mentor during pre-bootcamp milestones",
  "Help students to select the bootcamp",
  "Monitor and mentor on bootcamp milestones",
  "Provide psychological support during interview milestone",
];

export default function HOW() {
  return (
    <div className="div-col">
      <p className="tag-head">HOW</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
