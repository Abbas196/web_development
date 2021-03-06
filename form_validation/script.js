const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// function to display error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}


function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// creating a function to check whether email is valid or not.

function checkEmail(input){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
showSuccess(input);
    }

    else if(input.value === ""){
// do nothing
    }
    else{

        showError(input,"Email is not valid");

    }

}

// adding function to check validations -

function checkRequired(inputArr){
    inputArr.forEach(function(input){
if(input.value.trim() === ""){
    showError(input,`${input.id} is required`);
}
else{
    showSuccess(input);
}
    });

}

// function for checking the length.
function checkLength(input,min,max){
    if(input.value.length <min && input.value.length != 0){
        showError(input,`${input.id} should not be less than ${min} characters.`);
    }
    else if(input.value.length >max){
        showError(input,`${input.id} must be less than ${max} characters.`);
    }

}

function checkPasswordMatch(input1,input2){
if(input1.value === input2.value && input1.value !="" && input2.value != ""){
    showSuccess(input2);
}
else if(input1.value !="" && input2.value != ""){
    showError(input2,'Password entered is different.');
}
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,4,10);
    checkLength(password,5,9);
    checkEmail(email);
    checkPasswordMatch(password,password2);




    // prevent default does not let the form to get submitted. as we are not using any backend framework to save the form details.
// if(username.value === ""){
// showError(username,'Username is Required');
// }
// else{
//     showSuccess(username);
// }

// if(email.value === ""){
//     showError(email,'Email is Required');
//     }
//     else if(!isValidEmail(email.value)){
//         showError(email,'Email is not valid');
     
//     }
//     else{
//         showSuccess(email);
//     }

//     if(password.value === ""){
//         showError(password,'password is Required');
//         }
//         else{
//             showSuccess(password);
//         }

//         if(password2.value === ""){
//             showError(password2,'password is Required');
//             }
//             else{
//                 showSuccess(password2);
//             }


// 
}
// now we will do code refactor to make it feasible to use and handle. If and else statements get messy and are not sustainable if we add more validations.
);