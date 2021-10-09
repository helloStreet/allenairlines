import React from "react";
import Layout from "../Components/Layout/Layout";
import Jack1 from "../images/jack3.jpeg";
import { Link } from "gatsby";
const index = () => {
  return (
    <div className="text-center ">
      <img src={Jack1} />
      <h1>Happy Birthday Jack </h1>
      <p>We hope you have a great day. Love from your family xxx</p>
      <div className="w-full px-4">
        <Link to="/page1" className="btn-primary ">
          Click Me
        </Link>
      </div>
    </div>
  );
};

export default index;
