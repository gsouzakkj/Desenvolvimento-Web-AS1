// Mensagem de interação na página inicial
function mostrarMensagem() {
    alert("🍷 Parabéns! Você acaba de ganhar 15% de desconto em seu primeiro pedido na Vinum D’Oro!");
}

// Validação do formulário
function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    const telRegex = /^\d{10,11}$/;

    if (!nome || !emailRegex.test(email) || !telRegex.test(telefone) || !mensagem) {
        alert("⚠️ Por favor, preencha todos os campos corretamente antes de enviar.");
        return false;
    }

    alert("✅ Dados enviados com sucesso!");
    return true;
}

// Página formAction - exibir dados do GET
window.onload = function() {
    if (window.location.pathname.includes("formAction.html")) {
        const params = new URLSearchParams(window.location.search);
        let html = "<ul>";
        for (const [campo, valor] of params.entries()) {
            html += `<li><strong>${campo}:</strong> ${valor}</li>`;
        }
        html += "</ul>";
        document.getElementById("dadosRecebidos").innerHTML = html;
    }
};