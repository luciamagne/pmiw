//TP FINAL - PARTE 2
//"EL TACLE DE LA FURIA"
//Lucía Magne y Mia Manghi

let imgFondo;
let imgHercules;
let imgPelota;
let imgGanaste;
let imgPerdiste;

let control;


function preload() {
  imgFondo = loadImage("data/fondo.jpg");
  imgHercules = loadImage("data/hercules.png");
  imgPelota = loadImage("data/pelota.png");
  imgGanaste = loadImage("data/ganaste.jpg");
  imgPerdiste = loadImage("data/perdiste.jpg");
}


function setup() {
  createCanvas(640, 480);

  if (imgFondo) imgFondo.resize(width, height);
  if (imgGanaste) imgGanaste.resize(width, height);
  if (imgPerdiste) imgPerdiste.resize(width, height);

  if (imgHercules) imgHercules.resize(150, 180);
  if (imgPelota) imgPelota.resize(70, 70);

  control = new ControlJuego();
}


function draw() {
  control.actualizar();
}


function keyPressed() {
  control.presionarTecla();
}

function mousePressed() {
  control.presionarMouse();
}



class ControlJuego {
  constructor() {
    this.estado = "inicio"; 
    this.hercules = new Hercules();
    this.generador = new Generador();
    this.tiempoDeJuego = 15000; 
    this.tiempoInicio = 0;
  }

  iniciarJuego() {
    this.hercules = new Hercules();
    this.generador = new Generador();
    this.tiempoInicio = millis();
    this.estado = "jugando";
  }

  actualizar() {
    background(0);

    if (this.estado === "inicio") {
      this.pantallaInicio();
      return;
    }

    if (this.estado === "instrucciones") {
      this.pantallaInstrucciones();
      return;
    }

    if (this.estado === "jugando") {
      imageMode(CORNER);
      image(imgFondo, 0, 0, width, height);

      this.hercules.actualizar();
      this.generador.actualizar();

      // tiempo
      let tiempoPasado = millis() - this.tiempoInicio;
      let tiempoRestante = max(0, this.tiempoDeJuego - tiempoPasado);
      let segundos = ceil(tiempoRestante / 1000);

      // barra
      noStroke();
      fill(255, 200);
      rect(10, 10, 120, 18, 6);
      fill(30, 200, 100);
      let anchoBarra = map(tiempoRestante, 0, this.tiempoDeJuego, 0, 116);
      rect(12, 12, anchoBarra, 14, 6);

      fill(255);
      textSize(14);
      textAlign(LEFT, TOP);
      text("Tiempo: " + segundos + "s", 140, 10);

     
      if (this.generador.hayColision(this.hercules)) {
        this.estado = "perdiste";
      }

   
      if (tiempoRestante <= 0) {
        this.estado = "ganaste";
      }

      return;
    }

   
    if (this.estado === "ganaste") {
      imageMode(CORNER);
      image(imgGanaste, 0, 0, width, height);
      this.textoReinicio();
      return;
    }

    
    if (this.estado === "perdiste") {
      imageMode(CORNER);
      image(imgPerdiste, 0, 0, width, height);
      this.textoReinicio();
      return;
    }
  }

  pantallaInicio() {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("EL TACLE DE LA FURIA", width / 2, height / 2 - 40);
    textSize(22);
    text("Click para ver instrucciones", width / 2, height / 2 + 20);
  }

  pantallaInstrucciones() {
    background(20, 20, 50);
    fill(255);
    textAlign(CENTER, TOP);

    textSize(30);
    text("INSTRUCCIONES", width / 2, 30);


textSize(16);
textLeading(20);

let narrativa =
  "Hércules está entrenando para convertirse en el capitán del equipo. " +
  "Hades, celoso y enojado, le lanza pelotas cargadas de 'furia' para probar si puede controlar sus impulsos. " +
  "Tu trabajo es ayudar a Hércules a esquivarlas y mantener la calma. " +
  "Si sobrevive durante 15 segundos demuestra que puede controlarse y gana la prueba.";


let lineas = narrativa.split(" ");
let textoFinal = [];
let renglón = "";
let maxAncho = width - 140;

for (let i = 0; i < lineas.length; i++) {
  let palabra = lineas[i];
  let test = renglón + palabra + " ";
  if (textWidth(test) < maxAncho) {
    renglón = test;
  } else {
    textoFinal.push(renglón);
    renglón = palabra + " ";
  }
}
textoFinal.push(renglón);


let yBase = 80;
for (let i = 0; i < textoFinal.length; i++) {
  textAlign(CENTER, TOP);
  text(textoFinal[i], width / 2, yBase + i * 22);
}

    textSize(18);
    text("CONTROLES:", width/2, 260);

    textSize(16);
    text(
      "A = mover izquierda      D = mover derecha\nPresioná ESPACIO para empezar",
      width/2, 290
    );

    textSize(14);
    fill(220);
    text("Duración del desafío: 15 segundos", width/2, height - 40);
  }

  textoReinicio() {
    push();
    fill(0);  
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Presioná R para reiniciar", width / 2, height - 40);
    pop();
  }

  presionarTecla() {
    if (this.estado === "inicio") return;

    if (this.estado === "instrucciones" && key === ' ') {
      this.iniciarJuego();
    }

    if ((this.estado === "ganaste" || this.estado === "perdiste") &&
        (key === 'r' || key === 'R')) {
      this.estado = "inicio";
    }
  }

  presionarMouse() {
    if (this.estado === "inicio") {
      this.estado = "instrucciones";
    }
  }
}




class Hercules {
  constructor() {
    this.x = width / 2;
    this.ancho = imgHercules.width;
    this.alto = imgHercules.height;
    this.y = height - this.alto / 2 - 12;
    this.vel = 7;
  }

  mover() {
    if (keyIsDown(65)) this.x -= this.vel;
    if (keyIsDown(68)) this.x += this.vel; 
    this.x = constrain(this.x, this.ancho / 2, width - this.ancho / 2);
  }

  actualizar() {
    this.mover();
    imageMode(CENTER);
    image(imgHercules, this.x, this.y, this.ancho, this.alto);
  }
}


class Obstaculo {
  constructor() {
    this.tam = imgPelota.width;
    this.x = random(this.tam / 2 + 10, width - this.tam / 2 - 10);
    this.y = -this.tam;
    this.vel = random(3, 5);
  }

  mover() {
    this.y += this.vel;
  }

  mostrar() {
    imageMode(CENTER);
    image(imgPelota, this.x, this.y, this.tam, this.tam);
  }

  actualizar() {
    this.mover();
    this.mostrar();
  }

  colisiona(h) {
    let d = dist(this.x, this.y, h.x, h.y);
    return d < (this.tam / 2 + h.ancho * 0.45);
  }

  fuera() {
    return this.y - this.tam / 2 > height + 50;
  }
}


class Generador {
  constructor() {
    this.obstaculos = [];
    this.intervalo = 1000;  
    this.ultimoSpawn = 0;
  }

  spawn() {
    let ahora = millis();
    if (ahora - this.ultimoSpawn > this.intervalo) {
      this.obstaculos.push(new Obstaculo());
      this.ultimoSpawn = ahora;
    }
  }

  actualizar() {
    this.spawn();

    for (let i = this.obstaculos.length - 1; i >= 0; i--) {
      let o = this.obstaculos[i];
      o.actualizar();
      if (o.fuera()) this.obstaculos.splice(i, 1);
    }
  }

  hayColision(h) {
    for (let o of this.obstaculos) {
      if (o.colisiona(h)) return true;
    }
    return false;
  }
}
  
