import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import frontEndCet from "../assets/certificates/front end.jpg";
import htmlCert from "../assets/certificates/html.jpg";
import cssCert from "../assets/certificates/css.jpg";
import jsCert from "../assets/certificates/javascript.jpg";
import genAICert from "../assets/AI Certificates/Generative AI Cert.jpg";
import machineLearning from "../assets/AI Certificates/Machine Learning Cert.jpg";
import pythonCert from "../assets/AI Certificates/python.jpg";

const Certificates = () => {
  const ref = useRef();
  const ref2 = useRef();

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(".web-cert-box", { x: 0, opacity: 1, duration: 2, stagger: 0.1 });
      }
    });
  };
  const intersectionCallback2 = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(".ai-cert-box", { x: 0, opacity: 1, duration: 2, stagger: 0.1 });
      }
    });
  };

  const options = { threshold: 0.1 };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver(intersectionCallback2, options);
    if (ref2.current) observer2.observe(ref2.current);
    return () => observer2.disconnect();
  }, []);

  const certificateInWebDevelopment = [
    { image: frontEndCet, title: "Front-End Development Certificate", description: "Completed a comprehensive front-end development course covering HTML, CSS, JavaScript, and modern frameworks to build responsive and interactive web applications." },
    { image: htmlCert, title: "HTML Certificate", description: "Demonstrated proficiency in HTML by completing a course focused on semantic markup, accessibility, and best practices for structuring web content." },
    { image: cssCert, title: "CSS Certificate", description: "Showcased expertise in CSS through a course that emphasized layout techniques, responsive design, and cross-browser compatibility." },
    { image: jsCert, title: "JavaScript Certificate", description: "Achieved a solid understanding of JavaScript by completing a course that covered core concepts, DOM manipulation, and event handling." },
  ];

  const certificateInAI = [
    { image: genAICert, title: "Generative AI Certificate", description: "Completed a course on generative AI techniques, including GANs and VAEs, to create innovative AI-driven applications." },
    { image: machineLearning, title: "AI for Everyone Certificate", description: "Gained foundational knowledge of AI concepts and applications through a course designed for non-technical audiences." },
    { image: pythonCert, title: "Python for AI Certificate", description: "Demonstrated proficiency in Python programming with a focus on AI and machine learning libraries such as TensorFlow and PyTorch." },
  ];

  return (
    <div className="Certificates my-[10vh] px-[10vw]">
      <h1 className="text-[4vw] font-bold mb-8">My Certificates</h1>
      <div className="lg:text-[2vw] text-[3.5vw] text-[#ff004f] mb-4">In Web Development</div>
      <div ref={ref} className="certificate-in-webdevelopment gap-12 grid lg:grid-cols-4 grid-cols-2">
        {certificateInWebDevelopment.map((cert, index) => (
          <a href={cert.image} target="_blank" key={index} className="web-cert-box relative w-auto group overflow-hidden opacity-0 translate-x-[100px]">
            <img src={cert.image} alt={cert.title} className="cert-image lg:h-fit h-[20vh]" />
            <div className="text absolute -bottom-full hidden group-hover:bottom-0 transition-all duration-700 z-10 bg-linear-to-t from-[#ff004f] via-[#ff004f] to-transparent p-2 w-full h-[90%] lg:flex flex-col justify-end">
              {/* <h3>{cert.title}</h3> */}
              <p>{cert.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="lg:text-[2vw] text-[3.5vw] mb-4 text-[#ff004f] mt-[5vh]">In Artificial Intelligence</div>
      <div ref={ref2} className="ai-certificates grid lg:grid-cols-3 grid-cols-2 gap-12 mb-12">
        {certificateInAI.map((cert, index) => (
          <a href={cert.image} target="_blank" key={index} className="ai-cert-box relative w-auto group overflow-hidden opacity-0 translate-x-[-100px]">
            <img src={cert.image} alt={cert.title} className="cert-image lg:w-[30vw] w-full lg:h-[50vh] h-[20vh]" />
            <div className="text absolute -bottom-full hidden group-hover:bottom-0 transition-all duration-700 z-10 bg-linear-to-t from-[#ff004f] via-[#ff004f] to-transparent p-2 w-full h-[90%] lg:flex flex-col justify-end">
              {/* <h3>{cert.title}</h3> */}
              <p>{cert.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
