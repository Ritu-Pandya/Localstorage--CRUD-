function Validate(e) {
    let keyCode = e.keyCode || e.which;

    let lblError = document.getElementById("lblError");
    lblError.innerHTML = "";

    //Regex for Valid Characters i.e. Alphabets.
    let regex = /^[A-Za-z]+$/;

    //Validate TextBox value against the Regex.
    let isValid = regex.test(String.fromCharCode(keyCode));
    if (!isValid) {
        lblError.innerHTML = "Only Alphabets are allowed!!";
    }

    return isValid;
}

function ValidateEmail() {
    let email = document.getElementById("email").value;
    let lblError = document.getElementById("lblError");
    lblError.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address!!";
    }
}