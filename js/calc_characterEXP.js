var data_param_slot1 = -1;
var data_param_slot2 = -1;
var data_param_slot3 = -1;
var data_param_slot4 = -1;

var slot_id1 = 0;
var slot_id2 = 0;
var slot_id3 = 0;
var slot_id4 = 0;

window.onload = async function(){
	var character_data = await loadCharacterStatDataArr();
	
	drawCharacterList(character_data);
}

function drawCharacterList(data){
	for(var i = 0; i<data.length; i++){ // characterList
		$('#characterList1').append("<a class='dropdown-item' href='#' onClick='characterChk("+i+","+1+")'>"+data[i].name+"</a>");
		$('#characterList2').append("<a class='dropdown-item' href='#' onClick='characterChk("+i+","+2+")'>"+data[i].name+"</a>");
		$('#characterList3').append("<a class='dropdown-item' href='#' onClick='characterChk("+i+","+3+")'>"+data[i].name+"</a>");
		$('#characterList4').append("<a class='dropdown-item' href='#' onClick='characterChk("+i+","+4+")'>"+data[i].name+"</a>");
	}
	
	for(var i = 1; i<=90; i++){ // characterLevelList
		$('#character_currentLv_slot1').append("<option class="+i+">Lv."+i+"</option>");
		$('#character_goalLv_slot1').append("<option class="+i+">Lv."+i+"</option>");
		
		$('#character_currentLv_slot2').append("<option class="+i+">Lv."+i+"</option>");
		$('#character_goalLv_slot2').append("<option class="+i+">Lv."+i+"</option>");
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
	else if(slot == 2){
		$('#character_name2').text(character_stat.name);
		$('#rank_slot2').text(character_stat.rank);
		$('#img2').remove();
		
		if(character_stat.brood == "bioroid"){
			$('#img_slot2').append("<img id=img2 src=./img/Profile/bioroid/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
		else if(character_stat.brood == "ags"){
			$('#img_slot2').append("<img id=img2 src=./img/Profile/ags/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
	}
	else if(slot == 3){
		$('#character_name3').text(character_stat.name);
		$('#rank_slot3').text(character_stat.rank);
		$('#img3').remove();
		
		if(character_stat.brood == "bioroid"){
			$('#img_slot3').append("<img id=img3 src=./img/Profile/bioroid/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
		else if(character_stat.brood == "ags"){
			$('#img_slot3').append("<img id=img3 src=./img/Profile/ags/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
	}
	else if(slot == 4){
		$('#character_name4').text(character_stat.name);
		$('#rank_slot4').text(character_stat.rank);
		$('#img4').remove();
		
		if(character_stat.brood == "bioroid"){
			$('#img_slot4').append("<img id=img4 src=./img/Profile/bioroid/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
		else if(character_stat.brood == "ags"){
			$('#img_slot4').append("<img id=img4 src=./img/Profile/ags/"+character_stat.img+".png style=\"width: 50px; heigh: 50px;\" >");
		}
	}
	
	if(slot == 1){
		data_param_slot1 = param;
	}
	else if(slot == 2){
		data_param_slot2 = param;
	}
	else if(slot == 3){
		data_param_slot3 = param;
	}
	else if(slot == 4){
		data_param_slot4 = param;
	}
	
	if(slot == 1){
		slot_id1 = slot;
	}
	else if(slot == 2){
		slot_id2 = slot;
	}
	else if(slot == 3){
		slot_id3 = slot;
	}
	else if(slot == 4){
		slot_id4 = slot;
	}
}

async function characterExpCalc(){ // main
	var characterStatArr = await loadCharacterStatDataArr();
	
	var characterDataParam_slot1 = data_param_slot1;
	var characterDataParam_slot2 = data_param_slot2;
	var characterDataParam_slot3 = data_param_slot3;
	var characterDataParam_slot4 = data_param_slot4;
	
	var slot_num1 = slot_id1;
	var slot_num2 = slot_id2;
	var slot_num3 = slot_id3;
	var slot_num4 = slot_id4;
	
	var characterStatData_slot1;
	var characterStatData_slot2;
	var characterStatData_slot3;
	var characterStatData_slot4;
	
	var characterCurrentLv_slot1;
	var characterCurrentLv_slot2;
	var characterCurrentLv_slot3;
	var characterCurrentLv_slot4;

	// 캐릭터 레벨 경험치책
	var expbook1 = 3000;
	var expbook2 = 100000;
	var expbook3 = 1000000;

	// 캐릭터 스킬 경험치책
	var skillexpbook = 1000;
	var skillexpbook2 = 10000;
	var skillexpbook3 = 100000;
	
	var characterGoalLv_slot1;
	var characterGoalLv_slot2;
	var characterGoalLv_slot3;
	var characterGoalLv_slot4;
	
	var levelTable_SS = [0, 225, 242, 262, 285, 309, 341, 375, 409, 452, 495, 546, 602, 666, 735, 814, 893, 981, 1082, 1196, 1318, 1449, 1598, 1757, 1941, 2139, 2363, 2599, 2865, 3154, 3473, 3831, 4221, 4652, 5126, 5591, 6105, 6668, 7294, 7976, 8689, 9473, 10333, 11286, 12326, 13551, 14949, 16476, 18026, 19699, 21536, 23454, 25470, 27585, 29803, 32123, 34549, 37080, 39722, 42474, 45339, 48315, 51414, 54628, 57964, 61419, 64999, 68708, 72540, 76502, 80599, 84827, 89190, 93690, 98331, 103110, 108034, 113100, 118314, 123677, 129189, 134852, 140670, 146646, 152777, 159069, 165523, 172138, 178920, 185869, 192986];
	
	var levelTable_S = [0, 180, 194, 209, 228, 247, 273, 300, 327, 362, 396, 437, 482, 533, 588, 651, 714, 785, 866, 957, 1055, 1160, 1278, 1406, 1553, 1712, 1890, 2079, 2292, 2523, 2778, 3065, 3377, 3722, 4101, 4473, 4884, 5334, 5835, 6381, 6951, 7578, 8267, 9029, 9861, 10841, 11960, 13181, 14421, 15759, 17229, 18764, 20376, 22068, 23843, 25698, 27639, 29664, 31778, 33980, 36272, 38652, 41132, 43703, 46371, 49136, 51999, 54966, 58032, 61202, 64479, 67862, 71352, 74952, 78665, 82488, 86427, 90480, 94652, 98942, 103352, 107882, 112536, 117317, 122222, 127256, 132419, 137711, 143136, 148695, 154389];
	
	var levelTable_A = [0, 150, 161, 174, 190, 206, 228, 250, 273, 301, 330, 364, 401, 444, 490, 543, 595, 654, 721, 798, 879, 966, 1065, 1172, 1294, 1426, 1575, 1733, 1910, 2103, 2315, 2554, 2814, 3101, 3418, 3728, 4070, 4445, 4863, 5318, 5793, 6315, 6889, 7524, 8218, 9034, 9966, 10984, 12018, 13133, 14358, 15636, 16980, 18390, 19869, 21415, 23033, 24720, 26481, 28316, 30226, 32210, 34276, 36419, 38643, 40946, 43333, 45805, 48360, 51001, 53733, 56551, 59460, 62460, 65554, 68740, 72023, 75400, 78876, 82451, 86126, 89901, 93780, 97764, 101851, 106046, 110349, 114759, 119280, 123913, 128658];
	
	var levelTable_B = [0, 120, 129, 140, 152, 165, 182, 200, 218, 241, 264, 291, 321, 355, 392, 434, 476, 523, 577, 638, 703, 773, 852, 937, 1035, 1141, 1260, 1386, 1528, 1682, 1852, 2043, 2251, 2481, 2734, 2982, 3256, 3556, 3890, 4254, 4634, 5052, 5511, 6019, 6574, 7227, 7973, 8787, 9614, 10506, 11486, 12509, 13584, 14712, 15895, 17132, 18426, 19776, 21185, 22653, 24181, 25768, 27421, 29135, 30914, 32757, 34666, 36644, 38688, 40801, 42986, 45241, 47568, 49968, 52443, 54992, 57618, 60320, 63101, 65961, 68901, 71921, 75024, 78211, 81481, 84837, 88279, 91807, 95424, 99130, 102926];
	
	var needEXP_slot1 = 0;
	var needEXP_slot2 = 0;
	var needEXP_slot3 = 0;
	var needEXP_slot4 = 0;
	
	// load character who selected characterList
	if(slot_num1 != 0 && characterDataParam_slot1 != -1){
		characterStatData_slot1 = await loadCharacterStatData(characterStatArr[characterDataParam_slot1].id);
	}
	if(slot_num2 != 0 && characterDataParam_slot2 != -1){
		characterStatData_slot2 = await loadCharacterStatData(characterStatArr[characterDataParam_slot2].id);
	}
	if(slot_num3 != 0 && characterDataParam_slot3 != -1){
		characterStatData_slot3 = await loadCharacterStatData(characterStatArr[characterDataParam_slot3].id);
	}
	if(slot_num4 != 0 && characterDataParam_slot4 != -1){
		characterStatData_slot4 = await loadCharacterStatData(characterStatArr[characterDataParam_slot4].id);
	}
	
	// load character's Current level and character's Goal level
	if(slot_num1 != 0){
		characterCurrentLv_slot1 = $('#character_currentLv_slot1 option:selected').attr('class');
		characterGoalLv_slot1 = $('#character_goalLv_slot1 option:selected').attr('class');
	}
	if(slot_num2 != 0){
		characterCurrentLv_slot2 = $('#character_currentLv_slot2 option:selected').attr('class');
		characterGoalLv_slot2 = $('#character_goalLv_slot2 option:selected').attr('class');
	}
	if(slot_num3 != 0){
		characterCurrentLv_slot3 = $('#character_currentLv_slot3 option:selected').attr('class');
		characterGoalLv_slot3 = $('#character_goalLv_slot3 option:selected').attr('class');
	}
	if(slot_num4 != 0){
		characterCurrentLv_slot4 = $('#character_currentLv_slot4 option:selected').attr('class');
		characterGoalLv_slot4 = $('#character_goalLv_slot4 option:selected').attr('class');
	}
	
	// init EXP text
	if(characterCurrentLv_slot1 == "current_none" || characterGoalLv_slot1 == "goal_none"){
		$('#currentEXP_slot1').text("-");
		$('#goalEXP_slot1').text("-");
	}
	if(characterCurrentLv_slot2 == "current_none" || characterGoalLv_slot2 == "goal_none"){
		$('#currentEXP_slot2').text("-");
		$('#goalEXP_slot2').text("-");
	}
	if(characterCurrentLv_slot3 == "current_none" || characterGoalLv_slot3 == "goal_none"){
		$('#currentEXP_slot3').text("-");
		$('#goalEXP_slot3').text("-");
	}
	if(characterCurrentLv_slot4 == "current_none" || characterGoalLv_slot4 == "goal_none"){
		$('#currentEXP_slot4').text("-");
		$('#goalEXP_slot4').text("-");
	}
	
	// EXP calculate area
	if(slot_num1 != 0){
		if(characterCurrentLv_slot1 > characterGoalLv_slot1){
			alert("목표 레벨은 현재 레벨보다 낮을 수 없습니다!");
		}
		else if(characterCurrentLv_slot1 == NaN || characterGoalLv_slot1 == NaN){
			alert("케릭터의 현재 레벨 또는 목표 레벨을 지정해 주세요!");
		}
		else{
			if(characterStatData_slot1.rank == "SS"){
				for(var i = characterCurrentLv_slot1; i<=characterGoalLv_slot1; i++){
					needEXP_slot1 += levelTable_SS[i];
				}
			}
			else if(characterStatData_slot1.rank == "S"){
				for(var i = characterCurrentLv_slot1; i<=characterGoalLv_slot1; i++){
					needEXP_slot1 += levelTable_S[i];
				}
			}
			else if(characterStatData_slot1.rank == "A"){
				for(var i = characterCurrentLv_slot1; i<=characterGoalLv_slot1; i++){
					needEXP_slot1 += levelTable_A[i];
				}
			}
			else if(characterStatData_slot1.rank == "B"){
				for(var i = characterCurrentLv_slot1; i<=characterGoalLv_slot1; i++){
					needEXP_slot1 += levelTable_B[i];
				}
			}
		}
	}
	if(slot_num2 != 0){
		if(characterCurrentLv_slot2 > characterGoalLv_slot2){
			alert("목표 레벨은 현재 레벨보다 낮을 수 없습니다!");
		}
		else if(characterCurrentLv_slot2 == NaN || characterGoalLv_slot2 == NaN){
			alert("케릭터의 현재 레벨 또는 목표 레벨을 지정해 주세요!");
		}
		else{
			if(characterStatData_slot2.rank == "SS"){
				for(var i = characterCurrentLv_slot2; i<=characterGoalLv_slot2; i++){
					needEXP_slot2 += levelTable_SS[i];
				}
			}
			else if(characterStatData_slot2.rank == "S"){
				for(var i = characterCurrentLv_slot2; i<=characterGoalLv_slot2; i++){
					needEXP_slot2 += levelTable_S[i];
				}
			}
			else if(characterStatData_slot2.rank == "A"){
				for(var i = characterCurrentLv_slot2; i<=characterGoalLv_slot2; i++){
					needEXP_slot2 += levelTable_A[i];
				}
			}
			else if(characterStatData_slot2.rank == "B"){
				for(var i = characterCurrentLv_slot2; i<=characterGoalLv_slot2; i++){
					needEXP_slot2 += levelTable_B[i];
				}
			}
		}
	}
	if(slot_num3 != 0){
		if(characterCurrentLv_slot3 > characterGoalLv_slot3){
			alert("목표 레벨은 현재 레벨보다 낮을 수 없습니다!");
		}
		else if(characterCurrentLv_slot3 == NaN || characterGoalLv_slot3 == NaN){
			alert("케릭터의 현재 레벨 또는 목표 레벨을 지정해 주세요!");
		}
		else{
			if(characterStatData_slot3.rank == "SS"){
				for(var i = characterCurrentLv_slot3; i<=characterGoalLv_slot3; i++){
					needEXP_slot3 += levelTable_SS[i];
				}
			}
			else if(characterStatData_slot3.rank == "S"){
				for(var i = characterCurrentLv_slot3; i<=characterGoalLv_slot3; i++){
					needEXP_slot3 += levelTable_S[i];
				}
			}
			else if(characterStatData_slot3.rank == "A"){
				for(var i = characterCurrentLv_slot3; i<=characterGoalLv_slot3; i++){
					needEXP_slot3 += levelTable_A[i];
				}
			}
			else if(characterStatData_slot3.rank == "B"){
				for(var i = characterCurrentLv_slot3; i<=characterGoalLv_slot3; i++){
					needEXP_slot3 += levelTable_B[i];
				}
			}
		}
	}
	if(slot_num4 != 0){
		if(characterCurrentLv_slot4 > characterGoalLv_slot4){
			alert("목표 레벨은 현재 레벨보다 낮을 수 없습니다!");
		}
		else if(characterCurrentLv_slot4 == NaN || characterGoalLv_slot4 == NaN){
			alert("케릭터의 현재 레벨 또는 목표 레벨을 지정해 주세요!");
		}
		else{
			if(characterStatData_slot4.rank == "SS"){
				for(var i = characterCurrentLv_slot4; i<=characterGoalLv_slot4; i++){
					needEXP_slot4 += levelTable_SS[i];
				}
			}
			else if(characterStatData_slot4.rank == "S"){
				for(var i = characterCurrentLv_slot4; i<=characterGoalLv_slot4; i++){
					needEXP_slot4 += levelTable_S[i];
				}
			}
			else if(characterStatData_slot4.rank == "A"){
				for(var i = characterCurrentLv_slot4; i<=characterGoalLv_slot4; i++){
					needEXP_slot4 += levelTable_A[i];
				}
			}
			else if(characterStatData_slot4.rank == "B"){
				for(var i = characterCurrentLv_slot4; i<=characterGoalLv_slot4; i++){
					needEXP_slot4 += levelTable_B[i];
				}
			}
		}
	}
	
	if(slot_num1 != 0){
		$('#goalEXP_slot1').text(needEXP_slot1);
	}
	if(slot_num2 != 0){
		$('#goalEXP_slot2').text(needEXP_slot2);
	}
}

function init_text(slot_param){
	if(slot_param == 1){
		$('#character_name1').text("케릭터 목록");
		$('#rank_slot1').text(" ");
		$('#currentLv_slot1').text(" ");
		$('#currentEXP_slot1').text(" ");
		$('#img1').remove();
		data_param_slot1 = -1;
	}
	else if(slot_param == 2){
		$('#character_name2').text("케릭터 목록");
		$('#rank_slot2').text(" ");
		$('#currentLv_slot2').text(" ");
		$('#currentEXP_slot2').text(" ");
		$('#img2').remove();
		data_param_slot2 = -1;
	}
	else if(slot_param == 3){
		$('#character_name3').text("케릭터 목록");
		$('#rank_slot3').text(" ");
		$('#currentLv_slot3').text(" ");
		$('#currentEXP_slot3').text(" ");
		$('#img3').remove();
		data_param_slot3 = -1;
	}
	else if(slot_param == 4){
		$('#character_name4').text("케릭터 목록");
		$('#rank_slot4').text(" ");
		$('#currentLv_slot4').text(" ");
		$('#currentEXP_slot4').text(" ");
		$('#img4').remove();
		data_param_slot4 = -1;
	}
}