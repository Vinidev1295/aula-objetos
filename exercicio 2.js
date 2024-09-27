const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //Irá imprimir o objeto cachorro
console.log(gato) //Irá espelhar o objeto cachorro e substituir o nome por Juba
console.log(tartaruga) //Irá espelhar o objeto gato e substituir todas letras "a" do nome pela letra "o"
/*b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
  Vai espelhar o objeto citado.*/
