var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) 
{

 var Pipedrive = require('pipedrive');
 var pipedrive = new Pipedrive.Client('22f8cf1796a11f556409fdf2393d2ff0b83bdf7e');
 var orgName = [];

 pipedrive.Organizations.getAll({}, function(err, deals) 
  {
	    if (err) throw err;
	    for (var i = 0; i < deals.length; i++) 
	    {
	      orgName.push(deals[i].name);
	    	
	    }

	    res.end(JSON.stringify(orgName));
  });
});

module.exports = router;