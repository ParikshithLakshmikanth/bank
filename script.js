let balance = 0;
const historyList = document.getElementById('history');
const balanceDisplay = document.getElementById('balance');

function updateBalance() {
    balanceDisplay.textContent = balance.toFixed(2);
}

function addTransaction(type, amount) {
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `${type === 'income' ? '+' : '-'}₹${amount.toFixed(2)}`;
    transactionItem.className = type;
    historyList.appendChild(transactionItem);
}

function addIncome() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance += amount;
    addTransaction('income', amount);
    updateBalance();
    document.getElementById('amount').value = '';
}

function addExpense() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance -= amount;
    addTransaction('expense', amount);
    updateBalance();
    document.getElementById('amount').value = '';
}

updateBalance();
