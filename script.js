// ===============================
// SusieShop Script
// ===============================

// Buy Rank
function buyRank(rank, price){

    localStorage.setItem("product", rank + " Rank");
    localStorage.setItem("rank", rank);
    localStorage.setItem("price", price);

    window.location.href="checkout.html";

}

// Buy Item
function buyItem(item, price){

    localStorage.setItem("product", item);
    localStorage.setItem("price", price);

    window.location.href="checkout.html";

}

// Card Animation
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
