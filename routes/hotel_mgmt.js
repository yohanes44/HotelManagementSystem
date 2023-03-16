const router = require("express").Router()

const { addHotel} = require("../controller/hotel_mgmt/addHotel");
const { getHotel} = require("../controller/hotel_mgmt/getHotel");
const { manageHotel} = require("../controller/hotel_mgmt/manageHotel");
const { deleteHotel} = require("../controller/hotel_mgmt/deleteHotel");


router.get("/", (req, res) => { res.json("Welcome to Hotel Managment"); });

router.post("/addHotel", addHotel);
router.get("/gethotel", getHotel);
router.put("/manageHotel/:hotelId", manageHotel);
router.delete("/deleteHotel/:hotelId", deleteHotel);




module.exports = router;