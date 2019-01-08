var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var mqttHandler = require('./mqtt_handler');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index');   //呈現指定的模板
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }))

var mqttClient = new mqttHandler();
mqttClient.connect();

// Routes
router.post("/send-mqtt", function(req, res) {
  mqttClient.sendMessage(req.body.message);
  res.status(200).send("Message sent to mqtt");
});

module.exports = router;
// app.use(express.static('public'));
