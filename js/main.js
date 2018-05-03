//Get Radio buttons
var radio = document.getElementsByTagName('input');

//Get Lables
var sabine = document.getElementById('sabLab');
var patrick = document.getElementById('patLab');
var maryam = document.getElementById('marLab');
var mario = document.getElementById('mioLab');

//Get Radio inputs
var sabCheck = document.getElementById('sabCheck');
var patCheck = document.getElementById('patCheck');
var marCheck = document.getElementById('marCheck');
var mioCheck = document.getElementById('mioCheck');

var btnContainer = document.getElementById("nameSelect");
var btns = btnContainer.getElementsByClassName("state");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

//Smooth scroll back to top 
var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}