import { Link } from "gatsby";
import React from "react";
import Layout from "../Components/Layout/Layout";
import JackPlane from "../images/toyplane.jpg";
const page1 = () => {
  return (
    <Layout>
      <h1 className="px-4 text-center">Welcome to Allen Airways</h1>
      <img src={JackPlane} />
      <h4 className="px-4  text-center">
        Here at Allen Airlines, we may not be very good at golf but we are
        number 1 when it comes to flights
      </h4>

      <p className="px-4  text-center">
        For More information please see our departures board
      </p>
      <Link to="/page2" className="px-4 w-full  text-center">
        Go to Departures
      </Link>
    </Layout>
  );
};

export default page1;
