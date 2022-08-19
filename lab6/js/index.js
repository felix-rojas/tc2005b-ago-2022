const pass_verify = document.getElementById("password_verify");
const pass = document.getElementById("password");
const user = document.getElementById("username");
const login_button = document.getElementById("login");
const nav_login_button = document.getElementById("login_nav");

let usuario = "";
let contra = "";
let verify = "";

console.log(pass_verify.value)
console.log(pass.value)
console.log(user.value)



user.onkeyup = () => {
    usuario = user.value;
    console.log(usuario);
}

pass.onkeyup = () => {
    contra = pass.value;
    console.log(contra);
}

pass_verify.onkeyup = () => {
    verify = pass_verify.value;
    console.log(verify);
}


login_button.onclick = () => {
    if (verify !== contra) {
        window.alert("Password missmatch")
    } else {
        window.alert("Succesful account creation")
        login_button.innerText = "logout"
        nav_login_button.innerText = "logout"
    }
}

nav_login_button.onclick = () => {
    if (verify !== contra) {
        window.alert("Password missmatch")
    } else {
        window.alert("Succesful account creation")
        login_button.innerText = "logout"
        nav_login_button.innerText = "logout"
    }
}