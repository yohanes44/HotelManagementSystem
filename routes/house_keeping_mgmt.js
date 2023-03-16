const router = require("express").Router()


router.get("/", (req, res) => { res.json("Welcome to House Keeping Managment"); });


module.exports = router