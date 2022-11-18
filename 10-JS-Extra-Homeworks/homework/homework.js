// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");
const { mayuscula } = require("../../07-JS-VI/homework/homework");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    var a = [];
    for (const key in objeto) {
      a.push([`${key}`, objeto[key]]);
    }; return a;
    // tiene que haber alguna mejor forma de hacerlo... no?
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  const a = Array.from(string);
  const cants = {};
  a.forEach(e => {
    if (!cants.e) { cants[e] = a.filter(x => x === e).length }
  });
  return cants;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  const a = Array.from(s);
  return a.sort((a, b) => /[A-Z]/.test(a) ? /[A-Z]/.test(b) ? 0 : -1 : 0).join(''); // solucion de stackoverflow
  // yo hubiera ido seguramente por convertir el string a array, y despues usar pop() y unshift() (tal vez necesitaria dar vuelta el array en algun momento para conservar el orden de las mayus insertadas al principio); o bien hacer dos filter() para filtrar mayus (que ya las tendria en orden), !mayus en lugar de minus, para conservar cualquier tipo de caracter especial o espacio, y despues concatenar ambos arrays resultantes de las filtros. Sin dudas una linda tareita para jugar despues con  mas tiempo...!
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  const str = numero.toString();
  return str === str.split("").reverse().join("") ? "Es capicua" : "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  const a = Array.from(cadena);
  const del = ["a", "b", "c"];
  return a.filter(e => !del.includes(e)).join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  return arr.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(arrA, arrB){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  return arrA.filter(e => arrB.includes(e));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

