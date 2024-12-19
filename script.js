let balance = 0; 

function updateBalanceDisplay() {
    const balanceDisplay = document.getElementById('balance');
    balanceDisplay.textContent = 'Current Balance: $' + balance;
}

function depositAmount() {
    const depositInput = document.getElementById('deposit');
    const depositValue = parseFloat(depositInput.value);

    if (isNaN(depostValue) || depositValue <= 0) {
        alert('Please enter a valid amount to deposit.');
    } else {
        balance = balance + depositValue;
        updateBalanceDisplay();
        depositInput.value = '';
    }
}

function withdrawAmount() {
    const withdrawInput = document.getElementById('withdraw');
    const withdrawValue = parseFloat(withdrawInput.value);

    if (isNaN(withdrawValue) || withdrawValue <= 0) {
        alert('Please enter a valid amount to withdraw.');
    } else if (withdrawValue > balance) {
        alert('Insufficient balance!');
    } else {
        balance = balance - withdrawValue;
        updateBalanceDisplay();
        withdrawInput.value = '';
    }
}

// Set up event listeners
window.onload = function() {
    const depositButton = document.getElementById('deposit-button');
    const withdrawButton = document.getElementById('withdraw-button');

    depositButton.onclick = depositAmount;
    withdrawButton.onclick = withdrawAmount;

    updateBalanceDisplay();

}

function addNumbers (a,b){
return a+b;
}