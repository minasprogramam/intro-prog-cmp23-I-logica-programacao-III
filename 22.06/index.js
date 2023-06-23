// let umaConstante = "Aqui guardaremos um valor imultável";
// console.log(umaConstante);
// umaConstante = "hehe";
// console.log(umaConstante);

// console.log(abc);

// if (true) {
//   var abc = "";
// }

// const moduloDaDivisão = 30 % 21;
// console.log(moduloDaDivisão);

// console.log(21 !== '21');

// const idade = 9;
// if (idade >= 18) {
//   console.log("É de maior!");
// } else if (idade < 0 && idade > 150) {
//   console.log("Uma idade inválida foi digitada ");
// } else {
//   console.log("É de menor!");
// }

// if (idade >= 18 && idade < 150) {
//   console.log("É de maior!");
// } else if (idade < 0 || idade > 150) {
//   console.log("Uma idade inválida foi digitada ");
// } else {
//   console.log("É de menor!");
// }

// if (idade <= -1 || idade >= 151) {
//   console.log("Uma idade inválida foi digitada ");
// } else if (idade >= 18) {
//   console.log("É de maior!");
// } else {
//   console.log("É de menor!");
// }

// if (idade <= -1 || idade >= 151) {
//   console.log("Uma idade inválida foi digitada ");
// } else if (idade >= 18) {
//   console.log("É de maior!");
// } else if (idade < 18) {
//   console.log("É de menor!");
// }

// for (let contador = 0; contador < 10; contador++) {
//   console.log(contador);
// }

// for (let contador = 1; contador <= 10; contador++) {
//   console.log(contador);
// }

// for (let contador = 10; contador >= 1; contador--) {
//   console.log(contador);
// }

// for (let contador = 1000; contador >= 1; contador -= 5) {
//   console.log(contador);
// }

// for (let contador = 0; contador <= 1000; contador += 5) {
//   console.log(contador);
// }

// let contador = 0;
// while (contador < 10) {
//   contador++;
//   console.log(contador);
// }

// const lisDados = {
//   nome: "Lisandra Cruz",
//   idade: 28,
//   corFavorita: "verde",
// };
// const quadroVermelho = { mensagem: "Recife é um ovo", altura: 15, largura: 50 };
// console.log(quadroVermelho.mensagem);

// const solDados = { nome: "Sol", idade: 22, corFavorita: "Rosa" };

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = ["Lis", "Grazi", "Let", "Sol"];
// const array3 = [
//   { nome: "Lisandra Cruz", idade: 28, corFavorita: "verde" },
//   { nome: "Sol", idade: 22, corFavorita: "Rosa" },
//   { nome: "Leticia", idade: 22, corFavorita: "Azul" },
//   2,
//   4,
//   6,
// ];
// console.log(array3[2].nome);

// function somar(n1, n2) {
//   console.log(n1 + n2);
// }

// const somar = (n1, n2) => {
//   console.log(n1 + n2);
// };

for (let i = 1; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// somar(2, 4454);
const pares = [];
const impares = [];
// for (let i = 0; i <= 40; i++) {
//   if (i % 2 === 0) {
//     pares.push(i);
//   } else if (i % 2 === 1) {
//     impares.push(i);
//   }
// }

for (let i = 0; i <= 40; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}

// console.log(impares);
// console.log(pares);
