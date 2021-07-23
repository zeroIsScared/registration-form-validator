const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEL = document.querySelector('#confirmPassword');
const form = document.querySelector('#registration');




//the function returns true if the input argument is empty:
const checkRequired = value => value === '' ? false : true;

// checkLength will return false if the length argument is not
// between the min and max argument
const checkLength = (length, min) => length < min ? false : true;

// checkEmail will use regular expression
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//To check if a password is strong, which match a specified pattern
//you’ll also use a regular expression:
const passwordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

//showError highlights the border of the input field and displays 
//an error message if the input field is invalid:

const showError = (input, message) => {
// get the form-field element
 const formFiled = input.parentElement;
 // add the error class
 formFiled.classList.remove('success');
 formFiled.classList.add('error');

 //show the error message

 const error = formFiled.querySelector('small');
 error.textContent = message;
};

//showsuccess 
const showSuccess = (input) => {
    //get the parent element of the input 
    const formField = input.parentElement;
    //remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    // remove the error message
    const error = formField.querySelector('small');
    error.textContent = "";
};

const checkUsername = () => {

 let valid = false;
 const min = 3;
 

 const username = usernameEl.value.trim();

 if(!checkRequired(username)) {
     showError(usernameEl, 'Please enter your username.');
 } else if(!checkLength(username.length, min)) {
     showError(usernameEl, `Username must be at least ${min} characters.`);
 } else
  {showSuccess(usernameEl);
    valide = true; 
  }
return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();

  if (!checkRequired(email)) {
      showError(emailEl, 'Please enter your email address.');
  } else if(!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.');
  } else {
      showSuccess(emailEl);
      valid = true;
  }
  return valid;
};

const checkPassword = () => {

    let valid = false;
    const password = passwordEl.value.trim();

    if(!checkRequired(password)) {
        showError(passwordEl, 'Please enter a password.');
    }else if (!passwordSecure(password)) {
        showError(passwordEl, 'Your password is not valid.');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};

const checkPasswordMatch = () => {
   let valid = false;

   let password = passwordEl.value.trim();
   let confirmPassword = confirmPasswordEL.value.trim();
   
   if(!checkRequired(confirmPassword)) {
      showError(confirmPasswordEL, 'Password 2 is required.');
   } else if( confirmPassword !== password) {
       showError(confirmPasswordEL, `Password 2 doesn't match the first password`);
   } else {
       showSuccess(confirmPasswordEL);
       valid = true;
   }
   return valid;
};

//prevent the form from submitting once the submit button is clicked
form.addEventListener('submit', function (e){
    e.preventDefault();

    //valid forms


    let isUsernameValid = checkUsername(),
        isEnteredEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkPasswordMatch();

    let isFormValid = isUsernameValid && 
        isEnteredEmailValid && 
        isPasswordValid &&
        isConfirmPasswordValid;
   // submit tot the server if the form is valid
    if(isFormValid) {

    }

});