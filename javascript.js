debugger;
function addToCart(index) {
    if (sessionStorage.cart === undefined) {
        sessionStorage.cart = index;
    } else {
        sessionStorage.cart += index;
    }

}

function shoppingCart() {
    if (sessionStorage.cart === undefined) {
        sessionStorage.cart = undefined;
    }
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj2 = JSON.parse(this.responseText);
            var display = "";
            var itemLength = myObj2.name.length;
            var quantity = [];
            for (var i = 0; i < itemLength; i++) {
                quantity.push(0);
            }
            var total = 0;
            if (sessionStorage.cart == "undefined") {
                clearCart();
            } else {
                for (var k = 0; k < sessionStorage.cart.length; k++) {
                    var t = parseInt(sessionStorage.cart[k]);
                    quantity[t]++;
                }
                display += "<div  class=" + "cartTable" + " ><table id=" + "t01" + " ><tr><th>Item</th><th>Price</th><th>Quantity</th><th>Cost</th></tr>";

                for (var p = 0; p < quantity.length; p++) {
                    if (quantity[p] == 0) {
                        continue;
                    } else {
                        display += "<tr><td>" + myObj2.name[p] + "</td><td>" +
                            myObj2.price[p] + "</td><td>" +
                            quantity[p] + "</td><td>" +
                            quantity[p] * myObj2.price[p] + "</td></tr>";
                        total += quantity[p] * myObj2.price[p];
                    }
                }
                display += "</table></div>";
                display += "<div class=" + "checkout" + "><button class=" + "button" + " onclick=" + "clearCart()" + ">Clear Cart</button>" +
                    "<span >  Shubham   Gupta  </span>" +
                    "<button  class=" + "button" + " onclick=" + "checkOut()" + ">CheckOut</button></div>";
                sessionStorage.totalAmount = total;
                document.getElementById("demo_cart").innerHTML = display;
            }
        }
    };
    xmlhttp2.open("GET", "https://raw.githubusercontent.com/y13uc205/shopping_cart/master/products.json", true);
    xmlhttp2.send();
}

function checkOut() {
    alert("Total payable amount is " + sessionStorage.totalAmount);
}

function clearCart() {
    sessionStorage.cart = undefined;
    document.getElementById("demo_cart").innerHTML = "<div class=" + "zero" + ">You have Zero items in your cart.</div>"
}

function detailsOnload() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var result = "";
            var i = parseInt(sessionStorage.detail);
            result += "<div class=" + "detailImage" + "><img src=" + myObj.phones[i] + "></div>" +
                "<div class=" + "description" + "><p>" + "Name: " + myObj.name[i] + "<br>" +
                "Length: " + myObj.length[i] + "<br>" +
                "camera: " + myObj.camera[i] + "<br>" +
                "Price: " + myObj.price[i] + "</p>" + "<br>" +
                "<button  class=" + "button" + "  onclick=" + "addToCart(" + i + ")>Add To Cart</button>" +
                "</div>";
            document.getElementById("demo_details").innerHTML = result;
        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/y13uc205/shopping_cart/master/products.json", true);
    xmlhttp.send();

}

function detailsVar(index) {
    sessionStorage.detail = index;
}

function indexOnload() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var result = "";
            for (var i = 0; i < myObj.name.length; i++) {
                result += "<div class=" + "products" + "><h2>" + myObj.name[i] + "</h2><p>" +
                    "<img src=" + myObj.phones[i] + " width=" + "150px" + " height=" + "150px" + "><br>" +
                    "<h3>Price: " + myObj.price[i] + "</p>" + "<h3>" +
                    "<button id=" + "favorite" + i + " class='button fn_fav'" + " onclick=" + "markFavorite('favorite" + i + "')" + ">Favorite</button>" +
                    "   " +
                    "<button  class=" + "button" + "  onclick=" + "addToCart(" + i + ")>Add To Cart</button><br>" +
                    "<br><a href=" + "details.html" + " onclick=" + "detailsVar(" + i + "); " + ">More Details</a>" +
                    "</div>";
            }
            document.getElementById("demo").innerHTML = result;
            setFavorite();
        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/y13uc205/shopping_cart/master/products.json", true);
    xmlhttp.send();
}

function markFavorite(id_name) {

    var isFav = sessionStorage.getItem(id_name);
    var property = document.getElementById(id_name);

    if (!isFav) {
        sessionStorage.setItem(id_name, 'true');
        property.style.backgroundColor = "#7FFF00";
    } else {
        sessionStorage.removeItem(id_name);
        property.style.backgroundColor = "#deb887";
    }

}



function setFavorite() {
    var favList = document.getElementsByClassName('fn_fav');    
    for (var i = 0; i < favList.length; i++) {
        var selectedItemId = favList[i].id;
        var isFav = sessionStorage.getItem(selectedItemId);
        var btnFav = document.getElementById(selectedItemId);
        if (isFav) {
            btnFav.style.backgroundColor = "#7FFF00";
        }
    }
}
