//https://youtu.be/me83SO7wAJw
let logo
let imagem1;
let img;
let h;
let jg;
//variaves do jogo
let peca1;
let nivel =1;
let acerto = 0;
let alt1, alt2, alt3;
let respostaCorreta;

//1=logo 2=menu 3=jogo 4=informações 5=creditos

let tela =1;
let texto1 = "DOMINÓ DE FRAÇÕES";
//variaves do botão menu
let altura = 90;
let largura = 250;
let xMenu = 210;
let yMenu1 = 170;
let yMenu2 = 300;
let yMenu3 = 435
let larguraS = 90; 
let xsair = 595;
let ysair = 540;

let xvoltar=605
let yvoltar=540


//botao menu
let xm = 495;
let ym = 505;
let l = 180;
let a = 70;


let p1,p2,p3,p4,p55,p6,p7,p8,p9,p10,p11,p12;


//peças
let peca = [];
let fracao = [];
function preload() {
 imagem1= loadImage('imgmenu.jpg');
  logo = loadImage('telajogo.gif');
  img= loadImage('CREDITOS_.jpg');
  jg=loadImage('canva.jpg');
  h=loadImage('1.gif');
  
  
  
  
  for(var i=1;i<=12;i++){
    peca[i]=loadImage('pecas/p'+i+'.jpeg')
    
    
  }
     for(var i=1;i<=12;i++){
    fracao[i]=loadImage('pecas/f'+i+'.jpeg')
    
  }

}

function draw() {
   
  //func.  domonino de frações
  if(tela==1){
  teladomino();
      }
  //func.tela do menu
  if(tela==2){
  menu()
}   
  //func.tela do jogo  
  if(tela==3){
    jogo();
   }
  //func. tela instruções
  if(tela==4){
 informacoes( );
}
  //func.tela de informações
  if(tela==5){
creditos();
}
  //func.tela errou
  if(tela==6){
    errou();
  }
}
function setup() {
  createCanvas(700, 600);
   sorteioInicial();
  sortearAlternativas();
  

}
 
function mouseClicked(){

  //console.log(mouseX+ " " + mouseY);
 
  //click botao menu
  if( (mouseX > xm && mouseX< xm+ l )&& (mouseY > ym && mouseY< ym + a) && (tela==1)){
         tela=2
     }
  //click do botao iniciar
  if(( mouseX > xMenu && mouseX< xMenu + largura )&& (mouseY > yMenu1 && mouseY< yMenu1+ altura )&& (tela==2)){
        tela=3
}
  
  //click do botão informações
  if((mouseX > xMenu && mouseX< xMenu + largura )&&( mouseY > yMenu2 && mouseY< yMenu2+ altura)&& (tela==2)){
       tela=4;
}
  
  //click do botão creditos
  if( (mouseX > xMenu && mouseX< xMenu + largura) && (mouseY > yMenu3 && mouseY< yMenu3 + altura )&& (tela==2)){
       tela=5;
      }
    
  //click do botão sair das telas 
  if( (mouseX > xsair && mouseX< xsair + larguraS )&& (mouseY > ysair && mouseY< ysair + 55) && (tela==3||tela==4)){
            tela=2;
      }
    //botão sair teala 5 que volta para a logo do jogo
    if( (mouseX > xsair && mouseX< xsair + larguraS )&& (mouseY > ysair && mouseY< ysair + 55) && (tela==5)){
            tela=1;
      }
   if( (mouseX > xsair && mouseX< xsair + larguraS )&& (mouseY > ysair && mouseY< ysair + 55) && (tela==6)){
            tela=3;
      }
  
  
  
  if(tela==3){
     
    if(mouseX>=138 && mouseX<=213 && mouseY >=490 && mouseY<= 564){
            if(alt1==respostaCorreta){
              nivel++
              acerto++
      sortearAlternativas();
      
     }else{
     tela=6
}
        }
      
      
    
    if(mouseX>=238 && mouseX<=313 && mouseY >=490 && mouseY<= 564){
          if(alt2==respostaCorreta){
              nivel++
              acerto++
            sortearAlternativas()
         }
      else{
     tela=6
}
    }
    if(mouseX>=338 && mouseX<=413 && mouseY >=490 && mouseY<= 564){
            if(alt3==respostaCorreta){
              nivel++
              acerto++
              sortearAlternativas()
          }
      
      else{
     tela=6
}
    }
  
  
  
  
  
  
  
  
  }
 }

