console.log("Machine added");
// machine id niye input value return krbe
function getValue(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
// balance nibo
function getBalance() {
    const BalanceInput = document.getElementById("balance");
    const Balance = BalanceInput.innerText;
    console.log("current balance : ", Number(Balance));
    return Number(Balance);
}
// new balance set
function setBalance(value) {
    const BalanceInput = document.getElementById("balance");
    BalanceInput.innerText = value;
    
}
// sob id hide and j id pathabo seta dekhabe
function showOnly(id) {
    const addMoney = document.getElementById("Add-Money");
    const cashOut = document.getElementById("Cashout");
    const transferMoney = document.getElementById("Transfer-Money");
    const getBonus = document.getElementById("Get-Bonus");
    const payBill = document.getElementById("Pay-Bill");
    const transaction = document.getElementById("Transactions");

    // hide 
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transaction.classList.add("hidden");
    // clicked button show 
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
