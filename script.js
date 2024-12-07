

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
        
        console.log("Empate")
    }else{
        switch (jogadaJogador){

            case 'pedra':

                if(jogadaMaquina == 'tesoura'){
                    result = 'Pedra quebra tesoura, VOCÊ GANHOU :)'

                    console.log('Pedra quebra tesoura, VOCÊ GANHOU :)')
                    console.log(result)
                }else{//papel
                    result = 'Papel cobre pedra, você perdeu :('

                    console.log('Papel cobre pedra, você perdeu :(')
                    console.log(result)
                }

            break;
            case 'papel':

                if(jogadaMaquina == 'pedra'){
                    result = 'Papel cobre pedra, VOCÊ GANHOU :)'

                    console.log('Papel cobre pedra, VOCÊ GANHOU :)')
                    console.log(result)
                }else{//tesoura
                    result = 'Tesoura corta papel, você perdeu :('

                    console.log('Tesoura corta papel, você perdeu :(')
                    console.log(result)
                }

            break;
            case 'tesoura':

                if(jogadaMaquina == 'papel'){
                    result = 'Tesoura corta papel, VOCÊ GANHOU :)'

                    console.log('Tesoura corta papel, VOCÊ GANHOU :)')
                    console.log(result)
                }else{//pedra
                    result = 'Pedra quebra tesoura, você perdeu :('

                    console.log('Pedra quebra tesoura, você perdeu :(')
                    console.log(result)
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
