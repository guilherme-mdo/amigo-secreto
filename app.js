let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Digite um nome válido!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");
    
    // Limpa a lista de resultados antes de adicionar um novo item
    resultadoLista.innerHTML = "";

    if (amigos.length > 0) { // Verifica se há amigos na lista
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
        let amigoSelecionado = amigos[indiceAleatorio]; // Seleciona o nome correspondente ao índice

        // Cria um novo <li> para mostrar o nome sorteado
        let itemResultado = document.createElement("li");
        itemResultado.textContent = "Amigo selecionado: " + amigoSelecionado;
        resultadoLista.appendChild(itemResultado); // Adiciona o <li> à lista de resultados
    } else {
        let itemResultado = document.createElement("li");
        itemResultado.textContent = "Não há amigos para selecionar.";
        resultadoLista.appendChild(itemResultado); // Adiciona a mensagem de erro
    }
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão do Enter

        // Obtém o valor do input e remove espaços extras
        let inputValue = document.getElementById("amigo").value.trim();

        // Se o campo estiver vazio, sorteia um amigo; caso contrário, adiciona o nome
        if (inputValue === "") {
            sortearAmigo();
        } else {
            adicionarAmigo();
        }
    }
});