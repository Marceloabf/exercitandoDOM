//O formulário não está funcionando, o atributo action deve mandar para url: sucesso.html
const formulario = document.querySelector("form")
formulario.setAttribute('action', 'sucesso.html')

//O campo de mensagem está ultrapassando o tamanho do elemento pai.
const textArea = document.querySelector('textarea')
textArea.style.boxSizing = 'border-box'

//Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone
const cellNumberImput = document.createElement('input')
cellNumberImput.setAttribute('type', 'tel')
cellNumberImput.setAttribute('required', true)
cellNumberImput.setAttribute('placeholder','número de telefone')
formulario.insertBefore(cellNumberImput,textArea)

//O botão não está do tamanho adequado, precisa ter uma largura maior;
const botao = document.querySelector('button')
botao.style.width = '10em'

//Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.
const main = document.querySelector('main')
const aboutUsSection = document.createElement('section')
aboutUsSection.innerHTML = 
`<section class='titulo depoimento'>
<h3>Depoimentos</h3>
</section>
<div class="depoimentos">
<img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
<p>
    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam.”
    <br>
    <br>
    Wally, 25
</p>
</div>

<div class="depoimentos">
<img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
<p>
    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam.”
    <br>
    <br>
    Jaden Smith, 23
</p>
</div>

<div class="depoimentos">
<img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
<p>
    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam.”
    <br>
    <br>
    Whoopi Goldberg, 37
</p>
</div>

<div class="depoimentos">
<img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
<p>
    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam.”
    <br>
    <br>
    Janes Joplin, 29
</p>
</div>`
main.append(aboutUsSection)
