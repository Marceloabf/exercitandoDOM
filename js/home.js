// No banner da home, está faltando centralizar os elementos filhos da section que tem o id#introducao.
const introducaoSection = document.getElementById('introducao')
introducaoSection.style =
`display:flex;
 justify-content:center;
 align-itens:center;
`

// Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
const tituloDepoimento = document.querySelector('.depoimento h3')
tituloDepoimento.innerText = 'O que falam sobre nós'

// Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
const blogTitle = document.querySelectorAll('.titulo h3')
blogTitle[1].innerText = 'Mais conteúdo para você'

// Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.
document.querySelectorAll('.titulo').forEach((titulo) => {
    titulo.style ='text-transform: uppercase;'
})

// o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
const butaoAllPosts = document.getElementById('todos_posts')
butaoAllPosts.setAttribute('href', 'blog.html')

// Adicionar um novo curso na section que contém o id investimentos_poupando_independencia
const newCurso = document.createElement('div')
newCurso.innerHTML = 
`<img src='/imagens/independencia_financeira.png'
width="180px" alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore
eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar
agora</a>`
const sectionIndependencia = document.getElementById('investimentos_poupando_independencia')
sectionIndependencia.append(newCurso)