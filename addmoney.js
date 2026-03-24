document.getElementById("add-money-btn").addEventListener("click", function () {
    // console.log("add money btn clicked")
    // get bank name
    const addMoneyBank = getValue("add-money-bank");
    // console.log(addMoneyBank);
    if (addMoneyBank === "Select Bank") {
        alert("Please Select a Bank");
        return;
    }
    // get bank account number
    const addMoneyNumber = getValue("add-money-number");
    if (addMoneyNumber.length != 11) {
        alert("Invalid Bank Account");
        return;
    }
    // get ammount
    const amount = getValue("add-money-amount");
    console.log(amount);
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);
    // get pin 
    const pin = getValue("add-money-pin");
    // console.log(pin);
    if (pin === "48301" || pin === "62004") {
        alert(`Add Money Successful from ${addMoneyBank}
             at ${new Date()}`);
         // document.getElementById("balance").innerText = newBalance;
         setBalance(newBalance)
    }
    else {
        alert("Invalid pin");
        return;
    }

})