var introduccion = false;
var video = false;
var more = false;

function verificarProgreso() {
  if (introduccion && video && more) {
    window.alert('Puedes pasar al siguiente tema');
  }else{
    window.alert('No puedes pasar al siguiente tema');
  }
}

// cuando se le de click al boton, su valor cambia a true
document.getElementById('botonIntroduccion').onclick = function() {
  // introduccion = true;
  window.alert('Introduccion');
  // verificarProgreso();
}

// document.getElementById("botonIntroduccion").addEventListener("click", function(){
//   introduccion = true;
//   window.alert('Introduccion');
//   verificarProgreso();
// });

// document.getElementById("botonVideo").addEventListener("click", function(){
//   video = true;
//   verificarProgreso();
// });

// document.getElementById("botonMore").addEventListener("click", function(){
//   more = true;
//   verificarProgreso();
// });
