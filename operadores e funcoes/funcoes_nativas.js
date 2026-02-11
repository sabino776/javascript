
console.log("------funções nativas------");
let agora = new Date();
console.log(agora);
function mostrarDatahora(){
    let data = new Date();
    console.log("dia atual ",data.getDate());
    console.log("mes atual", data.getMonth()+ 1 );
    console.log("ano atual", data.getFullYear());
    console.log("hora atual", data.getHours());
    console.log("minuto", data.getMinutes());
    console.log("desafio");
 console.log("Data e Hora Formatada: " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear())

}
mostrarDatahora();

console.log(Math.PI);
function calcularoperacoes(numero){
    console.log("raiz:", Math.sqrt(numero));
    console.log("Arredondar para baixo:", Math.floor(numero));
    console.log("Arredondar para cima:", Math.ceil(numero));
    console.log("Valor arredondado:", Math.round(numero));
    console.log("10 " + "elevado a " + numero + ":", Math.pow(10, numero));
}
calcularoperacoes(7.8);

function analisartexto(texto){
    console.log("Texto em maiúsculas:", texto.toUpperCase());
    console.log("Texto em minúsculas:", texto.toLowerCase());
    console.log("Número de caracteres:", texto.length);
}
function eEssaaqui(nome, curso){
    return "aluno: " + nome + " curso: " + curso;
}
console.log(eEssaaqui("vitor", "javascript"));
analisartexto("Olá, Mundo!");
