//Gerónimo Nivello y Julián Serna - Comisión 1
//https://www.youtube.com/watch?v=Cgx-9X0US2E
let ppal;
let imgFondo, imgMarciano, imgAstronauta,imgPrincipal;
let sonFondo, sonMarciano, sonAstronauta, sonLaser;

function preload() {
  imgFondo = loadImage("data/fondo.jpg");
  imgPrincipal = loadImage("data/tutorial.jpg");
  imgMarciano = loadImage("data/marcianos.png");
  imgAstronauta = loadImage("data/astronauta.png");
  sonFondo = loadSound("data/sonidoFondo.mp3");
  sonMarciano = loadSound("data/sonidoMarciano.mp3");
  sonAstronauta = loadSound("data/sonidoAstronauta.mp3");
  sonLaser = loadSound("data/sonidoLaser.mp3");
}

function setup() {
  createCanvas(640, 480); 
  imageMode(CENTER);
  ppal = new Juego();
}

function draw() {
  background(0);
  ppal.dibujar();
}

function mousePressed() {
  ppal.mousePressed();
}

function keyPressed(){
  ppal.teclaPresionada(keyCode);
}

