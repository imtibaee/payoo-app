document.getElementById("coupon-btn").addEventListener("click", function () {
    // console.log("coupon added");
    // get coupon code
    const couponCode = getValue("coupon");
    console.log(couponCode);
    if (couponCode === "orpanaf24") {
        alert("Bonus Added");
        // get current balance
        const Balance = getBalance();
        // calculate new balance
        const newBalance = Balance + 500;
        console.log(newBalance);

         setBalance(newBalance);
    }
    else {
        alert("Invalid Coupon");
    }
})