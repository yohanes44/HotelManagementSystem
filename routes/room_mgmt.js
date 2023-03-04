const router = require("express").Router()


router.get("/", (req, res) => {
    res.json({"name": "john"});
});



module.exports = router