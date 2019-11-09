var func_call_cnt = 0;

window.onload = async function(){
	var equipment_data = await loadEquipmentStatDataArr()
	
	drawEquipmentList(equipment_data);
	calcEquipmentData(equipment_data);
}

function drawEquipmentList(data){
	for(var i = 0; i<data.length; i++){
		$('#equipmentList').append("<a class='dropdown-item' href='#' onClick = 'equipmentChk("+i+")'>"+ data[i].name +"</a>"); // List의 onClick 부문에서 장비의 id를 param으로 보내야한다.
	}
}

function calcEquipmentData(data){
	var equipment_HP = data.HP;
	var equipment_ATK = data.ATK;
	var equipment_DEF = data.DEF;
	var equipment_AGI = data.AGI;
	var equipment_DOD = data.DOD;
	var equipment_CRT = data.CRT;
	var equipemnt_HIT = data.HIT;
	
}

async function equipmentChk(param){
	var equipment_arr = await loadEquipmentStatDataArr();
	var equipment_stat = await loadEquipmentStatData(equipment_arr[param].id);
	
	func_call_cnt++;
	
	drawEquipmentPage(equipment_stat, func_call_cnt);
	
}

function drawEquipmentPage(stat, fcnt)
{
	console.log(fcnt);
	
	if(fcnt > 1){
		var statTextVal = $('.spec-item[name=stat]');
		var nameTextVal = $('.equipmentName');
		var levelTextVal = $('.equipmentLv');
		var descTextVal = $('#descript');
		
		statTextVal.text(" ");
		nameTextVal.text(" ");
		levelTextVal.text(" ");
		descTextVal.text(" ");
		$('#img *').remove();
		
		if(stat.nickname){
			var equipmentName = stat.nickname;
		}
		else{
			var equipmentName = stat.name;
		}
		document.title = equipmentName+'정보';
	
		$('#name').append(equipmentName);
		$('.image').append("<img src=\"img/equip/"+stat.img+".png\" style=\"width 100%\" />");
		writeData('LVL', stat.LVL);
		writeData('rank', stat.rank);
		writeData('HP', stat.HP);
		writeData('ATK', stat.ATK);
		writeData('DEF', stat.DEF);
		writeData('AGI', stat.AGI);
		writeData('CRT', stat.CRT);
		writeData('HIT', stat.HIT);
		writeData('DOD', stat.DOD);
		writeData('descript', stat.descript);
	}
	else{
		if(stat.nickname){
			var equipmentName = stat.nickname;
		}
		else{
			var equipmentName = stat.name;
		}
		document.title = equipmentName+'정보';
	
		$('#name').append(equipmentName);
		$('.image').append("<img src=\"img/equip/"+stat.img+".png\" style=\"width 100%\" />");
		writeData('LVL', stat.LVL);
		writeData('rank', stat.rank);
		writeData('HP', stat.HP);
		writeData('ATK', stat.ATK);
		writeData('DEF', stat.DEF);
		writeData('AGI', stat.AGI);
		writeData('CRT', stat.CRT);
		writeData('HIT', stat.HIT);
		writeData('DOD', stat.DOD);
		writeData('descript', stat.descript);
	}
	
}

function writeData(str1, str2)
{
	if(str2 == -1)
	{
		$('#'+str1).append('???');
	}
	else
	{
		$('#'+str1).append(str2);
	}
	if(str1.endsWith('HIT') || str1.endsWith('CRT') || str1.endsWith('DOD') || str1.endsWith('ATK') || str1.endsWith('DEF') || str1.endsWith('AGI'))
	{
		$('#'+str1).append(' %');
	}
	if(str1.endsWith('HP')){
		$('#'+str1).prepend('추가 HP: +');
	}
	if(str1.endsWith('LVL')){
		$('#'+str1).prepend('LV.');
	}
}

