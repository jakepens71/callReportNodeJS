//Callreportlist data array for filling in info box
var callreportlist = [];

//DOM Read =================================================================
$(document).ready(function()
{
  populateTable();
  orgNames();

  $('#btnaddCallReport').on('click', addCallReport);

});

//Functions ================================================================

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
