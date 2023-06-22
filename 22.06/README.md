## Revisão de Lógica de Programação
###### fonte: https://github.com/lisandrascruz/lp-revisao
---

## 📚 Conteúdo

1. Variáveis e constantes
2. Boas práticas de nomeclatura
3. Operadores aritméticos, comparação e lógico
4. Estrutura de condição
5. Estrutura de repetição
6. Objetos
7. Arrays
8. Funções

---

## 🧠 Relembrando

### Constantes e variáveis servem para armazenar valores a serem utilizados no decorrer do código.

```javascript
const umaConstante = "Aqui guardaremos um valor imultável";
let umaVariavel = "Aqui guardaremos um valor multável";
```

### Os operadores aritméticos são os conhecidos por nós na matemática.

```javascript
const soma = 21 + 21;
const subtracao = 21 - 21;
const multiplicacao = 21 * 21;
const divisao = 21 / 21;
```

Além dos mais comuns cidatos acima existe também o módulo da divisão que consiste no resto da divisão de dois números.

```javascript
const moduloDaDivisão = 21 % 21;
```

### Operadores de comparação e lógico

```javascript
// Comparação
const estritamenteIgual = 21 === 21;
const estritamenteDiferente = 21 !== 21;
const maiorQue = 21 > 21;
const maiorOuIgualQue = 21 >= 21;
const menorQue = 21 < 21;
const menorOuIgualQue = 21 <= 21;
// Lógicos
const and_e = estritamenteIgual && maiorQue;
const or_ou = maiorQue || estritamenteDiferente;
const not_nao = !estritamenteDiferente;
```

### Estrutura de Condição

```javascript
  if(condicao) {
    // faz algo
  } else if (outra condicao) {
    // faz outra coisa
  } else {
    // se nenhuma das condições forem atendidas
    // faça o que tiver aqui!
  }
```

### Estrutura de Repetição

```javascript
for (let i = 0; i < 10; i++) {
  // esse trecho de código será executado enquanto i for
  // menor que dez e a cada vez que rodar
  // i será incrementado com +1
}
```

```javascript
const contador = 0;
while (contador < 10) {
  // esse trecho de código será executado enquanto
  // o contador for menor que 10. Se não tivermos cuidado
  // poderemos cair em um loop infinito. Logo, dentro desse while
  // precisamos incrementar o contador.
  contador += 1;
}
```

### Objetos

Os objetos são uma estrutura de dados onde podemos armazenar uma coleção de propriedades, contendo assim chave e valor.

```javascript
const meuObjeto = { nome: "Lisandra Cruz", apelido: "Lis", idade: 28 };
```

### Arrays

O array é uma estrutura que serve para armazenar e organizar os dados.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const vogais = ["a", "e", "i", "o", "u"];
const pessoas = [
  { nome: "Lisandra Cruz", apelido: "Lis", idade: 28 },
  { nome: "Andréa Azevedo", apelido: "Deia", idade: 52 },
  { nome: "Dandara Lima", apelido: "Dandinha", idade: 5 },
];
```

### Funções

Criar função é o ato de encapsular trechos de código que podem ser invocados ou chamados em outras partes do código, fortalecendoa assim a reutilização. Podemos criar funções de 2 maneiras:

```javascript
// Através do function
function minhaFuncao() {
  // faz alguma coisa
}

//através de arrow function
const minhaFuncao = () => {
  // faz alguma coisa
};
```

Perceba que as funções podem receber parametros. Os parametros são os dados necessários para sua execução. Os paramentros devem ser passados dentro do parentese. Por exemplo:

```javascript
// Através do function
function soma(n1, n2) {
  return n1 + n2;
}

//através de arrow function
const soma = (n1, n2) => {
  return n1 + n2;
};
```

---

## 🫂 Revisando na prática

> Programação é prática, então vamos lá!

&nbsp;

#### 1. Siga as instruções descritas abaixo:
  <sub>Conteúdos abordados: constantes e variáveis</sub>
      
  * Crie uma constante chamada **meuNome** e atribua a ela o seu nome.
  * Crie uma constante chamada **cidadeNatal** e atribua a ela a sua cidade de nascimento.
  * Crie uma constante chamada **anoDeNascimento** e atribua a ela o ano em que você nasceu.
  * Crie uma variável chamada **profissão** e atribua a ela a sua profissão.
  * Utilize o console.log para imprimir as constantes e variáveis que você criou.
  * Altere o valor da variável profissão para **desenvolvedora** e tente exibir no console novamente, observe o que acontece.
  * Atribua um novo valor à constante **cidadeNatal** e tente exibir no console novamente, observe o que acontece.
      
  > Você consegue entender e explicar, com suas palavras, o motivo do erro?
---

#### 2. Crie uma variável chamada **diaDaSemana** que receba a string "quarta-feira". Utilizando if/else, implemente condicionais para que:
<sub>Conteúdos abordados: Tabela verdade, Estrutura Condicional</sub>
  
a. Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", o console.log imprima a seguinte mensagem:
  > Oba, mais um dia de aprendizado em JavaScript :D 
  
b. Se for algum dia de fim de semana:  
  > “FINALMENTE, descanso merecido”.
---

#### 3. Escreva um código JavaScript para exibir os números de 1 até 1000 na tela.
---

#### 4. Encontre e exiba na tela todos os números pares entre 1 e 200.
---

#### 5. Use o for para analisar todos os numeros de 0 a 40 e salvar os pares em um array e os impares em outro array.

&nbsp;

<p align='center'>

  <img src="https://static.wikia.nocookie.net/looneytunes/images/a/a4/THAT%27SALLGIFS.gif/revision/latest/scale-to-width-down/260?cb=20160806162644" alt="drawing" width="300"/>
  &nbsp;
</p>
`
