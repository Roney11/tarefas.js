//função para abrir e fechar o formulário
function openform() {
    document.getElementById('add').addEventListener('click', () => {
        document.getElementById('form').style.marginLeft = '0'
    })

    document.getElementById('cancelar').addEventListener('click', () => {
        document.getElementById('form').style.marginLeft = '-100%'
        document.getElementById('error').style.display = 'none'
    })
}
openform()

//função para fazer a verificação no form e 
//adicionar o conteúdo do form no DOM
function form() {
    
    document.getElementById('error').style.display = 'none'
    document.getElementById('add-task-btn').addEventListener('click', verificarCampo)

    function verificarCampo() {
        const input = document.getElementById('area').value

        if(input == false) {
            document.getElementById('error').style.display = 'block'
        }else {
            document.getElementById('no-nota').style.display = 'none'
            creatNotas()
        }
    }

    function creatNotas() {
        const input = document.getElementById('area').value

        //Criando um novo elemento
        const newUl = document.createElement('ul')
        const contentUlBtn = document.createElement('button')
        const contentUl = document.createTextNode(input)
        newUl.appendChild(contentUlBtn)
        newUl.appendChild(contentUl)

        //adicionando o elemento criado ao DOM
        const ulAtual = document.getElementById('tasker-body')
        document.body.insertBefore(newUl, ulAtual)

        document.getElementById('area').value = ''
        document.getElementById('form').style.marginLeft = '-100%'

        //verificando a urgência da tarefa
        const select = document.getElementById('prioridade')
        const prioridade = select.options[select.selectedIndex].value
        console.log(prioridade)

        if(prioridade == 'normal') {
            contentUlBtn.style.background = 'rgb(4, 175, 4)'
            newUl.style.borderColor = 'rgb(4, 175, 4)'
        }
        if(prioridade == 'alerta') {
            newUl.style.borderColor = 'rgb(207, 207, 11)'
            contentUlBtn.style.background = 'rgb(207, 207, 11)'
        }
        if(prioridade == 'urgente') {
            contentUlBtn.style.background = 'rgb(255, 0, 0)'
            newUl.style.borderColor = 'rgb(255, 0, 0)'

        }
    }

}
form()
