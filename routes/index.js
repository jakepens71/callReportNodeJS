var express = require('express');
var router = express.Router();
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('22f8cf1796a11f556409fdf2393d2ff0b83bdf7e');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Call Report' });
});

router.get('/addCallReport', function(req, res){
	res.render(inputCustomerName );
})



router.post('/callreportform', function(req, res)
{
	res.render('index', 'Successfully Submited');
})

router.post('/getcustomernamefield', function(req, res)
{
	var customername = req.body.data;
	console.log(customername);

	pipedrive.SearchResults.field({
    term: customername,
    exact_match: true,
    field_key: "name",
    field_type: "organizationsField",
    return_item_ids: true
});

})




module.exports = router;
