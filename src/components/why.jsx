import React from "react";
import { Link } from "react-router-dom";

const data = [
  "house holds have less than 10k monthly income",
  "poverty plays the spolis sport in pushing girls to marriage right ater the college",
  "with no support tjhey will leave a financially depended life",
  "inormous potential  for the country  will go waste",
  "10 of our girls have secured a software developer job at an average CTC of 7lpa",
  "most of them are JTd volunteers who will menter next 100 girls",
];

export default function WHY() {
  return (
    <div className="div-col">
      <p className="tag-head">WHO</p>
      <ul className="col-ul">
        {data.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
      <Link to="/what" className="button-next">
        <button>WHAT</button>
      </Link>
    </div>
  );
}
