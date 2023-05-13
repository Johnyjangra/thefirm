import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import msg from "../assets/images/svg/msg.svg"
import horn from "../assets/images/svg/horn.svg";
import conversation from "../assets/images/svg/conversation.svg";
import fgroup from "../assets/images/svg/fgroup.svg";
import round1 from "../assets/images/svg/round1.svg";
import round2 from "../assets/images/svg/round2.svg";
import lightyellow from "../assets/images/svg/lightyellow.svg";

const Perfect = () => {
  return (
    <section className="mt-5 py-5 overflow-hidden">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={6} className="position-relative">
            <div className="position-absolute group_set group_img_animat">
              <img className="w_sm_80" src={fgroup} alt="fgroup" />
            </div>
            <div className="position-relative">
              <div className="position-absolute l_53">
                <img src={round1} alt="round1" />
              </div>
              <div className="position-absolute yellow_set">
                <img src={round2} alt="round1" />
              </div>
              <div className="d-flex align-items-center flex-sm-row flex-column">
                <div className="">
                  <div className="mx_285 text-center card_bg card_1_animat box_shadow">
                    <img src={msg} alt="msg" />
                    <h1 className="ff_nunito fw_700 fs_3xl clr_light_black pt_30">
                      Coaching
                    </h1>
                    <p className="ff_lora fw_400 fs_xl clr_light_black mb-0">
                      Loren rasion gravida auem is bibenua tase
                    </p>
                  </div>
                  <div className="mx_285 text-center card_bg position-relative l_10 mt_70 l_xsm_0 box_shadow">
                    <img src={horn} alt="horn" />
                    <h1 className="ff_nunito fw_700 fs_3xl clr_light_black pt_30">
                      SEO
                    </h1>
                    <p className="ff_lora fw_400 fs_xl clr_light_black mb-0">
                      Loren rasion gravida auem is bibenua tase
                    </p>
                  </div>
                </div>
                <div className="position-relative mt-sm-0 mt-5">
                  <div className="position-absolute light_yellow_set">
                    <img src={lightyellow} alt="lightyellow" />
                  </div>
                  <div className="mx_285 text-center card_bg ms_80 ms_xsm_0 box_shadow">
                    <img src={conversation} alt="conversation" />
                    <h1 className="ff_nunito fw_700 fs_3xl clr_light_black pt_30">
                      Digital Partner
                    </h1>
                    <p className="ff_lora fw_400 fs_xl clr_light_black mb-0">
                      Loren rasion gravida auem is bibenua tase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="pt-lg-0 pt-5">
              <h1 className="ff_nunito fw_900 fs_4xxl clr_light_black mb-0 text-lg-start text-center">
                Perfect Solution for Your Bussiness{" "}
              </h1>
              <p className="ff_lora fw_400 fs_xl clr_light_black pt-4 text-lg-start text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <div className="text-lg-start text-center">
                <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_yellow yellow_border p_9_21_10_22  hover_bg_white mt_32">
                  Get in Touch
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Perfect