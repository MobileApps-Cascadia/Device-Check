/* Device Page interface with Data */
$(document).ready(function(){
	$('a[href="#deviceinfo"]').click(function(){
		Getloans();	
		return true;
	});
	
	function Getloans() {
	    $.ajax({
	        type: 'GET',
	        url: 'http://216.186.69.45/device_loans',
	        dataType: "json", // data type of response
	        success: renderList
	    });
	}
	
	function renderList(data) {
		// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
		var list = data == null ? [] : (data.loans instanceof Array ? data.loans : [data.loans]);
		var output = '<ul data-role="listview" data-filter="true" data-theme="b">';
		$.each(list, function(index, loan) {
			console.log(loan);
			output+='<li><h3><a href="#" data-identity="' + loan.UserID + '" data-icon="delete">'+loan.firstname+' '+loan.lastname+'</a></h3>';
			output+='<p>'+loan.DeviceType+' #'+loan.DeviceNum+'</p></li>';
		});
		output+='</ul>';
		$('#loanList').html(output);
	}
	});