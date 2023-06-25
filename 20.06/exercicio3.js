const numeros = [5, 2, 8, 10, 1, 3, 16];
numeros.forEach((numero) => {
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par`)
     } else{
            console.log(`O número ${numero} é ímpar`)
        }
    });