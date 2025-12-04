import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import html from "../assets/images/html (1).png";
import css from "../assets/images/text.png";
import js from "../assets/images/java-script.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import bootstrap from "../assets/images/bootstrap.png";
import sql from "../assets/images/sql-server.png";
import python from "../assets/images/python.png";
import { LucideArrowRightCircle, LucideArrowLeftCircle } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      skillname: "HTML",
      image: html,
      description: "Experienced in writing clean, semantic, and accessible HTML to build strong structural foundations for modern web applications.",
    },
    {
      skillname: "CSS",
      image: css,
      description: "Skilled in advanced CSS techniques, responsive design, and scalable styling methodologies for high-quality user interfaces.",
    },
    {
      skillname: "JavaScript",
      image: js,
      description: "Proficient in JavaScript, including DOM manipulation, ES6+ features, and building interactive, high-performance front-end functionality.",
    },
    {
      skillname: "React",
      image: react,
      description: "Experienced in developing dynamic, component-based user interfaces with React, including hooks, state management, and API integration.",
    },
    {
      skillname: "TailwindCSS",
      image: tailwind,
      description: "Efficient in TailwindCSS for creating fast, responsive, and consistent UI designs with utility-first styling.",
    },
    {
      skillname: "Bootstrap",
      image: bootstrap,
      description: "Knowledgeable in Bootstrap for building responsive layouts and rapid front-end development.",
    },
    {
      skillname: "SQL",
      image: sql,
      description: "Capable of writing optimized SQL queries and managing relational databases for data-driven applications.",
    },
    {
      skillname: "Python",
      image: python,
      description: "Able to develop scripts and backend logic using Python for automation, data processing, and application development.",
    },
  ];

  // alert(skills.length);
  const animate = () => {
    gsap.to(".skillbox", {
      duration: 1,
      opacity: 1,
      x: 0,
      stagger: 0.3,
      ease: "sine.out",
    });
  };

  const ref = useRef();
  const [isBigScreen, setIsBigScreen] = useState(false);
  const [seeMore, setSeeMore] = useState(3);
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsBigScreen(true);
    }
  }, []);

  const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: "0.1",
  };

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate();
      }
    });
  };

  useEffect(() => {
    animate();
  }, [seeMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return (
    <div ref={ref} className="my-[10vh] px-[10vw] observee">
      <h1 className="_skill_ text-6xl font-bold">My Skills</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-2">
        {skills
          .filter((_, index) => {
            if (window.innerWidth < 1024) {
              return index < seeMore;
            }
            return true;
          })
          .map((skill, index) => (
            <div key={index} className="skillbox w-auto flex lg:flex-col flex-row mt-8 rounded-2xl bg-gray-900 overflow-hidden translate-x-[100px] opacity-0 lg:h-[45vh] h-[16vh]">
              <div className="flex lg:justify-center self-center lg:mb-1 mb-0 p-4 lg:h-1/2 lg:w-full w-[40vw]">
                <img src={skill.image} className="lg:w-[8vw] h-full" alt="" />
              </div>
              <div className="bg-gray-800 p-[1vw] lg:h-1/2 h-full lg:text-[1.3vw] lg:block flex flex-col justify-center">
                <p className="font-semibold mt-2.5 lg:mt-0 mb-1">{skill.skillname}</p>
                <p className="lg:text-[0.9vw] text-[3vw]">{skill.description}</p>
              </div>
            </div>
          ))}
      </div>
      <div
        className="flex lg:hidden items-center justify-center mt-8"
        onClick={() => {
          if (seeMore === 3) {
            setSeeMore(skills.length);
          } else {
            setSeeMore(3);
          }
        }}>
        <LucideArrowRightCircle size={35} className="text-red-600 " />
        <span className="mx-8">See {seeMore !== 3 ? "Less" : "More"}</span>
      </div>
    </div>
  );
};

export default Skills;
