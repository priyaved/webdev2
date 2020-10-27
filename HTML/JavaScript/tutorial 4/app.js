// keeper 


function keeper1(param){

    return Number(param);
}

function keeper2(param) {

    return param++;
}

function keeper3(param) {

    return Number(param)+10;
}

function keeper4(param) {

    return `This is the last process ${param++}`;
}

// keeper1(1) > keeper2(keeper1(1)) > keeper3(keeper2(keeper1(1))) > keeper4(keeper3(keeper2(keeper1(1))));

//data flow


let result = keeper4(keeper3(keeper2(keeper1(1)))); 
console.log(result);



///////////////////////////////////////////////////////////////



let student = {}

function str1(param){
    
    return param; 
}

function str2(param) {
    param.firstname = "Jack";
    return param; 
}

function str3(param) {
    param.lastname = "Sparrow";
    return param;
}

function str4(param) {

    console.log(param);
}



let _result = str4(str3(str2(str1(student)))); 
console.log(_result);

/* longer version of the above
var result1 = str1(student);
var result2 = str2(result1);
var result3 = str3(result2);
var printService = str4(result3);

console.log(printService)
*/


///////////////////////////////////////////////////

/*3 function 
1st - initialize an object
2nd - add property (fullname, age, email)
3rd - printService print info in this function
function 3 collpase finction 2 collapse fuction 1
function3>fuction2>function>1>result
*/

let me = {}

function self1(_attr) {

    return _attr;
}

function self2(_attr) {
    _attr.fullname = "Priya Ved"
    return _attr;
}

function self3(_attr){
    _attr.age = '33';
    return _attr;
}

function self4(_attr) {
    _attr.email = "abc@yahoo.com";
    return _attr;
}

function self5(_attr) {

    console.log(_attr);
    return _attr

}

let result2 = self5(self4(self3(self2(self1(me)))));
console.log(result2);

var resultObj = document.getElementById('result3')
resultObj.innerText = result2.fullname

var resultObj1 = document.getElementById('email')
resultObj1.innerText = result2.email

var resultObj2 = document.getElementById('button')
resultObj2.innerText = result2.age


/* = shorter version = can specify in the same function also

let me = {}

function self1(_attr) {

    return _attr;
}

function self2(_attr) {
    _attr.fullname = "Priya Ved"
    _attr.age = '33';
 _attr.email = "abc@yahoo.com";
    return _attr;
}


function self3(_attr) {

    console.log(_attr);

}

let result3 = self3(self2(self1(me)))
console.log(result3); 

*/