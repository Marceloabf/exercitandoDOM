//O formulário não está funcionando, o atributo action deve mandar para url: sucesso.html
const formulario = document.querySelector("form")
console.log(formulario);
formulario.setAttribute('action', 'sucesso.html')

//O campo de mensagem está ultrapassando o tamanho do elemento pai.
const textArea = document.querySelector('textarea')
textArea.style.boxSizing = 'border-box'

//Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone
const cellNumberImput = document.createElement('input')
cellNumberImput.setAttribute('type', 'number')
cellNumberImput.setAttribute('placeholder','número de telefone')
formulario.insertBefore(cellNumberImput,textArea)

//O botão não está do tamanho adequado, precisa ter uma largura maior;
const botao = document.querySelector('button')
botao.style.width = '10em'

//Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.