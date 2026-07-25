function buyRank(rank, price) {

    localStorage.setItem("rank", rank);
    localStorage.setItem("price", price);

    window.location.href = "checkout.html";

}

function buyItem(item, price) {

    localStorage.setItem("item", item);
    localStorage.setItem("price", price);

    window.location.href = "checkout.html";

}

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";
            card.style.transition = ".25s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

});
