let div_coler = document.getElementById("game_clicker");
let div_number = document.getElementById("guess_number");
let div_dino = document.getElementById("game_dino");
function guess_coler(){
    div_coler.style.display = "block";
    div_number.style.display = "none";
    div_dino.style.display = "none";
}
function guess_number(){
    div_coler.style.display = "none";
    div_number.style.display = "block";
    div_dino.style.display = "none";
}
function guess_dino(){
    div_coler.style.display = "none";
    div_number.style.display = "none";
    div_dino.style.display = "block";
}
let div_rules_number = document.getElementById("rules_guess_number");
let div_field_number = document.getElementById("field_guess_number");
function start_game_number(){
    div_rules_number.style.display = "none";
    div_field_number.style.display = "block";
    random_number = Math.floor(Math.random()*99+1);
    console.log(random_number); /*Убрать после тестирования*/
}
count_prompt=0;
prompt_for_user = document.getElementById("prompt");
function accept_answer(){
    count_prompt++;
    answer_user = document.getElementById("answer_user").value;
   if (Number( answer_user) >random_number){
    prompt_for_user.innerText = "Введите число поменьше";
   }
   else if (Number( answer_user) <random_number){
    prompt_for_user.innerText = "Введите число побольше";    
   }
   else if (Number( answer_user) ==random_number){
    prompt_for_user.innerText = "Ты угадал! Потратил  "+count_prompt+"попыток"

   }
}



let text_count_money = document.getElementById("count_money");
let count_money_user = 0;
let count_click = 1;
function candy_clicker(){
    count_money_user = count_money_user + count_click;
    text_count_money.innerText = count_money_user + " $";
    if (count_money_user>=cost_fabric.innerText){
        fabric.style.backgroundColor='orange'
    }
}

let picture_left = ['picture/1.jpg','picture/2.jpg','picture/3.jpg', 'picture/4.jpg'];
let shop_left = document.getElementsByClassName("left");
for (let i=0; i<shop_left.length;i++){
shop_left[i].style.backgroundImage = "url("+picture_left[i]+")";
}
let picture_right = ['picture/77.png','picture/78.png','picture/79.png'];
let shop_right = document.getElementsByClassName("right");
for (let i=0; i<shop_right.length;i++){
shop_right[i].style.backgroundImage = "url("+picture_right[i]+")";
}
function buy_fabric(){
    if (count_money_user>=cost_fabric.innerText){
        count_money_user=count_money_user-cost_fabric.innerText
        cost_fabric.innerText = Number(cost_fabric.innerText)*2;
        cost_click++;
        count_fabric.innerText = count_click+1;
        text_count_money.innerText = count_money_user + "$"
        if (count_money_user<cost_fabric.innerText)
        fabric.style.backgroundColor="red"
    }
}
function buy(x){
    if (x==1 && count_money_user> document.getElementsByClassName("cost_element")[0].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[0].innerText);
        div_coler.style.backgroundImage = "url(picture/1.jpg)";
        document.getElementsByClassName("left")[x-1].style.filter = "grayscale(0%)";
        document.getElementsByClassName("cost_element")[0].innerText = "";
        count_fabric.innerText = count_click+1;
        text_count_money.innerText = count_money_user +" $"
    }

    if (x==2 && count_money_user> document.getElementsByClassName("cost_element")[1].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[1].innerText);
        div_coler.style.backgroundImage = "url(picture/2.jpg)";
        document.getElementsByClassName("left")[x-1].style.filter = "grayscale(0%)";
        document.getElementsByClassName("cost_element")[1].innerText = "";
        count_fabric.innerText = count_click+2;
        text_count_money.innerText = count_money_user +" $"
    }
    if (x==3 && count_money_user> document.getElementsByClassName("cost_element")[2].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[2].innerText);
        div_coler.style.backgroundImage = "url(picture/3.jpg)";
        document.getElementsByClassName("left")[x-1].style.filter = "grayscale(0%)";
        document.getElementsByClassName("cost_element")[2].innerText = "";
        count_fabric.innerText = count_click+3;
        text_count_money.innerText = count_money_user +" $"
    }
    if (x==4 && count_money_user> document.getElementsByClassName("cost_element")[3].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[3].innerText);
        fgdgjodfjjedoerigjeorfigjejd.src="picture/77.png"
        document.getElementsByClassName("right")[x-1].style.filter = "grayscale(0%)";
        document.getElementsByClassName("cost_element")[3].innerText = "";
        count_fabric.innerText = count_click+4;
        text_count_money.innerText = count_money_user +" $"
    }
    if (x==5 && count_money_user> document.getElementsByClassName("cost_element")[4].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[4].innerText);
        fgdgjodfjjedoerigjeorfigjejd.src="picture/78.png"
        document.getElementsByClassName("right")[x-1].style.filter = "grayscale(0%)";
        document.getElementsByClassName("cost_element")[4].innerText = "";
        count_fabric.innerText = count_click+5;
        text_count_money.innerText = count_money_user +" $"
}
if (x==6 && count_money_user> document.getElementsByClassName("cost_element")[5].innerText){
    count_money_user -= Number(document.getElementsByClassName("cost_element")[5].innerText);
    fgdgjodfjjedoerigjeorfigjejd.src="picture/79.png"
    document.getElementsByClassName("right")[x-1].style.filter = "grayscale(0%)";
    document.getElementsByClassName("cost_element")[5].innerText = "";
    count_fabric.innerText = count_click+6;
    text_count_money.innerText = count_money_user +" $"
}
}
