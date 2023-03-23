const router = require("express").Router()


const { calculateExpense} = require("../controller/room_mgmt/expense");
const { getReservedRooms, checkOutRoom} = require("../controller/room_mgmt/room");


router.get("/", (req, res) => {res.json("Welcome to Room Managment");});

router.get("/reservedRooms/:roomId",  getReservedRooms);
router.get("/checkout", checkOutRoom);
router.post("/expense/:roomId", calculateExpense);



module.exports = router