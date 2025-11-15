class Boton {
  constructor(texto, x, y, ancho, alto) {
    this.texto = texto;
    this.x = x;         
    this.y = y;          
    this.ancho = ancho;
    this.alto = alto;
    this.visible = false;
  }

  dibujar() {
    if (this.visible === false) return;

    rectMode(CENTER);
    fill(0);
    rect(this.x, this.y, this.ancho, this.alto, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x, this.y);
    rectMode(CORNER);
  }

  estaPresionado(mouseX, mouseY) {
    if (this.visible === false) return false;
    this.izquierda = this.x - this.ancho / 2; this.derecha = this.x + this.ancho / 2; this.arriba = this.y - this.alto / 2;  this.abajo = this.y + this.alto / 2;
    return (
      mouseX >= this.izquierda && mouseX <= this.derecha &&  mouseY >= this.arriba && mouseY <= this.abajo
    );
  }

  mostrar() {
    this.visible = true;
  }

  esconder() {
    this.visible = false;
  }
}
