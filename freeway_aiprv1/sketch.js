function setup() {
 createCanvas(600, 400);
  trilha.loop();
  trilha.setVolume(0.2);
}

function draw(){
  if(frameCount > 400){ // +/= 8s
    if(meuPlacar <= 5 && placarOponente <= 5)
    jogar();
    else
      verificaVencedor();
  }else{
    telaInicial();
  }
}

function verificaVencedor(){
  if(meuPlacar >= 5)
    vacaVencedora(); //Tela Final
  else
    cavaloVencedor(); //Tela Final
}

function vacaVencedora(){
  background("Cian");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Black");
  textSize(45);
  text("Vaca Venceu" ,300, 190);
  image(imgVaca, 300, 200, 200, 200);
}

function cavaloVencedor(){
  background("DarkOrchid");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Green");
  textSize(45);
  text("Cavalo Venceu" ,300, 190);
  image(imgCavalo, 300, 200, 200, 200);
}


function telaInicial(){
  background("Red");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("DeepSkyBlue");
  textSize(45);
  text("Jogo da 1º de Maio",300, 190);
  textSize(24);
  text("Desenvolvido por Vitor_Gato",300, 230);
}

function jogar(){
  background(imgEstrada);
  movimentarVaca();
  mostarVaca();
  mostrarCarros();
  movimentaCarros();
  mostraPlacar();
  pontuar();
  atropelamento();
}


