"use strict";

var str = "ПривЕт! Как дела?";
var array = ['а','у','о','ы','и','э','я','ю','ё','е','А','У','О','Ы','И','Э','Я','Ю','Ё','Е'];
var result = [];

console.log(str);
str = str.split('');

for (var i = 0; i<str.length; i++) {    
    if (array.indexOf(str[i]) >= 0){
        result.push(str[i]);
    }    
}
result = result.join('');

console.log(result);