// Lucia Magne
// Comisión 3
// TP1 - OpArt en p5.js
// link a video explicativo: https://youtu.be/T5JhO9Rv1xk

let referencia;

let angulo = 0;
let girar = false;
let replicar = false;

function preload() {
  referencia = loadImage("data/referencia.png");
}


function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);

  image(referencia, 0, 0, width/2, height);

  noStroke();
  if (replicar) {
    fill(0);
  } else {
    fill(255);
  }
  rect(width/2, 0, width/2, height);

  push();
  translate(width/2, 0);

  if (replicar) {
    let escala = 0.45;
    let ajusteX = (width/4 - (width/2 * escala)) / 2;
    let ajusteY = (height/2 - (height * escala)) / 2;

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        push();
        translate(i * width/4 + ajusteX, j * height/2 + ajusteY);
        scale(escala);
        dibujarImagenCompleta();
        pop();
      }
    }
  } else {
    dibujarImagenCompleta();
  }

  pop();
}

function dibujarImagenCompleta() {
  dibujarFranjasFondo();
  dibujarRomboConFranjas();
}

function dibujarFranjasFondo() {
  let numFranjasNegras = 6;
  let grosorFranja = 43;
  let grosorEspacio = 39;

  let y = 0;

  for (let i = 0; i < numFranjasNegras; i++) {
    fill(0);
    noStroke();
    rect(0, y, width/2, grosorFranja);
    y += grosorFranja;

    if (i == 2) {
      continue;
    }

    if (i < numFranjasNegras - 1) {
      y += grosorEspacio;
    }
  }
}

function dibujarRomboConFranjas() {
  push();
  translate(width/4, height/2);

  let lado = width/2;

  fill(0, 120);
  noStroke();
  push();
  translate(10, 10);
  dibujarRombo(lado);
  pop();

  if (girar) {
    angulo += radians(1);
  }
  rotate(angulo);

  fill(255);
  noStroke();
  dibujarRombo(lado);

  dibujarFranjasRombo(lado);

  pop();
}

function dibujarRombo(lado) {
  beginShape();
  vertex(0, -lado/2);
  vertex(lado/2, 0);
  vertex(0, lado/2);
  vertex(-lado/2, 0);
  endShape(CLOSE);
}


function obtenerAnchoLinea() {
  return 40;
}


function dibujarFranjasRombo(lado) {
  noStroke();
  fill(0);

  let anchoLinea = obtenerAnchoLinea();
  let sep = lado / 5.5;

  for (let i = 0; i < 4; i++) {
    let xCentro = 0;

    if (i == 0) {
      xCentro = -2 * sep;
    } else if (i == 1) {
      xCentro = -0.8 * sep;
    } else if (i == 2) {
      xCentro = 0.8 * sep;
    } else if (i == 3) {
      xCentro = 2 * sep;
    }

    let ancho = anchoLinea / 2;

    let valor1 = abs(xCentro - ancho);
    let valor2 = abs(xCentro + ancho);

    let arribaIzq = -(lado/2 - valor1);
    let abajoIzq  =  (lado/2 - valor1);
    let arribaDer = -(lado/2 - valor2);
    let abajoDer  =  (lado/2 - valor2);

    quad(
      xCentro - ancho, arribaIzq,
      xCentro + ancho, arribaDer,
      xCentro + ancho, abajoDer,
      xCentro - ancho, abajoIzq
      );
  }
}

function mousePressed() {
  girar = !girar;
  replicar = !replicar;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    angulo = 0;
    girar = false;
    replicar = false;
  }
}

