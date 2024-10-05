// Mudar Titulo
document.querySelector('h1').innerText = `Hello World`;

// Mudar Estilo Lista
const lista = document.getElementsByTagName('li')

for (let i = 0; i < lista.length; i++) {
    lista[i].style.color = 'blue';
}

// Mudar Paragrafo
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    paragraph.classList = 'novaclasse';
});

// Muda Botão
document.querySelector('button a').innerText = 'Novo Texto do Botão'

document.querySelector('button').classList = 'botao'