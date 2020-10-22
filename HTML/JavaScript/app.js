// document.write('Hello World!')
// var number = 10;
// if (number < 20) {
//     alert("working");
// }

console.log(10 + 20);

var game = 20;
var nonGame = 30;

var result = game + nonGame
console.log(result)

var a, b, sum;
a = 20;
b = 10

// var intecbrusseldiv=document.getElementById('intecbrussel');



// var intecbrussel = 'this is string'
// console.log(intecbrussel)

// intecbrussel.innerHTML = "This is not cool"



///////////////////////////////////////////////////////////////



// Function

function myFunction(x, y, z) {
    console.log(x + y + z)
}

myFunction(2, 3, 6)





/////////////////////////////////////////////////////////////


// Javascript Operators

/*
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
 */


var number1 = 5;
var number2 = "5";

var result = number1 === number2;
console.log(result);


var jack = 26;
// if (jack == 20) {
//     console.log("Yes, He is a young boy!")
// }
// else{
//     console.log("No, he is not!")
// }


result = jack != 25;

console.log(result); //this resuly will be false as jack is equal to 25 and resuly is sayig its is nt equal

var string1 = "intec",
    string2 = "brussel";

result = string1 !== string2;

console.log(result);


result = jack > 25; //true
result = jack > 30; //false coz jack is 26

result = jack < 30; //false coz jack is 26
result = jack < 16; //true


result = jack >= 27; //false coz jack is 26
result = jack >= 26; //true

result = jack <= 17; //false coz jack is 26
result = jack <= 30; //true 

console.log(result);


let myNumber = 10;
myNumber++; //increment operator = u can place it at either side of the var ++myNumber
console.log(myNumber); //11
myNumber--;
console.log(myNumber); //10
myNumber++;
++myNumber;
console.log(myNumber); //12


//Ternary Operator

//variable name = (condition) ? value1:value2 

result = (jack<18) ? "He is a kid":"He is a young boy"
console.log(result);


var productStock = 20;
var alert = "Out of stock", success="Still available";

var cart = (productStock < 1) ? alert:success;

console.log(cart);

//student score <20m student failes if not pased

var lowScore = 50;
var studentScore = 60;
var passed = "Student passed", failed = "Student Failed";

var score = (studentScore<=lowScore) ? failed:passed;
console.log(score); //end of task




//////////////////////////////////////////////////////////////
//Logical Operators
/* 
&& logical and
|| logical or
! logical not

*/

var myNewNumber = 10;
var result = (myNewNumber<11) &&  (myNewNumber>9) ? true:false; //true
var result = (myNewNumber<11) &&  (myNewNumber>12) ? true:false; //false
console.log(result); //both conditions should be met



result = (myNewNumber<11) ||  (myNewNumber>12) ? true:false; //true = any one condition has to be met
// result = (myNewNumber>11) ||  (myNewNumber>12) ? true:false; none is met




console.log(result); //both conditions should be met

console.log(!true);

result = (myNewNumber<11) || !(myNewNumber>12) ? true:false; //logical not operator !
console.log(result);



/////////////////////////////////////
//Data Type : Object = curly brackets

var student = {
    name:"Priya",
    jobtitle:"Web Developer",
    printIT: function(){
        console.log('Hello function!')
    },
    isStudent:true,
}
console.log(student.name,student.jobtitle);
student.printIT();
console.log(student.isStudent)

//carmodels
let auto = {
    model: "Audi",
    year: "2005",
    printIt: function(){
        console.log('Buy It!')
    },

}

console.log(auto.model, auto.year);
auto.printIt();



let self = {
    name:'priya',
    age:'33',
    profession: 'HR',
    license:'No',
    checkIt: function(){
        console.log('Looking for a job!')
    },
}

console.log(self.name,self.age,self.profession);
self.checkIt();