function searchByEquipmentType(type_equipment)
{	
	if(type_equipment == chk_chip){
		var $target = $('.chip');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
	else if(type_equipment == chk_os){
		var $target = $('.os');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
	else if(type_equipment == chk_equ){
		var $target = $('.equipment');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
	else if(type_equipment == chk_dequ){
		var $target = $('.designate');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
}

function searchByEquipmentRank(rank_equipment)
{
	if(rank_equipment == SS){
		var $target = $('.SS');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
	else if(rank_equipment == S){
		var $target = $('.S');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
	else if(rank_equipment == A){
		var $target = $('.A');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
	else if(rank_equipment == B){
		var $target = $('.B');
		
		if($target.css("display") == "none"){
			$target.show();
		}
		else{
			$target.hide();
		}
	}
}