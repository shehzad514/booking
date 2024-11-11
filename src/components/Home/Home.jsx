import React, { useState } from "react";
import "../Home/Home.css";
import rectangle from "../Assests/Rectangle 2.svg";
import { Dialog, Typography,  } from "@mui/material";
import Addimage from "../AddImage/Addimage";

function Home() {
  const [openDialog, setOpenDialog] = useState(false);


  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className="container">
      <div className="home_sec">
        <div className="home_items">
          <div className="home_img">
            <img src={rectangle} alt="home_image" />
          </div>
          <div className="home_details">
            <Typography
              variant="h1"
              gutterBottom
              sx={{ fontSize: "36px", fontWeight: "600" , paddingTop:'30px' , fontFamily:'Roboto Flex'}}
            >
              Hi! 👋 James Doe
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontSize: "16px", fontFamily:'Roboto Flex'}}
            >
              Lorem ipsus dolor sit amen, something important to say here
            </Typography>
            <button className="add_btn" onClick={handleOpenDialog}>Add Check In</button>
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth  id="dialog"   PaperProps={{
    sx: {
      borderRadius: "20px", 
    },
  }}
>
      <Addimage onClose={handleCloseDialog}/>
      </Dialog>
    </div>
  );
}

export default Home;
