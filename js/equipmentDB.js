function searchByEquipmentType(type_equipment)
{	
	//checked 상태가 되었는지 boolean 으로 체크한다.
	var ischecked_chip = false;
	var ischecked_os = false;
	var ischecked_equipment = false;
	var ischecked_designate = false;
	
	var chip_cnt = 0;
	var os_cnt = 0;
	var equipment_cnt = 0;
	var designate_cnt = 0;
	
	if(type_equipment == chk_chip){
		chip_cnt++;
		
		if((chip_cnt%2) != 0){
			ischecked_chip = true;
		}
		else{
			ischecked_chip = false;
		}
		
		var $self = $('.chip');
		var $target1 = $('.equipment');
		var $target2 = $('.os');
		var $target3 = $('.designate');
		
		if(ischecked_chip == true){
			if(ischecked_os == true){
				$target2.show();
			}
			else{
				$target2.hide();
			}
		
			if(ischecked_equipment == true){
				$target1.show();
			}
			else{
				$target2.hide();
			}
		
			if(ischecked_designate == true){
				$target3.show();
			}
			else{
				$target3.hide();
			}
		}
		else if(ischecked_chip == false){
			$self.hide();
		}
	}
	else if(type_equipment == chk_os){
		os_cnt++;
		
		if((os_cnt%2) != 0){
			ischecked_os = true;
		}
		else{
			ischecked_os = false;
		}
		
		var $self = $('.os');
		var $target1 = $('.equipment');
		var $target2 = $('.chip');
		var $target3 = $('.designate');
		
		if(ischecked_os == true){
			if(ischecked_chip == true){
				$target2.show();
			}
			else{
				$target2.hide();
			}
		
			if(ischecked_equipment == true){
				$target1.show();
			}
			else{
				$target2.hide();
			}
		
			if(ischecked_designate == true){
				$target3.show();
			}
			else{
				$target3.hide();
			}
		}
		else if(ischecked_os == false){
			$self.hide();
		}
	}
	else if(type_equipment == chk_equ){
		equipment_cnt++;
		
		if((equipment_cnt%2) != 0){
			ischecked_equipment = true;
		}
		else{
			ischecked_equipment = false;
		}
		
		var $self = $('.equipment');
		var $target1 = $('.chip');
		var $target2 = $('.os');
		var $target3 = $('.designate');
		
		if(ischecked_equipment == true){
			if(ischecked_os == true){
				$target2.show();
			}
			else{
				$target2.hide();
			}
		
			if(ischecked_chip == true){
				$target1.show();
			}
			else{
				$target2.hide();
			}
		
			if(ischecked_designate == true){
				$target3.show();
			}
			else{
				$target3.hide();
			}
		}
		else if(ischecked_equipment == false){
			$self.hide();
		}
	}
	/*else if(type_equipment == chk_dequ){
		ischecked_designate = true;
		
		var $target1 = $('.equipment');
		var $target2 = $('.os');
		var $target3 = $('.chip');
		
		if($target1.css("display") == "none"){
			$target1.show();
		}
		else{
			$target1.hide();
		}
		
		if($target2.css("display") == "none"){
			$target2.show();
		}
		else{
			$target2.hide();
		}
		
		if($target3.css("display") == "none"){
			$target3.show();
		}
		else{
			$target3.hide();
		}
	}*/
}

/*function searchByEquipmentRank(rank_equipment)
{
	if(rank_equipment == SS){
		var $target1 = $('.B');
		var $target2 = $('.A');
		var $target3 = $('.S');
		
		if($target1.css("display") == "none"){
			$target1.show();
		}
		else{
			$target1.hide();
		}
		
		if($target2.css("display") == "none"){
			$target2.show();
		}
		else{
			$target2.hide();
		}
		
		if($target3.css("display") == "none"){
			$target3.show();
		}
		else{
			$target3.hide();
		}
	}
	else if(rank_equipment == S){
		var $target1 = $('.B');
		var $target2 = $('.A');
		var $target3 = $('.SS');
		
		if($target1.css("display") == "none"){
			$target1.show();
		}
		else{
			$target1.hide();
		}
		
		if($target2.css("display") == "none"){
			$target2.show();
		}
		else{
			$target2.hide();
		}
		
		if($target3.css("display") == "none"){
			$target3.show();
		}
		else{
			$target3.hide();
		}
	}
	else if(rank_equipment == A){
		var $target1 = $('.B');
		var $target2 = $('.SS');
		var $target3 = $('.S');
		
		if($target1.css("display") == "none"){
			$target1.show();
		}
		else{
			$target1.hide();
		}
		
		if($target2.css("display") == "none"){
			$target2.show();
		}
		else{
			$target2.hide();
		}
		
		if($target3.css("display") == "none"){
			$target3.show();
		}
		else{
			$target3.hide();
		}
	}
	else if(rank_equipment == B){
		var $target1 = $('.SS');
		var $target2 = $('.A');
		var $target3 = $('.S');
		
		if($target1.css("display") == "none"){
			$target1.show();
		}
		else{
			$target1.hide();
		}
		
		if($target2.css("display") == "none"){
			$target2.show();
		}
		else{
			$target2.hide();
		}
		
		if($target3.css("display") == "none"){
			$target3.show();
		}
		else{
			$target3.hide();
		}
	}
}*/