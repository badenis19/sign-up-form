let signUpButton = document.getElementById("btn1");
let logInButton = document.getElementById("btn2");

let signUpView = document.getElementById("sign-up");
let logInView = document.getElementById("login");



if (signUpButton){
    signUpButton.addEventListener(("click"),() => {

        signUpButton.classList.add("btn-active")
        logInButton.classList.remove("btn-active");

        signUpView.classList.remove("hidden");
        logInView.classList.add("hidden");
    })
}

if (logInButton){
    logInButton.addEventListener(("click"),() => {
        logInButton.classList.add("btn-active")
        signUpButton.classList.remove("btn-active")

        signUpView.classList.add("hidden");
        logInView.classList.remove("hidden");
    })
}



