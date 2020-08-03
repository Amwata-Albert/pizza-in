
let pizzaSmall=document.getElementById("pizzasmall").value="Pizza small";
let pizzaMedium=document.getElementById("pizzamedium").value="pizza medium";
let pizzaLarge=document.getElementById("pizzalarge").value="pizza large";
let peperoni=document.getElementById("peperoni").value;
let mushroom=document.getElementById("mushroom").value;
let onion=document.getElementById("onion").value;
let sausage=document.getElementById("sausage").value;
let bacon=document.getElementById("bacon").value;
let cheese=document.getElementById("cheese").value;
let olives=document.getElementById("olives").value;
let pepper=document.getElementById("pepper").value;
let pineaple=document.getElementById("pineaple").value;
let spinach=document.getElementById("spinach").value;
let chicken=document.getElementById("chicken").value;
let scallion=document.getElementById("scallion").value;
let chicago=document.getElementById("chicago").value;
let sicillian=document.getElementById("sicillian").value;
let newyork=document.getElementById("newyork").value;
let louis=document.getElementById("louis").value;
let table=document.getElementById("table");
// let placeorder=document.getElementById("placeorder").value;
let newRow=table.insertRow(table.rows.length);

$("#pizzalarge").click(function(){
    let cellOfPizzaSizes=newRow.insertCell(0);
    cellOfPizzaSizes.innerHTML=pizzaLarge;
});

$("#pizzamedium").click(function(){
    let cellOfPizzaSizes=newRow.insertCell(0);
    cellOfPizzaSizes.innerHTML=pizzaMedium;
});

$("#pizzasmall").click(function(){
    let cellOfPizzaSizes=newRow.insertCell(0);
    cellOfPizzaSizes.innerHTML=pizzaSmall;
});
function orders(){
 

}
orders();