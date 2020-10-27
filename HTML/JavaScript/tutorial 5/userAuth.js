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


// getUser('admin', '123456');

let result = getUser('admin', '123456');

if (result.isUserAdmin == false || result.isPasswordValid == false) {
    console.log('Userame or Password incorrect')
} else {
    console.log('Welcome admin. username and password is correct')
}

console.log(result);