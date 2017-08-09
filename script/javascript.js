// alert("Hello, you may be the chosen one.");
var count = 1;
localStorage.cart = "66";

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
    localStorage.cart += index;
    alert(localStorage.cart);

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


var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj2 = JSON.parse(this.responseText);
        //var result2 = localStorage.cart + " " + myObj2.name;

        document.getElementById("demo_cart").innerHTML = localStorage.cart;
    }
};
xmlhttp2.open("GET", "https://raw.githubusercontent.com/shubh276/Olivanders/master/products.json", true);
xmlhttp2.send();



