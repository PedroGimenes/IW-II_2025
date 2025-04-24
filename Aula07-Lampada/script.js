const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const statusElement = document.getElementById("status");

let lampadaLigada = false;

function ligarLampada() {
    if (!lampadaLigada) {
        lampada.src = "img/ligado.png";
        lampada.alt = "Lâmpada Ligada";
        lampadaLigada = true;
        atualizarEstado();
    }
}

function desligarLampada() {
    if (lampadaLigada) {
        lampada.src = "img/desligado.png";
        lampada.alt = "Lâmpada Desligada";
        lampadaLigada = false;
        atualizarEstado();
    }
}

function atualizarEstado() {
    btnLigar.disabled = lampadaLigada;
    btnDesligar.disabled = !lampadaLigada;
    statusElement.innerText = lampadaLigada ? "Lâmpada ligada" : "Lâmpada desligada";
}

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

atualizarEstado();
