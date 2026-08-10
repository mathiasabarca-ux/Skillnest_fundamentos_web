document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColorboddy();
});
document.getElementById("colorButton2").addEventListener("click", function () {
   cambiarColorCaja1();
});
document.getElementById("colorButton3").addEventListener("click", function () {
   cambiarColorCaja2();
});|

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
   let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   const body = document.querySelector("body");
   document.body.style.backgroundColor = colorAleatorio;
}