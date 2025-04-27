Crie um feed para uma rede social similar ao Twitter. Seu feed deve conter:

- ✅ Um formulário com uma textarea para suas postagens e um botão Postar. O formulário deve ficar fixo no topo da página. 

- ✅ Uma lista com as postagens já feitas, organizadas da mais recente para a mais antiga. Cada postagem deve conter:

 * ✅ seu nome de usuário 

* ✅ seu avatar 

* ✅ o texto da postagem

* ✅ uma imagem aleatória de gatinhos fofos, que você deve pegar fazendo uma requisição para a API (https://api.thecatapi.com/v1/images/search) 

* o botão de curtir

Seu feed terá a estrutura de um array de objetos. Cada objeto deverá conter: data, nome de usuário, avatar, o texto que você postou, a imagem trazida da API e o número de likes. 

A contagem de likes de um determinado post deve ser incrementada (alterada em tela) cada vez que o respectivo botão curtir for pressionado.