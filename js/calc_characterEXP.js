var data_param_slot1 = -1;
var data_param_slot2 = -1;
var data_param_slot3 = -1;
var data_param_slot4 = -1;

window.onload = async function(){
	var character_data = await loadCharacterStatDataArr();
	
	drawCharacterList(character_data);
}

function drawCharacterList(data){
	for(var i = 0; i<data.length; i++){
		$('#characterList1').append("<a class='dropdown-item' href='#' onClick='characterChk("+i+","+1+")'>"+data[i].name+"</a>");
	}
}

async function characterChk(param, slot){
	var character_arr = await loadCharacterStatDataArr();
	var character_stat = await loadCharacterStatData(character_arr[param].id);
	
	if(slot == 1){
		$('#character_name1').text(character_stat.name);
		$('#rank_slot1').text(character_stat.rank);
		$('#img1').remove();
		
		if(character_stat.brood == "bioroid"){
			$('#img_slot1').append("<img id=img1 src=./img/Profile/bioroid/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
		else if(character_stat.brood == "ags"){
			$('#img_slot1').append("<img id=img1 src=./img/Profile/ags/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
	}
}

async function characterExpCalc(){
	characterStatArr = await loadCharacterStatDataArr();
}

function init_text(slot_param){
	if(slot_param == 1){
		$('#character_name1').text("장비 목록");
		$('#rank_slot1').text(" ");
		$('#currentLv_slot1').text(" ");
		$('#currentEXP_slot1').text(" ");
		$('#img1').remove();
	}
}