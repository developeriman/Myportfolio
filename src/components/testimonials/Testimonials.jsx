
import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import './testimonials.css'; 
import 'swiper/swiper-bundle.min.css'





import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data =[
  {
    avatar: AVTR1,
    name: 'loream ipsum sit dollar amet',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit ',
  },

  {
    avatar: AVTR2,
    name: 'loream ipsum sit dollar amet',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit ',
  },

  {
    avatar: AVTR3,
    name: 'loream ipsum sit dollar amet',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit ',
  },

  {
    avatar: AVTR4,
    name: 'loream ipsum sit dollar amet',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit ',
  },
];


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container container_testimonials"
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}>
        
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
              <img src={avatar}/>
                </div>
                <h5 className='client_name'>{ name} </h5>
                <small className='client_review'>{ review}
                </small>
            </SwiperSlide>    
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
