var express = require('express');
var router = express.Router();
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('22f8cf1796a11f556409fdf2393d2ff0b83bdf7e');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Call Report' });
});

router.get('/addCallReport', function(req, res)
{
	res.render(inputCustomerName );


})



router.post('/callreportform', function(req, res)
{
	
	var customername = req.body.customername;
	var customerid = req.body.customerid;
	var customeraddress = req.body.customeraddress;
	var customerphonenum = req.body.customerphonenumber;
	var customerfax = req.body.customerfaxnumber;
	var customercontacts = req.body.customercontacts;
	var customeremail = req.body.email;
	var date = req.body.date;
	var callbody = req.body.callreport;
	console.log(req.body.customername);
	console.log(req.body.customerid);
	console.log(customeraddress);
	console.log(customerphonenum);
	console.log(customerfax);
	console.log(customercontacts);
	console.log(customeremail);
	console.log(date);
	console.log(callbody);

	res.render('index', 'succesfully submited');
	
})

router.post('/getcustomernamefield', function(req, res)
{
	var customername = req.body.data;
	console.log(customername);

	//pipedrive.SearchResults.field({
    //term: customername,
    //exact_match: true,
    //field_key: "name",
    //field_type: "organizationsField",
    //return_item_ids: true
//});

})


router.post('/getcustomernamefieldauto', function(req, res)
{
	var customername = req.body.data;
	console.log(customername);
})



module.exports = router;
