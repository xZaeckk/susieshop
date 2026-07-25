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
