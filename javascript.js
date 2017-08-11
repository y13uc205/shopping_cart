// alert("Hello, you may be the chosen one.");
//var count = 0;



// document.cookie = 

function markFavorite(class_name) {
    // alert("Thuis is working");
    var property = document.getElementsByClassName(class_name);
    if (localStorage.count===undefined || localStorage.count==0) {
        property[0].style.backgroundColor = "#ECF0F1";
        localStorage.count=1;
    }
    else{
        property[0].style.backgroundColor = "#7FFF00";
        localStorage.count=0;
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
//debugger;
function shoppingCart() {
    if(localStorage.cart===undefined){
        localStorage.cart=undefined;
    }
    
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj2 = JSON.parse(this.responseText);
        var display = "";
        var itemLength = myObj2.name.length;
        var quantity = [];
        for(var i = 0; i<itemLength; i++){
            quantity.push(0);
        }
        var total = 0;
        if (localStorage.cart=="undefined"){
            clearCart();
        }
        else{
            for(var k=0;k<localStorage.cart.length; k++){
                var t= parseInt(localStorage.cart[k]);
                quantity[t]++;
            }
            //alert(quantity);
            
            for(var p=0; p<quantity.length; p++){
                if(quantity[p]==0){
                    continue;
                }
                else{
                    display += "<div class=" + "products" + "><p>" + "Name: " + myObj2.name[p] + "<br>"
                    + "Price: " + myObj2.price[p]  + "<br>"
                    + "Quantity: " + quantity[p]   + "<br>"
                    + "Cost: " + quantity[p]*myObj2.price[p]  + "</p>" + "<br>"
                    + "</div>";
                total += quantity[p]*myObj2.price[p];
                }
                
                
                // display += "<div class=" + "products" + "><p>" + "Name: " + myObj2.name[p] + "<br>"
                //     + "Price: " + myObj2.price[p]  + "<br>"
                //     + "Quantity: " + quantity[p]   + "<br>"
                //     + "Cost: " + quantity[p]*myObj2.price[p]  + "</p>" + "<br>"
                //     + "</div>";
                // total += quantity[p]*myObj2.price[p];
            }
            display += "<div><button onclick=" + "checkOut()" + ">CheckOut</button></div>"
            localStorage.totalAmount = total;
            document.getElementById("demo_cart").innerHTML = display;
    }
    }
};
xmlhttp2.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp2.send();
}

function checkOut() {
    alert("Total payable amount is "+localStorage.totalAmount);
}

function clearCart() {
    localStorage.cart = undefined;
    document.getElementById("demo_cart").innerHTML = "You have Zero items in your cart."
}

function detailsOnload(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //var result1 = "";
        var result = "";
        var i = parseInt(localStorage.detail);
        
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
            + "<a href=" + "details.html" + " onclick=" + "detailsVar(" + i + "); " + ">Details</a>"
            + "</div>";
        
        
        document.getElementById("demo_details").innerHTML = result;
    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp.send();
    //document.getElementById("demo_details").innerHTML= localStorage.detail;
   
}

function detailsVar(index){
    localStorage.detail = index;
}


//fetching json data
//debugger;
function indexOnload(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //var result1 = "";
        var result = "";
        for(var i=0; i<myObj.name.length;i++){
            //result1 += myObj.name[i] + "  " + myObj.price[i] + "<br>";
            result += "<div class=" + "products"  + "><h2>"  + myObj.name[i] + "</h2><p>"
            + "<img src=" + myObj.wand[i] + " width=" + "150px" + " height=" + "150px" + "><br>"
            + "<h3>Price: " + myObj.price[i]  + "</p>" + "<h3>"
            
            + "<button class=" + "favorite" + i + " onclick=" + "markFavorite('favorite" + i + "')" + ">Favorite</button>"
            + "   "
            + "<button class=" + "addtocart" + i + " onclick=" + "addToCart(" + i + ")>Add To Cart</button><br>"
            + "<br><a href=" + "details.html" + " onclick=" + "detailsVar(" + i + "); " + ">More Details</a>"
            + "</div>";
        }
        
        document.getElementById("demo").innerHTML = result;
    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp.send();
}







