var express = require('express');
var router = express.Router();

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

module.exports = router;
