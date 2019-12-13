// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

// maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

// context.beginPath();
// context.lineWidth = "5";
// context.fillStyle = "red";
// context.arc(300,400,60,0,Math.PI*2);
// context.closePath();
// context.stroke();


let circleObject = {};
circleObject.x = 300;
circleObject.y = 300;
circleObject.radious = 60

circleObject.draw = function(){
    context.beginPath();
    context.arc(circleObject.x, circleObject.y, circleObject.radious, 0, Math.PI*2);
    context.closePath();
    context.stroke();
};

circleObject.draw();

function animate(){
    context.clearRect(0,0,width,height)
    circleObject. x = circleObject.x +4; 
    circleObject.draw();
};

setInterval(animate, 100);
