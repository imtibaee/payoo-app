// get agent number
document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNum = getValue("cashout-num");
    console.log(cashoutNum);
    if (cashoutNum.length != 11) {
        alert("Invalid Agent Number");
        return;
    }
    // get the amount
    const cashoutAmount = getValue("cashout-amount");
    console.log(cashoutAmount);

    // get current balance
    const Balance = getBalance();

    // calculate new balance
    const newBalance = Balance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    // get pin and verify
    const cashoutPin = getValue("cashout-pin");
    console.log(cashoutPin);
     if (cashoutPin === "48301" || cashoutPin === "62004") {
        alert("Cashout Succeessful");
         // document.getElementById("balance").innerText = newBalance;
         setBalance(newBalance)
    }
    else {
        alert("Invalid pin");
        return;
    }
})
document.getElementById("logout-btn").addEventListener("click", function () {
    window.location.replace("index.html")
})



// document.getElementById("cashout-btn").addEventListener("click", function () {
//     // get agent number
//     const cashoutNum = document.getElementById("cashout-num");
//     const cashoutNumber = cashoutNum.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     }
//     // get the amount
//     const cashoutAmmount= document.getElementById("cashout-amount");
//     const cashoutAmmountTk = cashoutAmmount.value;
//     console.log(cashoutAmmountTk);
//     // get current balance
//     const BalanceInput = document.getElementById("balance");
//     const Balance = BalanceInput.innerText;
//     console.log(Balance);
//     // calculate new balance
//     const newBalance = Number(Balance) - Number(cashoutAmmountTk);
//     if (newBalance < 0) {
//         alert("Invalid Ammount");
//         return;
//     }
//     console.log(newBalance);
//     // get pin and verify
//     const cashoutPin = document.getElementById("cashout-pin");
//     const Pin = cashoutPin.value;
//     if (Pin === "48301" || Pin === "62004") {
//         alert("Payment Succeessfull");
//         BalanceInput.innerText = newBalance;
//     }
//     else {
//         alert("Invalid pin");
//         return;
//     }
// })


