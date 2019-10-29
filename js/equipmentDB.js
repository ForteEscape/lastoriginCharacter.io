var ischecked_chip = false;
var ischecked_os = false;
var ischecked_equipment = false;
var ischecked_designate = false;
	
var ischecked_B = false;
var ischecked_A = false;
var ischecked_S = false;
var ischecked_SS = false;
	
function searchByEquipmentType(type_equipment)
{	
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
	
	console.log("check A"+ischecked_A);
	console.log("check B"+ischecked_B);
	console.log("check S"+ischecked_S);
	console.log("check SS"+ischecked_SS);
	
	if(type_equipment == chk_chip){
		if(ischecked_chip == false){
			ischecked_chip = true;
		}
		else if(ischecked_chip == true){
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
				if(ischecked_A == true){
					$chip_A.show();
				}
				if(ischecked_S == true){
					$chip_S.show();
				}
				if(ischecked_SS == true){
					$chip_SS.show();
				}
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$chip.show();
				}
			}
		}
		else if(ischecked_chip == false){
			if(ischecked_B == true){
				searchByEquipmentRank(B);
			}
			if(ischecked_A == true){
				searchByEquipmentRank(A);
			}
			if(ischecked_S == true){
				searchByEquipmentRank(S);
			}
			if(ischecked_SS == true){
				searchByEquipmentRank(SS);
			}
			
			if(ischecked_os == true || ischecked_equipment == true || ischecked_designate == true){
				$chip.hide();
			}
			
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					alert("swich fail");
					$chip.show();
					$os.show();
					$equipment.show();
					$designate.show();
				}
				if(ischecked_B == true){
					searchByEquipmentRank(B);
				}
				if(ischecked_A == true){
					searchByEquipmentRank(A);
				}
				if(ischecked_S == true){
					searchByEquipmentRank(S);
				}
				if(ischecked_SS == true){
					searchByEquipmentRank(SS);
				}
			}
		}
		
	}
	else if(type_equipment == chk_os){
		if(ischecked_os == false){
			ischecked_os = true;
		}
		else if(ischecked_os == true){
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
			
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$chip.show();
					$os.show();
					$equipment.show();
					$designate.show();
				}
				if(ischecked_B == true){
					searchByEquipmentRank(B);
				}
				if(ischecked_A == true){
					searchByEquipmentRank(A);
				}
				if(ischecked_S == true){
					searchByEquipmentRank(S);
				}
				if(ischecked_SS == true){
					searchByEquipmentRank(SS);
				}
			}
		}
	}
	else if(type_equipment == chk_equ){
		if(ischecked_equipment == false){
			ischecked_equipment = true;
		}
		else if(ischecked_equipment == true){
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
			if(ischecked_chip == true || ischecked_os == true || ischecked_designate == true){
				$equipment.hide();
			}
			
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$chip.show();
					$os.show();
					$equipment.show();
					$designate.show();
				}
				if(ischecked_B == true){
					searchByEquipmentRank(B);
				}
				if(ischecked_A == true){
					searchByEquipmentRank(A);
				}
				if(ischecked_S == true){
					searchByEquipmentRank(S);
				}
				if(ischecked_SS == true){
					searchByEquipmentRank(SS);
				}
			}
		}
	}
	else if(type_equipment == chk_dequ){
		if(ischecked_designate == false){
			ischecked_designate = true;
		}
		else if(ischecked_designate == true){
			ischecked_designate = false;
		}
		
		if(ischecked_designate == true){
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false){
				$chip.hide();
				$os.hide();
				$equipment.hide();
			}
			else{
				if(ischecked_B == true){
					$designate_B.show();
				}
				if(ischecked_A == true){
					$designate_A.show();
				}
				if(ischecked_S == true){
					$designate_S.show();
				}
				if(ischecked_SS == true){
					$designate_SS.show();
				}
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$designate.show();
				}
			}
		}
		else if(ischecked_designate == false){
			if(ischecked_chip == true || ischecked_os == true || ischecked_equipment == true){
				$designate.hide();
			}
			
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_A == false && ischecked_B == false && ischecked_S == false && ischecked_SS == false){
					$chip.show();
					$os.show();
					$equipment.show();
					$designate.show();
				}
				if(ischecked_B == true){
					searchByEquipmentRank(B);
				}
				if(ischecked_A == true){
					searchByEquipmentRank(A);
				}
				if(ischecked_S == true){
					searchByEquipmentRank(S);
				}
				if(ischecked_SS == true){
					searchByEquipmentRank(SS);
				}
			}
		}
	}	
}

function searchByEquipmentRank(rank_equipment)
{
	var $rank_B = $('.B');
	var $rank_A = $('.A');
	var $rank_S = $('.S');
	var $rank_SS = $('.SS');

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
	
	if(rank_equipment == B){
		if(ischecked_B == false){
			ischecked_B = true;
		}
		else if(ischecked_B == true){
			ischecked_B = false;
		}
		
		if(ischecked_B == true){
			if(ischecked_A == false && ischecked_S == false && ischecked_SS == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_designate == false && ischecked_equipment == false){
					$rank_SS.hide();
					$rank_S.hide();
					$rank_A.hide();
				}
				else{
					if(ischecked_chip == true){
						$chip_A.hide();
						$chip_S.hide();
						$chip_SS.hide();
					}
					if(ischecked_os == true){
						$os_A.hide();
						$os_S.hide();
						$os_SS.hide();
					}
					if(ischecked_equipment == true){
						$equipment_A.hide();
						$equipment_S.hide();
						$equipment_SS.hide();
					}
					if(ischecked_designate == true){
						$designate_A.hide();
						$designate_S.hide();
						$designate_SS.hide();
					}
				}
			}
			else{
				if(ischecked_chip == true){
					$chip_B.show();
				}
				if(ischecked_os == true){
					$os_B.show();
				}
				if(ischecked_equipment == true){
					$equipment_B.show();
				}
				if(ischecked_designate == true){
					$designate_B.show();
				}
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_B.show();
				}
			}
		}
		else if(ischecked_B == false){
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_A == true || ischecked_S == true || ischecked_SS == true){
					$rank_B.hide();
				}
			}
			else{
				if(ischecked_chip == true){
					if(ischecked_A == true || ischecked_S == true || ischecked_SS == true){
						$chip_B.hide();
					}
				}
				if(ischecked_os == true){
					if(ischecked_A == true || ischecked_S == true || ischecked_SS == true){
						$os_B.hide();
					}
				}
				if(ischecked_equipment == true){
					if(ischecked_A == true || ischecked_S == true || ischecked_SS == true){
						$equipment_B.hide();
					}
				}
				if(ischecked_designate == true){
					if(ischecked_A == true || ischecked_S == true || ischecked_SS == true){
						$designate_B.hide();
					}
				}
			}
			
			if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_B.show();
					$rank_A.show();
					$rank_S.show();
					$rank_SS.show();
				}
				if(ischecked_chip == true){
					$chip.show();
				}
				if(ischecked_os == true){
					$os.show();
				}
				if(ischecked_equipment == true){
					$equipment.show();
				}
				if(ischecked_designate == true){
					$designate.show();
				}
			}
		}
	}
	else if(rank_equipment == A){ // 코드 참조할 것
		if(ischecked_A == false){
			ischecked_A = true;
		}
		else if(ischecked_A == true){
			ischecked_A = false;
		}
		
		if(ischecked_A == true){
			if(ischecked_B == false && ischecked_S == false && ischecked_SS == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_designate == false && ischecked_equipment == false){
					$rank_SS.hide();
					$rank_S.hide();
					$rank_B.hide();
				}
				else{
					if(ischecked_chip == true){
						$chip_B.hide();
						$chip_S.hide();
						$chip_SS.hide();
					}
					if(ischecked_os == true){
						$os_B.hide();
						$os_S.hide();
						$os_SS.hide();
					}
					if(ischecked_equipment == true){
						$equipment_B.hide();
						$equipment_S.hide();
						$equipment_SS.hide();
					}
					if(ischecked_designate == true){
						$designate_B.hide();
						$designate_S.hide();
						$designate_SS.hide();
					}
				}
			}
			else{
				if(ischecked_chip == true){
					$chip_A.show();
				}
				if(ischecked_os == true){
					$os_A.show();
				}
				if(ischecked_equipment == true){
					$equipment_A.show();
				}
				if(ischecked_designate == true){
					$designate_A.show();
				}
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_A.show();
				}
			}
		}
		else if(ischecked_A == false){
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_B == true || ischecked_S == true || ischecked_SS == true){
					$rank_A.hide();
				}
			}
			else{
				if(ischecked_chip == true){
					if(ischecked_B == true || ischecked_S == true || ischecked_SS == true){
						$chip_A.hide();
					}
				}
				if(ischecked_os == true){
					if(ischecked_B == true || ischecked_S == true || ischecked_SS == true){
						$os_A.hide();
					}
				}
				if(ischecked_equipment == true){
					if(ischecked_B == true || ischecked_S == true || ischecked_SS == true){
						$equipment_A.hide();
					}
				}
				if(ischecked_designate == true){
					if(ischecked_B == true || ischecked_S == true || ischecked_SS == true){
						$designate_A.hide();
					}
				}
			}
			
			if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_B.show();
					$rank_A.show();
					$rank_S.show();
					$rank_SS.show();
				}
				if(ischecked_chip == true){
					$chip.show();
				}
				if(ischecked_os == true){
					$os.show();
				}
				if(ischecked_equipment == true){
					$equipment.show();
				}
				if(ischecked_designate == true){
					$designate.show();
				}
			}
		}
	}
	else if(rank_equipment == S){
		if(ischecked_S == false){
			ischecked_S = true;
		}
		else if(ischecked_S == true){
			ischecked_S = false;
		}
		
		if(ischecked_S == true){
			if(ischecked_B == false && ischecked_A == false && ischecked_SS == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_designate == false && ischecked_equipment == false){
					$rank_SS.hide();
					$rank_A.hide();
					$rank_B.hide();
				}
				else{
					if(ischecked_chip == true){
						$chip_B.hide();
						$chip_A.hide();
						$chip_SS.hide();
					}
					if(ischecked_os == true){
						$os_B.hide();
						$os_A.hide();
						$os_SS.hide();
					}
					if(ischecked_equipment == true){
						$equipment_B.hide();
						$equipment_A.hide();
						$equipment_SS.hide();
					}
					if(ischecked_designate == true){
						$designate_B.hide();
						$designate_A.hide();
						$designate_SS.hide();
					}
				}
			}
			else{
				if(ischecked_chip == true){
					$chip_S.show();
				}
				if(ischecked_os == true){
					$os_S.show();
				}
				if(ischecked_equipment == true){
					$equipment_S.show();
				}
				if(ischecked_designate == true){
					$designate_S.show();
				}
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_S.show();
				}
			}
		}
		else if(ischecked_S == false){
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_B == true || ischecked_A == true || ischecked_SS == true){
					$rank_S.hide();
				}
			}
			else{
				if(ischecked_chip == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_SS == true){
						$chip_S.hide();
					}
				}
				if(ischecked_os == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_SS == true){
						$os_S.hide();
					}
				}
				if(ischecked_equipment == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_SS == true){
						$equipment_S.hide();
					}
				}
				if(ischecked_designate == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_SS == true){
						$designate_S.hide();
					}
				}
			}
			
			if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_B.show();
					$rank_A.show();
					$rank_S.show();
					$rank_SS.show();
				}
				if(ischecked_chip == true){
					$chip.show();
				}
				if(ischecked_os == true){
					$os.show();
				}
				if(ischecked_equipment == true){
					$equipment.show();
				}
				if(ischecked_designate == true){
					$designate.show();
				}
			}
		}
	}
	else if(rank_equipment == SS){
		if(ischecked_SS == false){
			ischecked_SS = true;
		}
		else if(ischecked_SS == true){
			ischecked_SS = false;
		}
		
		if(ischecked_SS == true){
			if(ischecked_B == false && ischecked_A == false && ischecked_S == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_designate == false && ischecked_equipment == false){
					$rank_S.hide();
					$rank_A.hide();
					$rank_B.hide();
				}
				else{
					if(ischecked_chip == true){
						$chip_B.hide();
						$chip_A.hide();
						$chip_S.hide();
					}
					if(ischecked_os == true){
						$os_B.hide();
						$os_A.hide();
						$os_S.hide();
					}
					if(ischecked_equipment == true){
						$equipment_B.hide();
						$equipment_A.hide();
						$equipment_S.hide();
					}
					if(ischecked_designate == true){
						$designate_B.hide();
						$designate_A.hide();
						$designate_S.hide();
					}
				}
			}
			else{
				if(ischecked_chip == true){
					$chip_SS.show();
				}
				if(ischecked_os == true){
					$os_SS.show();
				}
				if(ischecked_equipment == true){
					$equipment_SS.show();
				}
				if(ischecked_designate == true){
					$designate_SS.show();
				}
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_SS.show();
				}
			}
		}
		else if(ischecked_SS == false){
			if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
				if(ischecked_B == true || ischecked_A == true || ischecked_S == true){
					$rank_SS.hide();
				}
			}
			else{
				if(ischecked_chip == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_S == true){
						$chip_SS.hide();
					}
				}
				if(ischecked_os == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_S == true){
						$os_SS.hide();
					}
				}
				if(ischecked_equipment == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_S == true){
						$equipment_SS.hide();
					}
				}
				if(ischecked_designate == true){
					if(ischecked_B == true || ischecked_A == true || ischecked_S == true){
						$designate_SS.hide();
					}
				}
			}
			
			if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
				if(ischecked_chip == false && ischecked_os == false && ischecked_equipment == false && ischecked_designate == false){
					$rank_B.show();
					$rank_A.show();
					$rank_S.show();
					$rank_SS.show();
				}
				if(ischecked_chip == true){
					$chip.show();
				}
				if(ischecked_os == true){
					$os.show();
				}
				if(ischecked_equipment == true){
					$equipment.show();
				}
				if(ischecked_designate == true){
					$designate.show();
				}
			}
		}
	}
}