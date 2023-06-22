const line = document.getElementById('line');
let rotation =0;

setInterval(() => {
	rotation+=4;
	line.style.transform = ` rotate(${rotation}deg`;
},25);