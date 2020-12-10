function errou(){
  background(h);

  textSize(42);
  text('Que pena, voçê errou!', 200, 150);
  fill(255);
  
  
  
  
  
  
    stroke(70,350,255);
    strokeWeight(4);
    fill(0)
    rect(xsair, ysair , larguraS ,45);
  
    fill(0);
    noStroke();
    textSize(30);
    textStyle(NORMAL); 
    fill(255);
    text('voltar', 605, 575); 
    
       //sobreposição do texto sair
  if( mouseX > xsair && mouseX< xsair + larguraS && mouseY > ysair && mouseY< ysair + 55 ) {
          
     fill(60,230,255);
     rect(xsair, ysair , larguraS ,45);
  
     fill(0);
     noStroke();
     textSize(30);
     textStyle(NORMAL); 
     fill(255);
     text('voltar', 605, 575);
  
}
}