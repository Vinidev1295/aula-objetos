function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) 
/*a) O que vai ser impresso no console?
Irá imprimir o resultado da propriedade backender do objeto pessoa.
Irá imprimir como undefined.
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
Irá imprimir o resultado da propriedade backender do objeto pessoa.
Irá imprimir como undefined pois nao foi definido nenhuma propriedade para altura.*/
