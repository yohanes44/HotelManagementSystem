const router = require("express").Router()

const { getCalendar} = require("../controller/reservation_mgmt/calendar");
const { getPerformance} = require("../controller/reservation_mgmt/performance");
const { getRooms, bookRoom} = require("../controller/reservation_mgmt/rooms");


router.get("/", (req, res) => { res.json("Welcome to Reservation Managment"); });

router.get("/performance/:roomId", getRooms);
router.get("/calendar/:roomId", getRooms);
router.get("/reservationstatus/:roomId", getRooms);
router.get("/rooms/:hotelId", getRooms);
router.get("/reserve/:roomNumber", bookRoom);
// router.post("/book/:roomId", bookRoom);



module.exports = router