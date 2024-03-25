import { useState } from "react";
import Header from "./header/Header";
import HeroSection from "./heroSection/HeroSection";
import Clients from "./clients/Clients";
import Community from "./community/Community";
import Unlock from "./unlock/Unlock";
import Achievement from "./achievements/Achievement";
import "./App.css";
import CommunityUpdate from "./communityUpdate/CommunityUpdate";
import GetDemo from "./getDemo/GetDemo";
import Footer from "./footer/Footer";
import ImageA from "./imageA.png";
import Phone from "./phone.png";

function App() {
  return (
    <div className="container">
      <Header></Header> <br /> <br />
      <HeroSection />
      <br />
      <Clients></Clients>
      <br />
      <Community></Community>
      <br />
      <br />
      <Unlock image={ImageA}></Unlock>
      <br />
      <br />
      <Achievement></Achievement>
      <br />
      <br />
      <Unlock image={Phone}></Unlock>
      <br />
      <CommunityUpdate></CommunityUpdate>
      <br />
      <br />
      <br />
      <GetDemo></GetDemo>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
