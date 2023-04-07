import React from "react";
import Broke from "./broke/Broke";
import Hero from "./hero/Hero";
import History from "./history/History";
import NewMenu from "./newMenu/NewMenu";
const Home = () => {
  return (
    <>
      <Hero />
      <History />
      <Broke />
      <NewMenu />
    </>
  );
};

export default Home;
