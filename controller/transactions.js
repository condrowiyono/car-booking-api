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
}

exports.delete = function(req,res){
}
