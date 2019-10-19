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

async function loadCharacterData(characterName)
{
	return new Promise(resolve=>{
		var src = "./data/data_character.min.js";
		loadData(src).then(()=>{
			var characterData = characterDataArr.filter(data=>data.name==characterName)[0];
			resolve(characterData);
		});
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