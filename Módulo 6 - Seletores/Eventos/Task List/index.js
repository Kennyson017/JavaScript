const input = document.getElementById('input-text');
const button = document.querySelector('#add');
const mensagemErro = document.getElementById('error');
const ul = document.querySelector('ul');

const list = [];

button.addEventListener('click', () => {
    const tarefa = input.value.trim();
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
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList = 'checkbox';

        const deleteBtn = document.createElement('span');
        deleteBtn.classList = 'material-symbols-outlined delete-button';
        deleteBtn.textContent = 'delete';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.color = 'black';
        deleteBtn.style.marginLeft = 'auto';
        deleteBtn.style.float = 'right';

        const li = document.createElement('li');
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(tarefa));
        li.classList = 'tarefa';
        li.appendChild(deleteBtn);
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
                li.style.backgroundColor = 'rgb(77, 228, 255)';
            }
        });
    });


    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const li = button.closest('li');
            li.remove(); // Remove o <li> da DOM diretamente
            const tarefa = li.textContent.trim();
            const index = list.indexOf(tarefa);
            if (index > -1) {
                list.splice(index, 1);
            }
        });
    });

});