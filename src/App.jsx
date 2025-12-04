import React, { useEffect, useRef, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./component/Hero";
import heroImg from "./assets/images/testing2.png";
import About from "./component/About";
import Skills from "./component/Skills";
import Services from "./component/Services";
import Certificates from "./component/Certificates";
import { gsap } from "gsap";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

const App = () => {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.fromTo("._backgroundImageContainer_", { opacity: 1, backgroundPosition: "90vw 5vw" }, { opacity: 1, duration: 2, backgroundPosition: "60vw 5vw" });
      return;
    } else {
      gsap.fromTo("._backgroundImageContainer_", { opacity: 1, backgroundPosition: "30vw 24vh" }, { opacity: 1, duration: 2, backgroundPosition: "13vw 24vh" });
    }
    // gsap.fromTo("._backgroundImageContainer_", { opacity: 1, backgroundPosition: "90vw 5vw" }, { opacity: 1, duration: 2, backgroundPosition: "60vw 5vw" });
  }, []);

  return (
    <div id="Home" className="_container_ bg-[#080808] w-screen min-h-screen h-auto text-white relative overflow-x-hidden font-[Inter]">
      <div style={{ backgroundImage: `url('${heroImg}')` }} className="_backgroundImageContainer_ bg-no-repeat h-screen bg-position-[13vw_24vh] lg:bg-position-[60vw_5vw] bg-size-[114vw] lg:bg-size-[33vw] ">
        <div className="px-[10vw] h-full flex">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Skills />
      <Services />
      <Certificates />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
