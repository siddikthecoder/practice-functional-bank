function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

document.getElementById('login-button').addEventListener('click',function(){
    const email = getInputValue('email-input');
    const password = getInputValue('password-input');
    if (email == 'functional@bank.com' && password == 'secret'){
        window.location.href = 'banking.html';
    }
});