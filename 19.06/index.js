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
const verificaMaiorNumero = (numero1, numero2, numero3) => {
  if (numero1 > numero2 && numero1 > numero3) {
    console.log("O numero " + numero1 + " é o maior entre os 3");
  } else if (numero2 > numero3 && numero2 > numero1) {
    console.log("O numero " + numero2 + " é o maior entre os 3");
  } else if (numero3 > numero1 && numero3 > numero2) {
    console.log("O numero " + numero3 + " é o maior entre os 3");
  }
};

verificaMaiorNumero(33, 23, -7);
