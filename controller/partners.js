const db = require('../db');

exports.getAll = function(req, res){
	db.partners.findAll().then(partners => {
	  	res.json({
	        "status": "success",
	        "error": null,
	        "data": partners
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
	db.partners.findOne({
		where: {
			id: req.params.id
		}
	}).then(partners => {
		if (partners==null) {
			res.json({
	            "status": "Not Found",
	            "data": partners
	        })
		} else {
	        res.json({
	            "status": "success",
	            "data": partners
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
