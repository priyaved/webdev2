
//selectors

let usernameValue = document.getElementById ('username');
let passwordValue = document.getElementById ('password');


//logic
function getUser(username, password) {
    let user_bool = (username == 'admin') ? true : false;
    let pass_bool = (password == '123456') ? true : false;

    console.log('username result>', user_bool)
    console.log('password result>', pass_bool)

    let user = {
        isUserAdmin: user_bool,
        isPasswordValid: pass_bool
    }

    return user;

}


//linking to html = call back function
function loginHandler(){

    console.log(usernameValue.value)
    console.log(passwordValue.value)
    let result = getUser(usernameValue.value, passwordValue.value);

if (result.isUserAdmin == false || result.isPasswordValid == false) {
    console.log('Userame or Password incorrect')
    alert ('Userame or Password incorrect')
} else {
    console.log('Welcome admin. username and password is correct')  
    alert ('Welcome admin. username and password is correct')             // getUser('admin', '123456');
}
}



//console.log(result);





    

    