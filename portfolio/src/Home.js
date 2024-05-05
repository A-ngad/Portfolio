import React from "react";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Technologies from "./components/Technologies";
import Experience from "./components/Work";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar/>
      <Introduction />
      <Technologies />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
