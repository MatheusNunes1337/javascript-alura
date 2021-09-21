console.log('trabalhando com listas')

const listaDestinos = new Array(`Pelotas`, `São Paulo`, `Miami`)
listaDestinos.push(`New York`) //adicionando item no array

console.log(listaDestinos)

listaDestinos.splice(1,1) //deletando item da lista 1º parâmetro = de onde queremos começar
//2º parâmetro é quantos elementos queremos remover

console.log(listaDestinos)

console.log(listaDestinos[1])