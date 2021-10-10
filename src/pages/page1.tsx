import { Link } from "gatsby";
import React from "react";
import Layout from "../Components/Layout/Layout";
import JackPlane from "../images/toyplane.jpg";
const page1 = () => {
  return (
    <Layout>
        
      <h1  class="px-4">Welcome to Allen Airways</h1>
      <img src={JackPlane} />
      <h4  class="px-4">
        We may not be very good at golf but we are number 1 when it comes to
        flights
      </h4>
      <p  class="px-4">For More information please see our departures board</p>
      <Link to="/page2"  class="px-4">Go to Departures ---></Link>
    </Layout>
  );
};

export default page1;
