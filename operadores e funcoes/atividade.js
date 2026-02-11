function mostrarHoraAtual() {
    let agora = new Date();
    let horas = agora.getHours().toString().padStart(2, "0");
    let minutos = agora.getMinutes().toString().padStart(2, "0");
    let segundos = agora.getSeconds().toString().padStart(2, "0");

    console.log(`${horas}:${minutos}:${segundos}`);
}

mostrarHoraAtual();

function calcularNumeros(num1, num2) {
    let soma = num1 + num2;
    let media = soma / 2;

    console.log("Soma:", soma);
    console.log("Média:", media);
}

calcularNumeros(2, 2);

function analisarNome(nome) {
    console.log("Quantidade de letras:", nome.length);
    console.log("Nome em maiúsculo:", nome.toUpperCase());
}

analisarNome("Vitor");

function verificarHTML(frase) {
    if (frase.toUpperCase().includes("HTML")) {
        console.log("A frase contém a palavra HTML");
    } else {
        console.log("A frase NÃO contém a palavra HTML");
    }
}

verificarHTML("Estou estudando HTML e CSS");
