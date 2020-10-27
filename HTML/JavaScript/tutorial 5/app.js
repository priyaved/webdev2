// Pop up Boxes

// let askuser = prompt('Are you admin?', 'no');
//  let username = prompt('What is your username?', 'default');
//  let askAge = confirm('are you under age 17', 17);

//  console.log(askAge);
//console.log(askuser);
//  console.log(username);


//if statement
let user = 'admin';
if (user == 'user') {
    console.log('Welcome to  admin dashboard')
} else{
    console.log('welcome to user dashboard')

}



// let username = prompt('enter your username', 'default');

// if (username == 'admin1') {

//     alert ('Welcome admin1!')

// } else{
//  alert ('Welcome User!')
// }

var totalProduct = 0
if(totalProduct <=0){
    totalProduct++;
    console.log("Total Product => ", totalProduct);  
}


//counter
let count = 0;
function increment(){
    if(count>=20){
console.log(count)
    } else{
        count++
        console.log(count)
    }  
    }

function decrement(){
    if(count<=0){
        console.log(count)
    } else{
        count--
        console.log(count);
    }
}


function _user(){
    console.log('hello user')
}

function _admin(){
    console.log('hello admin')
}

if('_admin'== '_admin'){
    _admin()
} else{
    _user()
}





