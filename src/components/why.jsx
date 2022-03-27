import React from "react";

const data = [
  "House holds have less than 10k monthly income",
  "Poverty plays the spoils sport in pushing girls to married right after the college",
  "With no support they will live a financially depended life",
  "Enormous potential  for the country  will go waste",
  "10 of our girls have secured a software developer job at an average CTC of 7Lpa",
  "Most of them are JTd volunteers who will mentor next 100 girls",
];

export default function WHY() {
  return (
    <div className="div-col">
      <p className="tag-head">WHY</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
