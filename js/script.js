
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
            removerTarefa()
            Tarefaconcluida()
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
        contentUlBtn.classList.add('verificar-urgencia')
        

        //criando a opcao de excluir ou marcar como feito
        const newDiv = document.createElement('div')
        const button1 = document.createElement('button')
        const button2 = document.createElement('button')
        newUl.appendChild(newDiv)
        newDiv.appendChild(button1)
        newDiv.appendChild(button2)
        newDiv.classList.add('editar')
        button1.classList.add('feito')
        button1.innerHTML = 'Feito'
        button2.classList.add('excluir')
        button2.innerHTML = 'Excluir'

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
            newUl.style.borderColor = 'rgb(255, 255, 0)'
            contentUlBtn.style.background = 'rgb(255, 255, 0)'
        }
        if(prioridade == 'urgente') {
            contentUlBtn.style.background = 'rgb(255, 0, 0)'
            newUl.style.borderColor = 'rgb(255, 0, 0)'
        }
    }
}
form()

//função para remover a tarefa adicionando um evento de 
//clique em cada botão
function removerTarefa() {
    let ul = document.getElementsByTagName('ul')

    //verificando se existe alguma tarefa antes de executar
    //a função para não dar erro no console
    if(ul.length > 0) {
        let excluir = document.querySelectorAll('.excluir')
        excluir.forEach((i) => {
            i.addEventListener('click', deletTarefa)
        })
    //criando uma variavel pegando o pai do botão que
    //está sendo clicado
    //Também foi adicionado um alerta se realmente quer 
    //excluir o conteudo
        function deletTarefa() {
           const deletAlert = confirm('Deseja realmente excluir esta tarefa?')
           if(deletAlert == true) {
            const pai = this.parentNode.parentNode
            pai.style.display = 'none'
           }
        }
    } 
            
}

//função para concluir a tarefa adicionando um evento de 
//clique em cada botão
function Tarefaconcluida() {
    let ul = document.getElementsByTagName('ul')

    //verificando se existe alguma tarefa antes deexecutar
    //a função para não dar erro no console
    if(ul.length > 0) {
        let feito = document.querySelectorAll('.feito')
        feito.forEach((i) => {
            i.addEventListener('click', concluirTarefa)
        })
    //criando uma variavel pegando o pai do botão que
    //está sendo clicado
        function concluirTarefa() {
            const pai = this.parentNode.parentNode
                pai.style.opacity = '.5'
        }
               
    } 
            
}



