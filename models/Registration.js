module.exports = function(){
    var express = require('express');
    var router = express.Router();


/* Adds a user, redirects to the login page after adding */

router.post('/', function(req, res){
	var mysql = req.app.get('mysql');
	var sql = "INSERT INTO db (UserID, FirstName, LastName, DateOfBirth, City, StateorProvince, Country, Password) VALUES (?,?,?,?,?,?,?,?)";
	var inserts = [req.body.username, req.body.fname, req.body.lname, req.body.birthdate, req.body.city, req.body.region, req.body.country, req.body.password];
	sql = mysql.pool.query(sql,inserts,function(error, results, fields){
		if(error){
			res.write(JSON.stringify(error));
			res.end();
		}else{
			res.redirect('/people');
		}
	});
});

return router;
}();
