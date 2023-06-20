# Métodos de Array

# forEach
O método forEach é usado para percorrer arrays, recebendo uma determinada função e executando-a para cada um dos elementos. O forEach pode receber 3 parâmetros: valor atual (obrigatório), indice (opcional), array completo(opcional). Vide o exemplo abaixo:

```javascript
//através de arrow function
const minhaListaNumerica = [1, 2, 3, 4, 5];
minhaListaNumerica.forEach((numero) => console.log(numero))

// Através do function
minhaListaNumerica.forEach(function(numero){
    console.log(numero)
})
```

Perceba que nos exemplos acima nós usamos apenas o parametro referente ao valor atual, mas os demais também estão disponíveis como mostrado no código abaixo:

```javascript
//através de arrow function
const minhaListaNumerica = [1, 2, 3, 4, 5];
minhaListaNumerica.forEach((numero, indice, array) => {
    console.log(numero)
    console.log(indice)
    console.log(array)
})

// Através do function
minhaListaNumerica.forEach(function(numero, indice, array){
    console.log(numero)
    console.log(indice)
    console.log(array)
})
```

## Bora praticar

1. Crie uma função que recebe como paramentro uma lista de numeros, utilizando um forEach a função deve percorrer cada elemento e exibir um console log informando à pessoa usuária se o numero é positivo ou negativo.
   > conteúdo: função, operadores aritméticos, array, estrutura de repetição

2. TO-DO
   > conteúdo: função

## Map
O método forEach é usado para percorrer arrays, recebendo uma determinada função e executando-a para cada um dos elementos. O forEach pode receber 3 parâmetros: valor atual (obrigatório), indice (opcional), array completo(opcional). Vide o exemplo abaixo:

## forEach vs map
A principal diferença (...)
