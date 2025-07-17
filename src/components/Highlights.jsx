import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import VideoCarousel from "./VideoCarousel";
import { rightImg, watchImg } from "../assets";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        {/* Heading and Links */}
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1
            id="title"
            className="section-heading translate-y-6 opacity-0 transition-all"
          >
            Highlights
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            {/* Watch Work - YouTube or Demo */}
            <a
              href="https://github.com/crispyvicky" // your real link
              target="_blank"
              rel="noopener noreferrer"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="link text-blue-500 flex translate-y-4 items-center text-sm underline opacity-0 transition-all"
            >
              Watch My Work
              <img src={watchImg} alt="Play Icon" className="ml-2 size-4" />
            </a>

            {/* Behind the Scenes - GitHub or Blog */}
            {/* <a
              href="https://github.com/vigneshyadav-tech/visiontech-lms"
              target="_blank"
              rel="noopener noreferrer"
              className="link flex items-center text-sm text-blue-500 underline opacity-0 translate-y-4 transition-all"
            >
              Behind the Scenes
              <img src={rightImg} alt="Arrow Icon" className="ml-2 w-4 h-4" />
            </a> */}
          </div>
        </div>

        {/* Carousel of Project Videos or Images */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
