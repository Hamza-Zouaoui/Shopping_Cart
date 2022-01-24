console.log("test if they are linked")

const btnsPlus= document.querySelectorAll(".btn-plus");
const btnsMoins= document.querySelectorAll(".btn-moins");
const btnsRemove= document.getElementsByClassName("btn-delete");
const btnsLike= document.querySelectorAll(".btn-like");
const svgLike= document.querySelectorAll(".like");
const qtes= document.querySelectorAll(".quantity");
const totalPrice= document.getElementById("prix-total")
const Prices= document.querySelectorAll(".prix")

// Increment event
for(let i=0; i<btnsPlus.length; i++){
    btnsPlus[i].addEventListener("click", function(){
        if(qtes[i].innerHTML < 10){
    btnsPlus[i].previousElementSibling.innerHTML= +btnsPlus[i].previousElementSibling.innerHTML+1;
total ();}
else{
    alert("10 is the maximum quantity");}
}
    )}

// Decrement event
for(let i=0; i<btnsMoins.length; i++){
    btnsMoins[i].addEventListener("click", function(){
        if(btnsMoins[i].nextElementSibling.innerHTML > 0){
    btnsMoins[i].nextElementSibling.innerHTML--;
total();}
        })
}

// Remove event
for (let i=0; i<btnsRemove.length; i++) {
    btnsRemove[i].addEventListener("click", function(){
    btnsRemove[i].parentElement.parentElement.parentElement.parentElement.remove();
total();
    });
}

// Like event
for(let i=0; i<btnsLike.length; i++){
    btnsLike[i].addEventListener("click", function(){
if (svgLike[i].style.fill == "red"){
    svgLike[i].style.fill = "black";
}
else {svgLike[i].style.fill = "red";}
    });
}

// Total event
function total() {
let sum=0;
for (let i = 0; i < Prices.length; i++) {
    sum = sum + Prices[i].innerHTML * qtes[i].innerHTML;   
}
totalPrice.innerHTML=sum;
}
