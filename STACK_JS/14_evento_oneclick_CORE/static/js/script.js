// 1. Funcionalidad del Botón "Iniciar sesión"
const botonAutenticacion = document.getElementById('boton-autenticacion');

botonAutenticacion.onclick = function() {
    if (botonAutenticacion.innerText === "Iniciar sesión") {
        botonAutenticacion.innerText = "Cerrar sesión";
    } else {
        botonAutenticacion.innerText = "Iniciar sesión";
    }
};

// 2. Funcionalidad del Botón "Ver perfil"
const botonPerfil = document.getElementById('boton-perfil');

botonPerfil.onclick = function() {
    alert("¡Bienvenido a tu perfil de usuario!");
};

// 3. Funcionalidad de los Botones "Me gusta"
const botonesReaccion = document.querySelectorAll('.btn-reaccion');

botonesReaccion.forEach(boton => {
    boton.onclick = function() {
        // Seleccionamos la etiqueta span que encierra el número
        const etiquetaNumero = boton.querySelector('span');
        
        // Convertimos el texto a número entero para la operación matemática
        let meGustaActuales = parseInt(etiquetaNumero.innerText);
        
        // Incrementamos el valor en +1
        meGustaActuales++;
        
        // Volvemos a insertar el número actualizado dentro del botón
        etiquetaNumero.innerText = meGustaActuales;
    };
});
