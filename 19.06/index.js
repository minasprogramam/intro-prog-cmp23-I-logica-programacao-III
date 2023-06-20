// function meuNome(nome, sobrenome) {
//   console.log(nome + " " + sobrenome);
// }

// meuNome("Lisandra", "Cruz");
// meuNome("Elis", "Cruz");
// meuNome("Let", "Cruz");
// meuNome("Vivi", "Cruz");

// const meuNome = (nome, sobrenome) => console.log(nome + " " + sobrenome);

// meuNome("Lisandra", "Cruz");
// meuNome("Elis", "Cruz");
// meuNome("Let", "Cruz");
// meuNome("Vivi", "Cruz");

// 1. Crie uma função que retorna um log contendo seu nome e sua idade.
// const nomeIdade = (nome, idade) =>
//   console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);

// const nomeIdade = (nome, idade) => {
//   console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
// };

// function nomeIdade(nome, idade) {
//   console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
// }

// nomeIdade("Lis", 28);
// nomeIdade("Demis", 12);

//2. Crie uma função que receberá 3 notas e dirá a média do estudante
// function mediaDeNotas(nota1, nota2, nota3) {
//   console.log((nota1 + nota2 + nota3) / 3);
// }

// const mediaDeNotas = (nota1, nota2, nota3) => {
//   const somaNotas = nota1 + nota2 + nota3;
//   const media = somaNotas / 3;

//   console.log("A média da benção é: " + media);
// }

// mediaDeNotas(10, 2, 3);
// mediaDeNotas(9, 4, 5);
// mediaDeNotas(10, 5, 9);

// 3. Crie uma função que recebe por parâmetro o tempo de duração expressa em segundos e retorna esse tempo em horas e minutos.
// function converterEmHorasEMinutos(tempoEmSegundos) {
// 1 hora = 60 minutos
// 1 minuto = 60 segundos
//   const tempoEmMinutos = tempoEmSegundos / 60;
//   const tempoEmHoras = tempoEmSegundos / 3600;

//   console.log(
//     `${tempoEmSegundos} segundos correspondem a ${tempoEmMinutos} minutos ou ${tempoEmHoras} horas`
//   );
// }

// converterEmHorasEMinutos(3600);

// 4. Crie uma função que receba três números, verifique e mostre o maior deles.
// const verificaMaiorNumero = (numero1, numero2, numero3) => {
//   if (numero1 > numero2 && numero1 > numero3) {
//     console.log("O numero " + numero1 + " é o maior entre os 3");
//   } else if (numero2 > numero3 && numero2 > numero1) {
//     console.log("O numero " + numero2 + " é o maior entre os 3");
//   } else if (numero3 > numero1 && numero3 > numero2) {
//     console.log("O numero " + numero3 + " é o maior entre os 3");
//   }
// };

// verificaMaiorNumero(33, 23, -7);

// 5. Crie uma função que receba um número e usando laços de repetição calcule e mostre a tabuada desse número

// 1. Criar uma função que recebe um paramentro OK
// 2. Utilizar uma estrutura de repetição (for ou while) para calcular

const mostrarTabuada = (numero) => {
  // console.log(numero * 1);
  // console.log(numero * 2);
  // console.log(numero * 3);
  // console.log(numero * 4);
  // console.log(numero * 5);
  // console.log(numero * 6);
  // console.log(numero * 7);
  // console.log(numero * 8);
  // console.log(numero * 9);
  // console.log(numero * 10);

  for (let i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + numero * i);
  }
};

mostrarTabuada(25);

// for (let i = 1; i <= 10; i++) {
//   console.log(i + 1);
// }

// // Rodou 1
// i= 1
// console: 2

// // Rodou 2
// i = 2
// console: 3

// // Rodou 3
// i = 3
// console: 4

// // Rodou 4
// i = 4
// console: 5

// // Rodou 5
// i = 5
// console: 6

// // Rodou 6
// i = 6
// console: 7

// // Rodou 7
// i = 7
// console: 8

// // Rodou 8
// i = 8
// console: 9

// // Rodou 9
// i = 9
// console: 10

// // Rodou 10
// i = 10
// console: 11
