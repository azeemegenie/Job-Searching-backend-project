require("dotenv").config();

var express = require("express");
var router = express.Router();
const cors = require("cors");
const verifyTheToken = require("../middlewares/Auth");
router.use(cors());

const { getUser, signIn } = require("../controllers/UserController");

router.get("/get", verifyTheToken, getUser);

router.post("/login", signIn);

module.exports = router;
