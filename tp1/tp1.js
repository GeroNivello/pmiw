// Geronimo nivello, comision 1, legajo: 122815/1
//https://youtu.be/x-0cQDa7L4A

let imagen;
let colorLineas;

function preload() {
  imagen = loadImage("data/36.jpg");
}

function setup() {
  createCanvas(800, 400);
  colorLineas = color(0);
}

function draw() {
  background(255);

  fondo(44);
  medio(535, 60, 133, 16, 44);
  secuencia(5, 535, 60, 133, 0);

  image(imagen, 0, 0, width / 2, height);
}

// fondo de lineas diagonales
function fondo(sepa) {
  strokeWeight(16);
  stroke(colorLineas);
  for (let i = height; i > -width / 2; i -= sepa) {
    line(i, width, width, i);
  }
}

// esquinas del rectangulo del medio
function esquina1(x, y, ancho) { // triangulo superior
  triangle(x, y, x + ancho, y, x + ancho, y + ancho);
}

function esquina2(x, y, ancho) { // triangulo inferior
  triangle(x, y, x + ancho, y, x, y - ancho);
}

function secuencia(cant, x, y, tama, inicio) {
  noStroke();
  for ( let i = inicio; i <= cant; i++) {
    let tamMin = tama / cant;

    let x1 = map(i, inicio, cant, x, x + tama - tamMin);

    let t1 = map(i, inicio, cant, tama, tamMin);
    if (imp(i)) {
      fill(255);
    } else {
      fill(colorLineas);
    }
    esquina1(x1, y, t1); // superior

    let t2 = map(i, inicio, cant, tama, tamMin);
    if (imp(i)) {
      fill(colorLineas);
    } else {
      fill(255);
    }
    esquina2(x, y + tama * 2, t2); // inferior
  }
}

function imp(indice) {
  return indice % 2 === 1;
}

function medio(x, y, ancho, grosor, sep) {
  noStroke();
  fill(255);
  rect(x, y, ancho, ancho * 2);
  for (let i = x; i >= y; i -= sep) {
    let yFinal = i + y + ancho /2 ;

    if (yFinal <= y + ancho * 2) { // solo dibuja si no se pasa del rectangulo
      strokeWeight(grosor);
      stroke(colorLineas);
      strokeCap(PROJECT);
      line(x, i, x + ancho, yFinal);
    }
     
  }
}

function mousePressed() {
  colorLineas = color(random(255), random(255), random(255));
}

function keyPressed() {
  colorLineas = color(0);
}
