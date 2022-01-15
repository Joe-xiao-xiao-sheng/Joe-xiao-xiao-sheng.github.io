var images = document.getElementsByClassName("showImage");
const length = images.length;
var index = 0;
var pre = index;
function lastImage(){
	changeImage(-1);
}
function nextImage(){
	changeImage(1);
}
function changeImage(x){
	index = (index + x + length)%length;
	images[index].style.opacity = "1";
	images[pre].style.opacity = "0";
	pre = index;
}
function timeChange(){
	setTimeout("timeChange()",5000);
	changeImage(1);
}
timeChange();