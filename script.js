console.log("probando")

function saludar(nombre) {
  // let nombre = "Bob"
  return `Hola ${nombre}`
} // ref 1234


function despedirse(nombre) {
  // let nombre = "Bob"
  return `Adios ${nombre}`
} // ref 5678


// console.log( saludar("Bob") )
// console.log( saludar("Patricio") )



function permitirAcceso( otraFuncion ) {
  // let otraFuncion = saludar // ref 1234
  // let otraFuncion = despedirse // ref 5678

  console.log( "Tienes permiso de entrar", otraFuncion("Bob") )

}

permitirAcceso( saludar )
permitirAcceso( despedirse )



// Usamos callbacks para dos cosas:

// 1. Para crear logicas de programación complejas donde se reusan multiples funciones para crear mayor dinamica. (optiomización y reducción de código)
// 2. Porque muchos metodos y funciones de JS usan este concepto.


// forEach

let array = ["patata", "tomate", "aguacate", "banana"]

function hacerAlgo() {
  console.log("ejecutando esta funcion")
}

// forEach ejecuta una funcion por cada elemento del array
array.forEach( hacerAlgo )

// for (let i = 0; i < array.length; i++) {
//   hacerAlgo()
// }


// METODOS AVANZADOS DE ARRAYS

let randomNumbers = [4, 8, 15, 16, 23, 42] 

// .forEach()

// randomNumbers.forEach( function() {
//   console.log("buscando los numeros")
// } )

randomNumbers.forEach( (cadaNumero, index) => {
  // cadaNumero es lo mismo que randomNumbers[i] en un for loop
  console.log("buscando los numeros", cadaNumero, index)

  if (cadaNumero === 42) {
    console.log("Conseguimos la respuesta al universo, a la vida y a todo lo demás", cadaNumero)
  }

  // return "buscando los numeros" // este return es ignorado. No se usa para nada en forEach.
} )

// El loop forEach SIEMPRE va a recorrer todo el array

/* 

ESTO ES LO QUE OCURRE INTERNAMENTE EN EL METODO

Array.forEach = function(callback) {
  for (let i = 0; i < array.length, i++) {
    callback( array[i], i, array )
  }
}

*/


// .map()
// el map nos permite crear un nuevo array
// SIEMPRE vamos a querer recibir lo que retorna el map
// map no modifica el original, crear una copia
// el map SIEMPRE va a devolver la misma cantidad de elemento que el original

let nuevoArray = randomNumbers.map((cadaNumero, index) => {
  console.log(cadaNumero, index)

  //* el map SIEMPRE debe retornar algo en su funcion de callback por cada elemento
  return cadaNumero * 100 // esto es lo que será cada elemento del nuevo array
  // return cadaNumero.toString()
})

console.log(nuevoArray)
console.log(randomNumbers)


// .filter()
// el filter siempre devolverá los elementos del array EXACTAMENTE iguales al original

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];


const cochesFiltrados = cars.filter((cadaCoche, i) => {
  console.log("ejecutando funcion del filter", cadaCoche)

  //* el filter SIEMPRE debe retornar un boleano.
  if (cadaCoche.year >= 2012) {
    // true => incluyelo
    return true
  } else {
    // false => no lo incluyas
    return false
  }

  // return cadaCoche.year >= 2012

  // siempre que tengamos un condicional que devuelve un booleano. Podemos devolver la condicion.

})

// otra forma de hacer lo de arriba en una sola linea
const cochesFiltrados2 = cars.filter((cadaCoche) => cadaCoche.year >= 2012)

console.log(cochesFiltrados)
console.log(cochesFiltrados2)


// .reduce()

let someNumbers = [4, 8, 15, 16, 23, 42] 
// SIEMPRE tiene que devolver cual será el próximo valor del acumulador

/* 

array.reduce((acumulador, cadaElemento) => {

}, valorInicialParaElAcumulador)

*/

let total = someNumbers.reduce((acc, eachNumber) => {
  console.log(acc, eachNumber)

  // retornamos como el numero va a modificar el acumulador
  return acc + eachNumber

}, 0)

console.log(total)


const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 21 },
  { name: 'Nettie' },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 },
];

const suma = people.reduce((acc, eachPeople) => {

  // tambien podemos hacer clausula de guardia
  // if (eachPeople.age === undefined) {
  //   return acc
  // }

  console.log(acc, eachPeople.age)
  // SIEMPRE tiene que devolver cual será el próximo valor del acumulador
  if (eachPeople.age !== undefined) {
    return acc + eachPeople.age
  } else {
    return acc
  }
}, 0)

console.log(suma / people.length)


// .reverse()

let orderedNumbers = [1, 2, 3, 4, 5]

console.log(orderedNumbers)

orderedNumbers.reverse() // revierte los elementos y nos devuelve la misma referencia del original

// console.log(reversedNumbers)
console.log(orderedNumbers) // si muta el array original

// .toReversed()
// .toReversed() crea una copia y no modifica el original

let orderedLetters = ["a", "b", "c", "d", "e"]

let reversedLetters = orderedLetters.toReversed()

console.log(reversedLetters)
console.log(orderedLetters) // no se modifica


// .sort() o toSorted()
// el primero muta el original y el segundo crea una copia

let letters = ["e", "b", "c", "a", "d"]
console.log(letters)
letters.sort()
console.log(letters)

let numbers = [10, 2, 40, 200, 2000]
console.log(numbers)
numbers.sort((elem1, elem2) => {
  console.log(elem1, elem2)

  // el sort siempre retornar un numero

  if (elem1 < elem2) {
    // si el numero es negativo => pone el primero antes
    return -1
  } else if (elem2 < elem1) {
    // si el numero es positivo => pone el segundo antes
    return 1
  } else {
    // si es cero no cambia el orden
    return 0
  }


})
console.log(numbers)





const people2 = [
  { name: 'Carlos', age: 25 },
  { name: 'Cándice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'allen', age: 21 },
  { name: 'Nettie', age: 46 },
  { name: 'stuart', age: 17 },
  { name: 'Bill', age: 19 },
];

people2.sort((person1, person2) => {

  //* ordenarlos por edad
  // if (person1.age < person2.age) {
  //   return -1
  // } else if (person2.age < person1.age) {
  //   return 1
  // } else {
  //   return 0
  // }

  //* ordenar por nombre
  // if (person1.name < person2.name) {
  //   return -1
  // } else if (person2.name < person1.name) {
  //   return 1
  // } else {
  //   return 0
  // }

  //* ordenar por nombre tomando en cuenta minisculas, mayusculas y acentos con localeCompare()
  // return person1.name.localeCompare(person2.name) // 1, o -1 o 0

  //* para hacer shuffle
  let randomValue = Math.floor(Math.random() * 3) - 1 // aleatorio entre -1 y 1
  console.log(randomValue)
  return randomValue


})

console.log(people2)


// localeCompare
let name1 = "xavi"
let name2 = "jose"

console.log(name1.localeCompare(name2)) // 1, -1 o 0