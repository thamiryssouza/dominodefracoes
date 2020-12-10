function creditos(){
  background(img);
  
  
    
    
    //botão sair tela de instruções
    stroke(70,350,255);//borda
    strokeWeight(4);//tamanho da borda
    fill(0)
    rect(xsair, ysair , larguraS ,45);
  
    fill(0);
    noStroke();
    textSize(32);
    textStyle(NORMAL); 
    fill(255);
    text('sair',  615, 575);
    
        if( mouseX > xsair && mouseX< xsair + larguraS && mouseY > ysair && mouseY< ysair + 55 ) {
          
     fill(60,230,255);
     rect(xsair, ysair , larguraS ,45);
  
     fill(55);
     noStroke();
     textSize(32);
     textStyle(NORMAL); 
     fill(255);
     text('sair',  615, 575);
          
      }
  
        

}