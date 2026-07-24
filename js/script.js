let btnPrincipal = document.querySelector(".btn-principal");

btnPrincipal.addEventListener("click", function () {

    alert("Bem-vindo à Cafeteria Aroma!");

});


let botoes = document.querySelectorAll(".card button");

for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", function () {

        alert("Produto adicionado ao carrinho!");

    });

}

let links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function () {

        alert("Página em desenvolvimento.");

    });

}

let enviar = document.querySelector(".formulario button");

enviar.addEventListener("click", function () {

    let nome = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let assunto = document.querySelectorAll('input[type="text"]')[1].value;
    let mensagem = document.querySelector("textarea").value;

    if (nome == "" || email == "" || assunto == "" || mensagem == "") {

        alert("Preencha todos os campos!");

    } else {

        alert("Mensagem enviada com sucesso!");

        document.querySelector('input[type="text"]').value = "";
        document.querySelector('input[type="email"]').value = "";
        document.querySelectorAll('input[type="text"]')[1].value = "";
        document.querySelector("textarea").value = "";

    }

});


let cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener("mouseover", function () {

        cards[i].style.transform = "translateY(-10px)";

    });

    cards[i].addEventListener("mouseout", function () {

        cards[i].style.transform = "translateY(0px)";

    });

}


let fotos = document.querySelectorAll(".fotos img");

for (let i = 0; i < fotos.length; i++) {

    fotos[i].addEventListener("click", function () {

        alert("Imagem da galeria.");

    });

}