import React from 'react'
import './services.css';
import { BiCheck}  from 'react-icons/bi'; 

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3 style={{ color: "white" }}>
              {" "}
              Professional website from scratch using Laravel.
            </h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Create a website from scratch.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Fix all kinds of bugs or customization in the existing
                application.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Create single-page applications using React and Vue.js.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>RESTful API development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>E-Commerce websites from scratch.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>PHP scripts.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>PHP Laravel bug fixing.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Add new features to your existing php laravel web application
              </p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Professional laravel website development</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Paypal / Stripe / Braintree integration in laravel</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Delivery on time</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>100% client satisfaction</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Well Structured and clean code</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Professional, Responsive and captivating design</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>SEO optimization of the page</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Complete setup on your hosting and domain</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>SEO optimization of the page</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Money-back guarantee.</p>
            </li>
          </ul>
        </article>

        {/*UI/UX Design */}
        <article className="service">
          <div className="service_head">
            <h3> WEB DEVELOPMENT</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF  WEB DEVELOPMEN */}
        <article className="service">
          <div className="service_head">
            <h3> CONTENT CREATION</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Services
