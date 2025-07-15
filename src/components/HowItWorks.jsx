import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { chipImg, frameImg, frameVideo } from "../assets";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="React + Next.js" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Built with modern tech.
            <br />
            Crafted for real-world impact.
          </h2>

          <p className="hiw-subtitle">
            Every pixel, animation, and API is optimized for performance and precision.
          </p>
        </div>

        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Project Showcase Frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray mt-3 text-center font-semibold">
            VisionTech LMS Platform Preview
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              I engineer apps with{" "}
              <span className="text-white">Next.js, React, and TypeScript</span>{" "}
              to ensure lightning-fast loads and stunning visuals.
            </p>

            <br />
            <p className="hiw-text g_fadeIn">
              With a passion for animation,{" "}
              <span className="text-white">
                I blend GSAP and Three.js to elevate user interaction
              </span>{" "}
              beyond ordinary.
            </p>
          </div>

          <div className="g_fadeIn flex flex-1 flex-col justify-center">
            <p className="hiw-text">Custom</p>
            <p className="hiw-bigtext">GSAP Engine</p>
            <p className="hiw-text">for buttery-smooth UX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
