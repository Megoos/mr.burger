'use strict';

function bigSalary (arg) {
    var result = [];
    for (var i = 0; i < arg.length; i++) {
        if(arg[i].salary > 1000) {
            result.push(arg[i].name);
        }
    }   
    
    return result;
}

var users = [
    {
            name: 'Алексей',
            salary: 500
    },
    {
            name: 'Виктор',
            salary: 1300
    },
    {
            name: 'Иван',
            salary: 1500
    }
];

var nameSalary = bigSalary(users);
console.log(nameSalary);