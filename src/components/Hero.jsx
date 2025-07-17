import React, { useEffect, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo, smallHeroVideo } from "../assets";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== "undefined" && window.innerWidth < 760
      ? smallHeroVideo
      : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
    else setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2.5,
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col text-center">
        {/* <p
          id="hero"
          className="hero-title text-white opacity-0 transition-all duration-700"
        >
          Hello, I'm <span className="text-blue-500">Vignesh Yadav</span>
          <br />
          I build futuristic digital experiences.
        </p> */}

        <div className="mt-8 w-10/12 md:w-8/12">
          <video
            autoPlay
            muted
            loop
            playsInline
            key={videoSrc}
            className="pointer-events-none w-full rounded-xl shadow-lg"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0 transition-all duration-700"
      >
        <a
          href="https://vickys-portfolio.vercel.app/project"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="bg-black-800 rounded-md border border-gray-600 px-6 py-2 text-sm font-semibold text-gray-400 transition-colors duration-300 hover:bg-gray-700"
        >
          View Projects
        </a>
        <p className="mt-2 text-xl font-normal text-gray-400">
          Full-stack | React | Next.js | AI | GSAP
        </p>
      </div>
    </section>
  );
};

export default Hero;
