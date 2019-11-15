var data_param1 = -1;
var data_param2 = -1;
var data_param3 = -1;
var data_param4 = -1;

var slot_id1 = 0;
var slot_id2 = 0;
var slot_id3 = 0;
var slot_id4 = 0;

var showResult_cnt_slot1 = -1;
var showResult_cnt_slot2 = -1;
var showResult_cnt_slot3 = -1;
var showResult_cnt_slot4 = -1;

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
		data_param1 = -1;
	}
	else if(slot_param == 2){
		$('#equipment_name2').text("장비 목록");
		$('#rank_slot2').text(" ");
		$('#currentLv_slot2').text(" ");
		$('#currentEXP_slot2').text(" ");
		$('#img2').remove();
		data_param2 = -1;
	}
	else if(slot_param == 3){
		$('#equipment_name3').text("장비 목록");
		$('#rank_slot3').text(" ");
		$('#currentLv_slot3').text(" ");
		$('#currentEXP_slot3').text(" ");
		$('#img3').remove();
		data_param3 = -1;
	}
	else if(slot_param == 4){
		$('#equipment_name4').text("장비 목록");
		$('#rank_slot4').text(" ");
		$('#currentLv_slot4').text(" ");
		$('#currentEXP_slot4').text(" ");
		$('#img4').remove();
		data_param4 = -1;
	}
}

async function equipmentChk(param, slot_num){
	var equipment_arr = await loadEquipmentStatDataArr();
	var equipment_stat = await loadEquipmentStatData(equipment_arr[param].id);
	
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
	
	if(slot_num == 1){
		data_param1 = param;
	}
	else if(slot_num == 2){
		data_param2 = param;
	}
	else if(slot_num == 3){
		data_param3 = param;
	}
	else if(slot_num == 4){
		data_param4 = param;
	}
	
	if(slot_num == 1){
		slot_id1 = slot_num;
	}
	else if(slot_num == 2){
		slot_id2 = slot_num;
	}
	else if(slot_num == 3){
		slot_id3 = slot_num;
	}
	else if(slot_num == 4){
		slot_id4 = slot_num;
	}
}

async function calcEXP(){
	var equipmentParam_slot1 = data_param1;
	var equipmentParam_slot2 = data_param2;
	var equipmentParam_slot3 = data_param3;
	var equipmentParam_slot4 = data_param4;
	
	var slot_number1 = slot_id1;
	var slot_number2 = slot_id2;
	var slot_number3 = slot_id3;
	var slot_number4 = slot_id4;
	
	var equipment_arr = await loadEquipmentStatDataArr();
	
	var equipment_stat1;
	var equipment_stat2;
	var equipment_stat3;
	var equipment_stat4;
	
	var equipment_goal_level;
	var equipment_goal_level2;
	var equipment_goal_level3;
	var equipment_goal_level4;
	
	var table_SS = [0, 1500, 2325, 3150, 3975, 4800, 5625, 6450, 7275, 8100, 8925];
	var table_S;
	var table_A;
	var table_B;
	
	var needEXP_slot1 = 0;
	var needEXP_slot2 = 0;
	var needEXP_slot3 = 0;
	var needEXP_slot4 = 0;
	
	if(slot_number1 != 0 && equipmentParam_slot1 != -1){
		equipment_stat1 = await loadEquipmentStatData(equipment_arr[equipmentParam_slot1].id);
	}
	if(slot_number2 != 0 && equipmentParam_slot2 != -1){
		equipment_stat2 = await loadEquipmentStatData(equipment_arr[equipmentParam_slot2].id);
	}
	if(slot_number3 != 0 && equipmentParam_slot3 != -1){
		equipment_stat3 = await loadEquipmentStatData(equipment_arr[equipmentParam_slot3].id);
	}
	if(slot_number4 != 0 && equipmentParam_slot4 != -1){
		equipment_stat4 = await loadEquipmentStatData(equipment_arr[equipmentParam_slot4].id);
	}
	
	if(slot_number1 != 0){
		equipment_goal_level = $('#level_slot1 option:selected').attr('id');
	}
	if(slot_number2 != 0){
		equipment_goal_level2 = $('#level_slot2 option:selected').attr('id');
	}
	if(slot_number3 != 0){
		equipment_goal_level3 = $('#level_slot3 option:selected').attr('id');
	}
	if(slot_number4 != 0){
		equipment_goal_level4 = $('#level_slot4 option:selected').attr('id');
	}
	
	if(equipment_goal_level == "none"){
		if(slot_number1 != 0){
			$('#occuredEXP_slot1').text(" ");
		}
		else if(slot_number2 != 0){
			$('#occuredEXP_slot2').text(" ");
		}
		else if(slot_number3 != 0){
			$('#occuredEXP_slot3').text(" ");
		}
		else if(slot_number4 != 0){
			$('#occuredEXP_slot4').text(" ");
		}
	}
	
	if(equipment_goal_level < equipment_stat1.LVL){
		alert('목표 레벨은 현재 레벨보다 낮을 수 없습니다!');
	}
	else{
		if(slot_number1 != 0){
			if(equipment_stat1.rank == "SS"){
				for(var i = equipment_stat1.LVL; i<=equipment_goal_level; i++){  // first setting of equipment_stat.LVL is 0
					needEXP_slot1 += table_SS[i];
				}
			}
		}
		if(slot_number2 != 0){
			if(equipment_stat2.rank == "SS"){
				for(var i = equipment_stat2.LVL; i<=equipment_goal_level2; i++){
					needEXP_slot2 += table_SS[i];
				}
			}
		}
		if(slot_number3 != 0){
			if(equipment_stat3.rank == "SS"){
				for(var i = equipment_stat3.LVL; i<=equipment_goal_level3; i++){
					needEXP_slot3 += table_SS[i];
				}
			}
		}
		if(slot_number4 != 0){
			if(equipment_stat4.rank == "SS"){
				for(var i = equipment_stat4.LVL; i<=equipment_goal_level4; i++){
					needEXP_slot4 += table_SS[i];
				}
			}
		}
	}
	
	if(slot_number1 != 0){
		$('#occuredEXP_slot1').text(needEXP_slot1);
	}
	if(slot_number2 != 0){
		$('#occuredEXP_slot2').text(needEXP_slot2);
	}
	if(slot_number3 != 0){
		$('#occuredEXP_slot3').text(needEXP_slot3);
	}
	if(slot_number4 != 0){
		$('#occuredEXP_slot4').text(needEXP_slot4);
	}
	
	showResult();
}

async function showResult(){
	var slot_number1_result = slot_id1;
	var slot_number2_result = slot_id2;
	var slot_number3_result = slot_id3;
	var slot_number4_result = slot_id4;
	
	var equipmentParam_slot1_result = data_param1;
	var equipmentParam_slot2_result = data_param2;
	var equipmentParam_slot3_result = data_param3;
	var equipmentParam_slot4_result = data_param4;
	
	var equipment_arr = await loadEquipmentStatDataArr();
	
	var equipment_stat1_show;
	var equipment_stat2_show;
	var equipment_stat3_show;
	var equipment_stat4_show;
	
	if(slot_number1_result != 0 && equipmentParam_slot1_result != -1){
		showResult_cnt_slot1++;
		
		equipment_stat1_show = await loadEquipmentStatData(equipment_arr[equipmentParam_slot1_result].id);
		
		if(showResult_cnt_slot1 == 0){
			showData(equipment_stat1_show, 1);
		}
		else{
			eraseData(1);
			showData(equipment_stat1_show, 1);
		}
	}
	else{
		eraseData(1);
	}
	
	if(slot_number2_result != 0 && equipmentParam_slot2_result != -1){
		showResult_cnt_slot2++;
		
		equipment_stat2_show = await loadEquipmentStatData(equipment_arr[equipmentParam_slot2_result].id);
		
		if(showResult_cnt_slot2 == 0){
			showData(equipment_stat2_show, 2);
		}
		else{
			eraseData(2);
			showData(equipment_stat2_show, 2);
		}
	}
	else{
		eraseData(2);
	}
	
	if(slot_number3_result != 0 && equipmentParam_slot3_result != -1){
		showResult_cnt_slot3++;
		
		equipment_stat3_show = await loadEquipmentStatData(equipment_arr[equipmentParam_slot3_result].id);
		
		if(showResult_cnt_slot3 == 0){
			showData(equipment_stat3_show, 3);
		}
		else{
			eraseData(3);
			showData(equipment_stat3_show, 3);
		}
	}
	else{
		eraseData(3);
	}
	
	if(slot_number4_result != 0 && equipmentParam_slot4_result != -1){
		showResult_cnt_slot4++;
		
		equipment_stat4_show = await loadEquipmentStatData(equipment_arr[equipmentParam_slot4_result].id);
		
		if(showResult_cnt_slot4 == 0){
			showData(equipment_stat4_show, 4);
		}
		else{
			eraseData(4);
			showData(equipment_stat4_show, 4);
		}
	}
	else{
		eraseData(4);
	}
}

function showData(data, slot){
	var equipment_level_final = 0;
	var equipment_ATK_final;
	var equipment_DEF_final;
	var equipment_CRT_final;
	var equipment_DOD_final;
	var equipment_AGI_final;
	var equipment_HIT_final;
	var equipment_HP_final;
	
	if(data.nickname){
		var equipment_name = data.nickname;
	}
	else{
		var equipment_name = data.name;
	}
	
	equipment_level_final = $('#level_slot'+slot+' option:selected').attr('id');
	equipment_ATK_final = data.ATK + (data.ATK_perlevel*equipment_level_final);
	equipment_DEF_final = data.DEF + (data.DEF_perlevel*equipment_level_final);
	equipment_CRT_final = data.CRT + (data.CRT_perlevel*equipment_level_final);
	equipment_DOD_final = data.DOD + (data.DOD_perlevel*equipment_level_final);
	equipment_AGI_final = data.AGI + (data.AGI_perlevel*equipment_level_final);
	equipment_HIT_final = data.HIT + (data.HIT_perlevel*equipment_level_final);
	equipment_HP_final = data.HP + (data.HP_perlevel*equipment_level_final);
	
	$('#name.slot'+slot).append(equipment_name);
	$('.image.slot'+slot).append("<img src=img/equip/"+data.img+".png style= width 100% />");
	writeData('LVL', 'slot'+slot, equipment_level_final);
	writeData('rank', 'slot'+slot, data.rank);
	writeData('HP', 'slot'+slot, equipment_HP_final);
	writeData('ATK', 'slot'+slot, equipment_ATK_final);
	writeData('DEF', 'slot'+slot, equipment_DEF_final);
	writeData('AGI', 'slot'+slot, equipment_AGI_final);
	writeData('CRT', 'slot'+slot, equipment_CRT_final);
	writeData('HIT', 'slot'+slot, equipment_HIT_final);
	writeData('DOD', 'slot'+slot, equipment_DOD_final);
	writeData('descript', 'slot'+slot, data.descript);
	
	if(data.ATK >= 0){
		$('#ATK.slot'+slot).prepend('+');
	}
	if(data.DEF >= 0){
		$('#DEF.slot'+slot).prepend('+');
	}
	if(data.CRT >= 0){
		$('#CRT.slot'+slot).prepend('+');
	}
	if(data.AGI >= 0){
		$('#AGI.slot'+slot).prepend('+');
	}
	if(data.DOD >= 0){
		$('#DOD.slot'+slot).prepend('+');
	}
	if(data.HIT >= 0){
		$('#HIT.slot'+slot).prepend('+');
	}
	
	if(data.ATK_gotPercentage == 0){
		$('#ATK.slot'+slot).append('%');
	}
	if(data.DEF_gotPercentage == 0){
		$('#DEF.slot'+slot).append('%');
	}
	if(data.CRT_gotPercentage == 0){
		$('#CRT.slot'+slot).append('%');
	}
	if(data.AGI_gotPercentage == 0){
		$('#AGI.slot'+slot).append('%');
	}
	if(data.DOD_gotPercentage == 0){
		$('#DOD.slot'+slot).append('%');
	}
	if(data.HIT_gotPercentage == 0){
		$('#HIT.slot'+slot).append('%');
	}
	if(data.HP_gotPercentage == 0){
		$('#HP.slot'+slot).append('%');
	}
}

function eraseData(slot){
	$('#name.slot'+slot).text(" ");
	$('.image.slot'+slot).empty();
	$('#LVL.slot'+slot).text("LV. ");
	$('#rank.slot'+slot).text(" ");
	$('#HP.slot'+slot).text("");
	$('#ATK.slot'+slot).text(" ");
	$('#DEF.slot'+slot).text(" ");
	$('#AGI.slot'+slot).text(" ");
	$('#CRT.slot'+slot).text(" ");
	$('#HIT.slot'+slot).text(" ");
	$('#DOD.slot'+slot).text(" ");
	$('#descript.slot'+slot).text(" ");
}

function writeData(str1, str2, str3)
{
	if(str3 == -1)
	{
		$('#'+str1+'.'+str2).append('???');
	}
	else
	{
		$('#'+str1+'.'+str2).append(str3);
	}
	if(str1.endsWith('HP')){
		$('#'+str1+'.'+str2).prepend('추가 HP: +');
	}
}

