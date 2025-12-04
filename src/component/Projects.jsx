import React, { useEffect, useRef, useState } from "react";
import aiauction from "../assets/projects/aiauction.png";
import hb_sure from "../assets/projects/hb-sure.png";
import hospital_dashboard from "../assets/projects/hospital_dashboard.png";
import movies_recommender from "../assets/projects/movies-recommender.png";
import iptracker from "../assets/projects/iptracker.png";
import coding_conf from "../assets/projects/coding_conf.png";
import { Link } from "lucide-react";
import { gsap } from "gsap";
import { LucideArrowRightCircle } from "lucide-react";

const Projects = () => {
  const ref = useRef();

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to("._project_", { y: 0, duration: 3, opacity: 1, stagger: 0.1 });
      }
    });
  };

  const options = { threshold: 0.1 };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI Auction Platform",
      image: aiauction,
      function: "AI-powered real estate auction analysis",
      description: "A Korean legal-tech platform that collects and analyzes court auction data using AI. It provides accurate property auction listings, automated risk detection, and a zero-error data review system built around updates from the Supreme Court auction site.",
      link: "https://aiauction.co.kr/default_desktop0.html",
    },
    {
      title: "HB Sure Premium Natural Products",
      image: hb_sure,
      function: "E-commerce platform for natural health and beauty products",
      description: "A clean and user-friendly online store offering 100% natural, chemical-free health and skincare products. The website showcases a full product range including oils, soaps, lotions, deodorants, and hair care solutions, with features like online ordering, discounts, seasonal promotions, and customer support.",
      link: "https://abdulquddusmuhammad.github.io/HB-Sure-Premium/E-Commerce/",
    },
    {
      title: "Hospital Dashboard",
      image: hospital_dashboard,
      function: "Dashboard for managing hospital resources",
      description: "A comprehensive dashboard designed to manage hospital resources efficiently, including patient information, staff schedules, and inventory management.",
      link: "https://abdulquddusmuhammad.github.io/health-hospital-dr-dashboard/",
    },
    {
      title: "Movie Recommender App",
      image: movies_recommender,
      function: "Movie discovery and recommendation platform",
      description: "A user-friendly movie discovery interface that allows users to search through thousands of films, view ratings, languages, and release years instantly. Features include a clean hero banner, real-time movie listings, and easy browsing of upcoming and popular titles.",
      link: "https://abdulquddusmuhammad.github.io/movies_recommender/",
    },
    {
      title: "IP Address Tracker",
      image: iptracker,
      function: "Real-time IP geolocation and network lookup",
      description: "A utility app that instantly identifies an IP address and displays detailed information including location, timezone, ISP data, and an interactive map powered by OpenStreetMap. Designed for quick and accurate geolocation checks with a clean, responsive interface.",
      link: "https://abdulquddusmuhammad.github.io/ip-address-tracker-master/",
    },
    {
      title: "Coding Conference Ticket Generator",
      image: coding_conf,
      function: "Interactive ticket creation for a developer conference",
      description: "A sleek web app that allows users to upload an avatar, enter personal details, and automatically generate a personalized digital ticket for the 2025 Coding Conference. Features include image upload with preview, form validation, and a clean, modern UI designed for a smooth registration experience.",
      link: "https://abdulquddusmuhammad.github.io/ticket-app/",
    },
  ];

  const [seeMore, setSeeMore] = useState(2);

  useEffect(() => {
    gsap.to("._project_", { y: 0, duration: 3, opacity: 1, stagger: 0.1 });
  }, [seeMore]);

  return (
    <div ref={ref} id="Projects" className="_projects_ px-[10vw] mt-[10vw] my-[10vh]">
      <h1 className="text-[5vw] font-semibold mb-3.5">My Projects</h1>
      <div className="projects grid lg:grid-cols-3 grid-cols-1 gap-12">
        {projects
          .filter((_, index) => (window.innerWidth < 1024 ? index < seeMore : true))
          .map((project, index) => (
            <div className={`_project_ opacity-0 translate-y-[200px] lg:h-[70vh] h-[40vh] mt-8 overflow-hidden group rounded-2xl outline-1 outline-[#ff004f] `} key={index}>
              <div className="relative h-1/2">
                <img src={project.image} className="h-full object-cover" alt={project.title} />
                <div className="duration-500 absolute bottom-2 right-2 rounded-full lg:bg-transparent bg-[#ff004f] group-hover:bg-[#ff004f] w-fit h-fit p-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Link className="lg:text-[#ff004f] text-white font-extrabold group-hover:text-white" href={project.link} target="_blank" rel="noopener noreferrer"></Link>
                  </a>
                </div>
              </div>
              <div className="text-description px-4 h-1/2 flex flex-col mt-4">
                <h2 className="text-[#ff004f] lg:text-[1vw] text-[4.5vw]">{project.title}</h2>
                {/* <p>{project.function}</p> */}
                <p className="lg:text-[1.1vw] text-[3.5vw]">{project.description}</p>
              </div>
            </div>
          ))}
      </div>
      <div
        className="flex lg:hidden items-center justify-center mt-8"
        onClick={() => {
          if (seeMore === 2) {
            setSeeMore(projects.length);
          } else {
            setSeeMore(2);
          }
        }}>
        <LucideArrowRightCircle size={35} className="text-red-600 " />
        <span className="mx-8">See {seeMore !== 2 ? "Less" : "More"}</span>
      </div>
    </div>
  );
};

export default Projects;
