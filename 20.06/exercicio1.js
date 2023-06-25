
function verificaNumeros(numeros) {
    numeros.forEach((numero) => {
        if (numero < 0) {
            console.log(`O número ${numero} é negativo`)
          }  else if (numero > 0) {
            console.log(`O número ${numero} é positivo`)
           }  else {
                console.log("O número é 0")
            }
         });
}

verificaNumeros([0, 2, 3, -4, -5]);