document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        if (email === "" || password === "") {
            message.style.color = "orange";
            message.textContent = "Please enter Email and Password!";
            return;
        }
        if (email === "admin@example.com" && password === "123456") {
            message.style.color = "green";
            message.textContent = "Login Successful!";
        } else {
            message.style.color = "red";
            message.textContent = "Invalid Email or Password!";
        }
    });

});
