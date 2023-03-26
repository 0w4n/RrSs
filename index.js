//colores
const azul = rgb(60, 119, 220);
const rojo = rgb(229, 58, 98);

// numeros
var numero1 = document.getElementById("numero-1");
var numero2 = document.getElementById("numero-2");
var numero3 = document.getElementById("numero-3");
var numero4 = document.getElementById("numero-4");
var numfin = document.getElementById("num-fin");

numero1.addEventListener("DOMCharacterModificated", function mirarnum(rojo, azul) {
    if (numero1 == "1") {
        numero1.style.color = rojo;
    } else {
        numero1.style.color = azul;
    }    
})
numero2.addEventListener("DOMCharacterModificated", function mirarnum(rojo, azul) {
    if (numero2 == "1") {
        numero2.style.color = rojo;
    } else {
        numero2.style.color = azul;
    }    
})
numero3.addEventListener("DOMCharacterModificated", function mirarnum(rojo, azul) {
    if (numero3 == "1") {
        numero3.style.color = rojo;
    } else {
        numero3.style.color = azul;
    }    
})
numero4.addEventListener("DOMCharacterModificated", function mirarnum(rojo, azul) {
    if (numero4 == "1") {
        numero4.style.color = rojo;
    } else {
        numero4.style.color = azul;
    }    
})


$(document).ready(function () {
  var height = $(window).height();

  $("#body-wrapped").height(height);
});
