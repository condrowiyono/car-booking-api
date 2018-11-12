var express = require('express');
var router = express.Router();
var moment = require('moment');
const pessengersController = require("../controller/pessengers");

router.get('/', function(req, res) {
	pessengersController.getAll(req,res)
});

router.post('/', function(req, res) {
	pessengersController.create(req,res)
});

router.get('/:id', function(req, res) {
	pessengersController.find(req,res)
});

router.put('/', function(req, res) {
	pessengersController.update(req,res)
});

router.delete('/:id', function(req, res) {
	pessengersController.delete(req,res)
});

module.exports = router;