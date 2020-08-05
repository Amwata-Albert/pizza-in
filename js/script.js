//variales declaration
let pizzaSmall=document.getElementById("pizzasmall").value="Pizzasmall";
let pizzaMedium=document.getElementById("pizzamedium").value="pizza medium";
let pizzaLarge=document.getElementById("pizzalarge").value="pizza large";
let peperoni=document.getElementById("peperoni").value="peperoni";
let mushroom=document.getElementById("mushroom").value="mushroom";
let onion=document.getElementById("onion").value="onion";
let sausage=document.getElementById("sausage").value="sausage";
let bacon=document.getElementById("bacon").value="bacon";
let cheese=document.getElementById("cheese").value="cheese";
let olives=document.getElementById("olives").value="olives";
let pepper=document.getElementById("pepper").value="pepper";
let pineaple=document.getElementById("pineaple").value="pineaple";
let spinach=document.getElementById("spinach").value="spinach";
let chicken=document.getElementById("chicken").value="chicken";
let scallion=document.getElementById("scallion").value="scalion";
let chicago=document.getElementById("chicago").value="chicago";
let sicillian=document.getElementById("sicillian").value="sicillian";
let newyork=document.getElementById("newyork").value="newyork";
let louis=document.getElementById("louis").value="louis";
let classyy=document.getElementById("classyy1");
let classyy1=document.getElementById("classyy2");
let classyy2=document.getElementById("classyy3");
let quantity=document.getElementById("number");
let delivery=document.getElementById("checked1");
let nodelivery=document.getElementById("checked2");

// pricing
let  pricesmall=750;
let pricemedium=1200;
let pricelarge=1550;

function orders(){
  
    $("#pizzalarge").click(function(){
        
    classyy.innerHTML=pizzaLarge;
    classyy4.innerHTML=pricelarge;
    totolprice=quantity*pricelarge;
   
    });

    $("#pizzasmall").click(function(){
        
    classyy.innerHTML=pizzaSmall;
    classyy4.innerHTML=pricesmall;
    totolprice=quantity*pricesmall;
    
       
    });
    $("#pizzamedium").click(function(){
        
    classyy.innerHTML=pizzaMedium;
    classyy4.innerHTML=pricemedium;
    totolprice=quantity*pricemedium;
           
    });

            // toppings
           

        $("#peperoni").click(function(){

        classyy1.innerHTML=peperoni;

        });

        $("#mushroom").click(function(){

        classyy1.innerHTML=mushroom;

        });
        $("#onion").click(function(){

        classyy1.innerHTML=onion;

        });
        $("#sausage").click(function(){

        classyy1.innerHTML=sausage;

        });

        $("#bacon").click(function(){

        classyy1.innerHTML=bacon;

        });
        $("#cheese").click(function(){

        classyy1.innerHTML=cheese;

        });
        $("#olives").click(function(){

        classyy1.innerHTML=olives;

        });

        $("#pepper").click(function(){

        classyy1.innerHTML=pepper;

        });
        $("#pineaple").click(function(){

        classyy1.innerHTML=pineaple;

        }); $("#spinach").click(function(){

        classyy1.innerHTML=spinach;

        });
        $("#chicken").click(function(){

        classyy1.innerHTML=chicken;
    
        });
        $("#scallion").click(function(){

        classyy1.innerHTML=scallion;

        });

        

        // crusts
        $("#chicago").click(function(){

            classyy2.innerHTML=chicago;
        });
        $("#sicillian").click(function(){

            classyy2.innerHTML=sicillian;
        });
        $("#newyork").click(function(){

            classyy2.innerHTML=newyork;
        });
        $("#louis").click(function(){

            classyy2.innerHTML=louis;
        });   
        // window.location.href="orders.html";
}
orders();

// orders processing code 1
function ordering(){
  
    let aa=document.getElementById("classyy1");
    let aaa=document.getElementById("classyy2");
    let aaaa=document.getElementById("classyy3");
    let aaaaa=document.getElementById("classyy4");

    let aaaaaa=document.getElementById("classyy5").value;

    let one=document.getElementById("classyy11");
    let two=document.getElementById("classyy21");
    let three=document.getElementById("classyy31");
    let four=document.getElementById("classyy41");
    let five=document.getElementById("classyy51");
    let six=document.getElementById("classyy61");

    $("#sub").click(function(){
        one.innerHTML=aa.innerText;
        two.innerHTML=aaa.innerText;
        three.innerHTML=aaaa.innerText;
        four.innerHTML=aaaaa.innerText;
        five.innerHTML=aaaaaa;
        let pizzatotal=aaaaa.innerText*aaaaaa;
        six.innerHTML=pizzatotal;
     
    });  

}

// Order processing  code 2

    $("#checked").change(function(){
        if($(this).prop('checked')){
            let size=document.getElementById("classyy11");
            let price=document.getElementById("classyy61");
            let quantity=document.getElementById("classyy51");
            // let abc=document.getElementById("classyy21");

            // let abcd=abc.innerText;
            let delivery_address=prompt("enter your delivery address");
            $("#sub1").click(function(){
                alert("Dear customer, Your pizza orders to :"+delivery_address+" for "+quantity.textContent+" Pieces of "+size.textContent+" At a total of Ksh:"+price.textContent+" has been proccesed and will be delivered to "+ delivery_address);
            });
        }
        else{
            // let delivery=prompt("none");
            $("#sub1").click(function(){
                alert("Dear customer, Your pizza orders for "+quantity.textContent+" Pieces of "+size.textContent+"At a total of Ksh:"+price.textContent);
            });
        }
    });

