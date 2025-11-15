class Laser {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 12;
    this.activo = true;
  }

  mover() {
    if (this.activo === true) {
      this.posY = this.posY - this.velocidad;
      if (this.posY < 0) {
        this.activo = false;
      }
    }
  }

  dibujar() {
    if (this.activo === true) {
      fill(50, 255, 50);
      rectMode(CENTER);
      rect(this.posX, this.posY, 5, 15);
    }
  }
}
