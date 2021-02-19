// Objetos são estruturas que  permitem armazenar diversos valores 
// em uma mesma váriavel, permitindo acessá-los por meio de um nome

//Criação de um objeto vazio
let vazio1 = {}    //Forma "moderna"
let vazia2 = new Object()   //Forma "tradicinal"

//Criando um objeto com dados
let pessoa = {
    /*
    Os dados são armazenados no formato 
    propriedade: valor
    ou também cahamdo de
    atributo: valor
    */ 
    nome: 'Guilherme',
    sexo: 'M',
    dataNasc: '2001-10-04',
    ocupacao: 'Analista de Rota',
    // Nome da propriedade pode ter espaço ou acento
    // Nesse caso, o nome da propriedade precisa estar entre aspas
    //EX:
    'cidade de origem': 'Franca/SP', 
    gostos: ['jogos', 'doces', 'dormir'] //Vetor em uma posição de objeto
}
console.table(pessoa)
console.log(pessoa)

// Exibindo apenas o valor de uma propriedade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// Quando o nome da propriedade tem espaços ou acento, não é possivel
// usar a sintaxe de ponto. É necassário usar a sintaxe de colchetes
console.log(pessoa['cidade de origem'])
console.log(pessoa.gostos)
console.log(pessoa.gostos[2])

// A sintaxe dos colchetes SEMPRE funciona, mesmo se o nome da propriedade
// for uma única palavra sem acento
console.log(pessoa['nome'])
console.log(pessoa['gostos'][1]) //Mostrando só o 2°gosto


// Outra consequência da sintaxe do colchetes é a possibilidade de
// usar nomesde propriedades que estão dentro de variáveis

let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])


// Criando uma nova propriedade para um objeto já existente
// Basta atribuir um valor a um nome de propriedade ainda não existente
pessoa.email = 'guilherme@ata.com'
pessoa.celular = '(16) 9888-4351'
console.table(pessoa)

//Criando um objeto vazio e só depois adicionando propriedades

let carro = {}
carro.marca = 'Volksvagen'
carro.modelo = 'Konbi'
carro.ano = 1971
carro ['combustível'] = 'gasolina'
carro.cor = 'bege'

console.log(carro)


// Excluindo uma propriedade de um objeto
delete carro.ano

console.table(carro)