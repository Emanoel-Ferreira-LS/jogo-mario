const mario = document.getElementById('mario')
const pipe = document.getElementById('pipe')
const cloud = document.getElementById('cloud')
const gameOver = document.getElementById('game-over')

function jump(){
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 650)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft/*deslocamento esquerdo*/
    const cloudPosition = cloud.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPosition)

    if(pipePosition <= 150 && pipePosition > 10 && marioPosition < 70) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        cloud.style.animation = 'none'
        cloud.style.left =`${cloudPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'imagens/game-over.png'
        mario.style.width = '100px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)//parar loop

        gameOver.style.display ='block'
    }

}, 10)




document.addEventListener('keydown', jump)
document.body.addEventListener('click', jump)



/*APRENDIZADOS
----------------------------------------------------------------
'offset' são propriedades que fornecem informações sobre o posicionamento de um elemento em relação ao seu contêiner pai (offsetParent):
    -offsetTop: Retorna a distância do elemento ao topo do seu contêiner pai (offsetParent). Essa propriedade representa o deslocamento vertical do elemento em relação ao topo da página.

    -offsetLeft: Retorna a distância do elemento à esquerda do seu contêiner pai (offsetParent). Essa propriedade representa o deslocamento horizontal do elemento em relação à borda esquerda da página.

    -offsetWidth: Retorna a largura total do elemento, incluindo a largura do conteúdo, padding (preenchimento) e bordas.

    -offsetHeight: Retorna a altura total do elemento, incluindo a altura do conteúdo, padding (preenchimento) e bordas.

----------------------------------------------------------------
    ()=>{

    }
   
    Isso é uma função anônima
----------------------------------------------------------------
    setInterval(funçao, intervaloTempo);

    'setInterval' é uma função em JavaScript que é usada para executar repetidamente uma determinada tarefa ou executar um trecho de código a intervalos regulares de tempo:

        -funcao: É a função que será executada repetidamente em intervalos de tempo definidos. Pode ser uma função anônima ou uma referência a uma função nomeada.
        -intervaloTempo: É o tempo em milissegundos entre as chamadas da função. Define o intervalo entre cada execução da função.


----------------------------------------------------------------
    setTimeout(funcao, atraso);

    'setTimeout' é outra função de temporização em JavaScript que é utilizada para executar uma tarefa ou um trecho de código após um determinado período de tempo. Diferente do setInterval, o setTimeout executará a função apenas uma vez, após o intervalo de tempo especificado.

        -funcao: É a função que será executada após o período de atraso. Pode ser uma função anônima ou uma referência a uma função nomeada.
        -atraso: É o tempo em milissegundos que a função deve aguardar antes de ser executada.

----------------------------------------------------------------
const marioPosition = mario.offsetTop; 

    Tambem pode ser feita assim:

const marioPosition = window.getComputedStyle(mario).bottom;

    Que em vez de pegar a distância entra o mario e o topo do elemento pai, pega sua propriedade bottom


/*const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft//deslocamento esquerdo
    const cloudPosition = cloud.offsetLeft
    var marioPosition = mario.offsetTop//Distancia do topo padrão = 318
    

    console.log(marioPosition)

    if(pipePosition <= 150 && marioPosition >= 316) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        cloud.style.animation = 'none'
        cloud.style.left =`${cloudPosition}px`

        mario.style.animation = 'none'
        mario.style.top = `${marioPosition}px`
    }

}, 10)*/


