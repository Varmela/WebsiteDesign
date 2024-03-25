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
      <Header></Header>
      <HeroSection />
     
      <Clients></Clients>
      
      <Community></Community>
     
      <Unlock image={ImageA}></Unlock>
    
      <Achievement></Achievement>
    
      <Unlock image={Phone}></Unlock>
      
      <CommunityUpdate></CommunityUpdate>
      <br/> <br/><br/>
      <GetDemo></GetDemo>
    
      <Footer></Footer>
    </div>
  );
}

export default App;
