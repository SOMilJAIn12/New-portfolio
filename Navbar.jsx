import React from "react";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <nav className="sticky top-0 w-[100vw] px-16 py-3 flex items-center justify-between bg-blue-200 text-black font-bold">
      <h1>Name</h1>
      <Link
        className="cursor-pointer"
        to="about"
        smooth={true}
        offset={-50}
        duration={500}
      >
        <h1>About</h1>
      </Link>
    </nav>
  );
};

export default navbar;
