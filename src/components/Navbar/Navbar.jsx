import React from "react";
import "../Navbar/Navbar.css";
import { AppBar, Button, Toolbar } from "@mui/material";
import { AiOutlineBell } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import Avator from '../Assests/Avatar.png'
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="container" style={{ background: "transparent" }}>
      <AppBar
        position="static"
        className="navbar"
        style={{ background: "transparent" }}
      >
        <Toolbar>
          <div className="nav_container">
            <div className="logo">
              <p id="logo">Logo</p>
            </div>
            <div className="nav_items">
            <div className="items">
              <Button id="feed_btn" style={{ textTransform: "capitalize" }}>Feedback</Button>
              <AiOutlineBell id="bell"/>
              <CiCircleInfo id="info"/>
              <div className="img_item">
              <img src={Avator} alt="user_img"/>
              <RiArrowDropDownLine style={{color:'black', fontSize:'25px' ,color:'#718096'}}/>
              </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
