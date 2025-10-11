function fondo(img, texto) {
  if (img) {
    image(img, 0, 0);
  }
  fill(255);
  text(texto, 40, 0, 560, 150);
}

function boton(posX, posY, tamX, tamY, texto) {
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(0);
  } 
  else {
    fill(190, 125, 57);
  }
  rect(posX, posY, tamX, tamY, tamY / 8);
  fill(90, 201, 240);
  textAlign(CENTER, CENTER);
  text(texto, posX + tamX / 2, posY + tamY / 2);
}

function overMouse(posX, posY, tamX, tamY) {
  return (mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY);
}
