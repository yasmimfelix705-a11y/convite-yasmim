// ==========================
// ABRIR CONVITE
// ==========================

function abrirConvite() {

    const telaEnvelope = document.getElementById("tela-envelope");
    const telaConvite = document.getElementById("tela-convite");
    const envelope = document.querySelector(".envelope");

    envelope.classList.add("abrindo");

    setTimeout(() => {

        telaEnvelope.style.display = "none";

        telaConvite.style.opacity = "1";
        telaConvite.style.visibility = "visible";

        // Salva que o convite já foi aberto
        sessionStorage.setItem("conviteAberto", "true");

    }, 1500);

}



// ==========================
// AO CARREGAR A PÁGINA
// ==========================

window.onload = function () {

    const telaEnvelope = document.getElementById("tela-envelope");
    const telaConvite = document.getElementById("tela-convite");

    // Se voltou da lista de presentes,
    // mostra o convite direto
    if (sessionStorage.getItem("conviteAberto") === "true") {

        telaEnvelope.style.display = "none";

        telaConvite.style.opacity = "1";
        telaConvite.style.visibility = "visible";
    }

}



// ==========================
// LISTA DE PRESENTES
// ==========================

function listaPresentes() {

    window.location.href = "lista-presentes.html";

}



// ==========================
// LOCAL DA FESTA
// ==========================

function verLocal() {

    window.open(
        "https://maps.app.goo.gl/mfc4JibumckWUFtp7",
        "_blank"
    );

}



// ==========================
// CONFIRMAÇÃO DE PRESENÇA
// ==========================

function confirmarPresenca() {

    window.open(
        "https://yasmimfelix705-a11y.github.io/confirma-o-presen-a-15/",
        "_blank"
    );

}



// ==========================
// VOLTAR AO CONVITE
// ==========================

function voltarConvite() {

    window.location.href = "index.html";

}
