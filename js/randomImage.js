var imgArray = new Array();
imgArray[0] = "img/BGA/backgroundArt1.jpg";
imgArray[1] = "img/BGA/backgroundArt2.jpg";
imgArray[2] = "img/BGA/backgroundArt3.jpg";
imgArray[3] = "img/BGA/backgroundArt4.jpg";

function showRandomImage(){
	var imgNum = Math.round(Math.random()*3);
	var objImg = document.getElementById("background");
	objImg.src = imgArray[imgNum];
}