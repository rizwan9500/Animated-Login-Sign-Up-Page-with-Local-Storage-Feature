const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

function saveUser() { 
    var username = document.getElementById("username1").value; 
    var email = document.getElementById("email1").value; 
    var password = document.getElementById("password1").value; 
    var user = { username: username, email: email, password: password }; 
    localStorage.setItem(email, JSON.stringify(user)); 
}

function login() { 
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value;
    // Check if email and password match stored values in local storage            
    if (localStorage.getItem(email) && JSON.parse(localStorage.getItem(email)).password === password) {
        // Redirect to success page                
        window.location.href = "Calculator/Calci.html";
        return false;
    } 
    else {
        alert("Incorrect email or password.");
        return false;
    }
}