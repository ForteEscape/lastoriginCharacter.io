window.onload = async function(){
	var characterNum = getURLParameter('characterNum');
	
	var characterStatData;
	var characterDescData = await loadCharacterData(characterStatData.name);
	
	drawCharacterPage(characterStatData, characterDescData);
	
	$('.skill-nav').on('click', '.btn', function(e){
		changeSkill(e.currentTarget.hash.slice(6));
		e.preventDefault();
	});
};

function drawCharacterPage(stat, desc)
{
	if(stat.nickname){
		var characterName = stat.nickname;
	}
	else{
		var characterName = stat.name;
	}
	document.title = characterName+'정보';
	
	$('#name').append(enemyName);
	$('.image').append("<img src=\"img/Profile/"+desc.img+".png" style=\"width 100%\" />");
	writeData('LVL', stat.LVL);
	writeData('HP', stat.HP);
	writeData('ATK', stat.ATK);
	writeData('DEF', stat.DEF);
	writeData('AGI', stat.AGI);
	writeData('CRT', stat.CRT);
	writeData('HIT', stat.HIT);
	writeData('DOD', stat.DOD);
	
	for(var i = 0; i<desc.skills.length; i++)
	{
		if(stat.skillLVL[i] != 0 && stat.skillLVL[i] !==undefined){
			$('.btn:first').clone().appendTo('.skill-nav');
			$('.btn:last').attr('href', '#skill'+i);
			
			if(desc.skills[i].type == "active"){
				$('.btn:last').addClass("skill-active");
				$('.skill-icon:last').attr("src", "img/Skillicon/"+desc.skills[i].img+"_active.png");
			}
			else if(desc.skills[i].type == "passive"){
				$('.btn:last').addClass("skill-passive");
				$('.skill-icon:last').attr("src", "img/Skillicon/"+desc.skills[i].img+"_passive.img");
			}
		}
	}
	
	$('.btn:first').remove();
	$('.btn:first').addClass("active");
	
	for(var i = 0; i<desc.skills.length; i++)
	{
		if(stat.skillLVL[i] != 0 && stat.skillLVL[i] !== undefined){
			$('.skill-container:last').after($('.skill-container:first').clone());
			drawSkillInfo(i, stat.skillLVL[i], stat.skillpower[i], desc.skills[i]);
		}
	}
	$('.skill-container:first').remove();
	&('.skill-container:first').addClass('skill-container-active');
}

function drawSkillInfo(idx, LVL, power, desc)
{
	$('.skill-name:last').html("<h5> LV. "+LVL+"</h5> <h3>"+desc.name+"</h3>");
	$('.skill-range:last').html("사정거리 "+desc.range);
	if(typeof desc.areadata != "undefined")
	{
		drawSkillArea($('.skill-area:last'), desc.areadata);
	}
	else
	{
		drawSkillArea($('.skill-area:last'), [5]);
	}
	
	$('.skill-description:last').html('<p>'+desc.description+'</p>');
	$('#'+desc.title.substr(0,6)+'power'+desc.title.substr(6)).html(power);
	
	$('.active:last').removeClass("active");
	$('.skill-container:eq('+(idx+1)').btn:eq('+idx+')').addClass("active");
	if(desc.type == "active")
	{
		$('.skill-nav-wrap:last').css("border-bottom", "5px solid orange");
	}
	else if(desc.type == "passive")
	{
		$('.skill-nav-wrap:last').css("border-bottom", "5px solid skyblue");
	}
}









