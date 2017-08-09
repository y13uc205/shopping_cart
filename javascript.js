// alert("Hello, you may be the chosen one.");
var count = 0;



// document.cookie = 

function markFavorite(class_name) {
    // alert("Thuis is working");

    var property = document.getElementsByClassName(class_name);
    if (count==1) {
        property[0].style.backgroundColor = "#7FFF00";
        count=0;
    }
    else{
        property[0].style.backgroundColor = "#808080";
        count=1;
    }
    
}



function computeTotal(class_name){

}

function addToCart(index){
    if(localStorage.cart === undefined){
        localStorage.cart = index;
        // alert(localStorage.cart.length);
    }
    else{
        localStorage.cart += index;
        //alert(localStorage.cart.length);
    }

}

// if(localStorage.cart !== undefined){
//         document.getElementById("demo_cart").innerHTML = localStorage.cart;
//     }

function shoppingCart() {
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj2 = JSON.parse(this.responseText);
        var display = "";
        var quantity = [0,0,0];
        var total = 0;
        
        for(var k=0;k<localStorage.cart.length; k++){
            var t= parseInt(localStorage.cart[k]);
            quantity[t]++;
        }
        //alert(quantity);
        
        for(var p=0; p<quantity.length; p++){
            display += "<div id=" + "box2" + "><p>" + "Name: " + myObj2.name[p] + "<br>"
                + "Price: " + myObj2.price[p]  + "<br>"
                + "Quantity: " + quantity[p]   + "<br>"
                + "Cost: " + quantity[p]*myObj2.price[p]  + "</p>" + "<br>"
                + "</div>";
            total += quantity[p]*myObj2.price[p];
        }
        display += "<div><button onclick=" + "checkOut()" + ">CheckOut</button></div>"
        localStorage.totalAmount = total;
        document.getElementById("demo_cart").innerHTML = display;
}
};
xmlhttp2.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp2.send();
}

function checkOut() {
    alert("Total payable amount is "+localStorage.totalAmount);
}


//fetching json data
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //var result1 = "";
        var result = "";
        for(var i=0; i<myObj.name.length;i++){
            //result1 += myObj.name[i] + "  " + myObj.price[i] + "<br>";
            result += "<div id=" + "box" + "><p>" + "Name: " + myObj.name[i] + "<br>"
            + "Previous Owner: " + myObj.previous_owner[i] + "<br>"
            + "Length: " + myObj.length[i] + "<br>"
            + "Material Used: " + myObj.madeOf[i] + "<br>"
            + "Previous Owner: " + myObj.previous_owner[i] + "<br>"
            + "Price: " + myObj.price[i]  + "</p>" + "<br>"
            
            + "<button class=" + "favorite" + i + " onclick=" + "markFavorite('favorite" + i + "')" + ">Favorite</button>"
            + "   "
            
            + "<button class=" + "addtocart" + i + " onclick=" + "addToCart(" + i + ")>Add To Cart</button>"
            + "</div>";
        }
        
        document.getElementById("demo").innerHTML = result;
    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp.send();






