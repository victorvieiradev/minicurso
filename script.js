const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const expecie = document.querySelector('#expecie');
const condicao = document.querySelector('#status');

gerarValorAleatorio = () => {
    return  Math.floor(Math.random() * 67);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        expecie.innerHTML = data.species;
        condicao.innerHTML = data.status;

    });
}
botao.onclick = pegarPersonagem;