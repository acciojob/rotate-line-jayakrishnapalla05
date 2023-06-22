//your JS code here. If required.
function rotateLine(){
	let rotation=0;
	const line=document.getElementById("line");
	function update(){
		rotation=rotation+5;
		line.style.transform="rotate(${rotation}deg)";
	}
	setInterval(update, 100);
	
}
window.onload=rotateLine;
