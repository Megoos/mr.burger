'use strict';

function htmlSearch (file) {
    return file.slice(-5)=='.html';
}

var path = '/users/download/index.html';
var result = htmlSearch(path);
console.log(result);