document.getElementById("memberForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    resetErrors();

    let valid = true;

    if (firstname.length < 3) {
        document.getElementById("firstnameError").textContent = "Nama depan harus lebih dari 2 karakter.";
        document.getElementById("firstnameError").style.display = "block";
        valid = false;
    }

    if (lastname.length < 3) {
        document.getElementById("lastnameError").textContent = "Nama belakang harus lebih dari 2 karakter.";
        document.getElementById("lastnameError").style.display = "block";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Silakan pilih gender.";
        document.getElementById("genderError").style.display = "block";
        valid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Email tidak valid.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    if (!/^\d{10,}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Nomor telepon harus terdiri dari minimal 10 digit angka.";
        document.getElementById("phoneError").style.display = "block";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Kata sandi harus minimal 8 karakter.";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("Formulir berhasil dikirim!");
    }
});

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function resetErrors() {
    let errors = document.querySelectorAll(".error");
    errors.forEach(function(error) {
        error.style.display = "none";
    });
}
