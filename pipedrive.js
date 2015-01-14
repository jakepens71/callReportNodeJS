var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('22f8cf1796a11f556409fdf2393d2ff0b83bdf7e');
var data

pipedrive.Organizations.getAll({}, function (err, Organizations)
{
   for (var i = 0; i < Organizations.length; i++) 
   {
         data = Organizations[i].name;
   }
     console.log(data);
});
