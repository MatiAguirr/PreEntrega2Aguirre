const preguntas = [{
    pregunta: "¿Quien es el máximo goleador de Boca?",
    opciones: ["Roman Riquelme", "Martin Palermo", "Pipa Benedetto"],
    respuestaCorrecta: "Martin Palermo"
},
{
    pregunta: "¿Cuantos goles tiene?", 
    opciones: [236, 150, 302],
    respuestaCorrecta: 236
},
{
    pregunta: "¿Quien es el máximo ganador de titulos con boca?",
    opciones: ["Carlos Tevez", "Sebastian Battaglia", "Hugo Ibarra"],
    respuestaCorrecta: "Sebastian Battaglia"
},
{
    pregunta: "¿Cuantos Titulos tiene el jugador mas ganador de Boca?",
    opciones: [10, 15, 17],
    respuestaCorrecta: 17
},
{
    pregunta: "¿Cual es el Tecnico mas ganador?",
    opciones: ["Miguel Russo", "Rodolfo Arruavarrena", "Carlos Bianchi"],
    respuestaCorrecta: "Carlos Bianchi"
},
{
    pregunta: "¿Cuantos Titulos tiene?",
    opciones: [9, 7, 5],
    respuestaCorrecta: 9
},
{
    pregunta: "¿De cuantos partidos fue el mayot invicto?",
    opciones: [40, 25, 50],
    respuestaCorrecta: 40
},
{
    pregunta: "¿Que jugador tiene mas partidos en Boca?",
    opciones: ["Hugo Gatti", "Roberto Mouzo", "Martin Palermo"],
    respuestaCorrecta: "Roberto Mouzo"
},
{
    pregunta: "¿Cuantos partidos jugados tiene?",
    opciones: [400, 432, 426],
    respuestaCorrecta: 426
},
{
    pregunta: "¿Que le regalaron a Palermo en su ultimo partido con Boca?",
    opciones: ["Una camiseta", "Un arco", "Una pelota"],
    respuestaCorrecta: "Un arco"
},
];

let indicePreguntaActual = 0;

function mostrarPregunta(){
    const preguntaActual = preguntas[indicePreguntaActual];
        console.log(preguntaActual.pregunta);
        if (indicePreguntaActual = preguntas) {
        for (let i = 0; i < preguntaActual.opciones; i++); {
            console.log(preguntaActual.opciones);
        }
    
        const respuestaUsusario = prompt("Ingrese su respuesta:");
    }
}


function verificarRespuesta(respuestaUsusario){
    const preguntaActual = preguntas[indicePreguntaActual]
    // const respuestaSeleccionada = respuestaUsusario;
    if (respuestaUsusario === preguntaActual.respuestaCorrecta){
        alert("Respuesta correcta!");
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta es: ${preguntaActual.respuestaCorrecta}`);
    }
    indicePreguntaActual++;
    if (indicePreguntaActual < preguntas.length){
        mostrarPregunta();
    } else {
        alert("Fin del juego")
    }
}

mostrarPregunta();
verificarRespuesta();