var express = require('express');
var router = express.Router();
var moment = require('moment');
const locationsController = require("../controller/locations");

router.get('/', function(req, res) {
	locationsController.getAll(req,res)
});

router.post('/', function(req, res) {
	locationsController.create(req,res)
});

router.get('/:id', function(req, res) {
	locationsController.find(req,res)
});

router.put('/', function(req, res) {
	locationsController.update(req,res)
});

router.delete('/:id', function(req, res) {
	locationsController.delete(req,res)
});

module.exports = router;