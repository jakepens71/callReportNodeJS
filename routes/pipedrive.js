var express = require('express');
var router = express.Router();
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('22f8cf1796a11f556409fdf2393d2ff0b83bdf7e');


// gets customer names from pipedrive
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

//gets the organization street address from pipedrive
router.get('/orgStreetAddress', function(req, res)
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

//gets the customer id from pipedrive
router.get('/customerID', function(req, res)
{
	var orgCustomerID = [];

	pipedrive.Organizations.getAll({}, function(err, organization) 
  {
	    if (err) throw err;
	    for (var i = 0; i < organization.length; i++) 
	    {
	      orgCustomerID.push(organization[i].id);
	    
	    	
	    }
	    
	    
	    res.json(orgCustomerID);
  });


})



module.exports = router;