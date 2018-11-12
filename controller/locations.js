const db = require('../db');

exports.getAll = function(req, res){
	db.locations.findAll().then(locations => {
	  	res.json({
	        "status": "success",
	        "error": null,
	        "data": locations
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
	db.locations.findOne({
		where: {
			id: req.params.id
		}
	}).then(locations => {
		if (locations==null) {
			res.json({
	            "status": "Not Found",
	            "data": locations
	        })
		} else {
	        res.json({
	            "status": "success",
	            "data": locations
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
