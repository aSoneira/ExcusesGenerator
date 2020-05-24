
var who = ['El perro', 'Mi abuela', 'Nuestra tortuga', 'El pájaro del vecino'];
var action = ['se comió', 'escondió', 'aplastó', 'rompió'];
var what = ['mis deberes', 'el móvil', 'las llaves', 'los cables'];
var when = ['antes de clase.', 'justo ahora.', 'mientras hacia el pino.', 'en la hora de la comida.','mientras hacia petit point'];


function excusa() {
    var quien = who[Math.floor(Math.random() * (who.length))];
    var accion = action[Math.floor(Math.random() * (action.length))];
    var que = what[Math.floor(Math.random() * (what.length))];
    var cuando = when[Math.floor(Math.random() * (when.length))];
    
    //return quien +" "+ accion + " " + que + " " + cuando;
    return quien.concat(" ", accion, " ", que, " ", cuando)

    //return console.log(quien +" "+ accion + " " + que + " " + cuando);
   
};

 function onLoad(){
     document.querySelector('#excusa').innerHTML = Excusa();
 }

window.onload = onLoad;


  