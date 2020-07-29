//https://youtu.be/WDCNx77fpsg
//video explicativo


var tela=1;
var imgp=[]; var imgp2=[]; var imgp3=[]
var cont=0; var tempo=0; var contador=0; var tempo2=0;
var contS=0; var co=0; let rate=30; var perinicio; 
var x=20; var y=360; var h=70;//jogador
var p; var a=0; var b=0; var c=30;//objeto 
var aleatorio=Math.floor(Math.random()*(2-0)+0);
var vidas=3

function preload() {
  p=loadImage('Stone.png');
  perinicio=loadImage('Idle__000.png');
  img0=loadImage('BG.png');
  img1=loadImage('menu.jpeg');
  img2=loadImage('creditos.jpeg');
  img3=loadImage('instrucoes.jpeg');
  img4=loadImage('eu.jpeg');
  img5=loadImage('hedrix.png');
  img6=loadImage('cenario.jpeg');
  img7=loadImage('1.png');
  img8=loadImage('2.png');
  img9=loadImage('3.png');
  img10=loadImage('7.png');
  img11=loadImage('11.png');
  img12=loadImage('13.png');
  img13=loadImage('14.png');
  img14=loadImage('15.png');
  imgp2[0]=loadImage('Jump__000.png');
  imgp2[1]=loadImage('Jump__001.png');
  imgp2[2]=loadImage('Jump__002.png');
  imgp2[3]=loadImage('Jump__003.png');
  imgp2[4]=loadImage('Jump__004.png');
  imgp2[5]=loadImage('Jump__005.png');
  imgp2[6]=loadImage('Jump__006.png');
  imgp2[7]=loadImage('Jump__007.png');
  imgp2[8]=loadImage('Jump__008.png');
  imgp2[9]=loadImage('Jump__009.png');
  imgp3[0]=loadImage('Run__000.png');
  imgp3[1]=loadImage('Run__001.png');
  imgp3[2]=loadImage('Run__002.png');
  imgp3[3]=loadImage('Run__003.png');
  imgp3[4]=loadImage('Run__004.png');
  imgp3[5]=loadImage('Run__005.png');
  imgp3[6]=loadImage('Run__006.png');
  imgp3[7]=loadImage('Run__007.png');
  imgp3[8]=loadImage('Run__008.png');
  imgp3[9]=loadImage('Run__009.png');
  myFont=loadFont('Blacks Roobin.otf');
}

function setup() {
  createCanvas(500, 500);
   textFont(myFont);
  frameRate(rate);
}

function draw() {
  if(tela==1){
    menu();}
  if(tela==2){
    jogar();}
  if(tela==3){
    oi();}
  if(tela==4){
    fase1();}
  if(tela==5){
    instrucoes();}
  if(tela==6){
    creditos();}
  if(tela==7){
    iae();}
  if(tela==8){
    tudobom();}
}

function menu(){
  image(img1,0,0,500,550);
  stroke(255,255,255);
  textSize(40);
  text('Earth layers', 160, 40);
  
  textSize(32);
  if(mouseX >215 && mouseX < 215+100 && mouseY > 120 && mouseY < 120+50){
    rect (210, 115, 100, 50, 15);
    if(mouseIsPressed){
      tela=2;
      }
    }
 text('Jogar',220,150);
  
  if(mouseX>170 && mouseX <210+180 && mouseY>215 && mouseY<215+50){
    rect(160,215,180,50, 15);
    if(mouseIsPressed){
      tela=5;
      }
    }
  text('Instruções', 180, 250);
  if(mouseX>195 && mouseX < 195+135 && mouseY> 315 && mouseY < 315+ 50){
    rect(190,315,135 ,50, 15);
    if(mouseIsPressed){
      tela=6;
      }
    }
  text('Créditos', 200, 350);
  }

function jogar(){
  textSize(32);
  text('Jogar',200, 40);
  image(img6,0,0,500,500);
  image(img5, 270, 250, 200, 200);
  if(mouseX>5 && mouseX < 5+80 && mouseY> 5 &&mouseY < 5+ 30){
    rect(10,5,85,30, 15);
    if(mouseIsPressed){
      tela=1;
      }
    } textSize(24);
  text('voltar',20, 30);
  
  stroke(255,255,255);
  textSize(25);
      rect(10,350, 470, 130, 15); 
  text('Olá, seja bem-vindo ao earth layers'+"\n"+
       'me chamo Hendrix e esse meu amigo Jack,'+"\n"+
       'nós vamos te acompanhar nessa aventura.', 20, 390);
   if(mouseX >20 && mouseX < 20+190 && mouseY > 450 && mouseY < 450+20){
    if(mouseIsPressed){
      tela=3;
      }
    } textSize(16);
  text('clique aqui para continuar',20,475);

}

function oi(){
  textSize(32);
  text('Jogar',200, 40);
  image(img6,0,0,500,500);
  image(img5, 270, 250, 200, 200);
  if(mouseX>5 && mouseX < 5+80 && mouseY> 5 &&mouseY < 5+ 30){
    rect(10,5,85,30, 15);
    if(mouseIsPressed){
      tela=2;
      }
    } textSize(24);
  text('voltar',20, 30);
   stroke(255,255,255);
  textSize(25);
      rect(10,355, 470, 160, 15); 
  text('Vamos aprender a identificar os diferentes'+"\n"+
       'tipos de rochas e relaciona-las as camadas'+"\n"+'   que estruturam o planeta Terra e suas'+"\n"+ 'principais características.', 20, 390);
  if(mouseX >20 && mouseX < 20+190 && mouseY > 340 && mouseY < 340+20){
    if(mouseIsPressed){
      tela=7;
      }
    } textSize(16);
  rect(20,330, 190, 20, 15);
  text('clique aqui para continuar',20,345);
}

function instrucoes(){
  image(img3,0,0,500,500); 
   if(mouseX>5 && mouseX < 5+80 && mouseY> 5 &&mouseY < 5+ 30){
    rect(10,5,85,30, 15);
    if(mouseIsPressed){
      tela=1;
      }
    } textSize(24);
  text('voltar',20, 30);
  
  text(32);
  text('Instruções',150,50);
  text(26);
  text('Público alvo: '+"\n"+' Estudantes brasileiros',50, 100);
  text('Série: 6° ano, ensino'+"\n"+' fundamental',50,200);
  text('Materia: Ciências.',50,300);
  text('Habilidades BNCC:'+"\n"+' EF06CI11, EF06CI12.',50,350);
}

function creditos(){
  text('Créditos',180,40);
  image(img2,0,0,500,550);
  image(img4,245,40,150,250,15); 
   if(mouseX>5 && mouseX < 5+80 && mouseY> 5 &&mouseY < 5+ 30){
    rect(10,5,85,30, 15);
    if(mouseIsPressed){
      tela=1;
      }
    } textSize(24);
  text('voltar',20, 30);
  
  stroke(255,255,255);
  textSize(36);
  rect(170,350, 300, 100, 15);
  text('Desenvolvedora:'+"\n"+' Rillary Oliveira', 190, 390);

}

function iae(){
  textSize(32);
  text('Jogar',200, 40);
  image(img6,0,0,500,500);
  image(img5, 270, 250, 200, 200);
  if(mouseX>5 && mouseX < 5+80 && mouseY> 5 &&mouseY < 5+ 30){
    rect(10,5,85,30, 15);
    if(mouseIsPressed){
      tela=3;
      }
    } textSize(24);
  text('voltar',20, 30);
   stroke(255,255,255);
  textSize(25);
      rect(10,355, 470, 130, 15); 
  text('Nessa primeira fase, o desafio é desviar das'+"\n"+
       'rochas que estão caindo, use as teclas de'+"\n"+
       'seta do teclado para se movimentar.', 20, 390); 
  if(mouseX >210 && mouseX < 210+190 && mouseY > 455 && mouseY < 455+20){
    if(mouseIsPressed){
      tela=4;
      }
    } textSize(16);
  text('clique aqui para continuar',210,475);
}

function fase1(){
   image(img0,0,0,500,500);
  
  image(img7,-10, 450, 150, 80);
  image(img8,140, 450, 200, 80);
  image(img9,340, 450, 170, 80);
  
  image(img12, 0, 350, 50, 50);
  image(img13, 50, 350, 50, 50);
  image(img14, 100, 350, 50, 50);
  
  image(img12, 350, 350, 50, 50);
  image(img13, 400, 350, 50, 50);
  image(img14, 450, 350, 50, 50);
  
  image(img11, 200, 400, 50, 50);
  image(img10, 250, 400, 50, 50);
  
  image(img12, 150, 280, 60, 50);
  image(img13, 210, 280, 60, 50);
  image(img14, 270, 280, 60, 50);
  
  image(img14, 0, 220, 60, 50);
  
  image(img12, 450, 220, 60, 50);
  
  image(img13, 350, 250, 60, 30);
  image(img13, 70, 250, 60, 30);
  if(mouseX>5 && mouseX < 5+80 && mouseY> 35 &&mouseY < 35+ 30){
    rect(10,35,85,30, 15);
    if(mouseIsPressed){
      tela=7;
      }
    } textSize(24);
  text('voltar',20, 55);
   stroke(255,255,255);
  if(keyIsDown(LEFT_ARROW)){
    x-=4;
    tempo++;
    image (imgp3[cont%10],x,y,90,h);
    if(tempo>1){
      cont++;
    tempo=0;
    tempo++;
    }
  } else if(keyIsDown(RIGHT_ARROW)){
    x+=4;
    image (imgp3[cont%10],x,y,90,h);
    if(tempo>1){
      cont++;
    tempo=0;
    tempo++;
  }
  } else if(keyIsDown(UP_ARROW)){
    y-=5;
    tempo++;
    image (imgp2[cont%10],x,y,90,h);
    if(tempo>1){
      cont++;
    tempo=0;
    tempo++;
  }
  } else if(keyIsDown(DOWN_ARROW)){
    y+=5;
     image (imgp2[cont%10],x,y,90,h);
    if(tempo>1){
      cont++;
    tempo=0;
    tempo++;
    }
  } else{
     image(perinicio,x,y,90,h);
  }
  image(p,a,b,c,30);
  textSize(20)
  text('Vidas: '+vidas,200, 30)
 
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(2-0)+0);
  text('Vidas: '+vidas,340,130)
} if(dist(a,b,x,y)<c+h){
  a=random(450);
  b=0;
  vidas=vidas-1;
  aleatorio=Math.floor(Math.random()*(2-0)+0);
}
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  co=co+1;
  textSize(32);
  contS=parseInt(co/rate);
  text(co,200,100);
  text(contS,200,150);
  if(contS>80){
     tela=8
    co=0
    contS=0
    rate=0
     }
  
  
  if(vidas<0){
    text('GAME OVER',50,300,200,200);
    tela=1
    vidas=3
    co=0
    contS=0
    rate=0
  }
}

function tudobom(){
  image(img0,0,0,500,500);
  image(img5, 270, 250, 200, 200);
  if(mouseX>5 && mouseX < 5+80 && mouseY> 5 &&mouseY < 5+ 30){
    rect(10,5,85,30, 15);
    if(mouseIsPressed){
      tela=4;
      }
}textSize(24);
  text('voltar',20, 30);
  
  stroke(255,255,255);
  textSize(25);
      rect(10,45, 470, 250, 15); 
  text('Parabéns você conseguiu passar de fase.'+"\n"+'Olha só quantas rochas, Algumas dessas são '+"\n"+'chamadas de feldspato, essas rochas formam '+"\n"+'60% da crosta terrestre que é a camada '+"\n"+'mais externa do nosso  planeta. Nas '+"\n"+'próximas fases vamos ver outros tipos'+"\n"+' de rochas e sua relação com as '+"\n"+'camadas da Terra, Até mais.', 20, 60);
  image(p,10,440,90,90);
  image(p,100,440,90,90);
  image(p,55,440,90,90);
  image(p,280,440,90,90);
  image(p,190,440,90,90);
}