
function addToCart(index){
    if(localStorage.cart === undefined){
        localStorage.cart = index;
    }
    else{
        localStorage.cart += index;
    }

}

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
            display += "<div  class="+"cartTable"+" ><table id="+"t01"+" ><tr><th>Item</th><th>Price</th><th>Quantity</th><th>Cost</th></tr>";

            for(var p=0; p<quantity.length; p++){
                if(quantity[p]==0){
                    continue;
                }
                else{
                    display += "<tr><td>"+ myObj2.name[p] + "</td><td>"
                                         + myObj2.price[p] + "</td><td>" 
                                         + quantity[p] + "</td><td>" 
                                         + quantity[p]*myObj2.price[p] +"</td></tr>";
                total += quantity[p]*myObj2.price[p];
                }
            }
            display += "</table></div>";
            display += "<div class="+ "checkout"+"><button class="+"button" +" onclick="+"clearCart()"+">Clear Cart</button>"
                        + "<span >  Shubham   Gupta  </span>"
                        + "<button  class="+"button" +" onclick=" + "checkOut()" + ">CheckOut</button></div>";
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
    document.getElementById("demo_cart").innerHTML = "<div class=" + "zero"+">You have Zero items in your cart.</div>"
}

function detailsOnload(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var result = "";
        var i = parseInt(localStorage.detail);
            result += "<div class="+"detailImage"+ "><img src=" + myObj.wand[i] + "></div>" 
            + "<div class=" + "description" + "><p>" + "Name: " + myObj.name[i] + "<br>"
            + "Previous Owner: " + myObj.previous_owner[i] + "<br>"
            + "Length: " + myObj.length[i] + "<br>"
            + "Material: " + myObj.madeOf[i] + "<br>"
            + "Previous Owner: " + myObj.previous_owner[i] + "<br>"
            + "Price: " + myObj.price[i]  + "</p>" + "<br>"
            + "<button  class="+"button" +"  onclick=" + "addToCart(" + i + ")>Add To Cart</button>"
            + "</div>";
        document.getElementById("demo_details").innerHTML = result;
    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp.send();
   
}

function detailsVar(index){
    localStorage.detail = index;
}

function indexOnload(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var result = "";
        for(var i=0; i<myObj.name.length;i++){
            result += "<div class=" + "products"  + "><h2>"  + myObj.name[i] + "</h2><p>"
            + "<img src=" + myObj.wand[i] + " width=" + "150px" + " height=" + "150px" + "><br>"
            + "<h3>Price: " + myObj.price[i]  + "</p>" + "<h3>"
            + "<button id=" + "favorite" + i + " class="+"button" +"  onclick=" + "markFavorite('favorite" + i + "')" + ">Favorite</button>"
            + "   "
            + "<button  class="+"button" +"  onclick=" + "addToCart(" + i + ")>Add To Cart</button><br>"
            + "<br><a href=" + "details.html" + " onclick=" + "detailsVar(" + i + "); " + ">More Details</a>"
            + "</div>";
        }
        document.getElementById("demo").innerHTML = result;
    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp.send();
}

var count = 0;
function markFavorite(id_name) {
    var property = document.getElementById(id_name);
    if(count==0){
        property.style.backgroundColor= "#7FFF00";
        count=1;
    }
    else{
        property.style.backgroundColor= "#deb887";
        count=0;
    }
    // if (localStorage.count===undefined || localStorage.count==0) {
    //     property.style.backgroundColor = "#ECF0F1";
    //     localStorage.count=1;
    // }
    // else{
    //     property[0].style.backgroundColor = "#7FFF00";
    //     localStorage.count=0;
    // }
    
}
