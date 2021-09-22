console.log('trabalhando com loops')

const listaDestinos = new Array(`Pelotas`, `São Paulo`, `Miami`)
listaDestinos.push(`New York`) 

console.log(listaDestinos)

const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = false
const destino = 'Miami'

console.log('\n lista de destinos possíveis:')
console.log(listaDestinos)


const podeComprar  = idadeComprador >= 18 || estaAcompanhada 
let contador = 0;
let destinoExiste = false

while(contador < 3) {
    if(listaDestinos[contador] == destino) {
        destinoExiste = true
        break
    } 
    contador++;
}

console.log('destino existe?', destinoExiste)
    

if(podeComprar && destinoExiste) {
    console.log('Boa viagem!')
} else {
    console.log('Desculpe, ocorreu um erro.')
}

for(let cont = 0; cont < 3; cont++) {
    if(listaDestinos[cont] == destino) {
        destinoExiste = true
    } 
}