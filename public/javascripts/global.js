//Callreportlist data array for filling in info box
var callreportlist = [];

//DOM Read =================================================================
$(document).ready(function()
{
  populateTable();
  orgNames();
  orgStreetAddress();
  orgCustomerID();
  autofillform();

  $('#btnaddCallReport').on('click', addCallReport);
  

});

//Functions ================================================================


function autofillform()
{
  var customername = document.getElementById("inputCustomerName").value;
  var customerid =  document.getElementById('inputCustomerID').value;
    
 
      $("#inputCustomerName").change(function()
      {
        var customername = document.getElementById("inputCustomerName").value;
        console.log(customername);

        $.ajax(
        {
          url: '/getcustomernamefield',
          type: "POST",
          data: {
            data: document.getElementById("inputCustomerName").value
          }
        })
         
      });

};


//Fill Table with data
function populateTable() 
{
    var tableContent = '';

    //jQuery Ajax call for JSON
    $.getJSON('/callreport/callreportlist', function(data){

        $.each(data, function()
        {
            tableContent += '<tr>';
            tableContent += '<td>' + this.customername + '</td>';
            tableContent += '<td>' + this.contacts + '</td>';
            tableContent += '<tr>';
        });

      $('#callreportlist table tbody').html(tableContent);

    });

};

//Gets the organization names from /pipedrive url.
//Autocomplete fields for inputCustomerName.
function orgNames()
{
    var organizationname = '';
    
    $.get('/pipedrive', function(data)
    {
        $('#inputCustomerName').autocomplete
        ({
            source: data
        });
    });
};

//Gets the organization address from /pipedrive/orgStreetAddress url.
//Autocomplete field for inputCustomerAddress
function orgStreetAddress()
{
    var orgStreetAddress = '';

   $.get('/pipedrive/orgStreetAddress', function(data)
   {
      $('#inputCustomerAddress').autocomplete
      ({
         source: data
      })
   })
}

//Gets the organization IDS from /pipedrive/customerID url.
//Autocomplete field for inputCustomerID
function orgCustomerID()
{
    var ogCustomerID = '';

    $.get('/pipedrive/CustomerID', function(data)
    {
        $('#inputCustomerID').autocomplete
        ({
            source: data
        });
    });
};


//Add callreport
function addCallReport(event)
{
    event.preventDefault();

    //validation
    var errorCount = 0;
    $('#addCallReport input').each(function(index, val)
    {
        if($(this).val() === '') 
        {
            errorCount++;
        }
    });

    if (errorCount === 0)
    {
        var newCallReport = 
        {
            'customername': $('#addCallReport fieldset input#inputCustomerName').val(),
            'customerid' : $('#addCallReport fieldset input#inputCustomerID').val(),
            'address' : $('addCallReport fieldset input#inputCustomerAddress').val(),
            'contacts' : $('addCallReport fieldset input#inputCustomerContacts').val(),
            'email' : $('addCallReport fieldset input#inputCustomerEmail').val(),
            'date' : $('addCallReport fieldset input#inputDate').val()
        }

        $.ajax(
        {
            type: 'POST',
            data: newCallReport,
            url: '/callreport/addcallreport',
            dataType: 'JSON'
        }).done(function(response)
            {

                //check for success (blank response)
                 if (response.msg === '')
                 {
                    $("#btnaddCallReport fieldset input").val('');

                    populateTable();

                 }
                 else
                 {
                    alert('Error:' + response.msg);
                 }

            });

    }
    else
    {
        alert('Please fill in all fields');
        return false;
    }
};