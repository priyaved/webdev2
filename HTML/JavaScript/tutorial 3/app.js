

function findBiggestNumber (a,b) {

    return a>b? `${a} is greater than ${b}` : `${b} is greater than ${a}`
}

let _result = findBiggestNumber (24,12)

console.log(_result);


///////// Simple Calculator //////////////////

var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var result = document.getElementById('result');

function calc(){
    console.log( Number(number1.value) + Number(number2.value));
    return result.innerText = `Result => ${Number(number1.value) + Number(number2.value)}`
}


