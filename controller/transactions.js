const db = require('../db');

exports.getAll = function(req, res){
	db.transactions.findAll().then(transactions => {
	  	res.json({
	        "status": "success",
	        "error": null,
	        "data": transactions
    	});
	}).catch(function (err) {
        res.json({
	        "status": "error",
	        "error": err,
	        "data": null
    	});
    });
};

exports.create = function(req, res){
	db.transactions.create({
		partnerId: 1,
		carInfo: req.body.carInfo,
		status: 0,
		buyerName: req.body.buyerName,
		buyerEmail: req.body.buyerEmail,
		totalAmount: req.body.totalAmount,
		expiredTime: Date.now() + (3*3600*1000),
		issuedAt: Date.now(),
		createdAt: Date.now(),
	}).then(transaction => {
		res.json({
			"status": "Success",
			"data" : transaction,
		});
	})
}

exports.find = function(req, res) {
	db.transactions.findOne({
		where: {
			id: req.params.id
		}
	}).then(transactions => {
		if (transactions==null) {
			res.json({
	            "status": "Not Found",
	            "data": transactions
	        })
		} else {
	        res.json({
	            "status": "success",
	            "data": transactions
	        })
	    }
    }).catch(function (err) {
        res.json({
	        "status": "error",
	        "error": err,
	        "data": null
    	});
    });
}

exports.update = function(req, res){
	db.transactions.update({
		id: req.body.id,
		status: 1,
		bookedAt: Date.now(),
	}, {where:{id: req.body.id}}).then(transaction => {
		res.json({
			"status": "Success",
			"data" : transaction,
		});
	});
};

exports.delete = function(req,res){
}
