import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Reason = () => {
  return (
    <section className="bg_dark_gray pt-5 mt-5 position-relative z_m1">
      <Container className="pt-5">
        <h1 className="ff_nunito fw_900 fs_4xxl clr_light_black mb-0  text-center z_5 ">
          Reason to Choose{" "}
          <span className="yllow_bg_line position-r elative">Us</span>
        </h1>
        <p className="ff_lora fw_400 fs_xl clr_light_black pt-4  text-center mx_868 mx-auto pt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <Row className="pt-5 pb_60">
          <Col xl={3} lg={4} sm={6}>
            <div className="d-flex align-items-center ">
              <div className="circle "></div>
              <div className="gray_line"></div>
              <div className="white_bg text-center py_12 px_14 hovr_ylow_bg">
                <h1 className="ff_nunito fw_700 fs_xl clr_dim_grey mb-0">
                  Market Research
                </h1>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} sm={6} className="mt-sm-0 mt-4">
            <div className="d-flex align-items-center ">
              <div className="circle "></div>
              <div className="gray_line"></div>
              <div className="white_bg text-center py_12 px_14 ylow_hovr">
                <h1 className="ff_nunito fw_700 fs_xl clr_dim_grey mb-0">
                  Branding
                </h1>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} sm={6} className="mt-lg-0 mt-4">
            <div className="d-flex align-items-center ">
              <div className="circle "></div>
              <div className="gray_line"></div>
              <div className="white_bg text-center py_12 px_14 ylow_hovr">
                <h1 className="ff_nunito fw_700 fs_xl clr_dim_grey mb-0">
                  Reporting
                </h1>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} sm={6} className="mt-xl-0 mt-4 ">
            <div className="d-flex align-items-center ">
              <div className="circle "></div>
              <div className="gray_line"></div>
              <div className="white_bg text-center py_12 px_14 ylow_hovr">
                <h1 className="ff_nunito fw_700 fs_xl clr_dim_grey mb-0">
                  Data Analysis
                </h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Reason