import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Map = () => {
  return (
    <section className="map_bg mt-5">
      <Container>
        <div className="mx_938 mx-auto bg_white pt-5 position-relative top_149">
          <h1 className="ff_nunito fw_900 fs_4xxl clr_light_black mb-0  text-center">
            Get in <span className="yllow_bg_line">Touch</span>
          </h1>
          <Row className="px_70 pt-5">
            <Col md={6}>
              <div>
                <p className="ff_nunito fw_400 fs_md clr_grey mb-0">Name</p>
                <input
                  className="w-100 brdr_btm ff_nunito fw_700 fs_xl clr_light-black pt-1 pb-2"
                  type="text"
                  placeholder="Lorem Ipusum"
                />
              </div>
            </Col>
            <Col md={6} className="mt-md-0 mt-5">
              <div>
                <p className="ff_nunito fw_400 fs_md clr_grey mb-0">Email</p>
                <input
                  className="w-100 brdr_btm ff_nunito fw_700 fs_xl clr_light-black pt-1 pb-2"
                  type="email"
                  placeholder="LoremIpusum@mail.com"
                />
              </div>
            </Col>
            <Col md={6} className="mt-5">
              <div>
                <p className="ff_nunito fw_400 fs_md clr_grey mb-0">Phone</p>
                <input
                  className="w-100 brdr_btm ff_nunito fw_700 fs_xl clr_light-black pt-1 pb-2"
                  type="number"
                  placeholder="+0 968 856 1524"
                />
              </div>
            </Col>
            <Col md={6} className="mt-5">
              <div>
                <p className="ff_nunito fw_400 fs_md clr_grey mb-0">Subject</p>
                {/* <input className="w-100 brdr_btm" type="text" /> */}
                <select
                  className="brdr_btm w-100 pt-1 pb-2 ff_nunito fw_700 fs_xl clr_light-black"
                >
                  <option value="">Choose your subject</option>
                  <option value="">Choose your subject</option>
                  <option value="">Choose your subject</option>
                </select>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            {" "}
            <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_yellow yellow_border p_9_21_10_22  hover_bg_white mt_67 mb_60">
              View More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Map