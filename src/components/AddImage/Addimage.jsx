import React, { useState } from "react";
import { Typography, Box, Dialog } from "@mui/material";
import "../AddImage/Addimage.css";
import { IoFileTrayOutline } from "react-icons/io5";
import BookingDetails from "../BookingDetails/BookingDetails";

function AddImage({ onClose }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = () => {
    if (image && title) {
      setOpenDetailsDialog(true); 
    } else {
      alert("Please fill out both fields");
    }
  };

  const handleDetailsDialogClose = () => {
    setOpenDetailsDialog(false);
    onClose(); 
  };

  return (
    <div className="addimage_cont">
      <div className="addimage_heading">
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontFamily: "Roboto Flex", fontSize: "16px", fontWeight: "500" }}
        >
          Add Check In
        </Typography>
      </div>

      <div className="text_fields">
        <label>Title</label>
        <input
          className="tittle_input"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
        />
      </div>

      <div className="up_image">
        <Typography variant="h5" sx={{ fontFamily: "Roboto Flex", fontSize: "16px", fontWeight: "500", marginBottom: "8px" }}>
          Upload Image
        </Typography>
        
        <Box
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          component="label"
          id="box"
        >
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
          <IoFileTrayOutline id="file"/>
          <Typography sx={{ marginTop: "20px" }}>
            Click or drag file to this area to upload
          </Typography>
          {image && (
            <Typography sx={{ marginTop: "10px" }}>
              {image.name}
            </Typography>
          )}
        </Box>
      </div>

      <Box mt={3} display="flex" justifyContent="flex-end" gap="10px" paddingRight="15px">
        <button className="cancel" onClick={onClose}>Cancel</button>
        <button className="add" onClick={handleSubmit}>Add</button>
      </Box>

    
      <Dialog
        open={openDetailsDialog}
        onClose={handleDetailsDialogClose}
        maxWidth="md"
        fullWidth
        sx={{ "& .MuiDialog-paper": { borderRadius: "20px" } }}
      >
        <BookingDetails image={image} onClose={handleDetailsDialogClose} />
      </Dialog>
    </div>
  );
}

export default AddImage;
