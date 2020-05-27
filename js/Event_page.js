function demo1(){
	document.getElementById('output').innerHTML='CLICK event';
}
function demo2(a){
	document.getElementById('output').innerHTML=a;
}
function resize(){
	var x=window.outerWidth;
	var y=window.outerHeight;
	var z="RESIZE event";
	document.getElementById('output').innerHTML=z;
}
