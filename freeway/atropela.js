let atropelaVaca = false;
let atropelaCavalo = false;

 function atropelamento(){
  for(let i=0; i<imgCarro.length; i++){
    
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28,xCarro[i],yCarro[i], 50, 30); 
    
    if(atropelaVaca){
      //churrasco natural
      yVaca = 368;
      if(meuPlacar > 0)//Evitar placar negativo
        meuPlacar -= 1;
    }
    
    atropelaCavalo=  collideRectRect(xCavalo, yCavalo, 28, 28,xCarro[i],yCarro[i], 50, 30); 
    
    if(atropelaCavalo){
      yCavalo = 368; 
      if(placarOponente > 0)//Evitar placar negativo
        placarOponente -= 1;
      
       }
    
  }//for   
}//atropelamento

