function dobraNumero(numeros) {
    numeros.forEach((numero) => {
        console.log(`O dobro do número ${numero} é ` + numero * 2)
    });
}

dobraNumero([2, 4, 8, 10])