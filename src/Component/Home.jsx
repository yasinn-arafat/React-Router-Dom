import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div
      style={{
        background: "DarkSlateGray",
        color: "white",
        padding: "15px 0px",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <h1>Home</h1>
      <Banner />
    </div>
  );
};

export default Home;
