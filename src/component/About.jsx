import React, { useEffect, useRef } from "react";
import userImage from "../assets//images/secondTest.jpg";
import { gsap } from "gsap";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const About = () => {
  const ref = useRef();

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // alert("Visible");
        gsap.to(".leftside", { opacity: 1, x: 0, duration: 1 });
        gsap.to(".rightside", { opacity: 1, x: 0, duration: 1, delay: 0.5 });
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.3,
  };

  const socialLinks = [
    { name: "Twitter", icon: <Twitter size={32} />, url: "https://twitter.com/abdulquddus_dev" },
    { name: "LinkedIn", icon: <Linkedin size={32} />, url: "https://www.linkedin.com/in/abdulquddus-dev/" },
    { name: "GitHub", icon: <Github size={32} />, url: "https://github.com/abdulquddusmuhammad" },
    { name: "Facebook", icon: <Facebook size={32} />, url: "https://www.facebook.com/abdulquddus.muhammad.7" },
    { name: "Instagram", icon: <Instagram size={32} />, url: "https://www.instagram.com/abdulquddus_dev/" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id="About" className="observee _about_ grid lg:grid-cols-[35fr_65fr] lg:grid-cols-1 px-[10vw] gap-12 mt-[10vw]">
      <div className="leftsideCont lg:block hidden">
        <img src={userImage} className="leftside rounded-[1rem] translate-x-[-400px] opacity-0" alt="" />
      </div>
      <div className="rightside flex flex-col justify-center translate-x-[400px] opacity-0">
        <h1 className="lg:text-6xl text-[8vw] font-semibold mb-3.5">About Abdulquddus</h1>
        <p className="lg:text-[1.3vw] text-[3vw]">Abdulquddus is a multi-talented professional in the field of web development and emerging AI technologies. With a strong foundation in building modern digital experiences, he combines his expertise in HTML, CSS, JavaScript, React, TailwindCSS, and API integration with a growing skill set in artificial intelligence. His work reflects a blend of front-end engineering and practical AI exploration, including understanding how AI models generate content, integrating intelligent features into applications, and developing tools that bridge traditional web development with AI-driven functionality.</p>
        <div className="icons flex mt-9">
          {socialLinks.map((link, index) => (
            <a href={link.url} title={link.name} key={index} className="text-4xl mr-4 hover:scale-110 transition-transform bg-[#ff004f] p-2.5 rounded-full text-white flex items-center justify-center">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
