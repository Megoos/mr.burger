'use strict';

function evenNumber (arg) {
    var result = [];
    for (var i = 0; i < arg.length; i++) {
        if(arg[i]%2 == 0) {
            result.push(arg[i]);
        }
    }
    return result;
}

var number = [3, 13, 74, 14, 66, 15, 22, 4];

console.log(evenNumber(number));