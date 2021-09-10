var tela = 1; // menu
var fundo, eu, seta;
var x =275, y= 215;
var tempo = 10;  //temporizador
var button = []; //vetor
var div, tx, ty;
var som;

function preload() { //carregar as imagens
 som = loadSound('som.mp3');
 fundo = loadImage('céu.jpg');
 eu = loadImage('eu.jpeg');
 dayse = loadImage('dayse.jpeg');
 seta = loadImage('seta.png');
 trio = loadImage('trio.jpeg');
 button[0] = loadImage('alter/13.png');
 button[1] = loadImage('alter/12.png');
 button[2] = loadImage('alter/10.png');
 button[3] = loadImage('alter/9.png');
 button[4] = loadImage('alter/Q2.jpeg');
 button[5] = loadImage('alter/A.jpeg');
 button[6] = loadImage('alter/B.jpeg');
 button[7] = loadImage('alter/C.jpeg');
 button[8] = loadImage('alter/D.jpeg');
 button[9] = loadImage('alter/Q3.jpeg');
 button[10] = loadImage('alter/1.jpeg');
 button[11] = loadImage('alter/2.jpeg');
 button[12] = loadImage('alter/3.jpeg');
 button[13] = loadImage('alter/4.jpeg');
}

function setup() { 
  //redirecionei para o cancas ficar no centro
  div = createCanvas(550, 400);
  tx = (windowWidth - width)/2;
  ty = (windowHeight - height)/2;
  div.position(tx, ty);
  div.style('display', 'block');
  frameRate(30);
  som.loop();
 som.setVolume(0.2);
}

function telas(){
  //tela menu
  if(tela == 1){
    
    noStroke();
    
    rectMode(CENTER)
    
    fill('rgba(248, 243, 78, 0.7)')
    rect(x, y-80, 150, 50, 20)

    fill('rgba(128, 255, 255, 0.7)')
    rect(x, y, 150, 50, 20)

    fill('rgba(0, 128, 255, 0.7)')
    rect(x, y+80, 150, 50, 20)
  
      textAlign(CENTER);
    textSize(60);
    textStyle(BOLD);
    fill(250)
    text('THINK - FAST', x, 80);
    
    fill(0)
    textSize(30);
    textStyle(NORMAL);
    text('Jogar', x, y-70);
    text('Instruções', x, y+7);
    text('Crédito', x, y+90);
    
    bord(x, 150, (y-80), (50), 0, 2, 2);
    bord(x, 150, (y), (50), 0, 2, 3);
    bord(x, 150, (y+80), (50), 0, 2, 4);
    
  }
    
  
  //tela jogo
  if(tela == 2){
    textAlign(LEFT)
    fill(250);
     textSize(25);
    textStyle(BOLD);
    text("Quantos triângulos tem na imagem?",54,110);
    image(trio, 210, 138, 130, 130);
    
    //se o mouse passar por cada cordenada a imagem ira diminuir um pouco e se clicar levara para outro tela
    
    if(mouseX > 100 && mouseX < 100 + button[0].width && mouseY > 300 && mouseY < 300 + button[0].height){
      image(button[0], 100, 300, 50, 50);
      if(mouseIsPressed){
        tela = 5;
        tempo = 15;
      }
    } else {
      image(button[0], 100, 300);
    }
    
    
    if(mouseX > 200 && mouseX < 200 + button[1].width && mouseY > 300 && mouseY < 300 + button[1].height){
      image(button[1], 200, 300, 50, 50);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[1], 200, 300);
    }
    
    if(mouseX > 300 && mouseX < 300 + button[2].width && mouseY > 300 && mouseY < 300 + button[2].height){
      image(button[2], 300, 300, 50, 50);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[2], 300, 300);
    }
    
    if(mouseX > 400 && mouseX < 400 + button[3].width && mouseY > 300 && mouseY < 300 + button[3].height){
      image(button[3], 400, 300, 50, 50);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[3], 400, 300);
    }
    
    voltar();
    timer();
    
  }
  
  if(tela == 5){
    textAlign(LEFT)
    fill(250);
     textSize(25);
    textStyle(BOLD);
    text("Qual das alternativas é a resposta?",54,110);
   image(button[4], 164, 140, 200, 135);
/*   image(button[5], 75, 145, 100, 50);
    image(button[6], 75, 235, 100, 50);
    image(button[7], 400, 145, 100, 50);
   image(button[8], 400, 235, 100, 50);
*/  
   
    if(mouseX > 400 && mouseX < 460 && mouseY > 235 && mouseY < 395){
      image(button[8], 400, 235, 60, 60);
      if(mouseIsPressed){
       tela = 6;
      tempo = 15;
        
      }
    } else {
      image(button[8], 400, 235, 50, 50);
    }
    
    if(mouseX > 75.5 && mouseX < 135 && mouseY > 145.5 && mouseY < 205){
      image(button[5], 75, 145, 60, 60);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[5], 75, 145, 50, 50);
    }
    
   if(mouseX > 75 && mouseX < 105 && mouseY > 235 && mouseY < 295){
      image(button[6], 75, 235, 60, 60);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[6], 75, 235, 50, 50);
    }
    
    if(mouseX > 400 && mouseX < 460 && mouseY > 145 && mouseY < 205){
      image(button[7], 400, 145, 60, 60);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[7], 400, 145, 50, 50);
    }
    
    voltar();
    timer();
  } 

    if(tela == 6){
    textAlign(LEFT)
    fill(250);
     textSize(20);
    textStyle(BOLD);
    text("Qual das alternativas complementa a imagem?",54,110);
   image(button[9], 170, 140, 180, 142);

    if(mouseX > 400 && mouseX < 460 && mouseY > 235 && mouseY < 395){
      image(button[12], 400, 235, 60, 60);
      if(mouseIsPressed && tempo < 14){
        tela = 'acerto'
        voltar();
        
      }
    } else {
      image(button[12], 400, 235, 50, 50);
    }
    
    if(mouseX > 75.5 && mouseX < 135 && mouseY > 145.5 && mouseY < 205){
      image(button[10], 75, 145, 60, 60);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[10], 75, 145, 50, 50);
    }
    
    if(mouseX > 75 && mouseX < 105 && mouseY > 235 && mouseY < 295){
      image(button[11], 75, 235, 60, 60);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[11], 75, 235, 50, 50);
    }
    
    if(mouseX > 400 && mouseX < 460 && mouseY > 145 && mouseY < 205){
      image(button[13], 400, 145, 60, 60);
      if(mouseIsPressed){
        tela = 'erro';
      }
    } else {
      image(button[13], 400, 145, 50, 50);
    }
    
    voltar();
    timer();
    
    
  }
  
      
   if(tela === 'erro'){
    textAlign(CENTER);
  textSize(40);
  fill('yellow');
  stroke('black');
  strokeWeight(5);
    text('Tente Novamente', 280, 200);
    voltar();
  }
  
  
  if(tela === 'acerto'){
    textAlign(CENTER);
  textSize(50);
  fill(255,255,0);
  stroke('black');
  strokeWeight(5);
    text('PARABÉNS', 280, 210);
    voltar();
  }
  
  //tela instruções
  if(tela == 3){
    textAlign(CENTER);
    textSize(60);
    textStyle(BOLD);
    fill(250)
    text('Instruções', x, 80);
    
   
    fill(250);
     textSize(20);
    textStyle(ITALIC);
    text("O Think Fast é um jogo que testará suas habilidades de memória e conhecimento, a cada fase contém uma pergunta diferente correspondente a cada imagem que aparecerá, você terá algumas alternativas para responder corretamente, a cada acerto você passara de fase. Em algumas fases terá um tempo para visualização. Agora é com você, bom jogo!!!",280,110,410);
    voltar();
    
  }
  
  //tela creditos
  if(tela == 4){
    textAlign(CENTER);
    textSize(60);
    textStyle(BOLD);
    fill(250)
    text('Créditos', x, 80);
    
    image(eu, 30, 90, 110, 110);
    fill(66,255,255);
     textSize(25);
    textStyle(ITALIC);
    text("Micaelly Cavalcante da silva",300,120);
    text("Idade: 19 anos",225,145);
    text("Curso: C&T",208,170);
    text("Função: Criadora do jogo",282,195);
    
    image(dayse, 30, 210, 110, 120);
    fill(66,255,255);
     textSize(25);
    textStyle(ITALIC);
    text("Dayseanne Duarte Cavalcante",312,230);
    text("Idade: 26 anos",225,258);
    text("Curso: Pedagogia",242,282);
    text("Função: Orientadora",258,310);
    
    voltar();
  }
  
}

//construi uma seta para a cada tela avançada, poderá retornar ao menu, ao passar o mouse em cima e clicar.

function voltar(){
  //image(seta, 20, 340, 60, 50);
  if((mouseX > 20 && mouseX < 20+60) && (mouseY > 340 && mouseY < 340+50)){
      stroke(0);
      strokeWeight(4);
      noFill();
    image(seta, 15, 335, 70, 60);
      if(mouseIsPressed){
        tela = 1;
      }
    }
  else{
    image(seta, 20, 340, 60, 50);
  }
  
}

// O realce das bordas, qunado o mouse passar por cima feitas para o menu

function bord(xBord, xBordTam, yBord, yBordTam, corBord, groBord, tel){
    if((mouseX > xBord-(xBordTam/2) && mouseX < xBord+xBordTam-(xBordTam/2)) && (mouseY > yBord-(yBordTam/2) && mouseY < yBord+yBordTam-(yBordTam/2))){
      stroke(corBord);
      strokeWeight(groBord);
      noFill();
      rect(xBord, yBord, xBordTam, yBordTam, 20);
      if(mouseIsPressed){
        tela = tel;
        tempo = 15;
//toda vez que retornar ao menu o temporizador voltara a 15
      }
    }
}

function draw() {
  background(fundo);
  telas();
  
//sempre rode o meu plano de fundo e telas
}

// função para o temporizador, cada vez que ele chear a zero aparecera a tela de erro.

function timer(){
  if(frameCount%30==0){
    tempo-=1
  } 
  
  textAlign(CENTER);
  textSize(40);
  fill('white');
  stroke('black');
  strokeWeight(6);
  text(tempo, 500, 50);
  if(tempo === 0){
    tela = 'erro'
  }
}



