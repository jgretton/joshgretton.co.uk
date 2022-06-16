import React from "react";

const Hero = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? " opacity-0 duration-300" : " opacity-100 duration-300"
      } xl:container fixed mx-auto px-4 sm:px-16 inset-x-0 top-0 pt-12 h-v60 flex items-center -z-10 bg-white transition-all transform`}
    >
      <h2 className="tracking-widest md:text-5xl font-light text-2xl sm:text-4xl">
        Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
        I'm a <span className="text-blue-300">Developer </span> based <br />
        in the UK.
      </h2>
    </div>
  );
};

export default Hero;
