'use strict';

var number = document.querySelector('.controls').children[0];//input чисел
var color = number.nextElementSibling; //обект выбора цвета
var block = document.querySelector('.block'); //блок для вложения новых блоков
var count = 0; //счетчик блоков
var flag = true; //флаг для четных и нечетных

//добавление блоков при изменении number
number.oninput = function () {
    var divCount= document.createElement('div');
    count++;
    divCount.innerHTML = count;    
    block.appendChild(divCount); 
    console.log(count);   
};

//закрашивание при выборе цвета
color.oninput = function () {
    var blockColor = block.children;
   // var thisColor = this.value;

    for(var i = 0; i < blockColor.length; i++){
        if(flag) {
            if ((i)%2 == 0) {
                blockColor[i].style.background = this.value;;                 
            }  
        } else {
            if ((i)%2 != 0) {
                blockColor[i].style.background = this.value;;                 
            }
        }             
    }

    flag = !flag;    
};