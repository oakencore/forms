window.onload = function() {
    var form = document.getElementById("myform");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        checkPassword();
    });
}

function checkPassword() {
    var password = document.getElementById("pwd").value;
    var confirmpassword = document.getElementById("confirmpwd").value;
    if (password !== confirmpassword) {
        //I can add the error class to the input element?
        document.getElementById("pwd").classList.add("error");
        document.getElementById("confirmpwd").classList.add("error");
        //Display error message
        document.getElementById("password-error").style.display = "block";
        document.getElementById("password-error").innerHTML = "Passwords do not match";
    } else {
        //Clean up and remove the error class from the input element
        document.getElementById("pwd").classList.remove("error");
        document.getElementById("confirmpwd").classList.remove("error");
        //Hide the error message
        document.getElementById("password-error").style.display = "none";
    }
}