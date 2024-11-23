import React from "react";
import linkedinIcon from "../../assets/Linkedin.png";
import githubIcon from "../../assets/Github.png";

const Footer = () => {
  return (
    <footer className="w-[100vw] px-4 py-3 flex items-center justify-evenly bg-[#605EA1] text-white font-bold">
      <a
        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG7eE8PZWa_qwAAAZNZl6Y4Eo-XPy3pZWXelxWv_OLVddoEfPSL3Tkxiz_8YhLmOcb26xAwxEURw2gFKFFcQvCueUvlBB559p-qGdY-7qIWNnKwI8cW1Pt8KjnJ8rpYB_inyLM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsomil-jain-b28aa8315%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} className="w-[50px]" alt="linkedin-icon" />
      </a>
      <a href="https://github.com/SOMilJAIn12" target="_blank" rel="noreferrer">
        <img src={githubIcon} className="w-[50px]" alt="github-icon" />
      </a>
    </footer>
  );
};

export default Footer;
