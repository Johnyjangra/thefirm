import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import couple from "../assets/images/png/couplepic.png"
import circlecouple from "../assets/images/png/circlecouple.svg";
import prevarrow from "../assets/images/svg/prevarrow.svg";
import nextarrow from "../assets/images/svg/nextarrow.svg";
import Slider from 'react-slick';

const Research = () => {
   var settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows:false,
   };
  return (
    <section className="py-5 my-5 overflow-hidden">
      <Container>
        <h1 className="ff_nunito fw_900 fs_4xxl clr_light_black mb-0  text-center">
          Our Research & Case <span className="yllow_bg_line">Studies</span>
        </h1>
        <p className="ff_lora fw_400 fs_xl clr_light_black pt-4  text-center mx_868 mx-auto pt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <Row className="pt-5 align-items-center flex-lg-row flex-column-reverse">
          <Col lg={6}>
            <div className="pe-lg-5 text-lg-start text-center pt-lg-0 pt-4">
              <h1 className="ff_nunito fw_700 fs_3xl clr_light_black mb-0">
                Lorem Ipsum is simply
              </h1>
              <p className="ff_lora fw_400 fs_xl clr_light_black pt-3 mb-0 pe-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took.
              </p>
              <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_yellow yellow_border p_9_21_10_22  hover_bg_white mt_32">
                Get in Touch
              </button>
            </div>
          </Col>
          <Col lg={5} sm={10} className="mx-lg-0 mx-auto pt-sm-0 pt-5 ">
            <div className="position-relative ps-xl-5">
              <div className="position-absolute btm_0 l_0 z_m1">
                <img src={circlecouple} alt="circlecouple" />
              </div>
              <div className="d-flex align-items-center position-absolute ylow_btn_set">
                <div className="prev_btn d-flex flex-column align-items-center justify-content-center cursr_pointr">
                  <img src={prevarrow} alt="prevarrow" />
                </div>
                <div className="  whit_bordr cursr_pointr">
                  <div className=" next_btn d-flex flex-column align-items-center justify-content-center ">
                    <img src={nextarrow} alt="prevarrow" />
                  </div>
                </div>
              </div>
              <Slider {...settings} className="z_m1">
                <div className="rdc_24">
                  <img
                    className="w-100 white_shadow p_12"
                    src={couple}
                    alt="couple"
                  />
                </div>
                <div>
                  <img
                    className="w-100 white_shadow p_12"
                    src={couple}
                    alt="couple"
                  />
                </div>
                <div>
                  <img
                    className="w-100 white_shadow p_12"
                    src={couple}
                    alt="couple"
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Research