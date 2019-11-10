var data_param;

window.onload = async function(){
	var equipment_data = await loadEquipmentStatDataArr()
	
	drawEquipmentList(equipment_data);
}

function drawEquipmentList(data){
	for(var i = 0; i<data.length; i++){
		$('#equipmentList').append("<a class='dropdown-item' href='#' onClick = 'equipmentChk("+i+")'>"+ data[i].name +"</a>"); 
	}
}

function init_equipment(){
	$('#equipment_name').text("장비 목록");
}

async function equipmentChk(param){
	var equipment_arr = await loadEquipmentStatDataArr();
	var equipment_stat = await loadEquipmentStatData(equipment_arr[param].id);
	
	data_param = param;
	return equipment_stat;
}

function calcEXP(){
	var equipmentParam = data_param;
	var equipment_stat = equipmentChk(equipmentParam);
	var equipment_goal_level = $('#level option:selected').attr('id');
	
	console.log(equipment_stat.LVL);
	console.log(equipment_goal_level);
}

