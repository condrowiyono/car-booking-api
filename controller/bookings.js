const db = require('../db');

exports.getAll = function(req, res){
	console.log(db);
	db.bookings.findAll({include: [{model: db.pessengers}]}).then(bookings => {
	  	res.json({
	        "status": "success",
	        "error": null,
	        "data": bookings
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
	db.bookings.create({
		transactionId: req.body.transactionId,
		dropLocation: req.body.dropLocation,
		pickLocation: req.body.pickLocation,
		dropTime: req.body.dropTime,
		pickTime: req.body.pickTime,
		fare: req.body.fare,
		additionalFee: req.body.additionalFee,
		discount: req.body.discount,
		totalAmount: req.body.totalAmount,
		createdAt: Date.now(),
	}).then(booking => {
		res.json({
			"status": "success",
			"data": booking,
		});
	});
}

exports.find = function(req, res) {
	db.bookings.findOne({
		where: {
			id: req.params.id
		},
		include: [{model: db.pessengers}]
	}).then(bookings => {
		if (bookings==null) {
			res.json({
	            "status": "Not Found",
	            "data": bookings
	        })
		} else {
	        res.json({
	            "status": "success",
	            "data": bookings
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
}

exports.delete = function(req,res){
}
