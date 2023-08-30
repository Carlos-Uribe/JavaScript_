// Declara una variable llamada miRefrán y asigna un refrán a esa variable.
let miRefran = "Más vale tarde que nunca.";

// Declara una variable llamada longitudRefran y asigna la cantidad de letras de miRefran.
let longitudRefran = miRefran.length;

// Asigna a la variable novenaLetra el valor de la novena letra del refrán.
let novenaLetra = miRefran[8];

// Asigna a la variable ultimaLetra el valor de la última letra del refrán.
let ultimaLetra = miRefran[longitudRefran - 1];

// Busca el índice de la cadena "que" en el refrán y asigna a la variable índicePalabra.
let índicePalabra = miRefran.indexOf("que");

// Si el índice es menor que cero, busca cualquier otra preposición hasta que sea mayor a 0.
if (índicePalabra < 0) {
    let preposiciones = ["a", "de", "en", "por"];
    for (let i = 0; i < preposiciones.length; i++) {
        índicePalabra = miRefran.indexOf(preposiciones[i]);
        if (índicePalabra >= 0) {
            break;
        }
    }
}

// Reemplaza la preposición encontrada por la cadena "xxx".
if (índicePalabra >= 0) {
    miRefran = miRefran.replace(miRefran.substring(índicePalabra, índicePalabra + 3), "xxx");
}

// Convierte a mayúsculas todos los caracteres del refrán.
miRefran = miRefran.toUpperCase();

// Muestra el resultado final del refrán.
console.log(miRefran);
