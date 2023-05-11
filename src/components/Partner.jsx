import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import window from "../assets/images/svg/window.svg"
import google from "../assets/images/svg/google.svg";
import firebox from "../assets/images/svg/firebox.svg";
import safari from "../assets/images/svg/safari.svg";
import Slider from "react-slick";

const Partner = () => {
     var settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 4,
       slidesToScroll: 1,
     };
  return (
    <section className="bg-black">
      <Container>
        <Col lg={11} className='mx-auto'>
          <Slider {...settings} className="justify-co ntent-evenly gap-3">
            <div lg={3} className="ms-3">
              <div className="gray_bg text-center py_28 h- 100">
                <img className="mx- auto" src={window} alt="window" />
              </div>
            </div>
            <div lg={3} className="ms-3">
              <div className="gray_bg text-center py_22 h-100">
                <img className="mx- auto" src={google} alt="google" />
              </div>
            </div>
            <div lg={3} className="">
              <div className="gray_bg text-center py_28 h-100 ms -5">
                <img className="mx- auto" src={firebox} alt="firebox" />
              </div>
            </div>
            <div lg={3} className="">
              <div className="gray_bg text-center py_20 h-100">
                <img className="mx- auto" src={safari} alt="safari" />
              </div>
            </div>
            <div lg={3} className="">
              <div className="gray_bg text-center py_28 h- 100">
                <img className="mx- auto" src={window} alt="window" />
              </div>
            </div>
            <div lg={3} className="">
              <div className="gray_bg text-center py_22 h-100">
                <img className="mx- auto" src={google} alt="google" />
              </div>
            </div>
            <div lg={3} className="ms-5">
              <div className="gray_bg text-center py_28 h-100 ms-5">
                <img className="mx-a uto" src={firebox} alt="firebox" />
              </div>
            </div>
            <div lg={3} className="">
              <div className="gray_bg text-center py_20 h-100">
                <img className="mx- auto" src={safari} alt="safari" />
              </div>
            </div>
          </Slider>
        </Col>
      </Container>
    </section>
  );
}

export default Partner