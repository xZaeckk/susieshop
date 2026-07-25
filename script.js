// Open checkout for ranks
function buyRank(rank, price) {
    document.getElementById("popup").style.display = "flex";

    document.getElementById("rankSelect").value = rank;
    document.getElementById("product").value = rank + " Rank";
    document.getElementById("price").value = price;
}

// Open checkout for items
function buyItem(item, price) {
    document.getElementById("popup").style.display = "flex";

    document.getElementById("product").value = item;
    document.getElementById("price").value = price;

    // Keep current selected rank
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {

    let popup = document.getElementById("popup");

    if (event.target == popup) {
        popup.style.display = "none";
    }

};

// Payment buttons
const paymentButtons = document.querySelectorAll(".payment button");

paymentButtons.forEach(button => {

    button.addEventListener("click", function() {

        paymentButtons.forEach(btn => {
            btn.style.background = "white";
            btn.style.color = "#ff4d88";
        });

        this.style.background = "#ff4d88";
        this.style.color = "white";

    });

});

// Purchase button
document.querySelector(".purchase").addEventListener("click", function() {

    const name = document.querySelector("input[type=text]").value;

    if (name.trim() === "") {
        alert("Please enter your Minecraft Name.");
        return;
    }

    alert(
`Thank you for your purchase!

Minecraft: ${name}

Product: ${document.getElementById("product").value}

Price: ${document.getElementById("price").value}

Your order has been submitted.`
    );

    closePopup();

});
const modal=document.getElementById("khqrModal");
const khqr=document.getElementById("khqrBtn");
const close=document.querySelector(".close");

khqr.onclick=function(){

const price=document.getElementById("price").value;

document.getElementById("modalPrice").innerHTML=price;

modal.style.display="flex";

}

close.onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}

document.getElementById("paidBtn").onclick=function(){

alert("Thank you! Your payment is being verified.");

modal.style.display="none";

}
