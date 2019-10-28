var ischecked_chip = false;
var ischecked_os = false;
var ischecked_equipment = false;
var ischecked_designate = false;
	
var ischecked_B = false;
var ischecked_A = false;
var ischecked_S = false;
var ischecked_SS = false;
	
var chip_cnt = 0;
var os_cnt = 0;
var equipment_cnt = 0;
var designate_cnt = 0;
	
//분기문에서 사용될 변수들
var $chip = $('.chip');
var $chip_B = $('.chip.B');
var $chip_A = $('.chip.A');
var $chip_S = $('.chip.S');
var $chip_SS = $('.chip.SS');
	
var $equipment = $('.equipment');
var $equipment_B = $('.equipment.B');
var $equipment_A = $('.equipment.A');
var $equipment_S = $('.equipment.S');
var $equipment_SS = $('.equipment.SS');
	
var $os = $('.os');
var $os_B = $('.os.B');
var $os_A = $('.os.A');
var $os_S = $('.os.S');
var $os_SS = $('.os.SS');
	
var $designate = $('.designate');
var $designate_B = $('.designate.B');
var $designate_A = $('.designate.A');
var $designate_S = $('.designate.S');
var $designate_SS = $('.designate.SS');

function searchByEquipmentType(type_equipment)
{	
	if(type_equipment == chk_chip){
		chip_cnt++;
		
		if((chip_cnt%2) != 0){
			ischecked_chip = true;
		}
		else{
			ischecked_chip = false;
		}
		
		if(ischecked_chip == true){
			if(ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				$os.hide();
				$equipment.hide();
				$designate.hide();
			}
			else{
				if(ischecked_B == true){
					$chip_B.show();
				}
				else if(ischecked_A == true){
					$chip_A.show();
				}
				else if(ischecked_S == true){
					$chip_S.show();
				}
				else if(ischecked_SS == true){
					$chip_SS.show();
				}
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$chip.show();
				}
			}
		}
		else if(ischecked_chip == false){
			if(ischecked_os == true || ischecked_equipment == true || ischecked_designate == true){
				$chip.hide();
			}
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
		
		if(ischecked_os == true){
			if(ischecked_chip == false && ischecked_equipment == false && ischecked_designate == false){
				$chip.hide();
				$equipment.hide();
				$designate.hide();
			}
			else{
				if(ischecked_B == true){
					$os_B.show();
				}
				if(ischecked_A == true){
					$os_A.show();
				}
				if(ischecked_S == true){
					$os_S.show();
				}
				if(ischecked_SS == true){
					$os_SS.show();
				}
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$os.show();
				}
			}
		}
		else if(ischecked_os == false){
			if(ischecked_chip == true || ischecked_equipment == true || ischecked_designate == true){
				$os.hide();
			}
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
		
		if(ischecked_equipment == true){
			if(ischecked_chip == false && ischecked_os == false && ischecked_designate == false){
				$chip.hide();
				$os.hide();
				$designate.hide();
			}
			else{
				if(ischecked_B == true){
					$equipment_B.show();
				}
				if(ischecked_A == true){
					$equipment_A.show();
				}
				if(ischecked_S == true){
					$equipment_S.show();
				}
				if(ischecked_SS == true){
					$equipment_SS.show();
				}
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$equipment.show();
				}
			}
		}
		else if(ischecked_equipment == false){
			if(ischecked_os == true || ischecked_chip == true || ischecked_designate == true){
				$equipment.hide();
			}
		}
	}
		
	
	if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
		if(ischecked_B == true){
			$chip_B.show();
			$os_B.show();
			$equipment_B.show();
			$designate_B.show();
		}
		if(ischecked_A == true){
			$chip_A.show();
			$os_A.show();
			$equipment_A.show();
			$designate_A.show();
		}
		if(ischecked_S == true){
			$chip_S.show();
			$os_S.show();
			$equipment_S.show();
			$designate_S.show();
		}
		if(ischecked_SS == true){
			$chip_SS.show();
			$os_SS.show();
			$equipment_SS.show();
			$designate_SS.show();
		}
		if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
			$chip.show();
			$os.show();
			$equipment.show();
			$designate.show();
		}
	}
	
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