document.addEventListener("DOMContentLoaded", function () {
    
    // ===== Contador Regressivo (Home) =====
    const contadorElement = document.getElementById("contador");
    if (contadorElement) {
        const dataEvento = new Date(2025, 6, 15, 9, 0, 0).getTime();

        function atualizarContador() {
            const agora = new Date().getTime();
            const diferenca = dataEvento - agora;

            if (diferenca <= 0) {
                contadorElement.innerHTML = "O evento já começou!";
                return;
            }

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            contadorElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        setInterval(atualizarContador, 1000);
        atualizarContador();
    }

    // ===== Alerta de Cadastro Finalizado (Contato) =====
    const formContato = document.querySelector("form");
    if (formContato) {
        formContato.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Cadastro finalizado com sucesso!");
        });
    }

});