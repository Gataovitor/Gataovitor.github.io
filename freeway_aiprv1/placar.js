function pontuar() {
 if(yVaca < 15){
   meuPlacar += 1;
   yVaca = 368
    ponto.play();
 }
  if(yCavalo < 15){
   placarOponente += 1;
   yCavalo = 368
    ponto.play();
 }
}
//pontuação
function mostraPlacar(){
 textSize(30);
 
 fill("pink");
 text(placarOponente, 450, 27);
 
 fill("green");
 text(meuPlacar, 150, 28);
   
} 