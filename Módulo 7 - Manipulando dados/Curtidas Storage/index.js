const list = [];
const button = document.querySelector('button');
const buttonDelete = document.getElementById('delete')
const input = document.querySelector('input');
const curtidas = document.querySelector('h4');
const mensagemErro = document.getElementById('mensagemErro');

button.addEventListener('click', () => {

    const nome = input.value;
    if (nome === "") {
        mensagemErro.innerText = 'Digite seu nome para curtir';
    } else {
        mensagemErro.innerText = ''
    };

    if (nome && !list.includes(nome)) {
        list.push(nome)
    }
    
    if (list.length === 0) {
        curtidas.innerText = `Nenhuma Curtida ainda...`
    } else if (list.length === 1) {
        curtidas.innerText = `${list[0]} curtiu`
    } else if (list.length === 2) {
        curtidas.innerText = `${list[0]} e ${list[1]} curtiram`
    } else {
        curtidas.innerText = `${list[0]}, ${list[1]} e mais ${list.length - 2} curtiram`
    }
    
    input.value = '';

    for (let i = 0; i < list.length; i++) {
        localStorage.setItem(i, list[i]);
      }
});

buttonDelete.addEventListener('click', () => {
    if (list.length == 0) {
        curtidas.innerText = `Nenhuma Curtida ainda...`
    } else {
    localStorage.clear()
    list.length = 0;
    curtidas.innerText = `Curtidas apagadas.`
    }
})


addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
        list.push(localStorage.getItem(i));
      }

    if (list.length === 0) {
        curtidas.innerText = `Nenhuma Curtida ainda...`
    } else if (list.length === 1) {
        curtidas.innerText = `${list[0]} curtiu`
    } else if (list.length === 2) {
        curtidas.innerText = `${list[0]} e ${list[1]} curtiram`
    } else {
        curtidas.innerText = `${list[0]}, ${list[1]} e mais ${list.length - 2} curtiram`
    }
})



