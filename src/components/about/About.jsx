import React from 'react'
import './about.css'; 
import ME from "../../assets/me-about.jpg"; 
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me</h2>
     <div className="container about_container">
       <div className="about_me">
         <div className="about_me-image">
           <img src={ME} alt="About Image" />
         </div>
       </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5> Experience</h5>
              <small> 3+ years Working </small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5> Clients</h5>
              <small> 100+ WorldWide </small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5> Projects</h5>
              <small> 80+ Completed </small>
            </article>
          </div>
      
        
          <p> Lorem ipsum dolor sitconsectetur adipisicing elit. Tenetur commodi nulla mollitia consequuntur. Eius magni quod nam quasi dolorum, vero voluptate nulla architecto ut maiores voluptas ab, reprehenderit aliquid minima? </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
     </div>

    </section>
  )
}

export default about