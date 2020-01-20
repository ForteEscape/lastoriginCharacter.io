//commom data load
function loadData(src)
{
	return new Promise((resolve, reject)=>{
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = src;
		script.addEventListener('load',()=>{resolve();}, false);
		script.addEventListener('error', ()=>{reject();}, false);
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(script, s);
	});
}

// 캐릭터 desc 로드 함수
async function loadCharacterSkillData(characterName)
{
	return new Promise(resolve=>{
		var src = "./data/characterSkill.js";
		loadData(src).then(()=>{
			var characterData = characterSkillDataArr.filter(data=>data.name==characterName)[0];
			resolve(characterData);
		});
	});
}

//캐릭터 stat 로드 함수
async function loadCharacterStatData(characterId)
{
	return new Promise((resolve, reject)=> {
		var src = "./data/characterData.js";
		loadData(src).then(()=> {
			var characterStatData = characterStatDataArr.filter(data=>data.id == characterId)[0];
			resolve(characterStatData);
		})
	});
}

async function loadEquipmentStatData(equipmentName)
{
	return new Promise((resolve, reject)=> {
		var src = "./data/equipmentData.js";
		loadData(src).then(()=> {
			var equipmentStatData = equipmentStatDataArr.filter(data=>data.id == equipmentName)[0];
			resolve(equipmentStatData);
		})
	});
}

function getURLParameter(sParam)
{
	var sPageURL = window.location.search.substring(1);
	var sURLVariable = sPageURL.split('&');
	for(var i = 0; i < sURLVariable.length; i++){
		var sParamName = sURLVariable[i].split('=');
		if(sParamName[0] == sParam){
			return sParamName[1];
		}
	}
}

async function loadEquipmentStatDataArr(){
	return new Promise((resolve, reject)=> {
		var src = "./data/equipmentData.js";
		loadData(src).then(()=> {
			var equipmentDataArr = equipmentStatDataArr;
			resolve(equipmentDataArr);
		})
	});
}

async function loadCharacterStatDataArr(){
	return new Promise((resolve, reject)=>{
		var src="./data/characterData.js";
		loadData(src).then(()=>{
			var characterDataArr = characterStatDataArr;
			resolve(characterDataArr);
		})
	})
}