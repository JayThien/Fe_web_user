import React from "react";
import HomeImg from "../../assets/img/home.jpg";

const Contact = () => {
  return <div className="flex w-full h-screen">
     <div
      className="h-screen"
      style={{
        backgroundImage: "url('" + HomeImg + "')",
        width: "100%",
        backgroundSize: "cover",
      }}
    ></div>
  </div>;
};

export default Contact;
