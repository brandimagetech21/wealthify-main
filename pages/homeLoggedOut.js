import React from "react";
import Blog from "../components/Blog";
import Faqs from "../components/Faqs";
import Home from "../components/Home";
import Reversal from "../components/Reversal";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Plans from "../components/Plans.js";
import Videos from "../components/Videos";

const HomeLoggedOut = () => {
  return (
    <div>
      <Home />
      <Section2 />
      <Section3 />
      <Plans />
      <Reversal />
      <Videos />
      <Blog />
      <Faqs />
    </div>
  );
};

export default HomeLoggedOut;
