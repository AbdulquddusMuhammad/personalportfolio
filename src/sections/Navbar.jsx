import React, { useEffect, useState } from "react";
import logo from "../assets/images/logoReal.png";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.fromTo(".logo", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 2 });
      gsap.fromTo("._nav-section_ li", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 2, stagger: 0.2 });
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const animateMenu = () => {
    if (isMenuOpen) {
      // gsap.fromTo(".logo", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 2 });
      alert("opened");
    }
  };

  const navSections = ["Home", "About", "Service", "Projects", "Contact"];
  return (
    <div className="_navbar_ h-[15vh] flex justify-between lg:bg-[#00000091] bg-transparent fixed lg:w-[80vw] w-screen z-10 ">
      <div>
        <img src={logo} className="lg:scale-100 lg:mt-0 mt-8 scale-[150%] logo w-[30vw] h-auto relative top-[-11vw]" alt="" />
      </div>
      <Menu
        onClick={() => {
          setIsMenuOpen(true);
          gsap.fromTo("._nav-section_ li", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.2 });
          animateMenu();
        }}
        className="fixed top-4 right-4 lg:hidden block"
        size={46}
      />
      <ul className={`_nav-section_ duration-500 flex lg:flex-row flex-col gap-8 lg:bg-transparent bg-[red] h-full lg:static fixed ${isMenuOpen ? "right-0" : "right-[-35vw]"}  pt-8 p-4 w-[35vw]`}>
        <X
          size={40}
          className="absolute top-4 right-4 lg:hidden z-20"
          onClick={() => {
            setIsMenuOpen(false);
            // alert("closed");
          }}
        />
        {navSections.map((item, index) => (
          <li key={index} className="text-white lg:text-[1.1vw] text-[4vw] flex items-center pr-3">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
    // <div className="w-full "></div>
  );
};

export default Navbar;
