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
async function loadCharacterStatData(characterNum)
{
	return new Promise((resolve, reject)=> {
		var src = "./data/characterStat.js";
		loadData(src).then(()=> {
			var characterStatData = characterStatDataArr[characterNum];
			resolve(characterStatData);
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