import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cardimg1 from "../assets/images/png/cardimg1.png";
import cardimg2 from "../assets/images/png/cardimg2.png";
import cardimg3 from "../assets/images/png/cardimg3.png";
import roundman1 from "../assets/images/svg/roundman1.svg";
import roundman2 from "../assets/images/svg/roundman2.svg";
import roundman3 from "../assets/images/svg/roundman3.svg";
import watch from "../assets/images/svg/watch.svg";

const Blog = () => {
  return (
    <section className="bg_dark_gray py-5 ">
      <Container className='py-lg-4'>
        <h1 className="ff_nunito fw_900 fs_4xxl clr_light_black mb-0  text-center">
          Our <span className="yllow_bg_line">Blogs</span>
        </h1>
        <Row className="pt-5 ">
          <Col lg={4} sm={6}>
            <div className="bg_white_shado pt-2 hovr_scal">
              <div>
                <img className="w-100" src={cardimg1} alt="cardimg1" />
              </div>
              <div className="text-sm-start text-center">
                <h1 className="ff_nunito fw_700 fs_2xl clr_light_black mb-0 ps-3">
                  Lorem Ipsum is{" "}
                </h1>
                <p className="ff_lora fw_400 fs_lg clr_light_black pt-2 mb-0 px-3">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
              </div>
              <div className="light_gray_line mx_10 mt-4"></div>
              <div className="d-flex justify-content-between pt_20 ps-3 pe-3">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={roundman1} alt="roundman1" />
                  </div>
                  <p className="ff_nunito fw_400 fs_md clr_light_black mb-0 ps-2">
                    Alex Liones
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img src={watch} alt="watch" />
                  </div>
                  <p className="ff_nunito fw_400 fs_xsm clr clr_light_grey mb-0 ps-2">
                    28,Aug 2020, 09:48:00
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_black yellow_border p_9_21_10_22  hover_bg_yllow mt_32 mb_29">
                  Read More
                </button>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mt-sm-0 mt-4">
            <div className="bg_white_shado pt-2 hovr_scal">
              <div>
                <img className="w-100" src={cardimg2} alt="cardimg1" />
              </div>
              <div className="text-sm-start text-center">
                <h1 className="ff_nunito fw_700 fs_2xl clr_light_black mb-0 ps-3">
                  Lorem Ipsum is{" "}
                </h1>
                <p className="ff_lora fw_400 fs_lg clr_light_black pt-2 mb-0 px-3">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
              </div>
              <div className="light_gray_line mx_10 mt-4"></div>
              <div className="d-flex justify-content-between pt_20 px-3 ">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={roundman2} alt="roundman1" />
                  </div>
                  <p className="ff_nunito fw_400 fs_md clr_light_black mb-0 ps-2">
                    Alex Liones
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img src={watch} alt="watch" />
                  </div>
                  <p className="ff_nunito fw_400 fs_xsm clr clr_light_grey mb-0 ps-2">
                    28,Aug 2020, 09:48:00
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_black yellow_border p_9_21_10_22  hover_bg_yllow mt_32 mb_29">
                  Read More
                </button>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mt-lg-0 mt-4">
            <div className="bg_white_shado pt-2 hovr_scal">
              <div>
                <img className="w-100" src={cardimg3} alt="cardimg1" />
              </div>
              <div className="text-sm-start text-center">
                <h1 className="ff_nunito fw_700 fs_2xl clr_light_black mb-0 ps-3">
                  Lorem Ipsum is{" "}
                </h1>
                <p className="ff_lora fw_400 fs_lg clr_light_black pt-2 mb-0 px-3">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
              </div>
              <div className="light_gray_line mx_10 mt-4"></div>
              <div className="d-flex justify-content-between pt_20 px-3">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={roundman3} alt="roundman1" />
                  </div>
                  <p className="ff_nunito fw_400 fs_md clr_light_black mb-0 ps-2">
                    Alex Liones
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img src={watch} alt="watch" />
                  </div>
                  <p className="ff_nunito fw_400 fs_xsm clr clr_light_grey mb-0 ps-2">
                    28,Aug 2020, 09:48:00
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_black yellow_border p_9_21_10_22  hover_bg_yllow mt_32 mb_29">
                  Read More
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center">
          {" "}
          <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_yellow yellow_border p_9_21_10_22  hover_bg_white mt_32">
            View More
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Blog