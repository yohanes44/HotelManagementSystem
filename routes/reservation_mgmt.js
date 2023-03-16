const router = require("express").Router()

const { getCalendar} = require("../controller/reservation_mgmt/calendar");
const { getPerformance} = require("../controller/reservation_mgmt/performance");
const { getRoom, bookRoom} = require("../controller/reservation_mgmt/room");


router.get("/", (req, res) => { res.json("Welcome to Reservation Managment"); });

router.get("/performance/:roomId", getRoom);
router.get("/calendar/:roomId", getRoom);
router.get("/reservationstatus/:roomId", getRoom);
router.get("/rooms/:roomId", getRoom);


router.post("/book/:roomId", bookRoom);




module.exports = router