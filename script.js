

function ver() { 
    const card =  document.querySelector('.result')

    if (card) { // Verifica se o elemento existe
        card.classList.add('visivel');
    } else {
        console.error('O elemento modal.card não foi encontrado no DOM');
    }
}
    
function esconder() {
    const card =  document.querySelector('.result')
    const buttonClose = document.querySelector('.closed')
    if (card) { // Verifica se o elemento existe
        card.classList.remove('visivel')

        var imgJ = document.getElementById("resultJogador")
        imgJ.src = 'imgs/pedra.jpg'

        var imgM = document.getElementById("resultMaquina")
        imgM.src = 'imgs/pedra.jpg'

    } else {
        console.error('O elemento modal.card não foi encontrado no DOM');
    }
        
}


function delay(ms) {
    
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start(result){

    ver()

    document.getElementById("resultado").innerHTML = "Pedra";
    await delay(700);

    document.getElementById("resultado").innerHTML = "Papel";
    await delay(700);

    document.getElementById("resultado").innerHTML = "TesouuuuuuRA";
    await delay(1000);

    selectPlayer (result)
    
}

function selectMachine () {
    const resultM = ['pedra', 'papel', 'tesoura']

    numAleatorio = Math.floor(Math.random()*3)//cria um numero aleatorio
    
    var imgM = document.getElementById("resultMaquina")
    imgM.src = 'imgs/' + resultM[numAleatorio] + '.jpg'
}

function vencedor(){

    imgM = document.getElementById("resultMaquina")
    imgJ = document.getElementById("resultJogador")
    result = document.getElementById("resultado")

    const srcM = imgM.src;
    const nomeArquivoCompletoM = srcM.substring(srcM.lastIndexOf('/') + 1); // Extrai o nome do arquivo com extensão
    const nomeArquivoSemExtensaoM = nomeArquivoCompletoM.replace('.jpg', '');// Remove a extensão .jpg
    const jogadaMaquina = nomeArquivoSemExtensaoM

    const srcJ = imgJ.src;
    const nomeArquivoCompletoJ = srcJ.substring(srcJ.lastIndexOf('/') + 1); // Extrai o nome do arquivo com extensão
    const nomeArquivoSemExtensaoJ = nomeArquivoCompletoJ.replace('.jpg', '');// Remove a extensão .jpg
    const jogadaJogador = nomeArquivoSemExtensaoJ

    if(jogadaJogador == jogadaMaquina){
        result = "Empate"
        document.getElementById("resultado").innerHTML = result
        console.log("Empate")
    }else{
        switch (jogadaJogador){

            case 'pedra':

                if(jogadaMaquina == 'tesoura'){
                    result = 'Pedra quebra tesoura, VOCÊ GANHOU :)'

                    document.getElementById("resultado").innerHTML = result

                    console.log(document.getElementById("resultado"))
                }else{//papel
                    result = 'Papel cobre pedra, você perdeu :('

                    document.getElementById("resultado").innerHTML = result

                    console.log(document.getElementById("resultado"))
                }

            break;
            case 'papel':

                if(jogadaMaquina == 'pedra'){
                    result = 'Papel cobre pedra, VOCÊ GANHOU :)'

                    document.getElementById("resultado").innerHTML = result

                    console.log(document.getElementById("resultado"))
                }else{//tesoura
                    result = 'Tesoura corta papel, você perdeu :('

                    document.getElementById("resultado").innerHTML = result

                    console.log(document.getElementById("resultado"))
                }

            break;
            case 'tesoura':

                if(jogadaMaquina == 'papel'){
                    result = 'Tesoura corta papel, VOCÊ GANHOU :)'

                    document.getElementById("resultado").innerHTML = result

                    console.log(document.getElementById("resultado"))
                }else{//pedra
                    result = 'Pedra quebra tesoura, você perdeu :('

                    document.getElementById("resultado").innerHTML = result

                    console.log(document.getElementById("resultado"))
                }

            break;
        }
        
    }

}

function selectPlayer (result) {

selectMachine()

var img = document.getElementById("resultJogador")
img.src = 'imgs/' + result + '.jpg'

vencedor()

}

