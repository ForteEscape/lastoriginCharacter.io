var data_param;
var slot_id;

window.onload = async function(){
	var equipment_data = await loadEquipmentStatDataArr()
	
	drawEquipmentList(equipment_data);
}

function drawEquipmentList(data){
	for(var i = 0; i<data.length; i++){
		$('#equipmentList1').append("<a class='dropdown-item' href='#' onClick = 'equipmentChk("+i+","+1+")'>"+ data[i].name +"</a>"); 
		$('#equipmentList2').append("<a class='dropdown-item' href='#' onClick = 'equipmentChk("+i+","+2+")'>"+ data[i].name +"</a>"); 
		$('#equipmentList3').append("<a class='dropdown-item' href='#' onClick = 'equipmentChk("+i+","+3+")'>"+ data[i].name +"</a>"); 
		$('#equipmentList4').append("<a class='dropdown-item' href='#' onClick = 'equipmentChk("+i+","+4+")'>"+ data[i].name +"</a>"); 
	}
}

function init_equipment(slot_param){
	if(slot_param == 1){
		$('#equipment_name1').text("장비 목록");
		$('#rank_slot1').text(" ");
		$('#currentLv_slot1').text(" ");
		$('#currentEXP_slot1').text(" ");
		$('#img1').remove();
	}
	if(slot_param == 2){
		$('#equipment_name2').text("장비 목록");
		$('#rank_slot2').text(" ");
		$('#currentLv_slot2').text(" ");
		$('#currentEXP_slot2').text(" ");
		$('#img2').remove();
	}
	
	data_param = -1;
}

async function equipmentChk(param, slot_num){
	var equipment_arr = await loadEquipmentStatDataArr();
	var equipment_stat = await loadEquipmentStatData(equipment_arr[param].id);
	
	console.log(slot_num);
	
	if(slot_num == 1){
		$('#equipment_name1').text(equipment_stat.name);
		$('#rank_slot1').text(equipment_stat.rank);
		$('#currentLv_slot1').text(equipment_stat.LVL);
		$('#currentEXP_slot1').text(equipment_stat.curEXP);
		$('#img1').remove();
		$('#slot1_img').append("<img id=img1 src=./img/equip/"+equipment_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
	}
	else if(slot_num == 2){
		$('#equipment_name2').text(equipment_stat.name);
		$('#rank_slot2').text(equipment_stat.rank);
		$('#currentLv_slot2').text(equipment_stat.LVL);
		$('#currentEXP_slot2').text(equipment_stat.curEXP);
		$('#img2').remove();
		$('#slot2_img').append("<img id=img2 src=./img/equip/"+equipment_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
	}
	else if(slot_num == 3){
		$('#equipment_name3').text(equipment_stat.name);
		$('#rank_slot3').text(equipment_stat.rank);
		$('#currentLv_slot3').text(equipment_stat.LVL);
		$('#currentEXP_slot3').text(equipment_stat.curEXP);
		$('#img3').remove();
		$('#slot3_img').append("<img id=img3 src=./img/equip/"+equipment_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
	}
	else if(slot_num == 4){
		$('#equipment_name4').text(equipment_stat.name);
		$('#rank_slot4').text(equipment_stat.rank);
		$('#currentLv_slot4').text(equipment_stat.LVL);
		$('#currentEXP_slot4').text(equipment_stat.curEXP);
		$('#img4').remove();
		$('#slot4_img').append("<img id=img4 src=./img/equip/"+equipment_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
	}
	
	data_param = param;
	slot_id = slot_num;
}

async function calcEXP(){
	var equipmentParam = data_param;
	var slot_number = slot_id;
	
	if(equipmentParam < 0){ // invalid value
		alert('장비 선택이 되어있지 않습니다.');
		return;
	}
	
	var equipment_arr = await loadEquipmentStatDataArr();
	var equipment_stat = await loadEquipmentStatData(equipment_arr[equipmentParam].id);
	
	var equipment_goal_level;
	
	var table_SS = [0, 1500, 2325, 3150, 3975, 4800, 5625, 6450, 7275, 8100, 8925];
	var needEXP = 0;
	
	if(slot_number == 1){
		equipment_goal_level = $('#level_slot1 option:selected').attr('id');
	}
	else if(slot_number == 2){
		equipment_goal_level = $('#level_slot2 option:selected').attr('id');
	}
	else if(slot_number == 3){
		equipment_goal_level = $('#level_slot3 option:selected').attr('id');
	}
	else if(slot_number == 4){
		equipment_goal_level = $('#level_slot4 option:selected').attr('id');
	}
	
	if(equipment_goal_level == "none"){
		if(slot_number == 1){
			$('#occuredEXP_slot1').text(" ");
		}
		else if(slot_number == 2){
			$('#occuredEXP_slot2').text(" ");
		}
		else if(slot_number == 3){
			$('#occuredEXP_slot3').text(" ");
		}
		else if(slot_number == 4){
			$('#occuredEXP_slot4').text(" ");
		}
	}
	
	if(equipment_goal_level < equipment_stat.LVL){
		alert('목표 레벨은 현재 레벨보다 낮을 수 없습니다!');
	}
	else{
		if(equipment_stat.rank == "SS"){
			for(var i = equipment_stat.LVL; i<=equipment_goal_level; i++){  // first setting of equipment_stat.LVL is 0
				needEXP += table_SS[i];
			}
		}
	}
	
	if(slot_number == 1){
		$('#occuredEXP_slot1').text(needEXP);
	}
	else if(slot_number == 2){
		$('#occuredEXP_slot2').text(needEXP);
	}
	else if(slot_number == 3){
		$('#occuredEXP_slot3').text(needEXP);
	}
	else if(slot_number == 4){
		$('#occuredEXP_slot4').text(needEXP);
	}
	
	//console.log(equipment_stat.name);
	//console.log(equipment_goal_level);
}

