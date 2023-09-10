const personagens = document.querySelectorAll('.personagem');
const personagemGrande = document.querySelector('.personagem-grande');


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450){
            window.scrollTo({top:0 ,behavior: 'smooth'})
        }
        
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        
        personagem.classList.add('selecionado');

        const idpersonagem = personagem.attributes.id.value
        personagemGrande.src = `./src/imagens/card-${idpersonagem}.png`

        const personagemNome = document.getElementById('nome-personagem')
        personagemNome.innerText = personagem.getAttribute('data-name')

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
 
    })
})