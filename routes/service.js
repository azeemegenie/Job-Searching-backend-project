const express = require("express");
const router = express.Router();
const {
  checkoutservice
} = require("../controllers/CheckoutController");
const {
  getServices,
  getService,
  addService
} = require("../controllers/ServiceController");
const verifyTheToken = require("../middlewares/Auth");
const cors = require("cors");
router.use(cors());

router.get("/all", getServices);
router.get("/:id", getService);
router.post("/add", addService);
router.post("/checkout", checkoutservice);

module.exports = router;
