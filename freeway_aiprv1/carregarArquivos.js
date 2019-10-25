//Variáveis para as imagens
let imgEstrada;
let imgvaca;
let imgCarro = [];
let imgCavalo;

//Variáveis de movimento
let yVaca = 368;
let yCavalo = 368;  

let xVaca = 150;
let xCavalo = 360;

//Variaveis dos Carros
//             Direita     /   Esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 220, 270, 330];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];

//placar
let meuPlacar = 0;
let placarOponente = 0;



function preload(){
 imgEstrada = loadImage('imagens/estrada.png');
 imgVaca = loadImage('imagens/ator-1.png');
 imgCavalo = loadImage('imagens/ator-2.png');

  //Carros Sentidos Norte
 imgCarro[0] = loadImage('imagens/carro-1.png');
 imgCarro[1] = loadImage('imagens/carro-2.png');
 imgCarro[2] = loadImage('imagens/carro-3.png');
  //Carros Sentidos Sul
 imgCarro[3] = loadImage('imagens/carro-4.png');
 imgCarro[4] = loadImage('imagens/carro-5.png');
 imgCarro[5] = loadImage('imagens/carro-6.png');
 
  //sons
    ponto = loadSound('sons/pontos.wav');
    atropelou = loadSound('sons/colidiu.mp3');
    trilha = loadSound('sons/trilha.mp3');
  
  
  
  
  
} 