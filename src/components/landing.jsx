import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LANDING = () => {
  return (
    <div className="main">
      <div className="home">
        <div>
          <img src="jtb.jpeg" className="logo1" alt="jtb_logo"></img>
        </div>
        <div>
          <img src="pgc.jpg" className="logo2" alt="pgc_logo" />
        </div>
      </div>
      <div className="content">
        <h1>VISION</h1>
        <p>
          Empower <em>100 girls</em> to secure <em>software developer</em> jobs
          by <em>2023</em> at an annual CTC of <em>10 LPA</em>
        </p>
      </div>
      <div className="buttons"></div>
    </div>
  );
};
export default LANDING;
