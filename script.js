function nextPage() {
    window.location.href = "second.html";
}

// Matrix Happy Birthday Effect

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = [
"HAPPY BIRTHDAY MY LOVE 🎂 ",
"DR TO BE ALISHA 🎉 ",
"LOVE YOU 🕊️ ",
" H A P P Y   B I R T H D A Y   B U D U U U 🎂 ",

];

const fontSize = 20;
const rowSpacing = 135;  // Distance between words vertically
const columnSpacing = 320;  // More gap between streams
const columns = Math.floor(canvas.width / columnSpacing);

const drops = [];

for(let x=0;x<columns;x++){
    drops[x]=1;
}

function draw(){

ctx.fillStyle="rgba(14, 14, 14, 0.1)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#1bee10";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=words[Math.floor(Math.random()*words.length)];

ctx.fillText(text, i * columnSpacing, drops[i] * rowSpacing);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){

drops[i] = -2.5;

}

drops[i] += 0.20;

}

}

setInterval(draw,50);

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});
function animate(){
    draw();
    requestAnimationFrame(animate);
}

animate();