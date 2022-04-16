import React from "react";
import HomeImg from "../../assets/img/home.jpg";

const Home = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url('" + HomeImg + "')",
        width: "100%",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Home;
