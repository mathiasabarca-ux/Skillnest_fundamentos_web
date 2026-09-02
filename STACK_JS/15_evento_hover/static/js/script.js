const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "peru"; // Cambia el color de fondo al pasar el ratón
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "#cfc31e"; // Restaura el color de fondo al salir el ratón
});

//Tarea
/*