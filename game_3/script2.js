let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let field_game = document.getElementsByClassName("field_game");
canvas.width= document.documentElement.clientWidth*0.6;
canvas.height = document.documentElement.clientHeight*0.5;
let width_canvas = canvas.width;
let height_canvas= canvas.height;

let ground = new Image();
ground.src = "game_3/bg_image.jpg";
let person = new Image();
person.src = "game_3/persona1.png";
let block = new Image();
block.src = 'game_3/block.png';

personStart = false;
groundX=0;
personY=height_canvas*0.51;
time=0;
blockX=width_canvas;
move="none";

window.onload = function () {
   context.drawImage(ground,0,0) 
   context.drawImage(person,width_canvas/9,height_canvas*0.51);
   context.font = "20px Arial";
   context.fill = "#555";
   context.fillText("Нажмите Enter для старта",width_canvas/3, height_canvas/3);
}
document.addEventListener("keydown", moveUp);

function moveUp(event) {
    if (event.key=="Enter" && personStart == false) {
        personStart = true;
        requestAnimationFrame(draw); 
    }
    if (event.key=="w" && move=="none"){
        move="up";
    }
}

function draw(){
    if (personStart==true)  requestAnimationFrame(draw); 
    time++;
    
    // Анимация фона
    groundX-=2;
    if(groundX<=-368){groundX=0;}

    // Отрисовка
    context.clearRect(0,0,width_canvas,height_canvas);
    context.drawImage(ground,groundX,0);
    context.drawImage(person,width_canvas/9,personY);
    context.drawImage(block, blockX, height_canvas*0.57);
    context.fillText("Ваш счёт :" + time, 450, 100);

    // Анимация персонажа
    if (time % 64 == 0 && move=="none") {
        person.src = 'game_3/persona1.png';
    } 
    else if (time % 32 == 0 && move=="none") {
        person.src = 'game_3/persona2.png';
    }
    
    // Появление препятствия
    blockX-=2;
    if(blockX<=-100){
        blockX=width_canvas;
    }

    // Прыжки
    if (move == 'up') {
        personY -= 2;
        if (personY <= height_canvas*0.19) {
            person.src = 'game_3/persona3.png';
            move = 'down'; personY = height_canvas*0.19;
        }
    } 
    else if (move == 'down') {
        personY += 5;
        if (personY >= height_canvas*0.51) {
            person.src = 'game_3/persona1.png';
            move = 'none'; personY = height_canvas*0.51;
        }
    }

    // Столкновение с препятствием
    if (blockX > width_canvas/9-20 && blockX < width_canvas/9+90 && personY+80>height_canvas*0.53) {
        personStart=false
    }

    // Вывод итогов
    if (personStart == false) {context.fillText('Ваш счёт ' + time, 450, 160);}
}
