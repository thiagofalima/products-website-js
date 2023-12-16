// Voltar a assistir a partir de 2:00:00 de aula
// Conceito de requisição e resposta.

// console.log('tudo ok')

let endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json'
produtos = []

// criando uma variável e referenciando uma tag do HTML pelo comando getElementById

let elementoParaInserirProdutos = document.getElementById('produtos__lista')

// Criando uma função, com camelCase
// Só uma função assiíncrona retorna uma promessa. Usando a keyword async

async function buscarProdutos() {
    
    // realizando uma requisição para um url
    // O await só funciona dentro de funções async --> estou esperando a resolução da promessa.
    let res = await fetch(endpoint)
    produtos = await res.json()
    // Dá pra indexar igual ao Python
    console.log(produtos[0].img)

    // criando uma função dentro de outra função;

    exibirProdutosNaTela(produtos)
    
}

// chamando a função, lembrando que eu poderia ter chamado acima da declaração, tipo antes da função. 

buscarProdutos()

function exibirProdutosNaTela(produtos) {

    // Para cada produto dentro da lista de produto, forEach
    //  eu quero realizar uma ação, usando o => {}
    // 
    produtos.forEach(produto => {

        // Usando template string, que é o mesmo que f-string do Python
        // tb dá pra incrementar as coisas com o +=
        
        elementoParaInserirProdutos.innerHTML += `
        <li class="produtos__item">
            <div class="produtos__content">
                <img src="${produto.img}" alt="Imagem de celular">
                <div class="produtos__informacoes">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <h4>R$${produto.valorComDesconto}<s>R$${produto.valorSemDesconto}</s></h4>
                    <p>${produto.tipoEntrega}S</p>
                </div>
            </div>
        </li>

        `
    })
    
}