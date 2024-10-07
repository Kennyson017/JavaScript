const list = [];
const button = document.querySelector('button');
const input = document.querySelector('input');
const curtidas = document.querySelector('h4');
const mensagemErro = document.getElementById('mensagemErro');

// curtidas.innerText = `Nenhuma Curtida ainda...`

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
});
