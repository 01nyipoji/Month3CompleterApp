const loginButton = document.getElementById("login-btn");
const signupButton = document.getElementById("signup-btn");

loginButton.addEventListener("click", ()=>{
    // loginButton.classList.add("active");
    // signupButton.classList.remove("active")
    signupButton.style.color ="red";
    loginButton.style.color ="blue";
});


signupButton.addEventListener("click", ()=>{
    signupButton.classList.add("active");
    loginButton.classList.remove("active")
});
