document.addEventListener("DOMContentLoaded", () => {
    let tempoRestante = 10;
    const timerElemento = document.getElementById("timer");
    const resultElemento = document.getElementById("result");
    const playerIcon = document.getElementById("playerIcon");
    const machineIcon = document.getElementById("machineIcon");
    const winnerMessage = document.getElementById("winnerMessage");
    let escolhaUsuario = "❓";

    function atualizarTimer() {
        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        timerElemento.textContent = `${minutos}:${segundos}`;
        timerElemento.style.transform = "scale(1.1)";

        setTimeout(() => {
            timerElemento.style.transform = "scale(1)";
        }, 200);

        if (tempoRestante > 0) {
            tempoRestante--;
        } else {
            clearInterval(intervalo);
            timerElemento.textContent = "Tempo Esgotado!";

            // Máquina escolhe aleatoriamente
            const opcoes = ['👊', '✌', '🖐'];
            const escolhaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];

            // Exibir resultado visualmente
            playerIcon.textContent = escolhaUsuario;
            machineIcon.textContent = escolhaMaquina;

            // Determinar o vencedor
            const vencedor = determinarVencedor(escolhaUsuario, escolhaMaquina);
            winnerMessage.textContent = vencedor;

            resultElemento.style.display = "flex";
        }
    }

    function escolher(opcao) {
        escolhaUsuario = opcao;
    }

    function determinarVencedor(player, machine) {
        if (player === machine) {
            return "Empate! 🤝";
        }

        if (
            (player === '👊' && machine === '✌') ||
            (player === '✌' && machine === '🖐') ||
            (player === '🖐' && machine === '👊')
        ) {
            return "Você venceu! 🎉";
        }

        return "A máquina venceu! 🤖";
    }

    // Inicia o timer imediatamente
    atualizarTimer();
    const intervalo = setInterval(atualizarTimer, 1000);

    // Adiciona a função escolher ao escopo global
    window.escolher = escolher;
});