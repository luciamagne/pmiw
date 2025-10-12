// Lucia Magne y Mia Manghi
// Comisión 3, profesor: David Bedoian
// Trabajo Práctico: Aventura Gráfica Interactiva Web (AGIW)
// https://youtu.be/4K8lZ_NTh5U

let pantallaActual = 0; 
let img = []; 
let historia = []; 
let clickSound;

function preload() {
    img[0] = loadImage('data/cero.jpg'); 
    img[1] = loadImage('data/uno.jpg');
    img[2] = loadImage('data/dos.jpg');
    img[3] = loadImage('data/tres.jpg');
    img[4] = loadImage('data/cuatro.jpg');
    img[5] = loadImage('data/cinco.jpg');
    img[6] = loadImage('data/seis.jpg');
    img[7] = loadImage('data/siete.jpg');
    img[8] = loadImage('data/ocho.jpg');
    img[9] = loadImage('data/nueve.jpg');
    img[10] = loadImage('data/diez.jpg');
    img[11] = loadImage('data/once.jpg');
    img[12] = loadImage('data/doce.jpg');
    img[13] = loadImage('data/trece.jpg');
    img[14] = loadImage('data/catorce.jpg');
    img[15] = loadImage('data/quince.jpg');
    img[16] = loadImage('data/dieciseis.jpg'); 
    img[17] = loadImage('data/diecisiete.jpg'); 
    img[18] = loadImage('data/dieciocho.jpg'); 
    img[19] = loadImage('data/diecinueve.jpg'); 
    img[20] = loadImage('data/veinte.jpg');
    
    clickSound = loadSound("data/click.mp3");
}

function setup() {
    createCanvas(640, 480);
    inicializarHistoria(); 
    console.log("Pantallas cargadas:", historia.length);
}

function draw() {
    background(240); 
    dibujarPantalla(historia[pantallaActual]); 
}

function inicializarHistoria() {
    
    historia.push(
        {
            texto: "Aventura Gráfica: ¡Héroes de La Plata! Deberás elegir las decisiones de Hércules, un rugbyer de Azul que llega a La Plata buscando suerte, gloria y amor.",
            imgIndex: 0, 
            opcionA: "Siguiente",
            destinoA: 1, 
            esFinal: false
        },
        
        {
            texto: "Comienza un nuevo camino. Recién llegado a La Plata te reciben tus compañeros del club Los Tilos, te invitaron a una fiesta pero es viernes y deberías enfocarte en el deporte, pero tampoco queres decepcionar a tus nuevos amigos, ¿Qué haces?",
            imgIndex: 1, 
            opcionA: "Sí, ir a la fiesta", 
            destinoA: 3,
            opcionB: "Mejor me quedo repasando jugadas", 
            destinoB: 2,
            esFinal: false
        },

        {
            texto: "Decidís quedarte repasando jugadas, crees que no debes perder tiempo en cosas que no son parte de tu objetivo, el cual es ser llamado por el preseleccionado Argentino de rugby.",
            imgIndex: 3,
            opcionA: "Siguiente",
            destinoA: 4,
            esFinal: false
        },

        {
            texto: "No quisiste parecer un aburrido por lo que decidiste ir a la fiesta, ahí conoces a Megara, te llamó la atención al instante, pero el problema era que estaba en pareja con Hades, una persona posesiva que justamente jugaba en el equipo rival, San Luis.",
            imgIndex: 2,
            opcionA: "Siguiente",
            destinoA: 5,
            esFinal: false
        },

        {
            texto: "Al día siguiente, en uno de los entrenamientos, tus nuevos compañeros te presentan a una amiga de ellos, se llama Megara, sentiste una atracción al instante.",
            imgIndex: 5,
            opcionA: "Siguiente",
            destinoA: 5,
            esFinal: false
        },

        {
            texto: "El sábado por la tarde Megara te envía un mensaje. “Me encantó conocerte” seguido de un “Me gustaría verte” ¿Qué decisión tomas?",
            imgIndex: 4,
            opcionA: "Invitarla a salir", 
            destinoA: 6, 
            opcionB: "Decirle que no, tiene que entrenar", 
            destinoB: 7, 
            esFinal: false
        },

        {
            texto: "Decidiste tomarte el atrevimiento de faltar al entrenamiento e invitarla a tomar un helado. Fue una tarde de muchas risas y charla, ahí sentiste una verdadera atracción por ella, estaba creciendo un amor.",
            imgIndex: 6,
            opcionA: "Siguiente",
            destinoA: 8,
            esFinal: false
        },

        {
            texto: "Preferiste ir al entrenamiento, no era momento de tomarse el atrevimiento para faltar. Sin embargo, pensaste todo el entrenamiento en ella, y no pudiste concentrarte bien.",
            imgIndex: 7,
            opcionA: "Siguiente",
            destinoA: 8,
            esFinal: false
        },

        {
            texto: "Luego de unas semanas, empieza a circular el rumor de que Megara y tú se están viendo, Hades se entera y no le gusta nada, está muy enojado y se siente humillado. ¿Que debería hacer Megara?",
            imgIndex: 8,
            opcionA: "Cortar con Hades y seguir sus sentimientos", 
            destinoA: 10,
            opcionB: "Seguir con Hades por culpa", 
            destinoB: 9,
            esFinal: false
        },

        {
            texto: "Lamentablemente la culpa y el miedo invaden a Megara, por lo que decide seguir con Hades, y repentinamente se aleja de ti, no puede seguir viéndote y hacer que no siente amor por ti.",
            imgIndex: 9,
            opcionA: "Siguiente",
            destinoA: 11,
            esFinal: false
        },

        {
            texto: "¡Qué bien! Al fin podrás comenzar a verte libremente con Megara. Hades, por otro lado, no se encuentra muy contento por la decisión de ella, su enojo crece y su rendimiento con el deporte está bajando.",
            imgIndex: 10,
            opcionA: "Siguiente",
            destinoA: 12,
            esFinal: false
        },

        {
            texto: "Esta frialdad por parte de ella te invade y te entristece a un gran nivel que no te permite enfocarte en los entrenamientos, por lo que empiezas a bajar tu rendimiento y eso comienza a preocuparte.",
            imgIndex: 11,
            opcionA: "Siguiente",
            destinoA: 13,
            esFinal: false
        },

        {
            texto: "Llegó el gran día, juega el clásico: Los Tilos vs. San Luis. También se presentarán los scouts de Los Pumas, y es un gran día para Hércules ya que podría ser que al fin cumpla su sueño.",
            imgIndex: 12,
            opcionA: "Siguiente",
            destinoA: 14,
            esFinal: false
        },

        {
            texto: "Llegó el gran día, juega el clásico: Los Tilos vs. San Luis. También se presentarán los scouts de Los Pumas, y es un gran día para Hércules ya que podría ser que al fin cumpla su sueño.",
            imgIndex: 12,
            opcionA: "Siguiente",
            destinoA: 14,
            esFinal: false
        },

        {
            texto: "Antes del tercer tiempo Hades se acerca a ti y te enfrenta, te agrede y quiere pelear contigo, te invaden muchos pensamientos y no sabes cómo reaccionar. ¿Cómo decide actuar?",
            imgIndex: 13,
            opcionA: "Sereno y educado",
            destinoA: 16,
            opcionB: "Violentamente, sin poder contenerte",
            destinoB: 15,
            esFinal: false
        },

        {
            texto: "No tuviste una buena reacción, esto enojó mucho a los entrenadores, quienes tomaron la decisión de sacarte del tercer tiempo. Por otra parte a Megara también le enojó mucho la situación y tu forma de actuar.",
            imgIndex: 14,
            opcionA: "Siguiente",
            destinoA: 20, 
            esFinal: false
        },

        {
            texto: "Muy bien! decidiste tomarte la situación con calma y no dejaste que la situación te sobrepasara, esto entusiasma a los scouts y comienzan a tenerte en cuenta. ¿A quién deberían elegir para que esté en el seleccionado?",
            imgIndex: 15,
            opcionA: "A Hércules por su responsabilidad",
            destinoA: 17, 
            opcionB: "A Hades por su talento",
            destinoB: 20, 
            esFinal: false
        },

        {
            texto: "Hércules es elegido pero Megara tiene que decidir si acompañarlo o quedarse por la distancia y porque no está muy segura, ¿qué debería hacer Megara?",
            imgIndex: 19,
            opcionA: "Megara acompaña a Hércules a su prueba buscando en Los Pumas",
            destinoA: 18, 
            opcionB: "Megara decide quedarse en La Plata",
            destinoB: 19, 
            esFinal: false
        },

        {
            texto: "Hades es expulsado por sus comportamientos agresivos y finalmente puedes comenzar una linda y feliz relación con Megara.",
            imgIndex: 18,
            opcionA: "Créditos",
            destinoA: 21, 
            opcionB: "Inicio",
            destinoB: 0,
            esFinal: true
        },

        {
            texto: "Tu sueño se ha cumplido! llegaste a donde más querías, jugar con Los Pumas, pero hay otra parte de ti que está rota, te sientes solo y sin tu gran compañía: Megara.",
            imgIndex: 17,
            opcionA: "Créditos",
            destinoA: 21, 
            opcionB: "Inicio",
            destinoB: 0,
            esFinal: true
        },

        {
            texto: "Finalmente tú desde el banco aprecias la victoria de San Luis. Por su gran desempeño Hades es preseleccionado para Los Pumas, y lamentablemente Megara decide distanciarse de ti ya que cree que no eres una buena persona.",
            imgIndex: 16,
            opcionA: "Créditos",
            destinoA: 21, 
            opcionB: "Inicio",
            destinoB: 0,
            esFinal: true
        },

        {
            texto: "CRÉDITOS:\nEste proyecto fue creado por Lucía Magne y Mia Manghi.\n\nINSPIRACIÓN: La historia de Hércules y Megara fue inspirada por nuestra propia amistad. Mia, originaria de Azul, y Lucía, de La Plata, quisimos reflejar nuestra experiencia universitaria y la conexión entre estas dos ciudades en nuestra aventura gráfica.\n\nAGRADECIMIENTOS: Gracias al profesor por la guía en Programación para Medios Interactivos Web (PMIW).\n\nFIN.",
            imgIndex: 20, 
            opcionA: "Volver a Empezar",
            destinoA: 0, 
            esFinal: true 
        }
    );
}

function dibujarPantalla(data) {
    const H_MAX = 480; 
    
    let H_CAJA = H_MAX / 4.5; 

    if (pantallaActual === 21) {
        H_CAJA = H_MAX / 2.0; 
    }
    
    image(img[data.imgIndex], 0, 0, 640, H_MAX);
    
    fill(255, 255, 255, 200); 
    rect(30, 30, 640 - 60, H_CAJA); 
    
    fill(0); 
    textSize(18); 
    textAlign(LEFT, TOP); 
    text(data.texto, 40, 40, 640 - 80, H_CAJA - 20); 

    dibujarBoton(data.opcionA, 50, H_MAX - 100); 

    if (data.opcionB) {
        dibujarBoton(data.opcionB, 640 / 2 + 10, H_MAX - 100);
    }
}

function dibujarBoton(textoBoton, x, y) {
    noStroke(); 
    fill(100, 100, 200, 200); 
    rect(x, y, 640 / 2 - 60, 40, 5); 
    
    fill(255); 
    textSize(14); 
    textAlign(CENTER, CENTER); 
    text(textoBoton, x + (640 / 2 - 60) / 2, y + 20); 
    textAlign(LEFT, BASELINE); 
}

function mousePressed() {
    if (clickSound && clickSound.isLoaded()) {
        clickSound.play();
    }
    
    let data = historia[pantallaActual]; 
    
    let xA = 50;
    let yBotones = 480 - 100; 
    let anchoBoton = 640 / 2 - 60;
    let altoBoton = 40;

    if (mouseX > xA && mouseX < xA + anchoBoton && mouseY > yBotones && mouseY < yBotones + altoBoton) {
        pantallaActual = data.destinoA; 
        return; 
    }

    if (data.opcionB) {
        let xB = 640 / 2 + 10; 
        if (mouseX > xB && mouseX < xB + anchoBoton && mouseY > yBotones && mouseY < yBotones + altoBoton) {
            pantallaActual = data.destinoB; 
            return;
        }
    }
}

