document.getElementById("transfer-btn").addEventListener("click", function () {
    // console.log("transfer money added");
    // get number 
    const transferNum = getValue("transfer-num");
    console.log(transferNum);
    if (transferNum.length != 11) {
        alert("Invalid Number");
        return;
    }
    // get the amount
    const transferAmount = getValue("transfer-amount");
    console.log(transferAmount);
    // get current balance
    const Balance = getBalance();
     // calculate new balance
    const newBalance = Balance - Number(transferAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    // get pin and verify
    const transferPin = getValue("transfer-pin");
    console.log(transferPin);
     if (transferPin === "48301" || transferPin === "62004") {
        alert("Send Money Succeessful");
         // document.getElementById("balance").innerText = newBalance;
         setBalance(newBalance)
    }
    else {
        alert("Invalid pin");
        return;
    }
})