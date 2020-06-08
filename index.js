
var who = ['El perro', 'Mi abuela', 'Nuestra tortuga', 'El pájaro del vecino'];
var action = ['se comió', 'escondió', 'aplastó', 'rompió'];
var what = ['mis deberes', 'el móvil', 'las llaves', 'los cables'];
var when = ['antes de clase.', 'justo ahora.', 'mientras hacia el pino.', 'en la hora de la comida.','mientras hacia petit point'];


function excusa() {
    let quien = randomExcu(who);
    let accion = randomExcu(action);
    let que = randomExcu(what);
    let cuando = randomExcu(when);
    
    //return quien +" "+ accion + " " + que + " " + cuando;
    return quien.concat(" ", accion, " ", que, " ", cuando)

    //return console.log(quien +" "+ accion + " " + que + " " + cuando);
   
};

function randomExcu(excu){
    return excu[Math.floor(Math.random() * (excu.length))]
};

 function onLoad(){
     document.querySelector('#excusa').innerHTML = Excusa();
 }

window.onload = onLoad;


  