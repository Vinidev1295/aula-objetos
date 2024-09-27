// A)
const exercicio = {
    nome: "Vinicius",
    apelidos: ["Vini", "Vinao", "Vininho"]
}
// B)
function atividade(exercicio){
console.log("Eu sou", exercicio.nome, "mas pode me chamar de:", exercicio.apelidos[0],",", exercicio.apelidos[1], "ou", exercicio.apelidos[2], ".")
}
atividade(exercicio)

const exercicio2 = {
    ...exercicio,
    apelidos: ["Vi", "Vinizinho", "Vinizao"]
}
atividade(exercicio2)
