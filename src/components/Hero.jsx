import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroimg from "../assets/images/svg/heroimg.png"

const Hero = () => {
  return (
    <section className="overflow-hidden hero_bg pb-lg-0 pb-4">
      <Container>
        <Row className="align-items-center bordr_bottom flex-lg-row flex-column-reverse">
          <Col lg={6}>
            <div className='text-lg-start text-center'>
              <h1 className="ff_nunito fw_900 fs_4xxxl clr_light_black text_shadow mb-0 after_img">
                Get Bussiness Solutions with TheFirm.
              </h1>
              <p className="ff_lora fw_400 fs_xl clr_light_black mx_437 pt_28 mb-0 pt_md_20">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
              <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_yellow yellow_border p_9_21_10_22  hover_bg_white mt_32">
                Get in Touch
              </button>
            </div>
          </Col>
          <Col lg={6} sm={10} className='mx-lg-0 mx-auto pt-lg-0 pt-5'>
            <div>
              <img
                className="position_xxl_relative z_m1 l_m25 top_0 w_xxl_100 "
                src={heroimg}
                alt="heroimg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero