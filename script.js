//Capiturando as tegs que serão usadas para inserir os dados do primeiro personagem

const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const expecie = document.querySelector('#expecie');
const condicao = document.querySelector('#status');

//Armazenando as tags que serão colocados os valores do segundo personagem

const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const expecie2 = document.querySelector('#expecie2');
const condicao2 = document.querySelector('#status2');

//Capiturando as tags para inserir os dados do terceiro personagem

const imagem3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const expecie3 = document.querySelector('#expecie3');
const condicao3 = document.querySelector('#status3');

//Gerar valor aleatório para colocar na api, assim retornando um personagem aleatório

gerarValorAleatorio = () => {
    return  Math.floor(Math.random() * 67) + 1;
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

//pegando o segundo personagem

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        expecie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;

    });
}

//Pegando os dados do terceiro personagem.

pegarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        expecie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;

    });
}

botao.onclick = pegarPersonagem;
botao.addEventListener('click', pegarPersonagem2);
botao.addEventListener('click', pegarPersonagem3);