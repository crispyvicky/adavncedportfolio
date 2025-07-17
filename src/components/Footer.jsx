import React from "react";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
        <div className="">
          <p className="text-xs font-semibold text-gray">
            Want to collaborate on a project?{" "}
            <a
              href="https://www.instagram.com/viickkyy______?igsh=amswejY3bnlrcWlx" // 🔁 Replace with your Insta handle if different
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue hover:underline"
            >
              Let’s connect
            </a>{" "}
            and build something meaningful together.
          </p>
          <p className="text-xs font-semibold text-gray">
            Or email me at{" "}
            <a
              href="mailto:ankam.vignesh123@gmail.com"
              className="cursor-pointer text-blue hover:underline"
            >
              ankam.vignesh123@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="my-5 h-px w-full bg-neutral-700" aria-hidden />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
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
