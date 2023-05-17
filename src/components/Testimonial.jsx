import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import cutegirl from "../assets/images/svg/cutegirl.svg";
import ganjigirl from "../assets/images/svg/ganjigirl.svg";
import goggles from "../assets/images/svg/goggles.svg";
import longhair from "../assets/images/svg/longhair.svg";
import normalperson from "../assets/images/svg/normalperson.svg";

const Testimonial = () => {
    var settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true,
    //       },
    //     },
    //     {
    //       breakpoint: 866,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 698,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         arrows: false,
    //         autoplaySpeed: 2000,
            
    //       },
    //     },
    //   ],
    };
  return (
    <section className="">
      <Container className=" ">
        <Slider
          {...settings}
          className="picslider partn ersec justify-co ntent-evenly gap-3 pt-5 mx_938 mx-auto"
        >
          <div className="text-center">
            <img src={cutegirl} alt="cutegirl" />
          </div>
          <div>
            <img src={ganjigirl} alt="ganjigirl" />
          </div>
          <div>
            <img src={goggles} alt="goggles" />
          </div>
          <div>
            <img src={longhair} alt="longhair" />
          </div>
          <div>
            <img src={normalperson} alt="normalperson" />
          </div>
          <div>
            <img src={cutegirl} alt="cutegirl" />
          </div>
          <div>
            <img src={goggles} alt="goggles" />
          </div>
          <div>
            <img src={normalperson} alt="normalperson" />
          </div>
          <div>
            <img src={goggles} alt="goggles" />
          </div>
          <div>
            <img src={normalperson} alt="normalperson" />
          </div>
        </Slider>
      
      </Container>
    </section>
  );
}

export default Testimonial