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
        {/* Animated Chip */}
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="Tech Chip" width={180} height={180} />
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col items-center text-center">
          <h2 className="hiw-title">
            Powering the Future.<br />Crafted for Impact.
          </h2>
          <p className="hiw-subtitle max-w-2xl">
            I design platforms that combine bleeding-edge tech with user-first experiences. From blazing speed to visual delight — everything just works.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Showcase Frame"
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
            Explore  my work in Action
          </p>
        </div>

        {/* Text Section */}
        <div className="hiw-text-container">
          {/* Left Block */}
          <div className="flex flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              I build applications using{" "}
              <span className="text-white">React, Next.js, and TypeScript</span>{" "}
              that feel futuristic and lightning-fast.
            </p>
            <br />
            <p className="hiw-text g_fadeIn">
              My focus?{" "}
              <span className="text-white">
                Seamless animations with GSAP + immersive 3D using Three.js
              </span>{" "}
              to bring stories to life.
            </p>
          </div>

          {/* Right Block */}
          <div className="g_fadeIn flex flex-1 flex-col justify-center text-center">
            <p className="hiw-text">Next-gen</p>
            <p className="hiw-bigtext">Visual Engine</p>
            <p className="hiw-text">Built for users, powered by GSAP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
