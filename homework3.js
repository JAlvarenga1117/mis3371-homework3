function updateSlider() {
    document.getElementById("sliderValue").innerText =
        document.getElementById("healthScale").value;
}

function checkPasswords() {
    const pw1 = document.getElementById("password").value;
    const pw2 = document.getElementById("password2").value;
    const userId = document.getElementById("userId").value.toLowerCase();

    document.getElementById("userId").value = userId;

    if (pw1 !== pw2) {
        alert("Passwords do not match.");
        return false;
    }

    if (pw1.toLowerCase().includes(userId)) {
        alert("Password cannot contain your user ID.");
        return false;
    }

    return true;
}
