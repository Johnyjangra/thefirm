import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import window from "../assets/images/svg/window.svg"
import google from "../assets/images/svg/google.svg";
import firebox from "../assets/images/svg/firebox.svg";
import safari from "../assets/images/svg/safari.svg";
import Slider from "react-slick";

const Partner = () => {
     var settings = {
       dots: false,
       infinite: true,
       speed: 500,
       slidesToShow: 4,
       slidesToScroll: 1,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 866,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
           },
         },
         {
           breakpoint: 698,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             autoplay: true,
             arrows: false,
             autoplaySpeed:2000,
           },
         },
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ],
     };
  return (
    <section className="py-5 ">
      <Container className="">
        <h1 className="ff_nunito fw_900 fs_4xxl clr_light_black mb-0  text-center">
          Our <span className='yllow_bg_line'>Partner</span>
        </h1>
        <Col lg={11} className="mx-auto py-4">
          <Slider {...settings} className="partn ersec justify-co ntent-evenly gap-3">
            <div className="px-3">
              <div className="gray_bg text- center py_28 h- 100">
                <img className="mx-auto" src={window} alt="window" />
              </div>
            </div>
            <div className="px-3">
              <div className="gray_bg text -center py_22 h-100">
                <img className="mx-auto" src={google} alt="google" />
              </div>
            </div>
            <div lg={3} className="px-3">
              <div className="gray_bg text- center py_28 h-100 ms -5">
                <img className="mx-auto" src={firebox} alt="firebox" />
              </div>
            </div>
            <div lg={3} className="px-3">
              <div className="gray_bg text -center py_20 h-100">
                <img className="mx-auto" src={safari} alt="safari" />
              </div>
            </div>
            <div lg={3} className="px-3">
              <div className="gray_bg text -center py_28 h- 100">
                <img className="mx-auto" src={window} alt="window" />
              </div>
            </div>
            <div lg={3} className="px-3">
              <div className="gray_bg text-center py_22 h-100">
                <img className="mx-auto" src={google} alt="google" />
              </div>
            </div>
            <div lg={3} className="px-3">
              <div className="gray_bg text-center py_28 h-100 ms -5">
                <img className="mx-auto" src={firebox} alt="firebox" />
              </div>
            </div>
            <div lg={3} className="px-3">
              <div className="gray_bg text-center py_20 h-100">
                <img className="mx-auto" src={safari} alt="safari" />
              </div>
            </div>
          </Slider>
        </Col>
      </Container>
    </section>
  );
}

export default Partner