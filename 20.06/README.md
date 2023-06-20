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

2. Crie uma função que irá receber como parâmetro uma lista de números e irá mostrar quanto vale o dobro de cada elemento do array. Por exemplo, se o primeiro numero for 2, o console deve mostrar 4 e assim sucessivamente.
   > conteúdo: função, operadores aritméticos, array, estrutura de repetição

3. Altere o código a seguir para utilizar a função forEach de modo que a saída permaneça a mesma.
   > conteúdo: função, operadores aritméticos, array, estrutura de repetição

   ```javascript
    const numeros = [0,1,2,3,4,5];
    for(let i = 0; i<= numeros.length; i++) {
        if(i % 2 === 0) {
            console.log(i + ' é par');
        } else {
            console.log(i + ' é ímpar');
        }
    }

    // saída:
    // 0 é par
    // 1 é ímpar
    // 2 é par
    // 3 é ímpar
    // 4 é par
    // 5 é ímpar
   ```

## Map
O método map também usado para percorrer arrays, retornando como resultado um novo array, sem alterar os dados do array original. O map pode receber 3 parâmetros: valor atual (obrigatório), indice (opcional), array completo(opcional). Vide o exemplo abaixo:

```javascript
//através de arrow function
const minhaListaNumerica = [1, 2, 3, 4, 5];
minhaListaNumerica.map((numero) => numero/2)

// Através do function
minhaListaNumerica.map(function(numero) {
    return numero/2;
})
```

Perceba que nos exemplos acima nós usamos apenas o parametro referente ao valor atual, mas os demais também estão disponíveis como mostrado no código abaixo:

```javascript
//através de arrow function
const minhaListaNumerica = [1, 2, 3, 4, 5];
minhaListaNumerica.map((numero, indice, array) => {
    return {numero: numero, indice: indice, array: array}
})

// Através do function
minhaListaNumerica.forEach(function(numero, indice, array) {
    return {numero: numero, indice: indice, array: array}
})
```
## Bora praticar

1. Utilizando o método map, escreva a função dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.
   > conteúdo: função, operadores aritméticos, array, estrutura de repetição

2. Crie uma função que receba uma lista de nomes de pessoas, em seguida, usando o map transforme todas às letras em maiúsculas.
   > conteúdo: função, string, array, estrutura de repetição
3. Altere o código a seguir para utilizar a função map de modo que a saída permaneça a mesma.
   > conteúdo: função, operadores aritméticos, array, estrutura de repetição

   ```javascript
    const numeros = [0,1,2,3,4,5];
    for(let i = 0; i<= numeros.length; i++) {
        if(i % 2 === 0) {
            console.log(i + ' é par');
        } else {
            console.log(i + ' é ímpar');
        }
    }

    // saída:
    // numeros pares: [0, 2, 4] 
    // numeros impares: [1, 3, 5]
   ```
