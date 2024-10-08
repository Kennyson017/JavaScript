const input = document.getElementById('input-text');
const button = document.querySelector('#add');
const mensagemErro = document.getElementById('error');
const ul = document.querySelector('ul');

const list = [];

button.addEventListener('click', () => {
    const tarefa = input.value;
    if (tarefa === "") {
        mensagemErro.innerText = 'Digite a tarefa a ser adicionada';
        mensagemErro.style.cssText = `
        color: red;
        background-color: rgba(255, 0, 0, 0.158);
    `
        setTimeout(() => {
            mensagemErro.innerText = '';
            mensagemErro.style.cssText = `
            background-color: none;`
        }, 3000);
    } else if (tarefa && !list.includes(tarefa)) {
        mensagemErro.innerText = 'Tarefa adicionada com sucesso';
        mensagemErro.style.cssText = `
        color: green;
        background-color: rgba(0, 255, 64, 0.158);`
        setTimeout(() => {
            mensagemErro.innerText = '';
            mensagemErro.style.cssText = `
            background-color: none;`
        }, 3000);
    } else if (list.includes(tarefa)) {
        mensagemErro.innerText = 'Essa tarefa já existe';
        mensagemErro.style.cssText = `
        color: green;
        background-color: rgba(0, 255, 64, 0.158);
    `
        setTimeout(() => {
            mensagemErro.innerText = '';
            mensagemErro.style.cssText = `
            background-color: none;`
        }, 3000);
    } else {
        mensagemErro.innerText = "";
    }

    if (tarefa && !list.includes(tarefa)) {
        list.push(tarefa)
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList = 'checkbox';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(tarefa));
        li.classList = 'tarefa';
        ul.appendChild(li);
        input.value = ''
    }

    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
            const li = event.target.parentElement; // Pega o elemento 'li' pai do checkbox
            if (event.target.checked) {
                li.style.cssText = `
                background-color: rgb(209, 209, 209);
                text-decoration: line-through;
                color: rgb(136, 136, 136);
                `;
            } else {
                li.style.textDecoration = 'none';
                li.style.color = 'initial';
                li.style.backgroundColor = 'rgb(165, 229, 255)';
            }
        });
    });
});