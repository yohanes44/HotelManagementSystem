const router = require("express").Router()


const { checkOut} = require("../controller/room_mgmt/checkout");
const { calculateExpense} = require("../controller/room_mgmt/expense");
const { getReservedRooms} = require("../controller/room_mgmt/room");


router.get("/", (req, res) => {res.json("Welcome to Room Managment");});

router.get("/reservedRooms/:roomId",  getReservedRooms);
router.post("/checkout/:roomId", checkOut);
router.post("/expense/:roomId", calculateExpense);



module.exports = router