console.log('atribuição de variáveis')

const nome = 'Matheus'
const sobrenome = 'Nunes'
const idade = 23
let nomeCompleto

console.log(nome + ' ' + sobrenome)
console.log(`Meu nome é ${nome} ${sobrenome}`)

//nome = nome + sobrenome  =>  erro, pois é do tipo const
nomeCompleto = nome + sobrenome
console.log(nomeCompleto)

let age //declaração de variável
age = 23 //atribuindo
age = age + 1
console.log(age)