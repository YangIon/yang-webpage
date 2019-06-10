var lastScrollPos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function() {
    var curScrollPos = window.pageYOffset;
    if (lastScrollPos > curScrollPos) {
        navbar.style.top = "0";
        navbar.style.backgroundColor = "#000000";
    } else {
        navbar.style.top = "-" + 300 + "px";
    }
    if (curScrollPos == 0) {
        navbar.style.backgroundColor = "";
    }
    lastScrollPos = curScrollPos;
}



