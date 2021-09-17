//função para abrir e fechar o formulário
function openform() {
    document.getElementById('add').addEventListener('click', () => {
        document.getElementById('form').style.marginLeft = '0'
    })

    document.getElementById('cancelar').addEventListener('click', () => {
        document.getElementById('form').style.marginLeft = '-100%'
    })
}
openform()

//função para fazer a verificação no form e 
//adicionar o conteúdo do form no DOM
function form() {
    
    document.getElementById('error').style.display = 'none'
    document.getElementById('add-task-btn').addEventListener('click', add)

    function add() {
        verificarCampo()
    }

    function verificarCampo() {
        const input = document.getElementById('input-task').value

        if(input == false) {
            document.getElementById('error').style.display = 'block'
        }else {
            document.getElementById('error').style.display = 'none'
            creatNotas()
        }
    }

    function creatNotas() {
        const input = document.getElementById('input-task').value

        //Criando um novo elemento
        const newUl = document.createElement('ul')
        const contentUl = document.createTextNode(input)
        newUl.appendChild(contentUl)

        //adicionando o elemento criado ao DOM
        const ulAtual = document.getElementById('tasker-body')
        document.body.insertBefore(newUl, ulAtual)

        document.getElementById('input-task').value = ''
        document.getElementById('form').style.marginLeft = '-100%'
    }
}
form()







    