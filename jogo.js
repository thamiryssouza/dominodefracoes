function jogo(){ 
   background(jg);

    //texto do botão 
    stroke(70,350,255);
    strokeWeight(4);
    fill(0)
    rect(xsair, ysair , larguraS ,45);
  
    fill(0);
    noStroke();
    textSize(32);
    textStyle(NORMAL); 
    fill(255);
    text('sair', 615, 575); 
    
       //sobreposição do texto sair
  if( mouseX > xsair && mouseX< xsair + larguraS && mouseY > ysair && mouseY< ysair + 55 ) {
          
     fill(60,230,255);
     rect(xsair, ysair , larguraS ,45);
  
     fill(0);
     noStroke();
     textSize(32);
     textStyle(NORMAL); 
     fill(255);
     text('sair', 615, 575);
  
   
    }
  
  //alternativas
 image(peca[alt1],138,490,75,74)
 image(peca[alt2],238,490,75,74)
 image(peca[alt3],338,490,75,74)
  

  //console.log('x: '+mouseX+' y: '+ mouseY  )
 
     if(nivel >= 1){
      image(fracao[p1],34,48,75,74)
       
    if(acerto >= 1){
       image(peca[p1],110,48,75,74) 
    }
  }
  if(nivel >= 2){
     
    image(fracao[p2],193,48,75,74) 
    
    if(acerto >= 2){
      image(peca[p2],269,48,75,74)
    }
  
  }
  if(nivel >= 3){
    
    image(fracao[p3],350,48,75,74)
    
    if(acerto>= 3){
      image(peca[p3],426,48,75,74)
    }
   
  }
  if(nivel >= 4){
    
     image(fracao[p4],507,48,75,74)
    
    if(acerto>= 4){
       image(peca[p4],583,48,75,74)
    }
  
  
  }
  if(nivel >= 5){
    
    image(fracao[p55],589,128,75,74)
    
    if(acerto>= 5){
      image(peca[p55],589,203,75,74)
    }
   
  
  }
  if(nivel >= 6){
    
     image(fracao[p6],509, 203,75,74) 
    
    if(acerto>= 6){
      image(peca[p6],434,203,75,74)
    }
   
  }
  if(nivel >= 7){
    
     image(fracao[p7],350, 203,75,74)
    
    if(acerto>= 7){
      image(peca[p7],274,203,75,74)
    }
  
  }
  if(nivel >= 8){
    
     image(fracao[p8],195, 203,75,74)
    
    if(acerto>= 8){
      image(peca[p8],119,203,75,74)
    }
  
  }
  if(nivel >= 9){
    
    image(fracao[p9],38, 203,75,77) 
    
    if(acerto>= 9){
      image(peca[p9],38,281,75,74)
    }
  
  }
  if(nivel >= 10){
    
    image(peca[p10],116,360,77,74)
  
     
  if(acerto>= 10){
     image(fracao[p10],38,360,77,74);    
  }
  }
  if(nivel >= 11){
    image(peca[p11],277,360,77,74);
    
  
    if(acerto>= 11){
    image(fracao[p11],199,360,77,74);
    }
    }
  if(nivel >= 12){
    image(peca[p12],437,360,77,74);
    

    if(acerto>=12){
    image(fracao[p12],359,360,77,74);
 }
}

}

function sorteioInicial(){
    p1=parseInt(random(1,12.9))
    p2=parseInt(random(1,12.9))
    p3=parseInt(random(1,12.9))
    p4=parseInt(random(1,12.9))
    p55=parseInt(random(1,12.9))
    p6=parseInt(random(1,12.9))
    p7=parseInt(random(1,12.9))
    p8=parseInt(random(1,12.9))
    p9=parseInt(random(1,12.9))
    p10=parseInt(random(1,12.9))
    p11=parseInt(random(1,12.9))
    p12=parseInt(random(1,12.9))
  
  
 //sorteio para nao repetir p1;
  while( p1==p2 || p1==p3 || p1==p4 || p1==p55 || p1==p6 || p1==p7 || p1==p8 || p1==p9 || p1==p10 || p1==p11 || p1==p12){
         p1=parseInt(random(1,12.9))
         }
  
   while( p2==p1 || p2==p3 || p2==p4 || p2==p55 || p2==p6 || p2==p7 || p2==p8 || p2==p9 || p2==p10 || p2==p11 || p2==p12){
         p2=parseInt(random(1,12.9))
         }
  
  while( p3==p1 || p3==p2 || p3==p4 || p3==p55 || p3==p6 || p3==p7 || p3==p8 || p3==p9 || p3==p10 || p3==p11 || p3==p12){
         p3=parseInt(random(1,12.9))
         }
  while( p4==p1 || p4==p2 || p4==p3 || p4==p55 || p4==p6 || p4==p7 || p4==p8 || p4==p9 || p4==p10 || p4==p11 || p4==p12){
         p4=parseInt(random(1,12.9))
         }
  while( p55==p1 || p55==p2 || p55==p3 || p55==p4 || p55==p6 || p55==p7 || p55==p8 || p55==p9 || p55==p10 || p55==p11 || p55==p12){
         p55=parseInt(random(1,12.9))
         }
  while( p6==p1 || p6==p2 || p6==p3 || p6==p4 || p6==p55 || p6==p7 || p6==p8 || p6==p9 || p6==p10 || p6==p11 || p6==p12){
         p6=parseInt(random(1,12.9))
         }
  while( p7==p1 || p7==p2 || p7==p3 || p7==p4 || p7==p55 || p7==p6 || p7==p8 || p7==p9 || p7==p10 || p7==p11 || p7==p12){
         p7=parseInt(random(1,12.9))
         }
   while( p8==p1 || p8==p2 || p8==p3 || p8==p4 || p8==p55 || p8==p6 || p8==p7 || p8==p9 || p8==p10 || p8==p11 || p7==p12){
         p8=parseInt(random(1,12.9))
         }
   while( p9==p1 || p9==p2 || p9==p3 || p9==p4 || p9==p55 || p9==p6 || p9==p7 || p9==p8 || p9==p10 || p9==p11 || p9==p12){
         p9=parseInt(random(1,12.9))
         }
   while( p10==p1 || p10==p2 || p10==p3 || p10==p4 || p10==p55 || p10==p6 || p10==p7 || p10==p8|| p10==p9|| p10==p11 || p10==p12){
         p10=parseInt(random(1,12.9));
     
         }
   while( p11==p1 || p11==p2 || p11==p3 || p11==p4 || p11==p55 || p11==p6 || p11==p8 || p11==p9 || p11==p10 || p11==p7 || p11==p12){
         p11=parseInt(random(1,12.9))
     
         }
   while( p12==p1 || p12==p2 || p12==p3 || p12==p4 || p12==p55 || p12==p6 || p12==p8 || p12==p9 || p12==p10 || p12==p11 || p12==p7){
         p12=parseInt(random(1,12.9))
         }
  
//console.log(p1,p2,p3,p4,p55,p6,p7,p8,p9,p10,p11,p12);
}




function sortearAlternativas(){
  
 
  
  if(nivel == 1){
    respostaCorreta = p1;
}
    if(nivel == 2){
    respostaCorreta = p2;
}
    if(nivel == 3){
    respostaCorreta = p3;
}
    if(nivel == 4){
    respostaCorreta = p4;
}
    if(nivel == 5){
    respostaCorreta = p55;
}
    if(nivel == 6){
    respostaCorreta = p6;
}
    if(nivel == 7){
    respostaCorreta = p7;
}
    if(nivel == 8){
    respostaCorreta = p8;
}
    if(nivel == 9){
    respostaCorreta = p9;
}
    if(nivel == 10){
    respostaCorreta = p10;
}
    if(nivel == 11){
    respostaCorreta = p11;
}
    if(nivel == 12){
    respostaCorreta = p12;
}
  
  alt1=parseInt(random(1,12.9));
  alt2=parseInt(random(1,12.9));
  alt3=parseInt(random(1,12.9));
  
   let posicao=parseInt(random(1,3.9))
  
  if(posicao==1){
  alt1=respostaCorreta
     }
  if(posicao==2){
  alt2=respostaCorreta
     }
  if(posicao==3){
  alt3=respostaCorreta
     }
  
  //nao repetir
   while(alt1==alt2|| alt2==alt3 ){
 
    alt1=parseInt(random(1,12.9))
  
  }
   while(alt2==alt1|| alt2==alt3 ){
 
    alt2=parseInt(random(1,12.9))
  
  }
   while(alt3==alt1|| alt3==alt2 ){
 
    alt3=parseInt(random(1,12.9))
  
  }
   
  
 
  
  
  
  //console.log(alt1,alt2,alt3);
  
  
  
}
