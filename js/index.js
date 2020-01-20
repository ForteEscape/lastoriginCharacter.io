//random image show
var imgArray = new Array();

imgArray[0] = "img/BGA/BGA1.jpg";
imgArray[1] = "img/BGA/BGA2.jpg";
imgArray[2] = "img/BGA/BGA3.jpg";
imgArray[3] = "img/BGA/BGA4.jpg";
imgArray[4] = "img/BGA/BGA5.jpg";
imgArray[5] = "img/BGA/BGA6.jpg";
imgArray[6] = "img/BGA/BGA7.jpg";
imgArray[7] = "img/BGA/BGA8.jpg";
imgArray[8] = "img/BGA/BGA9.jpg";
					
function showRandomImage(){
	var imgNum = Math.floor(Math.random()*(imgArray.length));
						
	document.getElementById("bga").src = imgArray[imgNum];
}
					
window.onload=showRandomImage;