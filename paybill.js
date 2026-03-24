document.getElementById("pay-bill-btn").addEventListener("click", function () {
    // console.log("pay bill added");
    // get bank 
    const payBillBank = getValue("pay-bill-bank");
    // console.log(addMoneyBank);
    if (payBillBank === "Select Bank") {
        alert("Please Select a Bank");
        return;
    }
    // get nmbr 
    const payBillNum = getValue("pay-bill-number");
    console.log(payBillNum);
    if (payBillNum.length != 11) {
        alert("Invalid Biller account Number");
        return;
    }
    // get the amount
    const payBillAmount = getValue("pay-bill-amount");
    console.log(payBillAmount);
   
    // get current balance
    const Balance = getBalance();

    // calculate new balance
    const newBalance = Balance - Number(payBillAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    // get pin and verify
    const payBillPin = getValue("pay-bill-pin");
    console.log(payBillPin);
     if (payBillPin === "48301" || payBillPin === "62004") {
        alert("Pay Bill Succeessful");
         // document.getElementById("balance").innerText = newBalance;
         setBalance(newBalance)
    }
    else {
        alert("Invalid pin");
        return;
    }
})