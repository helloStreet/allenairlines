import { Link } from "gatsby";
import React from "react";
import Layout from "../Components/Layout/Layout";
import JackPilot from "../images/jack6.jpg";
const page2 = () => {
  const flights = [
    { name: "R McIlroy", flight: "1234", status: "Cancelled" },
    { name: "J Allen", flight: "1010", status: "On Time" },
    { name: "I Poulter", flight: "2", status: "Unknown" },
  ];
  return (
    <Layout>
      <h3 className="mx-4 my-4">
        With Captain Jack in control, some of our flights arive on time!
      </h3>
      <img src={JackPilot} />
      <h4 className="mx-4 py-4">Allen Airlines Departures</h4>
      <p className="mx-4">Select your flight for more information</p>

      <div className=" mx-4  flex flex-col border border-3 rounded-xl ">
        <div className="w-full flex-1 flex flex-row p-4 bg-gray-200 rounded-t-xl">
          <h5 className="w-full flex-1">Name</h5>
          <h5 className="w-full flex-1">Flight No</h5>
          <h5 className="w-full flex-1">Status</h5>
        </div>
        {flights.map((flight, i) => {
          return (
            <Link to="/page3">
              <div className="w-full flex-1 flex flex-row p-4">
                <p className="w-full flex-1">{flight.name}</p>
                <p className="w-full flex-1">{flight.flight}</p>
                <p className="w-full flex-1">{flight.status}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default page2;
