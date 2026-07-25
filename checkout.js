window.onload = function () {

    const rank = localStorage.getItem("rank");
    const price = localStorage.getItem("price");

    if (rank) {

        document.getElementById("rank").value = rank;
        document.getElementById("product").value = rank + " Rank";
        document.getElementById("price").value = "$" + Number(price).toFixed(2);

    }

};

document.getElementById("submitPurchase").onclick = function () {

    alert("Step 1 Complete!\n\nNext we'll build the Confirm Purchase page.");

};
