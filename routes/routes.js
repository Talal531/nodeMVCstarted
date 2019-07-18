const express = require("express");

const Controller = require("../controllers/controller");

const router = express.Router();

router.get("/", Controller.getIndex);

router.get("/myname", Controller.getMyName);

module.exports = router;
