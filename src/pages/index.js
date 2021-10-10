import React from "react";
import Layout from "../Components/Layout/Layout";
import Jack1 from "../images/jack3.jpg";
import { Link } from "gatsby";
const index = () => {
  return (
    <div className="text-center ">
      <img src={Jack1} />
      <h1 className="px-4">Happy Birthday Jack </h1>
      <p className="px-4">
        We hope you have a great day. Love from your family xxx
      </p>
      <div className="w-full px-4">
        <Link to="/page1" className="btn-primary ">
          Click Me
        </Link>
      </div>
    </div>
  );
};

export default index;
