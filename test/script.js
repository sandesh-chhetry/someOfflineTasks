//configure canvas
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//configure height and width
 c.width = window.innerWidth;
 c.height = window.innerHeight;

//nepali font string
var nepali = "क ख ग घ ङ छ ज झ ङ त ट ठ द ढ ण प फ ब भ ए र ल ओ वो स श स्स ह छ्य त्र ग्य क ख ग घ ङ छ ज झ ङ त ट ठ द ढ ण प फ ब भ ए र ल ओ वो स श स्स ह छ्य त्र ग्य ";

//array
nepali = nepali.split("");

var font_size = 10;
var column = c.width/font_size;

var drops=[];
//making the drops start from top of the screen
for (var x= 0;x<column;x++ )
	drops[x] =1;


function draw(){
	ctx.fillStyle = "rgba(0,0,0,0.05)";
	ctx.fillRect (0,0,c.width,c.height);

	ctx.fillStyle = "#0F0";
	ctx.font = font_size + "ps arial";

	for(var i=0; i<drops.length;i++){
		var text = nepali[Math.floor(Math.random()*nepali.length)];

		ctx.fillText(text,i*font_size,drops[i]*font_size);

		if (drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		drops[i]++;
	}




}


setInterval(draw, 33);