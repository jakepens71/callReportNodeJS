var express = require('express');
var router = express.Router();
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('22f8cf1796a11f556409fdf2393d2ff0b83bdf7e');


/* GET users listing. */
router.get('/', function(req, res) 
{
 var orgName = [];


 pipedrive.Organizations.getAll({}, function(err, organization) 
  {
	    if (err) throw err;
	    for (var i = 0; i < organization.length; i++) 
	    {
	      orgName.push(organization[i].name);
	    	
	    }
	    
	    
	    res.json(orgName);
  });
});

router.get('/orgStreetAdress', function(req, res)
{
 var orgStreetAdress = [];

 pipedrive.Organizations.getAll({}, function(err, organization) 
  {
	    if (err) throw err;
	    for (var i = 0; i < organization.length; i++) 
	    {
	      orgStreetAdress.push(organization[i].address);
	    	
	    }
	    
	    
	    res.json(orgStreetAdress);
  });


})

module.exports = router;