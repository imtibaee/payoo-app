// console.log("logged in");
document.getElementById("login-btn").addEventListener("click", function () {
    // console.log("login Button clicked")

    // number k dhoro
    const numberInput = document.getElementById("input-num");
    const contactNum = numberInput.value;
    console.log(contactNum);
    // pin k dhoro
    const pinInput = document.getElementById("input-pin");
    const pinNum = pinInput.value;
    console.log(pinNum);
    // match koro
    if (contactNum == "01537038526" && pinNum == "62004") {
        // alert("Login Successful");
        // window.location.replace("/home.html")
        window.location.assign("/home.html")
    }
    else if(contactNum == "01879723722" && pinNum == "48301") {
        // alert("Login Successful");
        // window.location.replace("/home.html")
        window.location.assign("home.html")
    }
    else {
        alert("Login Failed");
        return;
    }
})