'use strict';

var str = 'ПривЕт! Как дела?';
var array = ['а','у','о','ы','и','э','я','ю','ё','е','А','У','О','Ы','И','Э','Я','Ю','Ё','Е'];
var result = '';

console.log(str);
str = str.split('');

for (var i = 0; i<str.length; i++) {  
    var ch = str[i];  
    if (array.indexOf(ch) >= 0){
        result+=ch;
    }    
}

console.log(result);