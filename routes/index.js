var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  // let ip = req.ip
  // let ip = req. connection. remoteAddress;
  // console.log(ip);
  res.json({ message: 'this api is running on heroku' })
});

module.exports = router;
