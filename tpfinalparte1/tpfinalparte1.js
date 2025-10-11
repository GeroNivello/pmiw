//https://youtu.be/g-4taJlgo3A
//Gerónimo Nivello y Julián Serna - Comisión 1

let imagen = [];
let transicion, musicaFondo;
let estado = 0;
let frases = [
  'La cuarta expedición arriba al planeta, pero a diferencia de las anteriores, no encuentran resistencia marciana.', //P2
  'Los astronautas descubren que la mayoría de los marcianos han muerto a causa de una enfermedad similar a la varicela, traída en contactos previos con humanos, encontrando ciudades abandonadas.', //P3
  'La noticia provoca reacciones opuestas: unos sienten pesar por la tragedia, otros solo celebran su “victoria” y la posibilidad de colonizar. Wilder no sabe si controlar a su tripulación o dejarse llevar por la actitud de esta.', //P4
  'El capitán tiene respeto por lo que fue la civilización y convence a la tripulación de volver a la tierra, para guardar la memoria y el recuerdo los marcianos.', //A1Final1
  'El capitán no tiene respeto hacia lo que fue la civilización marciana y con su tripulación comienzan a romper los monumentos y estructuras en pie.', //B1P1
  'Uno de los astronautas, Spender, empieza a aislarse, cada vez más perturbado por la destrucción cultural que la colonización va a implicar.', //B1P2
  'Spender asesina a varios de sus compañeros como acto desesperado para defender las estructuras marcianas restantes.', //A2P1
  'El capitán Wilder se ve forzado a detener a Spender, pero antes escucha sus argumentos sobre la necesidad de respetar el planeta y su cultura.', //A2P2
  'Wilder termina matando a Spender en un enfrentamiento, aunque lo hace con pesar y reconociendo su lucidez y reflexiona sobre la tragedia, Marte fue “conquistado”, pero a costa de borrar una cultura entera.', //A2Final2
  'Spender decide aislarse por completo y encuentra marcianos que sobrevivieron al apocalipsis.', //B2P1
  'Spender les cuenta a los marcianos que sus compañeros están vandalizando todos los monumentos y estructuras abandonadas.', //B2P2
  'Los marcianos se suman a Spender, encuentran al resto de tripulantes y los matan uno por uno.', //B3Final3
  'Los marcianos no creen lo que Spender les cuenta y lo matan.', //A3P1
  'La tripulación encuentra a los marcianos sobrevivientes y los matan.' //A3Final4
];

function preload() {
  transicion = loadSound('data/transicion.wav');
  musicaFondo = loadSound('data/musicafondo.mp3');
  for (let i = 0; i < 16; i++) {
    imagen[i] = loadImage("data/file" + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  musicaFondo.loop();
  musicaFondo.amp(0.5);
  textSize(20);
  textAlign(CENTER, CENTER);  
}

function draw() {
  background(0);
  if (estado === 0) { //P1: Inicio
    fondo(imagen[0]);
    boton(width / 2 - 75, 400, 150, 50, "Comenzar");
  } 
  else if (estado === 1) { //P2
    fondo(imagen[1], frases[0]);
    boton(width / 2 - 75, 400, 150, 50, "Avanzar");
  } 
  else if (estado === 2) { //P3
    fondo(imagen[2], frases[1]);
    boton(width / 2 - 75, 400, 150, 50, "Avanzar");
  } 
  else if (estado === 3) { //P4: decisión 1
    fondo(imagen[3], frases[2]);
    boton(50, 400, 165, 50, "Tiene piedad");
    boton(440, 400, 165, 50, "Pierde la cordura");
  } 
  else if (estado === 4) { //A1Final1
    fondo(imagen[4], frases[3]);
    boton(50, 400, 165, 50, "Volver al inicio");
    boton(440, 400, 165, 50, "Créditos");
  } 
  else if (estado === 5) { //B1P1
    fondo(imagen[5], frases[4]);
    boton(width / 2 - 75, 400, 150, 50, "Avanzar");
  } 
  else if (estado === 6) { //B1P2: decisión 2
    fondo(imagen[6], frases[5]);
    boton(50, 400, 165, 50, "Se impacienta");
    boton(440, 400, 165, 50, "Se va a explorar");
  } 
  else if (estado === 7) { //A2P1
    fondo(imagen[7], frases[6]);
    boton(width / 2 - 75, 400, 150, 50, "Avanzar");
  } 
  else if (estado === 8) { //A2P2
    fondo(imagen[8], frases[7]);
    boton(width / 2 - 75, 400, 150, 50, "Avanzar");
  } 
  else if (estado === 9) { //A2Final2
    fondo(imagen[9], frases[8]);
    boton(50, 400, 165, 50, "Volver al inicio");
    boton(440, 400, 165, 50, "Créditos");
  } 
  else if (estado === 10) { //B2P1
    fondo(imagen[10], frases[9]);
    boton(width / 2 - 75, 400, 150, 50, "Avanzar");
  } 
  else if (estado === 11) { //B2P2: decisión 3
    fondo(imagen[11], frases[10]);
    boton(50, 400, 165, 50, "No le creen");
    boton(440, 400, 165, 50, "Le creen");
  } 
  else if (estado === 12) { //B3Final3
    fondo(imagen[12], frases[11]);
    boton(50, 400, 165, 50, "Volver al inicio");
    boton(440, 400, 165, 50, "Créditos");
  } 
  else if (estado === 13) { //A3P1
    fondo(imagen[13], frases[12]);
    boton(width / 2 - 75, 400, 150, 50, "Avanzar");
  } 
  else if (estado === 14) { //A3Final4
    fondo(imagen[14], frases[13]);
    boton(50, 400, 165, 50, "Volver al inicio");
    boton(440, 400, 165, 50, "Créditos");
  } 
  else if (estado === 15) { //Créditos
    fondo(imagen[15]);
    boton(width / 2 - 75, 400, 150, 50, "Volver al inicio");
  }
}

function mousePressed() {
  transicion.play();
  if (estado === 0) { //P1 a P2
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 1;
    }
  } 
  else if (estado === 1) { //P2 a P3
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 2;
    }
  } 
  else if (estado === 2) { //P3 a P4
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 3;
    }
  } 
  else if (estado === 3) { //P4 a A1Final1 o B1P1
    if (overMouse(50, 400, 165, 50)) {
      estado = 4;
    } 
    else if (overMouse(440, 400, 165, 50)) {
      estado = 5;
    }
  } 
  else if (estado === 4) { //A1Final1 a P1 o créditos
    if (overMouse(50, 400, 165, 50)) {
      estado = 0;
    } 
    else if (overMouse(440, 400, 165, 50)) {
      estado = 15;
    }
  } 
  else if (estado === 5) { //B1P1 a B1P2
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 6;
    }
  } 
  else if (estado === 6) { //B1P2 a A2P1 o B2P1
    if (overMouse(50, 400, 165, 50)) {
      estado = 7;
    } 
    else if (overMouse(440, 400, 165, 50)) {
      estado = 10;
    }
  } 
  else if (estado === 7) { //A2P1 a A2P2
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 8;
    }
  } 
  else if (estado === 8) { //A2P2 a A2Final2
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 9;
    }
  } 
  else if (estado === 9) { //A2Final2 a P1 o créditos
    if (overMouse(50, 400, 165, 50)) {
      estado = 0;
    } 
    else if (overMouse(440, 400, 165, 50)) {
      estado = 15;
    }
  } 
  else if (estado === 10) { //B2P1 a B2P2
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 11;
    }
  } 
  else if (estado === 11) { //B2P2 a A3P1 o B3Final3
    if (overMouse(50, 400, 165, 50)) {
      estado = 13;
    } 
    else if (overMouse(440, 400, 165, 50)) {
      estado = 12;
    }
  } 
  else if (estado === 12) { //B3Final3 a P1 o créditos
    if (overMouse(50, 400, 165, 50)) {
      estado = 0;
    } 
    else if (overMouse(440, 400, 165, 50)) {
      estado = 15;
    }
  } 
  else if (estado === 13) { //A3P1 a A3Final4
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 14;
    }
  } 
  else if (estado === 14) { //A3Final4 a P1 o créditos
    if (overMouse(50, 400, 165, 50)) {
      estado = 0;
    } 
    else if (overMouse(440, 400, 165, 50)) {
      estado = 15;
    }
  } 
  else if (estado === 15) { //Créditos a P1
    if (overMouse(width / 2 - 75, 400, 150, 50)) {
      estado = 0;
    }
  }
}

function keyPressed() {
  musicaFondo.stop(); 
}
