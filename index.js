require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { url } = require('inspector');
const app = express()
const port = process.env.PORT;


const routerHouseKeeping = require("./routes/house_keeping_mgmt");
const routerReservation = require("./routes/reservation_mgmt");
const routerRoomMgmt = require("./routes/room_mgmt");
const routerHotelMgmt = require("./routes/hotel_mgmt");



require("./database");



app.use("/api/reservation", routerReservation);
app.use("/api/room", routerRoomMgmt);
app.use("/api/housekeeping", routerHouseKeeping);
app.use("/api/hotel", routerHotelMgmt);




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})