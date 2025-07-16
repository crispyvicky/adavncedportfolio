import React from "react";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        {/* You can replace this with your logo or initials */}
        <a href="#" className=" text-lg font-bold  text-gray hover:text-white transition">
          VIGNESH
        </a>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-gray cursor-pointer px-5 text-sm transition-all hover:text-white"
            >
              {}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-5 max-sm:flex-1 max-sm:justify-end">
          <a
            href="https://github.com/crispyvicky"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vignesh-yadav-3691b7302/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/viickkyy______?igsh=amswejY3bnlrcWlx"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray hover:text-white transition"
          >
            Instagram
          </a>
          {/* <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray hover:text-white transition"
          >
            Twitter
          </a> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
