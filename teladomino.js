function teladomino(){
  background(logo);
    //tela  antes do  inicio do jogo
  
    stroke(70,350,255);
    strokeWeight(4);
    fill(0)
    rect(xm, ym , l ,a);//parametros da forma
  
    //texto menu
    
    noStroke();
    textSize(32);
    textStyle(NORMAL); 
    fill(255);
    text('MENU', 535, 550); 
       
    //sobbreposição do texto menu
  if( mouseX > xm && mouseX< xm+ l && mouseY > ym && mouseY< ym + a ) {
    
   
    stroke(0,0,255);
    strokeWeight(4);
    fill(127,255,212)
    rect(xm, ym , l ,a);//parametros da forma
  
    //sobreposição texto menu
    
    noStroke();
    textSize(32);
    textStyle(NORMAL); 
    fill(255);
    text('MENU', 535, 550); 
  }
}