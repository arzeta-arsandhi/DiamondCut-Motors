function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.innerText = '');

    // Validate username
    const username = document.getElementById('username').value;
    if (username === '' || username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (email === '' || !email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate phone number
    const phone = document.getElementById('phone').value;
    if (phone === '' || isNaN(phone) || phone.length < 10) {
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number.';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password === '' || password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword === '' || confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    // Validate terms and conditions
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = 'You must agree to the terms and services.';
        isValid = false;
    }

    return isValid;
}
