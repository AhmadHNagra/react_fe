import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaGithubAlt } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/ahmad-nagra-483852164/"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/ahmad.nagra/"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a target="_blank" rel="noreferrer" href="https://github.com/AhmadHNagra">
        <FaGithubAlt />
      </a>
    </div>
  </div>
);

export default SocialMedia;
