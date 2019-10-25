function searchEquipmentType()
{
	var ischeckedChip = -1;
	var ischeckedOS = -1;
	var ischeckedEquipment = -1;
	var ischeckedDesignatedEquipment = -1;
	
	//입력 판별 - 체크되었을시
	if($('input:checkbox[id="chk_chip"]').is("checked"))
	{
		ischeckedChip = $('input:checkbox[id="chk_chip"]').val();
	}
	if($('input:checkbox[id="chk_os"]').is("checked"))
	{
		ischeckedOS = $('input:checkbox[id="chk_os"]').val();
	}
	if($('input:checkbox[id="chk_equ"]').is("checked"))
	{
		ischeckedEquipment = $('input:checkbox[id="chk_equ"]').val();
	}
	if($('input:checkbox[id="chk_dequ"]').is("checked"))
	{
		ischeckedDesignatedEquipment = $('input:checkbox[id="chk_dequ"]').val();
	}
	
	//입력 판별 - 체크가 안되있을시
	if($('input:checkbox[id="chk_chip"]').is("checked") == false)
	{
		ischeckedChip = -1;
	}
	if($('input:checkbox[id="chk_os"]').is("checked") == false)
	{
		ischeckedOS = -1;
	}
	if($('input:checkbox[id="chk_equ"]').is("checked") == false)
	{
		ischeckedEquipment = -1;
	}
	if($('input:checkbox[id="chk_dequ"]').is("checked") == false)
	{
		ischeckedDesignatedEquipment = -1;
	}
	
	// 동작부 - checked
	if(ischeckedChip != -1)
	{
		$(".os").hide();
		$(".equipment").hide();
		$(".designatedequipment").hide();
	}
	else if(ischeckedOS != -1)
	{
		$(".chip").hide();
		$(".equipment").hide();
		$(".designatedequipment").hide();	
	}
	else if(ischeckedEquipment != -1)
	{
		$(".os").hide();
		$(".chip").hide();
		$(".designatedequipment").hide();	
	}
	else if(ischeckedDesignatedEquipment != -1)
	{
		$(".chip").hide();
		$(".equipment").hide();
		$(".o").hide();	
	}
	
	if(ischeckedChip != -1 && ischeckedOS != -1)
	{
		$(".equipment").hide();
		$(".designatedequipment").hide();
	}
	if(ischeckedChip != -1 && ischeckedEquipment != -1)
	{
		$(".os").hide();
		$(".designatedequipment").hide();
	}
	if(ischeckedChip != -1 && ischeckedDesignatedEquipment != -1)
	{
		$(".os").hide();
		$(".equipment").hide();
	}
	if(ischeckedOS != -1 && ischeckedEquipment != -1)
	{
		$(".chip").hide();
		$(".designatedequipment").hide();
	}
	if(ischeckedOS != -1 && ischeckedDesignatedEquipment != -1)
	{
		$(".chip").hide();
		$(".equipment").hide();
	}
	if(ischeckedEquipment != -1 && ischeckedDesignatedEquipment != -1)
	{
		$(".chip").hide();
		$(".os").hide();
	}
	if(ischeckedChip != -1 && ischeckedOS != -1 && ischeckedEquipment != -1)
	{
		$(".designatedequipment").hide();
	}
	if(ischeckedChip != -1 && ischeckedOS != -1 && ischeckedDesignatedEquipment != -1)
	{
		$(".equipment").hide();
	}
	if(ischeckedChip != -1 && ischeckedEquipment != -1 && ischeckedDesignatedEquipment != -1)
	{
		$(".os").hide();
	}
	if(ischeckedOS != -1 && ischeckedEquipment != -1 && ischeckedDesignatedEquipment != -1)
	{
		$(".chip").hide();
	}
	
}

function searchEquipmentRank()
{
	var ischeckedRankB = -1;
	var ischeckedRankA = -1;
	var ischeckedRankS = -1;
	var ischeckedRankSS = -1;
}