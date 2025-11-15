class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorin = color(245, 160, 95);
    this.vida = true;
    this.tam = 200 ;
  }

  dibujar() {
   if (this.vida) {
      image(imgAstronauta, this.posX, this.posY, this.tam, this.tam);   
   }
  } 

  teclaPresionada(keyCode){
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === 32){
      this.activo = true;
    }
  }  
 crearPersonaje() {
    this.personaje = new Personaje(width/2, height - 80);
 }
  moverIzquierda() {
    if (this.posX > 20) {
      this.posX = this.posX - 30;
    }
  }

  moverDerecha() {
    if (this.posX < width - 20) {
      this.posX = this.posX + 30;
    }
  }

  estaVivo() {
    return this.vida === true;
  }
}
