require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { url } = require('inspector');
const app = express()
const port = process.env.PORT;

require("./database");

const routerHouseKeeping = require("./routes/house_keeping_mgmt");
const routerReservation = require("./routes/reservation_mgmt");
const routerRoom = require("./routes/room_mgmt");
const routerHotel = require("./routes/hotel_mgmt");




app.use(express.json());

app.use("/api/reservation", routerReservation);
app.use("/api/room", routerRoom);
app.use("/api/housekeeping", routerHouseKeeping);
app.use("/api/hotel", routerHotel);




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})