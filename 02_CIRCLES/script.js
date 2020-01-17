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

// random number
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


//functie
function tekenCrikel(posX, posY, radius, kleur) {
    context.beginPath();
    context.fillStyle = kleur;
    context.arc(posX, posY, radius, 0, Math.PI * 2);
    context.stroke();
    context.fill();
    context.closePath();
}

for (let i = 0; i < 5; i++) {
    tekenCrikel(100, 100, 20, "red")
}