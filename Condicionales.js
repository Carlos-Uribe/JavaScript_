// Pedir al usuario que ingrese los valores y la operación
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación a realizar (+, -, *, /):");

// Realizar cálculos según la operación ingresada
let resultado;

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor ingresa valores numéricos válidos.");
} else {
    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert("No se puede dividir entre 0.");
            }
            break;
        default:
            alert("Operación no válida. Por favor ingresa +, -, * o /.");
            break;
    }

    // Mostrar el resultado
    if (resultado !== undefined) {
        alert("El resultado es: " + resultado);
        console.log("El resultado es:", resultado);
    }
}
