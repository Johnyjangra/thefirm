import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import brandimg from "../assets/images/png/brandimg.png"
import roundhorn from "../assets/images/svg/roundhorn.svg";

const Branding = () => {
  return (
    <section className="bg_dark_gray pb-5">
      <Container className="pb-5">
        <Row className="white_backgriund pt_67 pb_66">
          <Col lg={6}>
            <div className="ps_35 ps_lg_0">
              <img
                className="white_shadow p_10 w-100"
                src={brandimg}
                alt="brandimg"
              />
            </div>
          </Col>
          <Col lg={6} className="pt-lg-0 pt-4">
            <div className="d-flex ps-lg-3 pe-lg-5 flex-sm-row flex-column align-items-sm-start align-items-center">
              <div>
                <img src={roundhorn} alt="roundhorn" />
              </div>
              <div className="ps-sm-3 pt-3 text-sm-start text-center ">
                <h1 className="ff_nunito fw_700 fs_3xl clr_light_black mb-0">
                  <span className="yllow_bg_line">Branding</span>
                </h1>
                <p className="ff_lora fw_400 fs_xl clr_light_black pt-3 mb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
                <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_black yellow_border p_9_21_10_22  hover_bg_white mt_32">
                  Read More
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Branding