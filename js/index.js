const myCanvas = document.querySelector("canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.style.border = "2px solid black";
const bgImg = new Image();
bgImg.src = "../images/road.png";
const bgImg2 = new Image();
bgImg2.src = "../images/road.png";
const carImg = new Image();
carImg.src = "../images/car.png"; 

const drawCar = () => {

  ctx.beginPath();
  ctx.drawImage(carImg, 10, 10, 10, 10)
  ctx.closePath()
  
};


let bg1Y = 0;
let bg2y = -myCanvas.height;
//game variables
let gameOver = false;
let animateId;
let isMovingLeft = false;
let isMovingRight = false;
let carX = myCanvas.width/2-15;
let red1X = 100;
let red1Y = 10;
let red2X = 150;
let red2Y = 200;
let red3X = 300;
let red3Y = 400;
let speed1 = 0;
let speed2 = 0;
let speed3 = 0;



const  drawRedLine1 = () => {  speed1 +=1;
    ctx.fillRect (red1X,speed1,100,20);
  ctx.fillStyle = "green";
    }

function drawRedLine2 () { 
  speed2 +=2;
   ctx.fillRect (red2X,speed2,200,30);
    ctx.fillStyle = "purple";}

function drawRedLine3 () {  speed3 +=1;
  ctx.fillRect (red3X,speed3,130,40);
      ctx.fillStyle = "pink";}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  
function animate(){
  ctx.drawImage(bgImg, 0, bg1Y, myCanvas.width, myCanvas.height);
  ctx.drawImage(bgImg2, 0, bg2y, myCanvas.width, myCanvas.height);
  ctx.drawImage(carImg, carX, 600, 30, 60);
  drawRedLine1 ()
  drawRedLine2 ()
  drawRedLine3 ()

  if (isMovingRight === true) { carX += 2};
  if (isMovingLeft === true) { carX -= 2} ;
  if (carX < 0) {
    carX = 0;
  }
  if (carX >= myCanvas.width - 30) {
    carX = myCanvas.width - 30;
  }

  bg1Y += 2;
  bg2y += 2;

  if(bg1Y > myCanvas.height){
    bg1Y = -myCanvas.height
  }
  if(bg2y > myCanvas.height){
    bg2y = -myCanvas.height
  }

if(!gameOver){
  animateId = requestAnimationFrame(animate);
}else{
  cancelAnimationFrame(animateId)
}
}
  function startGame() {
    animate();
   console.log("Game started");
  }
};

document.addEventListener("keypress", event =>  {
   if (event.key === 'a') {
    // move paddle to the left
    isMovingLeft = true
  }
  if (event.key === 'd') {
    // move paddle to the right
    isMovingRight = true
  }
} )

document.addEventListener("keyup", event =>  {

   isMovingLeft = false
   isMovingRight = false
 } )


