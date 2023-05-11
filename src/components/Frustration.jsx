import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import clintimg from "../assets/images/png/clintsimg.png"

const Frustration = () => {
  return (
    <section className="py-5 gray_bg">
      <Container className='pt-lg-5'>
        <Row className="align-it ems-center">
          <Col lg={6}>
            <div className="">
              <h1 className="ff_nunito fw_900 fs_4xxl clr_light_black mb-0 text-lg-start text-center">
                Frustration of Clients
              </h1>
              <p className="ff_lora fw_400 fs_xl clr_light_black pt-4 text-lg-start text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div>
                <p className="ff_lora fw_400 fs_xl clr_light_black before_symbl ms-sm-5 ms-3 mt-4 ">
                  Loren rasion gravida auem is bibenua tase
                </p>
                <p className="ff_lora fw_400 fs_xl clr_light_black before_symbl ms-sm-5 ms-3 ">
                  Lorem Ipsum is simply dummy text of the.
                </p>
                <p className="ff_lora fw_400 fs_xl clr_light_black before_symbl ms-sm-5 ms-3">
                  Printing and typesetting industry. Lorem Ipsum
                </p>
                <p className="ff_lora fw_400 fs_xl clr_light_black before_symbl ms-sm-5 ms-3">
                  When an unknown printer took a galley of type and scrambled it
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={10} className="mx-lg-0 mx-auto pt-lg-0 pt-4">
            <div>
              <img className="w-100" src={clintimg} alt="clintimg" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Frustration