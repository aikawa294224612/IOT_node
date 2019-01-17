var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');
var token = crypto.randomBytes(64).toString('hex');
var something = require('../public/javascripts/something');

router.use(cookieParser());
router.use(session({
    resave: true, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: token, //recommand 128 bytes random string
    name: 'testapp', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {
        maxAge: 80000
    } //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));

router.use(function(req, res, next) {
    if (!req.session.user) {
        if (req.url == "/") {
            next(); //如果请求的地址是登录则通过，进行下一个请求
        } else {
            res.redirect('/');//跳转到登录页面
        }
    } else if (req.session.user) {
    	// res.render('welcome'); 
        next();//如果已经登录，则可以进入
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.session.user) {
       res.render('index');   //呈現指定的模板
    } else if (req.session.user) {
    	res.render('welcome');   //呈現指定的模板
    }
  // res.render('index', { title: 'Express' });
});

//post name gets from "name"
router.post('/', function(req, res) {
    if (req.body.inputEmail==something.account &&req.body.inputPassword==something.pw) {  //判断时候有传值
        var user = {
            'username': req.body.inputEmail  //获取用户名并赋值，这里之前可以自己做判断
        };
        req.session.user = user;//赋值session，自动跳转页面
        // res.send("yes"+req.body.inputEmail);
        res.redirect('/controller');
    } else {
    	// res.send("no"+req.body.inputEmail);
        res.redirect('/');
    }
});

router.get('/logout', function(req, res) {//做的登出页面
    req.session.user = null;
    res.redirect('/');
});

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }))

// var mqttClient = new mqttHandler();
// mqttClient.connect();

// // Routes
// router.post("/send-mqtt", function(req, res) {
//   mqttClient.sendMessage(req.body.message);
//   res.status(200).send("Message sent to mqtt");
// });

module.exports = router;
// app.use(express.static('public'));
