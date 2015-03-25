var express = require('express');
var router = express.Router();

var appRoot = require('app-root-path');

var fs = require('fs');
Docxtemplater = require('docxtemplater');

var temp = require('temp')


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
       var content = fs.readFileSync(appRoot+"/callreport.docx", "binary");

       var doc = new Docxtemplater(content);


       doc.setData
       ({
         "customername":req.body.customername,
	 "customerid":req.body.customerid,
	 "customeraddress":req.body.customeraddress,
	 "phone":req.body.customerphonenumber,
	 "fax":req.body.customerfaxnumber,
	 "contacts":req.body.customercontacts,
	 "email":req.body.email,
	 "date":req.body.date,
	 "salesperson":req.body.salesperson,
	 "body":req.body.callreport
       });

        doc.render();
        var buf = doc.getZip().generate({type:"nodebuffer"});

        var filename = req.body.salesperson + "_" + req.body.customername + "_" + req.body.date;




        fs.writeFileSync(appRoot+"/"+filename+".docx", buf);

        var file = fs.createReadStream(appRoot+"/"+filename+".docx", doc);

        file.on('end', function()
           {
		
              
       });
        
	res.download(filename.toString()+'.docx', function(err)
	{
	   if(err)
            {

            }
           else
            {
		fs.unlink(appRoot+"/"+filename+".docx");
            }
	});
         
	console.log(file);
	


	
	

       
	
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
