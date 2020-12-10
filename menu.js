function menu(){
   
   background(imagem1);
 
  //texto domino de frações texto1
    stroke(255);
    strokeWeight(4);
    fill(0)
    rect(90,35,510, 75, 30, 65,4,4);//parametros da caixa do  texto1
   
    textSize(40);
    textStyle(NORMAL);
    fill(255)
    noStroke();
    text(texto1,125,90);
  
  
    //texto do botão iniciar
  
     stroke(60,230,255);
     strokeWeight(4);
     fill(0);
     rect(xMenu,yMenu1, largura, altura,  30 );
   
     stroke(0);//borda
     strokeWeight(4);//tamanho da borda
      //texto iniciar
     textSize(32);
     textStyle(NORMAL); 
     fill(255);
     text('Iniciar', 290, 230)
     
    //sobreposição mouse iniciar
    if( mouseX > xMenu && mouseX< xMenu + largura && mouseY > yMenu1 && mouseY< yMenu1+ altura ){
     
      fill(60,230,255);
      rect(xMenu,yMenu1, largura, altura,  30 );
     
      fill(20);
      noStroke();
      
      textSize(32);
      textStyle(NORMAL); 
      fill(255);
      text('Iniciar',290, 230);
  
}
 
  // texto do botão informações
   
    stroke(60,230,255);
    strokeWeight(4);
    fill(0);
    rect(xMenu, yMenu2, largura, altura, 30);
    
    textSize(32);
    textStyle(NORMAL);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('Informações',245,355)
      
      if( mouseX > xMenu && mouseX< xMenu + largura && mouseY > yMenu2 && mouseY< yMenu2+ altura ) {
    
     
    fill(60,230,255);
    rect(xMenu, yMenu2, largura, altura, 30);
     
    fill(20);
    noStroke(0);
        
        
    textSize(32);
    textStyle(NORMAL);
    fill(255);
    text('Informações', 245,355);
  
    
  }

   //texto do botão creditos
   
    stroke(60,250,255);
    strokeWeight(4);
    fill(0);
    rect(xMenu,yMenu3, largura, altura, 30);
  
    textSize(32);
    textStyle(NORMAL);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('créditos', 275,490)
  
     //tela das informações
  if( mouseX > xMenu && mouseX< xMenu + largura && mouseY > yMenu3 && mouseY< yMenu3 + altura ) {
  
    fill(60,230,255);
    rect(xMenu,yMenu3, largura, altura, 30);
  
    textSize(42);
    noStroke();
    
    textSize(32);
    textStyle(NORMAL);
    fill(255);
    text('créditos', 275,490);
     }
}