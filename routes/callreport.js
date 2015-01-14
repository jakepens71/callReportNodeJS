var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/callreportlist', function(req, res){
	var db = req.db;
	db.collection('callreport').find().toArray(function(err, items) {
		res.json(items);
	})
})

router.get('/addcallreport', function(req, res)
{
	var db = req.db;
	db.collection('callreportlist').insert(req.body, function(err, result)
	{
		res.send((err === null) ? { msg: ''} : { msg: err} );
	});
});


module.exports = router;
