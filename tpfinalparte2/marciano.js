
class Marciano {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorin = color(55, 195, 230);
    this.vida = true;
    this.direccion = 2;
    this.tam = 100; 
  }

  dibujar() {
    if (this.vida) {
      image(imgMarciano, this.posX, this.posY, this.tam, this.tam);
    }
  }

  mover() {
    this.posX = this.posX + (2 * this.direccion);

    if (this.posX > width - 30) {
      this.direccion = -2;
      this.posY += 40;
    }

    if (this.posX < 30) { 
      this.direccion = 2;
      this.posY += 40;
    }
  }

  estaVivo() {
    return this.vida === true;
  }
}
