// step 1: add click event handler with the submit button.
document.getElementById('login-btn').addEventListener('click',function(){
    // step 2: get the email address inside the email input field.
    // always remember use .value to get text an input field.
    const inputFieldEmail=document.getElementById('input-field-email');
    const email=inputFieldEmail.value;
    // for password

    const inputFieldPassword=document.getElementById('input-field-password');
    const password=inputFieldPassword.value;
    
    if(email==='mdeasinsarkar01@gmail.com' && password==='yeasin'){
        console.log('Valid user');
    }
    else{
        console.log('Invalid user');
    }

});