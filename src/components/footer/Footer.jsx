import React from 'react'
import './footer.css'; 
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>IMAN</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">Testimonial</a> </li>
        <li> <a href="#contact"> Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.facebook.com"><FaFacebookF/></a>
        <a href="https://www.facebook.com"><GrInstagram/></a>
        <a href="https://www.facebook.com"><GrTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Imam Hossen Iman. All rights reserved.</small>
      </div>
  </footer>
  )
}

export default Footer