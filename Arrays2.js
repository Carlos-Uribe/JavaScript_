let myString = 'Javascript+es+super+cool';

// Convierte la cadena en un array, eliminando los caracteres + en el proceso
let myArray = myString.split('+');

// Almacena la longitud del array en una variable llamada arrayLength
let arrayLength = myArray.length;

// Almacena el último elemento del array en una variable llamada lastItem
let lastItem = myArray[arrayLength - 1];

// Crea un nuevo array con los elementos ordenados en orden inverso que myArray
let myInverseArray = myArray.reverse();

// Agrega un elemento al final de myInverseArray
let newElement = 'Awesome!'; // Elemento que se agregará
myInverseArray.push(newElement);

// Ahora myInverseArray tiene el nuevo elemento al final

// Imprime los resultados
console.log('myArray:', myArray);
console.log('arrayLength:', arrayLength);
console.log('lastItem:', lastItem);
console.log('myInverseArray:', myInverseArray);
