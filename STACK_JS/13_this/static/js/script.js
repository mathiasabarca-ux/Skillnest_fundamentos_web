// Seleccionamos el botón por su ID
let boton = document.getElementById("cambiarTexto");

// Agregamos el evento 'click' al botón
boton.addEventListener("click", function () {
    // Almacenamos el texto actual en el momento del clic
    let textoActual = this.innerText;

    // Evaluamos el texto y lo alternamos
    if (textoActual === "¡Haz clic aquí!") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "¡Haz clic aquí!";
    }
});
// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
   imagen.addEventListener("click", function () {
       // Eliminamos la imagen al hacer clic
       this.remove();
   });
});