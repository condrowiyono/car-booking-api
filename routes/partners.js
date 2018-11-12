var express = require('express');
var router = express.Router();
var moment = require('moment');
const partnersController = require("../controller/partners");

router.get('/', function(req, res) {
	partnersController.getAll(req,res)
});

router.post('/', function(req, res) {
	partnersController.create(req,res)
});

router.get('/:id', function(req, res) {
	partnersController.find(req,res)
});

router.put('/', function(req, res) {
	partnersController.update(req,res)
});

router.delete('/:id', function(req, res) {
	partnersController.delete(req,res)
});

module.exports = router;