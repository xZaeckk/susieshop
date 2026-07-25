window.onload = function () {

    const rank = localStorage.getItem("rank");
    const price = localStorage.getItem("price");

    if (rank) {

        const rankSelect = document.getElementById("rank");
        if (rankSelect) rankSelect.value = rank;

        const product = document.getElementById("product");
        if (product) product.value = rank + " Rank";

        const priceBox = document.getElementById("price");
        if (priceBox) priceBox.value = "$" + Number(price).toFixed(2);

    }

}
const submitBtn = document.getElementById("submitPurchase");

if (submitBtn) {

    submitBtn.addEventListener("click", function () {

        // Hide checkout form
        document.getElementById("checkoutForm").style.display = "none";

        // Show confirmation page
        document.getElementById("confirmPage").style.display = "block";

        // Copy information
        document.getElementById("confirmUsername").textContent =
            document.getElementById("minecraftName").value;

        document.getElementById("confirmEmail").textContent =
            document.getElementById("email").value;

        document.getElementById("confirmPlatform").textContent =
            document.getElementById("platform").value;

        document.getElementById("confirmGamemode").textContent =
            document.getElementById("gamemode").value;

        document.getElementById("confirmRank").textContent =
            document.getElementById("rank").value;

        document.getElementById("confirmPayment").textContent =
            document.querySelector("input[name='payment']:checked").value;

        document.getElementById("confirmPrice").textContent =
            document.getElementById("price").value;

    });

}
