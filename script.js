// colores
const azul = "#3C77DC";
const rojo = "#E53A62";

// números
var numero1 = document.getElementById("inumero-1");
var numero2 = document.getElementById("inumero-2");
var numero3 = document.getElementById("inumero-3");
var numero4 = document.getElementById("inumero-4");

// función para comprobar los números
function mirarnum(numero, color) {
  if (numero.textContent === "1") {
    numero.style.color = color;
  } else {
    numero.style.color = azul;
  }
}

// asignar el evento "DOMCharacterDataModified" a los nodos padre de los números
numero1.parentNode.addEventListener("DOMCharacterDataModified", function() {
  mirarnum(numero1, rojo);
});

numero2.parentNode.addEventListener("DOMCharacterDataModified", function() {
  mirarnum(numero2, rojo);
});

numero3.parentNode.addEventListener("DOMCharacterDataModified", function() {
  mirarnum(numero3, rojo);
});

numero4.parentNode.addEventListener("DOMCharacterDataModified", function() {
  mirarnum(numero4, rojo);
});



// $(document).ready(function () {
//   var height = $(window).height();

//   $("#body-wrapped").height(height);
// });
