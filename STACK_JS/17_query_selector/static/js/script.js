let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">
if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}