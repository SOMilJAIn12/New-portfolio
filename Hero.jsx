import React from "react";
import profileIcon from "../../assets/me.jpeg";
import USARImg from "../../assets/USAR.jpg";
import AWSCC_Logo from "../../assets/AWSCC_USAR.jpg";

const Hero = () => {
  return (
    <>
      {/* Profile Section */}
      <div className=" flex flex-col items-center justify-center">
        <div className="my-10 w-[300px]">
          <img className="w-full" src={profileIcon} alt="profile icon" />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
          Somil Jain
        </h1>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="bg-blue-200 mt-10 p-20 flex flex-col gap-10 md:flex-row items-center md:justify-evenly"
      >
        <div className="flex flex-col items-center text-black gap-10">
          <h1 className="text-2xl font-bold">About</h1>{" "}
          {/* Fixed the bg-black issue */}
          <p className="text-justify">
            I am Somil Jain, a BTech IIoT student at USAR (2024-2028) who
            completed a software development mentorship at AWSCC USAR under the
            guidance of mentorship lead Amaan Naseh.
          </p>
          {/* AWSCC Logo */}
          <div className="w-[200px]">
            <img src={AWSCC_Logo} alt="AWS Logo" />
          </div>
          {/* LinkedIn Links */}
          <div className="flex items-center justify-evenly gap-12">
            <a
              href="https://www.linkedin.com/company/aws-cloud-clubs-at-ggsipu"
              target="_blank"
              rel="noreferrer"
              className="decoration-none bg-white text-blue-500 px-2 py-1 font-bold rounded-lg m-2"
            >
              AWSCC USAR
            </a>
            <a
              href="https://www.linkedin.com/in/amaan-naseh/"
              target="_blank"
              rel="noreferrer"
              className="decoration-none bg-white text-blue-500 px-2 py-1 font-bold rounded-lg m-2"
            >
              Amaan Naseh
            </a>
          </div>
        </div>

        {/* USAR Image Section */}
        <div className="w-[300px] md:w-[480px] lg:w-[520px]">
          <img src={USARImg} alt="USAR Img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
