// A)
const objeto1= {
    nome: "Vinicius",
    idade: 28,
    profissao: "Empresário"
}
const objeto2= {
    nome: "Serjao",
    idade: 47,
    profissao: "Biólogo"
}
// B)
function objeto3(objeto1, objeto2){
const resultado = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]
return resultado
const resultado2 = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length]
return resultado2
}
console.log(objeto3(objeto1))
console.log(objeto3(objeto2))
