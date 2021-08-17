// a function to get input value as float
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}

// a function to get and update total value
function updateValue(totalValueId, inputAmount){
    const totalValue = document.getElementById(totalValueId);
    const totalValueText = totalValue.innerText;
    const previousTotalValue = parseFloat(totalValueText);
    totalValue.innerText = previousTotalValue + inputAmount;
}

// get total balance
function getBalance(){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    return previousTotalBalance;
}

// a function to get and update balance
function updateBalance(inputAmount, isAdd){
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = getBalance();
    if(isAdd == true){
        totalBalance.innerText = previousTotalBalance + inputAmount;
    }
    else{
        totalBalance.innerText = previousTotalBalance - inputAmount;
    }
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    // get deposit input value
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        // get and update total deposit
        updateValue('total-deposit', depositAmount);
        // update balance
        updateBalance(depositAmount, true);
    }
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get deposit input value
    const withdrawAmount = getInputValue('withdraw-input');
    const totalBalance = getBalance();
    if(withdrawAmount > 0 && withdrawAmount <= totalBalance){
        // get and update total deposit
        updateValue('total-withdraw', withdrawAmount);
        // update balance
        updateBalance(withdrawAmount, false);
    }
});