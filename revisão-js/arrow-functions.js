//Função que eleva um número ao quadrado
//Se prescisar disso em uma situação real, use Math.pow() ou o operador

function quadrado(n) {
    return n * n    
}

console.log(quadrado(9))

//Características da função acima:
//1) Apenas um parâmetro
//2) Apenas uma linha do código, com return
//3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow function
// a) Não precisa de parâmetros envolvendo o parâmetro
// b) A  Palavra function é subtituida pelo sinal =>, DEPOIS do parâmetro
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n*n
console.log(quadrado(9))

//Função com mais de um parâmetro
function potencia (b,e) {
    return b ** e
}

console.log(potencia(2,8))

//Função equivalente no formato arrow function

// Quando temos mais de parâmetro, os parênteses em volta
//dos argumentos a ser obrigatórios
let potencia2 =(b,e) => b**e
console.log(potencia2(2,8))

//Função sem parâmetro

function megasena(){
    //Esta função retorna um número aleatório entre 1 e 60
    //Math.random() -> retorna um número aleatório ente 0(inclusive) e 1(exclusive)
    // * 60 -> ajusta a faixa de valores entre 0 a 59
    // +1 -> ajustar a faixa de valores para entre 1 e 60
    // Math.floor -> arredonda para o menor inteiro (tirar as casas decimais)
    return Math.floor(Math.random() * 60 + 1)
} 

for (let index = 4; index < 6; index++) {
    console.log(megasena())
}

const megasena2 = () => Math.floor(Math.random() * 60 * 1)
for (let index = 4; index < 6; index++) {
    console.log(megasena2())
}

// Quando a função de uma linha de código, na arrow function equivalente
// retorna as chaves a também a palavra return, caso ela retorne valor

const somaVet2 = vet => {
    let soma = 0
    for (const n of vet) soma += n 
    return soma
}
console.log(somaVet2([12, 42, -11,20,9,16]))