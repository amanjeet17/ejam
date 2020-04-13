const express = require('express');
const router = express.Router();
const request = require('request');
const apiKey= require('../../config/keys').APIKEY;
// @route   GET api/resume/test
// @desc    Tests profile route
// @access  Public

router.get('/test', (req, res) => {
  console.log("lat", lat, "long", long)
  res.json({ name: 'Profile Works' })
});


// @route   searh api/weather
router.get('/info', (req, res) => {
  const { city } = req.query
  console.log(req.query)
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      console.log('body:', body);
      res.json(body)
    }
  });
});


module.exports = router;
