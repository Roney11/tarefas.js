
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

//função para fazer a verificação no form
//adicionar o conteúdo do form no DOM
function form() {
    
    document.getElementById('error').style.display = 'none'
    document.getElementById('add-task-btn').addEventListener('click', verificarCampo)

    function verificarCampo() {
        const input = document.getElementById('area').value
        const select = document.getElementById('prioridade')
        const prioridade = select.options[select.selectedIndex].value

        if(input == false) {
            document.getElementById('error').style.display = 'block'
        }if(prioridade == 'desable') {
            document.getElementById('error').style.display = 'block'
        }else {
            document.getElementById('no-nota').style.display = 'none'
            creatNotas()
        }
    }
    //adicionar o conteúdo do form no DOM
    function creatNotas() {

        const input = document.getElementById('area').value

        //Criando um novo elemento
        const newUl = document.createElement('ul')
        const h4 = document.createElement('h4')
        const contentUlBtn = document.createElement('button')
        const contentUl = document.createTextNode(input)
        newUl.appendChild(contentUlBtn)
        newUl.appendChild(h4)
        h4.appendChild(contentUl)
        

        //Pegando o dia e hora que o arquivo foi criado

        const dia = new Date()
        const diaAtual = dia.getUTCDate()
        const mesAtual = dia.getUTCMonth() +1
        const anoAtual = dia.getUTCFullYear()
        const hora = dia.getHours()
        const minutos = dia.getMinutes()

        //formatando a data e hora
        formatoData = (diaAtual < 10 ? `0${diaAtual}`: diaAtual) + (mesAtual < 10 ? `-0${mesAtual}-`: `-${mesAtual}-`) + (anoAtual)

        formatoHoras = (hora < 10 ? `0${hora}:` : `${hora}:`) + (minutos < 10 ? `0${minutos}` : minutos)

        const p = document.createElement('p')
        const contentUlP = document.createTextNode(`Criado dia ${formatoData} às ${formatoHoras}`)
        
        newUl.appendChild(p)
        p.appendChild(contentUlP)




        //adicionando o elemento criado ao DOM
        const ulAtual = document.getElementById('tasker-body')
        document.body.insertBefore(newUl, ulAtual)

        document.getElementById('area').value = ''
        document.getElementById('form').style.marginLeft = '-100%'

        //verificando a urgência da tarefa
        const select = document.getElementById('prioridade')
        const prioridade = select.options[select.selectedIndex].value

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

