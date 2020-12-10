function informacoes ( ){ 
  background(0);
  
    noStroke();
    textSize(32)
    textStyle(NORMAL); 
    fill(255);
    text('instruçoes:',289, 35);
    textSize(32);
    text("6ºAno - MATEMÁTICA",190,90);
    textSize(32);
    text("Habilidades -(EF06MA07) :" ,55,140);
    textSize(22);
    text(" Compreender, comparar e ordenar\n frações associadas às ideias de partes \n de inteiros e resultado de divisão,\n identificando frações equivalentes." ,50,180);
  
    noStroke();
    textSize(32); //TAMANHO DA FONT
    fill(255);
    text("RESUMO :" ,290,340);
    textSize(22);
    text(' \n o dominó de frações tem  como objetivo associar frações \n equivalentes, levando o aluno a fixar e compreender \n o que são frações  equivalentes.\n o aluno poderá também comparar e ordenar os números.\n o jogo pode ser aplicado  facilmente em sala de aula ou \n com aplicativo para ensino remoto',45,380)
 //texto da tela de descrição
  
//botão sair tela de descrição
    stroke(70,350,255);
    strokeWeight(4);
    fill(0)
    rect(xsair, ysair , larguraS ,45);
  
    
    noStroke();
    textSize(32);
    textStyle(NORMAL); 
    fill(255);
    text('sair',  615, 575);
  
        if( mouseX > xsair && mouseX< xsair + larguraS && mouseY > ysair && mouseY< ysair + 55 ) {
          
     fill(60,230,255);
     stroke(255)
     rect(xsair, ysair , larguraS ,45);
  
     
     noStroke();
     textSize(32);
     textStyle(NORMAL); 
     fill(255);
     text('sair',  615, 575);

    
  
         }
 }