//Vetor
let frutas = ['maçã', 'laranja','pera','uva','mamão','banana']
console.log(frutas)

// Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
// 1° parâmetro -> a posição de remoção (contagem começa em 0)
// 2° parâmetro -> a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2, 1) //SEMPRE retornará um vetor

console.log(frutas)
console.log(terceiraFruta)

//Inserir no início do vetor
frutas.unshift('Jabuticaba')// Também 


//Inserção no meio do  Vetor
// Parâmetros do splice() para inserção
//1° -> posição para inserção
//2° n° de elementos a serem excluídos (para inserção,usa-se 0)
//3° em diante -> elemento(S)qua será(ão) inserido(S)
frutas.splice(2,0,'pêssego')//Inseri na terceira posição
// Também funciona para inserir vários elementos ao msm tempo, por exeplo:
// frutas.splice(2,0,'pêssego','jaca','nectarina')
console.log(frutas)

//Usando splice() para substitição
//Parâmetros
//1° -> posiçaõ para substituição
//2° -> quantidade  

// Inserir múltipla com splice()
frutas.splice(1,0,'nectarima', 'jaca')
console.table (frutas)

/***************************/
    //PERCURSO DE VETOR
/*************************/

//1) Percuso com for tradicional
//a) A contagem começa em zero (0 - 1° elemento)
//b) Ocorre equanto o contador for Menor que o número de elementos do vetor
//c) lenght termina com TH (lígua mole)
//d) É o método mais fléxivel pois, se necessário, é possivel fazer um percurso
// parcial(começar em algum elemento que não é o primeiro e termina antes do final)
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

// 2) For tradicional, em ordem inversa
// a) O contador inicia-se em length -1
// A condição é contador MAIOR ou IGUAL a zero (0 - 1° elemento)
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(i, frutas[i])
}

// 3) Percuso com for..of
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de uma variavel contadora
// Variaáveis:
// f <- variável que recebá cada elemeto do vetor(pode ser qualquer nome de variável)
//frutas -> é o vetor a ser percorrido
let x =0
for (let f of frutas) {
    console.log(f)
}

// 4) Pecuso com forEach()
// forEach() recebe como parâmetro uma função que recebe como parâmetro cada elemento do vetor
// cada elemento de vetor
// O nome do parâmetro da função pode ser qualquer nome válido em indentificador
frutas.forEach(function(elemento){
    console.log(elemento)
})

frutas.forEach(elemento => console.log(elemento))

