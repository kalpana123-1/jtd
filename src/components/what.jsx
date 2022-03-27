import React from "react";
import { Link } from "react-router-dom";


const whatdata = [
  "each girl will go through a dozon milestones before secure in the job",
  
  
  
  "Selection Miles stone",
  "get a hackerrank basic certificate withour asking for help",
  
  "LAP top mile stone",
  "Get laptop loan after passin value fit interview",



  "Pre Bootcamp Mile Stone",

  "build a static website using HTML",

  "build flipcart like website using CSS",

"ADD functionality such as ad to cart, checkout to the flipcart website using JAVASCRIPT",

"Make the website SEMI real by intergrating free API",

"Solve 100 DS programs in leetcode",

 "BootCamp Selection MileStone",
"helps students to select appropiate bootcamp",


"Boot Camp mile store 1",
"Bootcamps will have miles stones 9-14 with the last mile stone having the interview mile stone",








"interview mile stone",
]

export default function WHAT() {
  return (
    <div className="div-col">
      <Link to="/how" className="button-next">
        <button>HOW</button>
      </Link>
    </div>
  );
}
