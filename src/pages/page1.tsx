import React from "react";
import Layout from "../Components/Layout/Layout";
import JackPlane from "../images/toyplane.jpg";
const page1 = () => {
  return (
    <Layout>
      <h1>Welcome to Allen Airways</h1>
      <img src={JackPlane} />
      <p>
        We may not be very good at golf but we are number 1 when it comes to
        flights
      </p>
      <p>For More information please see our departures board</p>
    </Layout>
  );
};

export default page1;
