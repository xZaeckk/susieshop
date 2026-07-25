// ===========================
// SusieShop Checkout
// ===========================

window.onload=function(){

const product=localStorage.getItem("product");
const rank=localStorage.getItem("rank");
const price=localStorage.getItem("price");

if(product){

document.getElementById("product").innerHTML=product;

}

if(rank){

document.getElementById("rank").value=rank;

}

if(price){

document.getElementById("price").value="$"+Number(price).toFixed(2);

document.getElementById("totalPrice").innerHTML="$"+Number(price).toFixed(2);

}

};

// Continue

document.getElementById("submitPurchase").onclick=function(){

document.querySelector(".checkout-page").style.display="none";

document.getElementById("confirmPage").style.display="flex";

document.getElementById("confirmUsername").innerHTML=document.getElementById("minecraftName").value;

document.getElementById("confirmEmail").innerHTML=document.getElementById("email").value||"None";

document.getElementById("confirmPlatform").innerHTML=document.getElementById("platform").value;

document.getElementById("confirmGamemode").innerHTML=document.getElementById("gamemode").value;

document.getElementById("confirmProduct").innerHTML=document.getElementById("product").innerHTML;

document.getElementById("confirmPayment").innerHTML=document.querySelector("input[name='payment']:checked").value;

document.getElementById("confirmPrice").innerHTML=document.getElementById("totalPrice").innerHTML;

};

// Back

document.getElementById("backBtn").onclick=function(){

document.getElementById("confirmPage").style.display="none";

document.querySelector(".checkout-page").style.display="block";

};

// GO Pay

document.getElementById("goPayBtn").onclick=function(){

document.getElementById("confirmPage").style.display="none";

document.getElementById("khqrModal").style.display="flex";

document.getElementById("modalPrice").innerHTML=document.getElementById("totalPrice").innerHTML;

startCountdown(600);

};

// Close

document.querySelector(".close").onclick=function(){

document.getElementById("khqrModal").style.display="none";

};

// Paid

document.getElementById("paidBtn").onclick=function(){

alert("✅ Thank you!\n\nWe have received your payment submission.\nYour order will be reviewed shortly.");

localStorage.clear();

window.location.href="index.html";

};

// Countdown

function startCountdown(seconds){

let time=seconds;

const timer=setInterval(function(){

const min=Math.floor(time/60);

const sec=time%60;

document.getElementById("countdown").innerHTML=

min+":"+(sec<10?"0":"")+sec;

time--;

if(time<0){

clearInterval(timer);

document.getElementById("countdown").innerHTML="Expired";

}

},1000);

}

    }, 1000);

}
