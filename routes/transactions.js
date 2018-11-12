var express = require('express');
var router = express.Router();
var moment = require('moment');
const transactionsController = require("../controller/transactions");

router.get('/', function(req, res) {
	transactionsController.getAll(req,res)
});

router.post('/', function(req, res) {
	transactionsController.create(req,res)
});

router.get('/:id', function(req, res) {
	transactionsController.find(req,res)
});

router.put('/', function(req, res) {
	transactionsController.update(req,res)
});

router.delete('/:id', function(req, res) {
	transactionsController.delete(req,res)
});

module.exports = router;