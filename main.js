let order = [];
let clickedOrder = [];
let score = 0;

//0 - green
//1 - red
//2 - yellow
//3 - blue

const blue = document.querySelector ('.blue');
const red = document.querySelector ('.red');
const green = document.querySelector ('.green');
const yellow = document.querySelector ('.yellow');


//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement (order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

//acende a proxima cor
let lightColor = (element, Number) => {
    time = time * 500;
    setTimeout(() => {
    element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
    element.classList.remove ('selected');
    });
}


//checa se os botoes clicados sao os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder [i] != order [i]) {
            YouLose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert ('Pontuação: ${score}\n Você Venceu! Vamos para o próximo nivel!');
        nextLevel();
    }
}

//funcao para o clique 
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  },250);

}

//funcao que retona a cor
let  createColorElement = (color) => {
    if(color == 0) {
        return green ; 
    }else if (color == 1) {
       return red;
    }else if (color== 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do game
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao game over
let YouLose = () => {
    alert ('Pontuação: ${score}!\nVocê perdeu!\nclique em Ok para recomecar.');
    order = [];
    clickedOrder = [];

    playGame(); 
}

//funcao de inicio
let playGame = () => {
    alert('Bem-vindo ao meu jogo! Já vai comecar, Iniciando o jogo!');
    score = 0;

    nextLevel();
}
//funcao de clique
green.onclick = () => click (0);
red.onclick = () => click (1);
yellow.onclick = () => click (2);
blue.onclick = () => click (3);

//inicio do jogo
playGame();

