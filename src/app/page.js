import React from "react";

import Hero from "../components/home/hero";
import InsideBook from "../components/home/insidebook";
import InsideBookPoints from "../components/home/insidebookpoints";
import Checkpoints from "../components/home/checkpoints";
import Vision from "../components/home/vision";

const Home = () => {
  return (
    <div>
      <Hero />
      <InsideBook />
      <InsideBookPoints />
      <Checkpoints />
      <Vision />
    </div>
  );
};

export default Home;
