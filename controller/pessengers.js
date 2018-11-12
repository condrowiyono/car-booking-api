const db = require('../db');

exports.getAll = function(req, res){
	db.pessengers.findAll({include: [{model: db.bookings}]}).then(Pessengers => {
	  	res.json({
	        "status": "success",
	        "error": null,
	        "data": Pessengers
    	});
    	console.log(Pessengers);
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
	db.pessengers.findOne({
		where: {
			id: req.params.id
		},
		include: [{model: db.bookings}]
	}).then(Pessengers => {
		if (Pessengers==null) {
			res.json({
	            "status": "Not Found",
	            "data": Pessengers
	        })
		} else {
	        res.json({
	            "status": "success",
	            "data": Pessengers
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
