var express = require('express');
var router = express.Router();
var moment = require('moment');
const bookingsController = require("../controller/bookings");

router.get('/', function(req, res) {
	bookingsController.getAll(req,res)
});

router.post('/', function(req, res) {
	bookingsController.create(req,res)
});

router.get('/:id', function(req, res) {
	bookingsController.find(req,res)
});

router.put('/', function(req, res) {
	bookingsController.update(req,res)
});

router.delete('/:id', function(req, res) {
	bookingsController.delete(req,res)
});

module.exports = router;