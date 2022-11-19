
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /(?=.*\d).{8,}/;

function start() {
    document.getElementsByClassName("errorInfo")[0].style.display = "none";
    document.getElementsByClassName("errorInfo")[0].getElementsByTagName("ul")[0].innerHTML = "";
    document.getElementById("submit").addEventListener("click", function() {validate(document.getElementById("email"), document.getElementById("passwd"), document.getElementById("passwdAgain"))});
}

window.onload = start;

function validate(email, password, passwordSecond) {

    document.getElementsByClassName("errorInfo")[0].style.display = "none";
    document.getElementsByClassName("errorInfo")[0].getElementsByTagName("ul")[0].innerHTML = "";

    email.classList.remove("redBorder");
    password.classList.remove("redBorder");
    passwordSecond.classList.remove("redBorder");

    let everythingOK = true;

    if (!email.value.match(regexEmail)) {
        displayIncorrect("Given email isn\'t correct!", email);
        everythingOK = false;
    }

    if (!password.value.match(regexPassword)) {
        displayIncorrect("Password should be at least 8 characters long with at least 1 digit!", password);
        everythingOK = false;
    }

    if (!(passwordSecond.value == password.value)) {
        displayIncorrect("Password and second password aren't the same.", passwordSecond);
        everythingOK = false;
    }
}

function displayIncorrect(partToDisplay, partToModify) {
    partToModify.classList.add("redBorder");

    document.getElementsByClassName("errorInfo")[0].style.display = "block";
    document.getElementsByClassName("errorInfo")[0].getElementsByTagName("ul")[0].innerHTML += "<li>"+partToDisplay+"</li>";
}