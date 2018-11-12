var express = require('express');
var router = express.Router();
var moment = require('moment');
var axios = require('axios');
var serviceBase = "http://localhost:3000/api/v1/";

router.get('/', function(req, res, next) {
	//get data from partner
	var pick = req.query.pick
	var date = moment(req.query.date).format('YYYY-MM-DD HH:mm:ss');
	var uri = serviceBase + "cars?pick=" + pick + "&date=" + date;
	axios.get(uri)
		.then(function (response) {
			res.send(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
});

module.exports = router;
