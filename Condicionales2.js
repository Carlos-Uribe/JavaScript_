// Definimos la edad mínima legal para comprar cerveza
const edadMinimaParaCerveza = 18;

// Solicitamos la edad al usuario utilizando prompt
let edadUsuario = prompt("Por favor, ingresa tu edad:");

// Convertimos la entrada del usuario a un número entero
edadUsuario = parseInt(edadUsuario);

// Verificamos si la edad ingresada es un número válido
if (isNaN(edadUsuario)) {
  alert("Por favor, ingresa un número válido para la edad.");
} else {
  // Verificamos si la persona tiene la edad suficiente para comprar cerveza
  if (edadUsuario >= edadMinimaParaCerveza) {
    alert("¡Puedes comprar cerveza! Disfruta con responsabilidad.");
  } else {
    alert("Lo siento, eres menor de edad para comprar cerveza.");
  }
}
