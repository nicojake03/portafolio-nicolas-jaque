// script.js - Validador básico de formulario por consola

// Pedimos los datos al usuario
const nombre = prompt("Ingresa tu nombre completo:");
const email = prompt("Ingresa tu correo electrónico:");
const password = prompt("Ingresa tu contraseña (mínimo 8 caracteres):");

// Función auxiliar para comprobar si una cadena está vacía o es nula
function estaVacio(valor) {
  // Si es null (usuario canceló) o al hacer trim queda cadena vacía -> true
  return valor === null || valor.trim() === "";
}

// Validaciones
if (estaVacio(nombre)) {
  console.log("Error: El campo 'nombre' no puede estar vacío.");
} else if (estaVacio(email)) {
  console.log("Error: El campo 'email' no puede estar vacío.");
} else if (estaVacio(password)) {
  console.log("Error: El campo 'contraseña' no puede estar vacío.");
} else if (password.length < 8) {
  console.log("Error: La contraseña debe tener al menos 8 caracteres.");
} else {
  // Si pasa todas las validaciones
  console.log(`✅ Registro exitoso. ¡Bienvenido, ${nombre.trim()}!`);
}