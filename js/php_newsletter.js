
/* wording of your error and thank you messages */
var thankyou="Thank you";

function signup(thisform) {
	$("#submit, #myResponse").hide();	// Hide the buttom and the message
	$("#loading").show();				// show the loading image.
	params=$("#subform").serialize();
	$.post("php/submission.php", params, function(response ){
		//alert(response); //may need to activate this line for debugging.
    	$("#loading").hide();
		$("#myResponse").html(thankyou); //Writes the "Thank you" message that comes from optIn.php and styles it.
		$('#myResponse').css({display:'inline',color:'red'})
		$("#submit").show();
		}
	)
return false;
}