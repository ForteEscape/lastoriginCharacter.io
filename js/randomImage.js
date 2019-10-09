var imgArray = new Array();
imgArray[0] = "img/BGA/BGA1jpg";
imgArray[1] = "img/BGA/BGA2.jpg";
imgArray[2] = "img/BGA/BGA3.jpg";
imgArray[3] = "img/BGA/BGA4.jpg";

function showRandomImage(){
	var imgNum = Math.round(Math.random()*3);
	var objImg = document.getElementById("background");
	objImg.src = imgArray[imgNum];
}