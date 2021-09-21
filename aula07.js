console.log('trabalhando com condicionais')

const listaDestinos = new Array(`Pelotas`, `São Paulo`, `Miami`)
listaDestinos.push(`New York`) 

console.log(listaDestinos)

const idadeComprador = 15
const estaAcompanhada = false
const temPassagemComprada = true

/*
if(idadeComprador >= 18) {
    console.log('comprador maior de idade')
    listaDestinos.splice(1,1) 
} else if(estaAcompanhada) {
        console.log('comprador está acompanhado')
        listaDestinos.splice(1,1) 
} else {
        console.log('comprador menor de idade, portanto, não posso vender')
}
*/


if(idadeComprador >= 18 || estaAcompanhada) {
    console.log('boa viagem!')
    listaDestinos.splice(1,1) 
}  else {
        console.log('comprador menor de idade, portanto, não posso vender')
}

console.log('Embarque: \n\n')

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem!')
} else {
    console.log('Você não pode embarcar')
}





console.log(listaDestinos)
