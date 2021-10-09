import React from "react";
import Layout from "../Components/Layout/Layout";
import JackUniform from "../images/uniform.jpg";
const page3 = () => {
  return (
    <Layout>
      <h3 className="mx-4">Flight Details for Jack Allen</h3>
      <img src={JackUniform} />
      <h4 className="mx-4">Congratulations on reaching 21</h4>
      <p className="mx-4">We Hope you enjoy your flight</p>

      <div className=" mx-4  flex flex-row border border-3 rounded-xl ">
        <div className="w-full flex-1 flex flex-col p-4 bg-gray-500 rounded-l-xl">
          <h5 className="w-full flex-1">Date</h5>
          <h5 className="w-full flex-1">Time</h5>
          <h5 className="w-full flex-1">Depart</h5>
          <h5 className="w-full flex-1">Arrive</h5>
        </div>
        <div className="w-full flex-2 flex flex-col p-4 bg-gray-100 rounded-t-xl">
          <h5 className="w-full flex-1">17/10/21</h5>
          <h5 className="w-full flex-1">2pm</h5>
          <h5 className="w-full flex-1">Denam Aerodrome</h5>
          <h5 className="w-full flex-1">Denam Aerodrome</h5>
        </div>
      </div>
    </Layout>
  );
};

export default page3;
