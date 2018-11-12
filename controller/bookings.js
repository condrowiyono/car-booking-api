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
