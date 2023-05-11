import React, { useState } from 'react'
import logo from "../assets/images/svg/logo.svg"
import closebtn from "../assets/images/svg/closebtn.png";
import { Container } from 'react-bootstrap';

const Nav = () => {
    const [first, setfirst] = useState(true)
  return (
    <nav className="pt_6 pb_7">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img className="w_70" src={logo} alt="logo" />
          </div>
          <ul
            className={
              first
                ? "top_100 d-flex ps-0 mb-0 align-items-center mobile_ul"
                : "top_0 d-flex ps-0 mb-0 align-items-center mobile_ul"
            }
          >
            <li onClick={()=>{setfirst(true)}}>
              <a
                className="ff_nunito ff_700 fs_xl clr_light_black yellow_underline hovr_black "
                href="#"
              >
                Home
              </a>
            </li>
            <li className="ms_44 ms_lg_20 ms_md_0 mt-lg-0 mt-3" onClick={()=>{setfirst(true)}}>
              <a
                className="ff_nunito ff_700 fs_xl clr_light_black yellow_underline hovr_black"
                href="#"
              >
                Solutions
              </a>
            </li>
            <li className="ms_44 ms_lg_20 ms_md_0 mt-lg-0 mt-3" onClick={()=>{setfirst(true)}}>
              <a
                className="ff_nunito ff_700 fs_xl clr_light_black yellow_underline hovr_black"
                href="#"
              >
                Cases
              </a>
            </li>
            <li className="ms_44 ms_lg_20 ms_md_0 mt-lg-0 mt-3" onClick={()=>{setfirst(true)}}>
              <a
                className="ff_nunito ff_700 fs_xl clr_light_black yellow_underline hovr_black"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="ms_44 ms_lg_20 ms_md_0 mt-lg-0 mt-3" onClick={()=>{setfirst(true)}}>
              <a
                className="ff_nunito ff_700 fs_xl clr_light_black yellow_underline hovr_black"
                href="#"
              >
                Blog
              </a>
            </li>
            <li className="ms_44 ms_lg_20 ms_md_0 mt-lg-0 mt-3" onClick={()=>{setfirst(true)}}>
              <a
                className="ff_nunito ff_700 fs_xl clr_light_black yellow_underline hovr_black"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <button className="ff_nunito ff_700 fs_xl clr_white bg_clr_yellow yellow_border p_9_21_10_22 ms_44 hover_bg_white ms_lg_20 ms_md_0 mt-lg-0 mt-3" onClick={()=>{setfirst(true)}}>
              Get in Touch
            </button>
            <div
              className=" d-lg-none d-block position-absolute right_0 top_2"
              onClick={() => {
                setfirst(true);
              }}
            >
              <img className="w_60  l_60 l_20" src={closebtn} alt="closebtn" />
            </div>
          </ul>
          <div className='d-lg-none d-block'
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="navicon"></div>
            <div className="navicon"></div>
            <div className="navicon"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Nav