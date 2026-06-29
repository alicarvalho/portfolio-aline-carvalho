// Formulário

// Botão do tema

const botaoTema = document.getElementById("tema");
botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

    botaoTema.textContent = "☀️";

} else {

    botaoTema.textContent = "🌙";

}

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

   const nome = document.getElementById("nome").value.trim();

   const email = document.getElementById("email").value.trim();

   const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {

       alert("Por favor, preencha todos os campos.");

    return;

    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();


});

