// Calculadora de tempo ------------------------------

function pastTime(data) {
    const agora = new Date();
    const diffMs = agora - data; // diferença em milissegundos
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHora = Math.floor(diffMin / 60);
    const diffDia = Math.floor(diffHora / 24);

    if (diffSec < 60) return `${diffSec} segundo${diffSec > 1 ? 's' : ''} atrás`;
    if (diffMin < 60) return `${diffMin} minuto${diffMin > 1 ? 's' : ''} atrás`;
    if (diffHora < 24) return `${diffHora} hora${diffHora > 1 ? 's' : ''} atrás`;
    if (diffDia < 7) return `${diffDia} dia${diffDia > 1 ? 's' : ''} atrás`;

    // Mostrar data exata, tipo: "3 de abril"
    const opcoes = { day: 'numeric', month: 'long' };
    return data.toLocaleDateString('pt-BR', opcoes);
}

function updateTime() {
    const elementos = document.querySelectorAll('.time-post');
    elementos.forEach(el => {
        const dataString = el.getAttribute('data-time');
        const data = new Date(dataString);
        el.textContent = pastTime(data);
    });
}

// Salvar Post no local Storage ----------------------

function saveInLocalStorage(postData) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function saveUpdatedPosts(updatedPost) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = posts.map(post => {
        if (post.id === updatedPost.id) {
            return updatedPost;
        }
        return post;
    });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
}


// Criar post -----------------------------------

function createPost(postData) {
    const postBox = document.createElement('div');
    postBox.classList.add('post-box');
    postBox.setAttribute('data-post-id', postData.id);

    postBox.innerHTML = `
        <div class="post-info">
            <img class="perfil-photo" 
                src="https://media.licdn.com/dms/image/v2/D4D03AQHP8_lAJJvFLA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713183824951?e=1750896000&v=beta&t=_1e3RQNAit9FcGnBVpUhXV_eRCSO3yU68VUgABTLWRk"
                alt="">
            <div class="user-data">
                <h4 class="user">${postData.user}</h4>
                <p class="time-post" data-time="${postData.date}">${pastTime(new Date(postData.date))}</p>
            </div>
            <button class="more-button">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
        <p>${postData.text}</p>
        <img class="post-image" src="${postData.image}" alt="">
        <div class="like-box">
            <p class="comments-number">${postData.likes == null ? "Seja o primeiro a curtir" : postData.likes === 1 ? "1 pessoa curtiu isso" : `${postData.likes} pessoas curtiram isso`}</p>
            <div id="like-buttons">
                <button class="like"><span class="material-symbols-outlined">
                        thumb_up
                    </span></button>
            </div>
        </div>
    `;

    const likeBox = postBox.querySelector('.like-box');

    postBox.addEventListener('mouseenter', () => {
        likeBox.classList.add('active');
    });
    postBox.addEventListener('mouseleave', () => {
        likeBox.classList.remove('active');
    });

    const likeButton = postBox.querySelector('.like');
    const commentsNumber = postBox.querySelector('.comments-number');

    likeButton.addEventListener('click', () => {
        postData.likes += 1;
        saveUpdatedPosts(postData); // Atualiza no localStorage

        if (postData.likes == 1) {
            commentsNumber.innerText = "1 pessoa curtiu isso";
        } else {
            commentsNumber.innerText = `${postData.likes} pessoas curtiram isso`;
        }
    });

    postGrade.prepend(postBox);

    document.addEventListener('click', function (event) {
        if (event.target && event.target.closest('.more-button')) {
            const postBox = event.target.closest('.post-box'); // Pega o post onde o botão de exclusão foi clicado
            const postId = postBox.getAttribute('data-post-id'); // Pega o id do post

            // Remove o post do DOM
            postBox.remove();

            // Atualiza o localStorage removendo o post com o id correspondente
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts = posts.filter(post => post.id !== postId); // Filtra o post que foi excluído
            localStorage.setItem('posts', JSON.stringify(posts)); // Salva de volta no localStorage
        }
    });

}



const newPostButton = document.getElementById('add-button');
const boxCreate = document.getElementById('create-post');
const spanItem = document.getElementById('add');

newPostButton.addEventListener('click', () => {
    if (boxCreate.classList.contains('create-post-active')) {
        boxCreate.classList.remove('create-post-active')
        spanItem.style.rotate = '0deg'
        spanItem.style.transition = "all .2s"
        newPostButton.style.backgroundColor = "";
    } else {
        boxCreate.classList.add('create-post-active');
        spanItem.style.rotate = '45deg'
        newPostButton.style.backgroundColor = "red"
    }
});

setInterval(updateTime, 10000);

const sidebar = document.getElementById('sidebar-info');
const imageButton = document.getElementById('image-button');
const imageLoad = document.getElementById('image-load');
const emojiButton = document.getElementById('emoji-button');

(() => {

    const headers = new Headers({
        'x-api-key': 'live_WgUbf6ylC67H2RPtLq7XSyHoEUh8twB2oXJQiu4lGQrirMQtjkfXDmtO0n3iQfY4'
    });

    async function carregaDevsPorUser() {
        const catsApiData = await fetch('https://api.thecatapi.com/v1/images/search', { headers })
        const cats = await catsApiData.json();
        return cats;
    };

    imageButton.addEventListener('click', async () => {
        const cats = await carregaDevsPorUser();
        localStorage.setItem("catImage", cats[0].url)
        imageLoad.classList.add('active')
        imageLoad.src = cats[0].url
        imageLoad.alt = "Random Cat"
    });
})()

const shareButton = document.getElementById('share-button');
const postInput = document.getElementById('create-post-text');
const postGrade = document.getElementById('post-grade');


// EMOJIS

const postInputs = $('#create-post-text').emojioneArea({
    pickerPosition: 'bottom', // posição do emoji picker (opcional)
    tonesStyle: 'bullet',  // estilo dos tons de pele (opcional)
    events: {
        emoji: function (editor, emoji) {
            console.log('Emoji selecionado:', emoji);
            // O emoji já é adicionado automaticamente pelo EmojiOneArea no campo
            // Se quiser customizar aqui, também dá
        }
    }
}).data('emojioneArea');


let pickerOpen = false;
//   Quando clicar no botão, abrir o picker
emojiButton.addEventListener('click', function () {
    if (pickerOpen) {
        postInputs.hidePicker(); // Fecha o picker se ele estiver aberto
    } else {
        postInputs.showPicker(); // Abre o picker se ele estiver fechado
    }
    pickerOpen = !pickerOpen; // Alterna o estado do picker
});

// Botão de compartilhamento

shareButton.addEventListener('click', () => {

    const cat = localStorage.getItem('catImage')
    const postTime = new Date();
    const postText = postInput.value.trim();
    const postImg = cat; // você pode substituir por imagem da API
    imageLoad.src = ""

    if (postText === "") return;

    const postData = {
        id: 'post-' + postTime.getTime(), // ID único
        text: postText,
        image: postImg,
        user: 'user',
        date: postTime.toISOString(),
        likes: 0
    };

    // salva no localStorage
    saveInLocalStorage(postData);

    // renderiza
    createPost(postData);

    // limpa e fecha área de criar post
    postInputs.setText('');
    postInput.value = "";
    boxCreate.classList.remove('create-post-active');
    spanItem.style.rotate = '0deg';
    newPostButton.style.backgroundColor = "";
});


window.addEventListener('load', () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(createPost); // último post primeiro
});

