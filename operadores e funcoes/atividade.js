function mostrarHoraAtual() {
    let agora = new Date();
    let horas = agora.getHours().toString().padStart(2, "0");
    let minutos = agora.getMinutes().toString().padStart(2, "0");
    let segundos = agora.getSeconds().toString().padStart(2, "0");

    console.log(`${horas}:${minutos}:${segundos}`);
}

mostrarHoraAtual();

function calcularNumeros() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    let soma = num1 + num2;
    let media = soma / 2;

    console.log("Soma:", soma);
    console.log("Média:", media);
}

calcularNumeros();

function analisarNome() {
    let nome = prompt("Digite seu nome:");

    console.log("Quantidade de letras:", nome.length);
    console.log("Nome em maiúsculo:", nome.toUpperCase());
}

analisarNome();

function verificarHTML() {
    let frase = prompt("Digite uma frase:");

    if (frase.toUpperCase().includes("HTML")) {
        console.log("A frase contém a palavra HTML");
    } else {
        console.log("A frase NÃO contém a palavra HTML");
    }
}

verificarHTML();
