"use strict";
/*
Author: Callie Pretty
Description: Week 12 in class demo of error handling
*/

var rs = require(`readline-sync`);

function main(){
    console.log(`This program adds two numbers and returns the sum`);
    var number1 = Number(rs.question(`Please input the first number: `));
    var number2 = Number(rs.question(`Please input the second number: `));
    console.log(number1 + number2);
}

if (require.main === module){
    main();
}