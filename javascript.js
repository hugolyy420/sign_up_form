const pwd = document.getElementById("pwd");
const cpwd = document.getElementById("cpwd");
const mssg = document.getElementById("pwd-message");
let validBorderColor = "1px solid rgb(91, 204, 89)";
let invalidBorderColor = "1px solid red";

pwd.addEventListener('input', checkPasswordLength);
cpwd.addEventListener('input', confirmPassword);

function checkPasswordLength () {
    let pwd1 = pwd.value.length;
    let pwd2 = cpwd.value
    if (pwd1 < 8) {
        mssg.textContent = "Password must be at least 8 characters"
        pwd.style.border = invalidBorderColor;
    } else {
        mssg.textContent = "";
        pwd.style.border = validBorderColor;
    }
}

function confirmPassword () {
    let pwd1 = pwd.value;
    let pwd2 = cpwd.value;
    if (pwd1 !== pwd2) {
        mssg.textContent = "* Passwords do not match";
        pwd.style.border = invalidBorderColor;
        cpwd.style.border = invalidBorderColor;
    } else {
        mssg.textContent = "";
        pwd.style.border = validBorderColor;
        cpwd.style.border = validBorderColor;
    }
}