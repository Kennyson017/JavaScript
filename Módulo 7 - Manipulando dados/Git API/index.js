(() => {
    const LoadButton = document.getElementById('carrega-devs');
    const divPai = document.getElementById('div-father');
    const inputName = document.getElementById('texto');

    async function carregaDevsPorUser(user) {
        const devData = await fetch(`https://api.github.com/users/${user}`);
        const dev = await devData.json();
        return dev;
    };

    function mostrarDev (dev) {
        const listaUL = document.getElementById('info-dev');
        const login = document.getElementById('login');
        const name = document.getElementById('name');
        const id = document.getElementById('id');
        const url = document.getElementById('url');
        const privacy = document.getElementById('privacy');
        const NotFound = document.createElement('h4');

        if (dev.login == undefined) {
            listaUL.style.display = "none"
            NotFound.innerText = "Usuario não encontrado para essa pesquisa!";
            divPai.appendChild(NotFound)

            setTimeout(() => {
                divPai.removeChild(NotFound)
            }, 3000);

        } else {
        listaUL.style.display = "flex"
        login.innerHTML= `<strong>Login:</strong> ${dev.login}`
        name.innerHTML = `<strong>Nome:</strong> ${dev.name}`
        id.innerHTML = `<strong>ID:</strong> ${dev.id}`
        url.innerHTML = `<strong>Perfil URL:</strong> <a href="${dev.html_url}" target="_blank">${dev.html_url}</a>`;
        privacy.innerHTML = `<strong>Visibilidade:</strong> ${dev.user_view_type}`
        }
    }

    inputName.addEventListener('keyup', (e) => {
        const devName = e.target.value
        localStorage.setItem('devProcurado', devName)
        
    })

    LoadButton.addEventListener('click', () => {
        NameLoad = localStorage.getItem('devProcurado')
        carregaDevsPorUser(NameLoad).then((res) => mostrarDev(res))
    });
})()