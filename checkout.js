// Load selected product
window.onload = function () {

    const rank = localStorage.getItem("rank");
    const item = localStorage.getItem("item");
    const price = localStorage.getItem("price");

    if (rank) {
        document.getElementById("rank").value = rank;
        document.getElementById("product").value = rank + " Rank";
        document.getElementById("price").value = "$" + Number(price).toFixed(2);
        document.getElementById("totalPrice").innerHTML =
            "$" + Number(price).toFixed(2);
    }

    if (item) {
        document.getElementById("product").value = item;
        document.getElementById("price").value = price;
        document.getElementById("totalPrice").innerHTML = price;
    }

};

// Submit Purchase
document.getElementById("submitPurchase").onclick = function () {

    document.querySelector(".checkout-page").style.display = "none";

    document.getElementById("confirmPage").style.display = "flex";

    document.getElementById("confirmUsername").innerHTML =
        document.getElementById("minecraftName").value;

    document.getElementById("confirmEmail").innerHTML =
        document.getElementById("email").value || "N/A";

    document.getElementById("confirmPlatform").innerHTML =
        document.getElementById("platform").value;

    document.getElementById("confirmGamemode").innerHTML =
        document.getElementById("gamemode").value;

    document.getElementById("confirmRank").innerHTML =
        document.getElementById("rank").value;

    document.getElementById("confirmPayment").innerHTML =
        document.querySelector("input[name='payment']:checked").value;

    document.getElementById("confirmPrice").innerHTML =
        document.getElementById("price").value;

};

// Back Button
document.getElementById("backBtn").onclick = function () {

    document.getElementById("confirmPage").style.display = "none";

    document.querySelector(".checkout-page").style.display = "block";

};

// GO Pay
document.getElementById("goPayBtn").onclick = function () {

    document.getElementById("confirmPage").style.display = "none";

    document.getElementById("khqrModal").style.display = "flex";

    document.getElementById("modalPrice").innerHTML =
        document.getElementById("price").value;

    startTimer(600);

};

// Close QR
document.querySelector(".close").onclick = function () {

    document.getElementById("khqrModal").style.display = "none";

};

// Paid Button
document.getElementById("paidBtn").onclick = function () {

    alert("Thank you!\n\nYour payment has been submitted for verification.");

    localStorage.removeItem("rank");
    localStorage.removeItem("item");
    localStorage.removeItem("price");

    window.location.href = "index.html";

};

// Countdown Timer
function startTimer(seconds) {

    let time = seconds;

    const timer = setInterval(function () {

        let min = Math.floor(time / 60);

        let sec = time % 60;

        if (sec < 10) sec = "0" + sec;

        document.getElementById("countdown").innerHTML =
            min + ":" + sec;

        time--;

        if (time < 0) {

            clearInterval(timer);

            document.getElementById("countdown").innerHTML =
                "Expired";

        }

    }, 1000);

}
