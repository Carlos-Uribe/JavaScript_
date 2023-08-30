// Crear un array de tres elementos y almacenarlo en la variable myArray
let myArray = ['Pizza', 'Rock', 'Programación'];

// Modificar los dos primeros elementos del array
myArray[0] = 'Sushi';
myArray[1] = 'Pop';

// Agregar un nuevo elemento al comienzo del array
myArray.unshift('Baloncesto');

// Crear una variable de tipo string para mostrar los elementos separados por guiones
let joinedString = myArray.join(' - ');

// Imprimir la variable que contiene los elementos separados por guiones
console.log(joinedString);

// Crear un array con diferentes tipos de elementos
let mixedArray = ['Hola', 42, true, null, { llave: 'valor' }];