import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
        <div className="">
          <p className="text-gray text-xs font-semibold">
            Want to collaborate on a project?{" "}
            <span className="text-blue cursor-pointer hover:underline">
              Let’s connect
            </span>{" "}
            and build something meaningful together.
          </p>
          <p className="text-gray text-xs font-semibold">
            Or email me at{" "}
            <span className="text-blue cursor-pointer hover:underline">
              vigneshyadav@visiontech.world
            </span>
            .
          </p>
        </div>

        <div className="my-5 h-px w-full bg-neutral-700" aria-hidden />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-gray text-xs font-semibold">
            &copy; {new Date().getFullYear()} Vignesh Yadav. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-2 text-xs font-semibold text-gray">
            {footerLinks.map((link, i) => (
              <p key={link}>
                <span className="mx-2 cursor-pointer hover:underline">{link}</span>
                {i !== footerLinks.length - 1 && "|"}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
