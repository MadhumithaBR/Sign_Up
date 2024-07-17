const loginForm = document.querySelector('#loginForm');
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const contact = document.querySelector('#contact');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});



function validate() {
    const valName = name.value.trim();
    const valEmail = email.value.trim();
    const valPassword = password.value.trim();
    const valConfirm = confirmPassword.value.trim();
    const valContact = contact.value.trim();
    
    let isValid = true;

    if (valName === '') {
        setError(name, 'Username is required');
        isValid = false;
    } else {
        setSuccess(name);
    }

    if (valEmail === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(valEmail)) {
        setError(email, 'Invalid email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (valPassword === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (valPassword.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (valConfirm === '') {
        setError(confirmPassword, 'Confirmation password is required');
        isValid = false;
    } else if (valConfirm !== valPassword) {
        setError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    if (valContact === '') {
        setError(contact, 'Contact is required');
        isValid = false;
    } else {
        setSuccess(contact);
    }

    if (isValid) {
        form.submit();
    }
    if (isValid) {
    
        window.location.href = 'login.html';
    }
}


function setError(element, message) {
    const contentGroup = element.parentElement;
    const errorElement = contentGroup.querySelector('.error');
    errorElement.innerText = message;
    contentGroup.classList.add('error');
    contentGroup.classList.remove('success');
}

function setSuccess(element) {
    const contentGroup = element.parentElement;
    const errorElement = contentGroup.querySelector('.error');
    errorElement.innerText = '';
    contentGroup.classList.add('success');
    contentGroup.classList.remove('error');
}

function validateEmail(email) {
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    return atpos > 0 && dotpos > atpos + 1 && dotpos < email.length - 1;
}
