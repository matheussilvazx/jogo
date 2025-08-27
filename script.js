// Variáveis do jogo
let betAmount = 5; // Valor da aposta inicial
const multiplier = 2; // Multiplicador fixo de 2x
const winChance = 5; // Chance de ganhar (5% de chance de vitória)

// Atualiza o valor da aposta ao mover o slider
document.getElementById("betAmount").addEventListener("input", function() {
    betAmount = parseInt(this.value);
    document.getElementById("betValue").textContent = `R$ ${betAmount}`;
});

// Ação de clicar no botão "Apostar"
document.getElementById("betButton").addEventListener("click", function() {
    placeBet();
});

// Ação de clicar em "ROLAR DEBAIXO"
document.getElementById("rollUnder").addEventListener("click", function() {
    rollDice("under");
});

// Ação de clicar em "ROLAR SOBRE"
document.getElementById("rollOver").addEventListener("click", function() {
    rollDice("over");
});

// Função para rolar os dados
function rollDice(prediction) {
    // Gera um número aleatório entre 0 e 99
    const randomNumber = Math.floor(Math.random() * 100);
    document.getElementById("random-number").textContent = randomNumber < 10 ? `0${randomNumber}` : randomNumber;

    // Lógica para verificar se o jogador acertou com base na probabilidade
    let resultMessage = "";

    // Condição de vitória com base na chance ajustada
    const winningRange = Math.floor(100 / (100 / winChance)); // Calcula o intervalo de vitória (ex: 5% de chance de vitória)

    // Se o jogador escolheu "under", ganha se o número estiver dentro do intervalo de "baixo"
    if (prediction === "under" && randomNumber < winningRange) {
        resultMessage = `Você acertou! O número foi ${randomNumber}. Você ganhou R$ ${betAmount * multiplier}`;
    }
    // Se o jogador escolheu "over", ganha se o número estiver dentro do intervalo de "cima"
    else if (prediction === "over" && randomNumber >= (100 - winningRange)) {
        resultMessage = `Você acertou! O número foi ${randomNumber}. Você ganhou R$ ${betAmount * multiplier}`;
    } else {
        resultMessage = `Você errou! O número foi ${randomNumber}. Você perdeu a aposta.`;
    }

    // Exibe o resultado na tela
    document.getElementById("result-message").textContent = resultMessage;
}

// Função para simular uma aposta
function placeBet() {
    const betValue = document.getElementById("betAmount").value;
    alert(`Aposta realizada com sucesso! Valor: R$ ${betValue}`);
    // O valor da aposta é salvo na variável betAmount
}
