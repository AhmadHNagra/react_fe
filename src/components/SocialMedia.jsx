import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaGithubAlt } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <FaGithubAlt />
    </div>
  </div>
);

export default SocialMedia;
