console.log("Conexion de js exitosa")
// ✅ Ejercicio 1: Sistema de descuento
// 📝 Enunciado
// Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar
function sistemaDescuento() {
    let nombreCliente = prompt("Ingrese el nombre del cliente:");
    let monto = parseInt(prompt("Ingrese el monto de compra:"));
    if (monto >= 50000) {
        alert(`el monto con descuento es de: ${monto - (monto * 0.2)}`)
    } else if (monto >= 30000) {
        alert(`el monto con descuento es de: ${monto - (monto * 0.1)}`)
    } else if (monto < 30000 && monto > 0) {
        alert(`el monto final es de: ${monto}. Sin descuento`)
    } else {
        alert("ingresa monto valido")
    }
}
// 📝 Enunciado
// Una persona puede ingresar a un evento si:
// Tiene 18 años o más
// O viene acompañada por un adulto
// Solicitar:
// Edad
// Si viene acompañado (si o no)
// Mostrar:
// “Acceso permitido”
// o “Acceso denegado”

// ✅ Ejercicio 3: Clasificación de temperatura
// 📝 Enunciado
// Solicitar una temperatura y clasificar:
// Menor a 10 → “Hace frío”
// Entre 10 y 24 → “Temperatura agradable”
// 25 o más → “Hace calor”
// Además:
// Si la temperatura supera los 35 grados, mostrar una alerta adicional:
//  “Temperatura extrema”.

// ✅ Ejercicio 4: Verificación de administrador
// 📝 Enunciado
// Solicitar:
// Nombre de usuario
// Contraseña
// Condiciones:
// Usuario correcto: admin
// Contraseña correcta: 12345
// Casos:
// Si ambos son correctos → “Bienvenido administrador”
// Si usuario es correcto pero contraseña incorrecta → “Contraseña incorrecta”
// Si usuario no existe → “Usuario no encontrado”

// ✅ Ejercicio 5: Sistema de aprobación
// 📝 Enunciado
// Solicitar:
// Nombre del estudiante
// Nota 1
// Nota 2
// Nota 3
// Calcular promedio.
// Condiciones:
// Promedio 6.0 o superior → “Aprobado con excelencia”
// Promedio entre 4.0 y 5.9 → “Aprobado”
// Menor a 4.0 → “Reprobado”
// Además:
// Si alguna nota es menor a 2.0 mostrar:
//  “Debe asistir a reforzamiento”.
