const Livros = []

function adicionarLivro(id, titulo, autor, quantidade)  {
    if (Livros.find(livro => livro.titulo === titulo)) {
        console.log('Livro já existe')
        return
    } else if (Livros.find(livro => livro.id === id)) {
        console.log('ID já existe')
        return
    } else (Livros.push({
        id,
        titulo,
        autor,
        quantidade}))
};

function removerLivro(titulo) {
    if (Livros.find(livro => livro.titulo === titulo)) {
        Livros.splice(Livros.findIndex(livro => livro.titulo === titulo), 1)
    } else {
        console.log('Livro não encontrado')
    }
};

function atualizarQuantidade(titulo, novaQuantidade) {
    if (Livros.find(livro => livro.titulo === titulo)) {
        Livros[Livros.findIndex(livro => livro.titulo === titulo)].quantidade = novaQuantidade
    }
    else {
        console.log('Livro não encontrado')
    }
};

function listarLivros() {
    console.log(Livros)
    for (let i = 0; i < Livros.length; i++) {
        console.log(
            `ID: ${Livros[i].id},
            Título: ${Livros[i].titulo},
            Autor: ${Livros[i].autor},
            Quantidade: ${Livros[i].quantidade}`)
    }
};

adicionarLivro( 1, 'Os segredos da mente Milionaria', 'T. Harv Eker', 10)
adicionarLivro( 2, 'Habitos Atomicos', 'Desconhecido', 5)
adicionarLivro( 2, 'Habitos Atomicos', 'Desconhecido', 5)
adicionarLivro( 3, '100M Offers', 'Alex Hormozi', 15)
adicionarLivro( 4, 'Pai Rico, Pai Pobre', 'Robert Kiwosaki', 15)
removerLivro('100M Offers')

console.log(Livros)

atualizarQuantidade('Pai Rico, Pai', 100)

listarLivros()