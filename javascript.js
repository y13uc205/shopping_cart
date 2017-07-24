// alert("Hello, you may be the chosen one.");
var count = 1;

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

function addToCart(class_name){

}

function computeTotal(class_name){

}
