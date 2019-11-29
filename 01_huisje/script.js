// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
context.beginPath();
context.fillStyle = "#fc4e03";
context.lineWidth = 5;
context.strokeStyle = "blue";
context.lineTo(300, 100);
context.lineTo(700, 200);
context.lineTo(600, 400);
context.lineTo(200, 300);
context.closePath();
context.stroke();
context.fill();


///2


context.beginPath();
context.fillStyle = "grey";
context.lineWidth = 5;
context.strokeStyle = "blue";
context.lineTo(700, 200);
context.lineTo(600, 400);
context.lineTo(800, 300);
context.closePath();
context.stroke();
context.fill();

////3

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "blue";
context.lineTo(600, 400);
context.lineTo(800, 300);
context.lineTo(800, 500);
context.lineTo(600, 600);
context.closePath();
context.stroke();
context.fill();

/////4

context.beginPath();
context.fillStyle = "white";
context.lineWidth = 5;
context.strokeStyle = "blue";
context.lineTo(600, 400);
context.lineTo(200, 300);
context.lineTo(200, 500);
context.lineTo(600, 600);
context.closePath();
context.stroke();
context.fill();

/////DEUR

context.beginPath();
context.fillStyle = "#6b2000";
context.lineWidth = 5;
context.strokeStyle = "red";
context.lineTo(400, 550);
context.lineTo(400, 400);
context.lineTo(300, 375);
context.lineTo(300, 525);
context.closePath();
context.stroke();
context.fill();


/////

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "red";
context.lineTo(400, 100);
context.lineTo(400, 200);
context.lineTo(475, 225);
context.lineTo(475, 125);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "red";
context.lineTo(525, 100);
context.lineTo(525, 175);
context.lineTo(475, 225);
context.lineTo(475, 125);
context.closePath();
context.stroke();
context.fill();


context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "red";
context.lineTo(455, 80);
context.lineTo(400, 100);
context.lineTo(475, 125);
context.lineTo(525, 100);
context.closePath();
context.stroke();
context.fill();

//cirkel