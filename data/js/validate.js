
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /(?=.*\d).{8,}/;
const notTheThing = null;

function start() {
    document.getElementsByClassName("errorInfo")[0].style.display = "none";
    document.getElementsByClassName("errorInfo")[0].getElementsByTagName("ul")[0].innerHTML = "";
    document.getElementById("submit").addEventListener("click", function() {validate(document.getElementById("email"), document.getElementById("passwd"), document.getElementById("passwdAgain"), false)});

    document.getElementById("email").addEventListener("blur", function() {validate(document.getElementById("email"), notTheThing, notTheThing, true)});
    document.getElementById("passwd").addEventListener("blur", function() {validate(notTheThing, document.getElementById("passwd"), notTheThing, true)});
    document.getElementById("passwdAgain").addEventListener("blur", function() {validate(notTheThing, document.getElementById("passwd"), document.getElementById("passwdAgain"), true)});
}

window.onload = start;

function validate(email, password, passwordSecond, blur) {

    if (!blur) {
        document.getElementsByClassName("errorInfo")[0].style.display = "none";
        document.getElementsByClassName("errorInfo")[0].getElementsByTagName("ul")[0].innerHTML = "";
    }

    if (email) email.classList.remove("redBorder");
    if (password) password.classList.remove("redBorder");
    if (passwordSecond) passwordSecond.classList.remove("redBorder");

    let everythingOK = true;

    if (email)
    if (!email.value.match(regexEmail)) {
        displayIncorrect("Given email isn\'t correct!", email, blur);
        everythingOK = false;
    }

    if ((password && !passwordSecond) || (email && password && passwordSecond))
    if (!password.value.match(regexPassword)) {
        displayIncorrect("Password should be at least 8 characters long with at least 1 digit!", password, blur);
        everythingOK = false;
    }

    if (password && passwordSecond)
    if (!(passwordSecond.value == password.value)) {
        displayIncorrect("Password and second password aren't the same.", passwordSecond, blur);
        everythingOK = false;
    }

    if (everythingOK && !blur) {
        document.getElementsByClassName("box")[0].innerHTML = "<div style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\">Form has been successfully sent!</div>";
    }
}

function displayIncorrect(partToDisplay, partToModify, blur) {
    partToModify.classList.add("redBorder");

    if (!blur) {
        document.getElementsByClassName("errorInfo")[0].style.display = "block";
        document.getElementsByClassName("errorInfo")[0].getElementsByTagName("ul")[0].innerHTML += "<li>"+partToDisplay+"</li>";
    }

    if (partToModify.placeholder.match(/^[^*].*/)) partToModify.placeholder = "*" + partToModify.placeholder;
}