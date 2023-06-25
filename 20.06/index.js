const numeros = [1, 2, 3, 4, 5, 6]

//for (let i = 0; i < numeros.length; i ++) {
//    console.log(numeros[i])
// }

numeros.forEach((numero, indice, array) => {
    console.log("O valor atual é: " + numero)
    console.log("O índice é: " + indice)
    console.log("A array é: " + array)
})
