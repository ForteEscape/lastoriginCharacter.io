$(document).ready(function(){
	$('#cName').keyup(function(){
		var key = $(this).val();
		$("#wrap > div").hide();
		
		var temp = $("#wrap > div > a > p:nth-child(5n+2):contains('"+ key +"')");
		$(temp).parent().parent().show();
	})
})