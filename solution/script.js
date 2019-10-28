//Declare variables for input field values.
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

//Declare variable for form value.
const form = document.getElementById('form');

//Declare variable for each error div above each input field.
const error_fname = document.getElementById('error_fname');
const error_lname = document.getElementById('error_lname');
const error_email = document.getElementById('error_email');
const error_birthday = document.getElementById('error_birthday');

//Declare variables for each error div that deals with a specific requirement.
const error_pw = document.getElementById('error_pw');
const error_pw_length = document.getElementById('error_pw_length');
const error_pw_lc = document.getElementById('error_pw_lc');
const error_pw_uc = document.getElementById('error_pw_uc');
const error_pw_d = document.getElementById('error_pw_d');

//String RegEx match requirements.
var pw_Uppercase = /[A-Z]/;
var pw_Lowercase = /[a-z]/;
var pw_Digit = /[0-9]/;

function checkLowercase(str) {
  if (!pw_Lowercase.test(str)) {
    event.preventDefault();
    error_pw_lc.className = 'error_active';
    error_pw_lc.innerText = 'Password needs minimum 1 lowercase letter.';
  }

  if (pw_Lowercase.test(str) && error_pw_lc.classList.contains('error_active')) {
    error_pw_lc.className = '';
    error_pw_lc.innerText = '';
  }
}

function checkUppercase(str) {
  if (!pw_Uppercase.test(str)) {
    event.preventDefault();
    error_pw_uc.className = 'error_active';
    error_pw_uc.innerText = 'Password needs minimum 1 uppercase letter.';
  }

  if (pw_Uppercase.test(str) && error_pw_uc.classList.contains('error_active')) {
    error_pw_uc.className = '';
    error_pw_uc.innerText = '';
  }
}

function checkDigit(str) {
  if (!pw_Digit.test(str)) {
    event.preventDefault();
    error_pw_d.className = 'error_active';
    error_pw_d.innerText = 'Password needs minimum 1 digit.';
  }

  if (pw_Digit.test(str) && error_pw_d.classList.contains('error_active')) {
    error_pw_d.className = '';
    error_pw_d.innerText = '';
  }
}

form.addEventListener('submit', function (event) {
  //If error occurs.
  if (first_name.value === '') {
    event.preventDefault();
    error_fname.className = 'error_active';
    error_fname.innerText = 'First Name is required.';
  }

  //If error doesn't occur and error has error_active class.
  if (
    first_name.value != '' && 
    error_fname.classList.contains('error_active')
  ) {
    error_fname.classList.remove('error_active');
    error_fname.innerText = '';
  }

  //Last Name
  if (last_name.value === '' || last_name.value == null) {
    event.preventDefault();
    error_lname.className = 'error_active';
    error_lname.innerText = 'Last Name is required.';
  }

  if (last_name.value != '' && error_lname.classList.contains('error_active')) {
    error_lname.classList.remove('error_active');
    error_lname.innerText = '';
  }

  //Email
  if (email.value === '') {
    event.preventDefault();
    error_email.className = 'error_active';
    error_email.innerText = 'Email is required.';
  }

  if (!(email.value === '') &&
    error_email.classList.contains('error_active')
  ) {
    error_email.classList.remove('error_active');
    error_email.innerText = '';
  }

  //Birthday
  if (birthday.value === '') {
    event.preventDefault();
    error_birthday.className = 'error_active';
    error_birthday.innerText = 'Birthday is required.';
  }
  if (
    birthday.value != '' &&
    error_birthday.classList.contains('error_active')
  ) {
    error_birthday.classList.remove('error_active');
    error_birthday.innerText = '';
  }

  //Password
  if (password.value === '') {
    event.preventDefault();
    error_pw.className = 'error_active';
    error_pw.innerText = 'Password is required.';
  } else {
    if (error_pw.classList.contains('error_active')) {
      error_pw.classList.remove('error_active');
      error_pw.innerText = '';
    }

    if (password.value.length < 8) {
      event.preventDefault();
      error_pw_length.className = 'error_active';
      error_pw_length.innerText = 'Password needs minimum 8 characters.';
    }

    if (password.value.length > 8 && error_pw_length.classList.contains('error_active')) {
      error_pw_length.classList.remove('error_active');
      error_pw_length.innerText = '';
    }

    checkLowercase(password.value);
    checkUppercase(password.value);
    checkDigit(password.value);

  }
});



