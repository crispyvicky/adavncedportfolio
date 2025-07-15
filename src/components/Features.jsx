import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { explore1Img, explore2Img, exploreVideo } from "../assets";
import { animateWithGsap } from "../utils/animations";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#explore-video", {
      scrollTrigger: {
        trigger: "#explore-video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features-title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding bg-zinc relative h-full overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features-title" className="section-heading">
            Discover My Journey
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">VIGNESH YADAV</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              BUILT TO CREATE
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                playsInline
                id="explore-video"
                className="size-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore1Img}
                    alt="Building UI"
                    className="feature-video g_grow"
                  />
                </div>

                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore2Img}
                    alt="React Projects"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    I'm a <span className="text-white">full-stack developer</span> who
                    blends design and technology to build experiences that are fast,
                    fluid, and unforgettable.
                  </p>
                </div>

                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    From building elegant UIs to integrating powerful AI features,
                    I create websites that are{" "}
                    <span className="text-white">interactive, expressive, and deeply human.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
