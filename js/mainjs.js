
$('#test').on('change', function() {
  
  if(this.value == "all") {
    $('#all').show();
    $('#bellow20').hide();
    $('#upto21').hide();
    $('#upto40').hide();
  } 
else if(this.value == "20")
  {
    $('#bellow20').show();
    $('#upto21').hide();
    $('#upto40').hide();
	$('#all').hide();
  }
 else if(this.value == "21")
  {
    $('#upto21').show();
    $('#bellow20').hide();
    $('#upto40').hide();
	$('#all').hide();
  }
else
  {
    $('#upto40').show();
    $('#upto21').hide();
    $('#bellow20').hide();
	$('#all').hide();
  }
});