$(document).ready(function(){
	$('#eName').keyup(function(){
		var ekey = $(this).val();
		$("#wrap > div").hide();
		
		var etemp = $("#wrap > div > a > p:nth-child(5n+2):contains('"+ ekey +"')");
		$(etemp).parent().parent().show();
	})
})