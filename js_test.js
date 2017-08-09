// sessionStorage.setItem("lastname", "Smith");
// sessionStorage.setItem("firstname", "haha");

localStorage.setItem("lastname", "hahahaha")


function change1() {
    localStorage.setItem("lastname", "changed");
    //sessionStorage.lastname += "5";
    document.getElementById("demo1").innerHTML = localStorage.getItem("lastname");
}

function change2() {
    document.getElementById("demo2").innerHTML = localStorage.getItem("lastname");
}