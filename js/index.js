//O header deve ter cor de fundo #2E948A.
const header = document.querySelector('header')
header.style.backgroundColor = '#2E948A'

//No menu do header, está faltando o link do item Cursos que deve redirecionar paracursos.html
const botaoCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')
botaoCursos.setAttribute('href', 'cursos.html')
 