const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+-=<>";

const allChar = upperCase+lowerCase+number+symbol;

const button = document.getElementById("btn");
button.addEventListener("click",creatPassword);

function creatPassword(){
    let password = "";
    while(password.length < length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

const copy = document.getElementById("copy");
copy.addEventListener("click",copyPassword);
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


