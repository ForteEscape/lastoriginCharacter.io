window.onload = async function(){
	var equipmentID = getURLParameter('equipment');
	
	var equipmentStatData = await loadEquipmentStatData(equipmentID);
	
	drawEquipmentPage(equipmentStatData);
};

function drawEquipmentPage(stat)
{
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
}