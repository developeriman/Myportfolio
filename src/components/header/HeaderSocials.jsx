import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com" target="_blank"> <FaLinkedin/></a>
        <a href="https://www.linkedin.com" target="_blank"><GoMarkGithub/></a>
        <a href="https://www.linkedin.com" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
