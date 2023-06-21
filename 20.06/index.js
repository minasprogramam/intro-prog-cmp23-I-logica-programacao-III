// const anosDeNascimento = [1998, 2012, 2003];
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
// console.log(numeros[5]);
// console.log(numeros[6]);
// console.log(numeros[7]);

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// anosDeNascimento.forEach((numero) => {
//   console.log("idade " + (2023 - numero));
// });

// 1. Crie uma função que recebe como paramentro uma lista de numeros,
// utilizando um forEach a função deve percorrer cada elemento e exibir um
//console log informando à pessoa usuária se o numero é positivo ou negativo.

function verificadorDeNumeros(numeros) {
  numeros.forEach((numero) => {
    if (numero > 0) {
      console.log(numero + " é positivo");
    } else {
      console.log(numero + " é negativo");
    }
  });
}

// verificadorDeNumeros([1, 9, -5, -1, 33]);

// 2. Crie uma função que receba uma lista de nomes
// de pessoas, em seguida, usando o map transforme
// todas às letras em maiúsculas.
// const dobrarNumeros = (numeros) => {
//   numeros.forEach((numero) => console.log(numero * 2));
// };

// const numeros = [1, 2, 4, 22, 44, 66];
// dobrarNumeros(numeros);

// 3. Altere o código a seguir para utilizar a função forEach de modo
// que a saída permaneça a mesma.
// for (let i = 0; i <= numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     console.log(numeros[i] + " é par");
//   } else {
//     console.log(numeros[i] + " é ímpar");
//   }
// }

const numeros = [10, 11, 12, 13, 14, 15];
numeros.forEach((numero) => {
  if (numero % 2 === 0) {
    console.log(numero + " é par");
  } else {
    console.log(numero + " é ímpar");
  }
});