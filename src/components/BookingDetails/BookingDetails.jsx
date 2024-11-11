import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import "../BookingDetails/BookingDetails.css";

function BookingDetails({ image, onClose }) {
  const [bookingID, setBookingID] = useState("");
  const [rooms, setRooms] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (bookingID && rooms && guests && date) {
      console.log("Booking ID:", bookingID);
      console.log("Rooms:", rooms);
      console.log("Guests:", guests);
      console.log("Date:", date);
      onClose();
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="booking_details_cont">
      <div className="booking_heading">
        <Typography variant="h5" sx={{ fontWeight: "600", fontSize: "16px" }}>
           Details
        </Typography>
      </div>

<div className="up_details">
      <Box display="flex" gap="20px">
        <Box width="50%"  gap='30px'>
        <div className="id_cont">
        <label className="label">Booking ID</label>
        <input className="id_input" placeholder="123" value={bookingID}  onChange={(e) => setBookingID(e.target.value)}/>
        </div>

        <div className="id_cont">
        <label className="label">Rooms</label>
        <input className="room_input" placeholder="4" value={rooms}  onChange={(e) => setRooms(e.target.value)}/>
        </div>

        <div className="id_cont">
        <label className="label">No of Guests</label>
        <input className="room_input" placeholder="4" value={guests}  onChange={(e) => setGuests(e.target.value)}/>
        </div>

        <div className="id_cont">
        <label className="label">Book Date</label>
        <input type="date" className="id_input"  value={date}  onChange={(e) => setDate(e.target.value)}/>
        </div>

        </Box>

        <Box width="50%" display="flex" justifyContent="center" alignItems="center">
          <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: "100%", borderRadius: "10px",width:'80%', height:'80%' }} />
        </Box>
      </Box>
      </div>

      <Box mt={3} display="flex" justifyContent="flex-end" gap="10px" paddingRight="15px">
        <button className="cancel" onClick={onClose}>Cancel</button>
        <button className="add" onClick={handleSubmit}>Ok</button>
      </Box>
    </div>
  );
}

export default BookingDetails;
