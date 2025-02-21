// Retrieve saved data from local storage or set to defaults
let debitBalance = parseFloat(localStorage.getItem('debitBalance')) || 0;
let creditBalance = parseFloat(localStorage.getItem('creditBalance')) || 0;
let debitHistory = JSON.parse(localStorage.getItem('debitHistory')) || [];
let creditHistory = JSON.parse(localStorage.getItem('creditHistory')) || [];

// Initialize balance elements
const debitBalanceElement = document.getElementById('debitBalance');
const creditBalanceElement = document.getElementById('creditBalance');
const overallBalanceElement = document.getElementById('overallBalance');

// Initialize history elements
const debitHistoryList = document.getElementById('debitHistoryList');
const creditHistoryList = document.getElementById('creditHistoryList');

// Function to update balance display
function updateBalances() {
    const overallBalance = creditBalance - debitBalance;
    debitBalanceElement.textContent = debitBalance.toFixed(2);
    creditBalanceElement.textContent = creditBalance.toFixed(2);
    overallBalanceElement.textContent = overallBalance.toFixed(2);
}

// Function to update transaction history
function updateHistory() {
    debitHistoryList.innerHTML = '';
    creditHistoryList.innerHTML = '';

    // Display Debit History
    debitHistory.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.source}: -${transaction.amount}`;
        debitHistoryList.appendChild(listItem);
    });

    // Display Credit History;:
    creditHistory.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.source}: +${transaction.amount}`;
        creditHistoryList.appendChild(listItem);
    });
}

// Function to handle spending (Debit)
document.getElementById('spendButton').addEventListener('click', function () {
    const source = document.getElementById('sourceInput').value;
    const amount = parseFloat(document.getElementById('amountInput').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (debitBalance + amount > creditBalance) {
        alert("You cannot spend more than your credit balance.");
        return; 
    }

    // Record the expense in debit
    debitBalance += amount;
    debitHistory.push({ source, amount });
    localStorage.setItem('debitBalance', debitBalance.toString());
    localStorage.setItem('debitHistory', JSON.stringify(debitHistory));

    // Clear inputs
    document.getElementById('sourceInput').value = '';
    document.getElementById('amountInput').value = '';

    // Update displayed balances and history
    updateBalances();
    updateHistory();
});

// Function to handle income (Credit)
document.getElementById('incomeButton').addEventListener('click', function () {
    const source = document.getElementById('sourceInput').value;
    const amount = parseFloat(document.getElementById('amountInput').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Record the income in credit
    creditBalance += amount;
    creditHistory.push({ source, amount });
    localStorage.setItem('creditBalance', creditBalance.toString());
    localStorage.setItem('creditHistory', JSON.stringify(creditHistory));

    // Clear inputs
    document.getElementById('sourceInput').value = '';
    document.getElementById('amountInput').value = '';

    // Update displayed balances and history
    updateBalances();
    updateHistory();
});

// Initialize the display of balances and history when the page loads
updateBalances();
updateHistory();
