window.onload = function(){
	console.log("Initial value: " + localStorage["scrollValue"]);
	document.getElementById("scrollSpeed").value = localStorage["scrollValue"];
	var inputBoxElement = document.getElementById("scrollSpeed");
   localStorage["scrollValue"] = inputBoxElement.value;
   localStorage["scrollSpeed"] = Math.exp((1000-inputBoxElement.value)/110)-1;
   document.getElementById("rangevalue").value = Math.round(inputBoxElement.value/10);
   console.log("Scroll Speed: " + localStorage["scrollSpeed"]);
};

document.getElementById("scrollSpeed").addEventListener("change",function setScrollSpeed(){
   var inputBoxElement = document.getElementById("scrollSpeed");
   localStorage["scrollValue"] = inputBoxElement.value;
   localStorage["scrollSpeed"] = Math.exp((1000-inputBoxElement.value)/110)-1;
   document.getElementById("rangevalue").value = Math.round(inputBoxElement.value/10);
   console.log("Scroll Speed: " + localStorage["scrollSpeed"]);
});
