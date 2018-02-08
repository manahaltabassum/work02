var clear = document.getElementById("clear");
var canvas = document.getElementById("slate");
var stop = document.getElementById("stop");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "lightsteelblue";

var requestID;

var clearCanvas = function(e){
    ctx.clearRect(0,0,500,500);
};

var stopIt = function(e){
    window.cancelAnimationFrame(requestID);
};

var animate = function(){
    var radius = 0;
    var grow = true;
    window.cancelAnimationFrame(requestID);
    
    var growDot = function(){
	clearCanvas();
	ctx.beginPath();
	ctx.arc(250,250,radius,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	if (grow){
	    radius++;
	    if (radius >= canvas.height/2){
		grow = false;
	    }
	}
	else {
	    radius--;
	    if (radius <= 0){
		grow = true;
	    }
	};
	requestID = window.requestAnimationFrame(growDot);
	console.log(requestID);
    };
    growDot();
};


clear.addEventListener("click", clearCanvas);
stop.addEventListener("click", stopIt);
canvas.addEventListener("click", animate);
