function mostarVaca(){
  image(imgVaca, xVaca ,yVaca, 30, 30);
  image(imgCavalo,xCavalo, yCavalo, 30, 30);

}

function movimentarVaca(){
  //Cavalo
  if(keyIsDown(UP_ARROW)){//Para cima
    if(yCavalo > 0)//Teto
    yCavalo -= 5;
    }
  if(keyIsDown(DOWN_ARROW)){//Para baixo
    if(yCavalo < 365)//Chão
      yCavalo += 5;
  }
  //Vaca
   if(keyIsDown(87)){//Para cima
    if(yVaca > 0)//Teto
      yVaca -= 5;
    }
  if(keyIsDown(83)){//Para baixo
    if(yVaca < 365)//Chão
      yVaca+= 5;
  }
}