const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === '') {
    setForError(username, 'Username cannot be empty.');
  } else {
    setForSuccess(username);
  }

  if (emailValue === '') {
    setForError(email, 'Email cannot be empty.');
  } else if (!isEmail(emailValue)) {
    setForError(email, 'Email is not valid.');
  } else {
    setForSuccess(email);
  }

  if (passwordValue === '') {
    setForError(password, 'Password cannot be empty.');
  } else {
    setForSuccess(password);
  }

  if (confirmPasswordValue === '') {
    setForError(confirmPassword, 'Confirm password cannot be empty.');
  } else if (!doesPasswordMatch(passwordValue, confirmPasswordValue)) {
    setForError(confirmPassword, 'Password does not match.');
  } else {
    setForSuccess(confirmPassword);
  }
}

function setForError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;

  formControl.className = 'form-control error';
}

function setForSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function doesPasswordMatch(password, confirmPassword) {
  return password !== confirmPassword ? false : true;
}
