import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(".observee", { opacity: 0, x: -400 }, { opacity: 1, x: 0, duration: 1 });
  }, []);

  return (
    <div className="_hero_observee w-full">
      <div className="flex flex-col lg:justify-center justify-end h-full lg:bottom-0 bottom-24 relative">
        <p className=" font-bold mt-[16vw] lg:text-[4.5vw] text-[8vw]">
          <span className="lg:text-[2.3vw] text-[4.5vw]"> AI Developer | Web Developer</span> <br />
          Hello I am <span className="text-[#ff004f]">Abdulquddus</span> <br /> from Nigeria
        </p>
      </div>
    </div>
  );
};

export default Hero;
