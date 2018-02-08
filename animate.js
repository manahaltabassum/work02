//worked with Sasha F.

var clear = document.getElementById("clear");
var canvas = document.getElementById("slate");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "powderblue";

var requestID;

var clearCanvas = function(e){
    ctx.clearRect(0,0,500,500);
};

var stopIt = function(e){
    window.cancelAnimationFrame(requestID);
};

var dvdMove = function(){
    var radius = 10;
    var x = 250;
    var y = 250;
    var xIncrement = 2;
    var yIncrement = 1;
    window.cancelAnimationFrame(requestID);
    
    var moveDot = function(){
	clearCanvas();
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	if( x == 500 || x == 0){
	    xIncrement*=-1;
	}
	if ( y == 500 || y == 0 ){
	    yIncrement*=-1;
	}
	x+= xIncrement;
	y+= yIncrement;
	requestID = window.requestAnimationFrame(moveDot);
	console.log(requestID);
    };
    moveDot();
};

var growShrink = function(){
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
circle.addEventListener("click", growShrink);
dvd.addEventListener("click", dvdMove);
