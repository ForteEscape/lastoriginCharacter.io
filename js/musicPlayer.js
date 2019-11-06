windows.onload = async function(){
	var musicID = getURLParameter('music');
	
	determineMusic(musicID);
}

function determineMusic(id){
	
	if(id == "title"){
		TrackList=[
			{
				url: './BGM/BGM_Title.mp3',
				title: 'LastOrigin title music',
				year: '2019'
			}
		]
	}
	else if(id == "lobby"){
		TrackList=[
			{
				url: './BGM/BGM_Lobby.mp3',
				title: 'LastOrigin lobby music',
				year: '2019'
			}
		]
	}
	else if(id == "battle1"){
		TrackList=[
			{
				url: './BGM/BGM_Battle_01.mp3',
				title: 'LastOrigin battle music1',
				year: '2019'
			}
		]
	}
	else if(id == "battle2"){
		TrackList=[
			{
				url: './BGM/BGM_Battle_02.mp3',
				title: 'LastOrigin battle music2',
				year: '2019'
			}
		]
	}
	else if(id == "battle3"){
		TrackList=[
			{
				url: './BGM/BGM_Battle_03.mp3',
				title: 'LastOrigin battle music3',
				year: '2019'
			}
		]
	}
	else if(id == "boss1"){
		TrackList=[
			{
				url: './BGM/BGM_Battle_Boss_01.mp3',
				title: 'LastOrigin BossBattle music1',
				year: '2019'
			}
		]
	}
	else if(id == "boss2"){
		TrackList=[
			{
				url: './BGM/BGM_Battle_Boss_02.mp3',
				title: 'LastOrigin BossBattle music2',
				year: '2019'
			}
		]
	}
	
	
	
}