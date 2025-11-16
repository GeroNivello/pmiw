class Juego {
  constructor() {
  this.estado = 0;
  this.tiempo = 30 * 60;
  this.cantidadMarcianos = 21;
  this.crearMarcianos();
  this.puedeDisparar = false;
  this.crearPersonaje();
  this.boton = new Boton("CONTINUAR", width/2, height/2 + 90, 250, 60);
}

  dibujar() {
  if (this.estado === 0) {
    image(imgPrincipal, width/2, height/2);
    return;
  }

  if (this.estado === 1) {
    image(imgFondo, width/2, height/2);
    this.tiempo = this.tiempo - 1;
    this.personaje.dibujar();
    for (let i = 0; i < this.marcianos.length; i++) { //marcianos
      let marciano = this.marcianos[i];
      if (marciano.estaVivo()) {
        marciano.mover();
        marciano.dibujar();
        if (marciano.posY > height - 90) {
          sonAstronauta.play();
          this.estado = 3;
        }
      }
    }

    if (this.puedeDisparar && this.laser && this.laser.activo) { //laser
      this.laser.mover();
      this.laser.dibujar();
      this.detectarColisiones();
    } else {
      this.puedeDisparar = false;
    }

    fill(255); //texto de tiempo
    textAlign(LEFT, TOP);
    textSize(18);
    text("Tiempo: " + int(this.tiempo / 60), 10, 20); 

    if (this.personajeGano()) { //verificación de condiciones
      this.estado = 2;
    }

    if (this.tiempo <= 0) {
      this.estado = 4;
    }
    return;
  }

  //finales posibles
  if (this.estado === 2) {
    image(imgFondo, width/2, height/2);
    this.textoFinal("GANASTE");
    this.textoF2("Pero destruiste una civilización");
    this.boton.mostrar();
    this.boton.dibujar();
    return;
  }

  if (this.estado === 3) {
    image(imgFondo, width/2, height/2);
    this.textoFinal("PERDISTE");
    this.textoF2("Pero salvaste una civilización");
    this.boton.mostrar();
    this.boton.dibujar();
    return;
  }

  if (this.estado === 4) {
    image(imgFondo, width/2, height/2);
    this.textoFinal("SE ACABÓ EL TIEMPO");
    this.textoF2("No llegaste a decidir");
    this.boton.mostrar();
    this.boton.dibujar();
    return;
  }

  //créditos
  if (this.estado === 5) {
    image(imgFondo, width/2, height/2);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Hecho por:", width/2, height/2 - 40);
    textSize(22);
    text("Gerónimo Nivello y Julián Serna", width/2, height/2);
    this.boton.mostrar();
    this.boton.dibujar();
    return;
  }
}

  crearMarcianos() {
    this.marcianos = [];
    let posX = 80;
    let posY = 30;

    for (let i = 0; i < this.cantidadMarcianos; i++) {
      this.marcianos[i] = new Marciano(posX, posY);

      posX = posX + 70;

      if (posX > width - 80) {
        posX = 80;
        posY = posY + 90;
      }
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, height - 80);
  }

  disparar() {
  if (!this.puedeDisparar && this.personaje.estaVivo()) {
    this.laser = new Laser(this.personaje.posX, this.personaje.posY - 25);
    this.puedeDisparar = true;
    sonLaser.play();
    sonLaser.setVolume(0.4);
  }
}

  detectarColisiones() {
    for (let i = 0; i < this.marcianos.length; i++) {
      let marciano = this.marcianos[i];
      if (marciano.estaVivo() && this.laser.activo) {
        let distancia = dist(this.laser.posX, this.laser.posY, marciano.posX, marciano.posY);
        if (distancia < 25) {
          marciano.vida = false;
          this.laser.activo = false;
          this.puedeDisparar = false;
          sonMarciano.play();
        }
      }
    }
  }

  personajeGano() {
    for (let i = 0; i < this.marcianos.length; i++) {
      if (this.marcianos[i].estaVivo()) return false;
    }
    return true;
  }

  textoFinal(texto) {
    fill(255);
    textAlign(CENTER);
    textSize(45);
    text(texto, width/2, height/2 - 90);
  }

  textoF2(texto) {
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text(texto, width/2, height/2 - 40); 
  }

  reiniciarJuego() {
    this.crearPersonaje();
    this.crearMarcianos();
    this.puedeDisparar = false;
    this.tiempo = 30 * 60;
    this.boton.esconder();
    this.estado = 0;
  }

  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }

  mousePressed() {
  if (this.estado === 0) {
    this.estado = 1;
    if (!sonFondo.isPlaying()) {
      sonFondo.loop();
      sonFondo.setVolume(0.2);
    }
    return;
  }

  if (this.boton.visible && this.boton.estaPresionado(mouseX, mouseY)) {
    if (this.estado === 2 || this.estado === 3 || this.estado === 4) {
      this.estado = 5;
      this.boton.esconder();
      return;
    }
    if (this.estado === 5) {
      this.reiniciarJuego();
      this.estado = 0;
      return;
    }
  }
    if (this.estado === 1) {
      this.disparar();
    }
  }
}
