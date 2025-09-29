import React, { useState } from "react";
import {
  Category,
  ChatBot,
  Featured,
  Footer,
  Hero,
  Navbar,
} from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <Featured />
      <Category />
      <ChatBot />
      <Footer />
    </>
  );
};

export default Home;
