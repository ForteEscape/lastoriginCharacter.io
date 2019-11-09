var eq_level = 1;

window.onload = async function(){
	var equipment_data = await loadEquipmentStatDataArr()
	
	drawEquipmentList(equipment_data);
}

function drawEquipmentList(data){
	for(var i = 0; i<data.length; i++){
		$('#equipmentList').append("<a class='dropdown-item' href='#' onClick = 'equipmentChk("+i+")'>"+ data[i].name +"</a>"); 
	}
}

async function equipmentChk(param){
	var equipment_arr = await loadEquipmentStatDataArr();
	var equipment_stat = await loadEquipmentStatData(equipment_arr[param].id);
	
	//console.log($(this).)
	
	calcEquipmentData(equipment_stat);
}

function setEquipmentLevel(lv){
	if(lv == 0){
		$('#eqlevel').text("Lv");
	}
	else{
		eq_level = lv;
		$('#eqlevel').text("Lv. "+lv);
	}
	
	
}

function init_equipment(){
	$('#equipment_name').text("장비 목록");
}

function calcEquipmentData(data){
	$('#equipment_name').text(data.name);
	$('#rank_slot1').text(data.rank);
	$('#currentLv_slot1').text(data.LVL);
	$('#currentEXP_slot1').text(data.curEXP);
	
	var table_SS = [1500, 2325, 3150, 3975, 4800, 5625, 6450, 7275, 8100, 8925];
	var occurEXP = 0;
	
	if(eq_level < data.LVL){
		alert('목표 레벨은 현재 레벨보다 낮을 수 없습니다!');
	}
	else{
		for(var i = data.LVL; i<(eq_level-data.LVL); i++){
			occurEXP = occurEXP+table_SS[i];
			console.log(occurEXP);
		}
		$('.occuredEXP_slot1').text(occurEXP);
	}
}

