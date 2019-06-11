var lastScrollPos = window.pageYOffset;
var navbar = document.getElementById("navbar");
var dropdown = document.getElementsByClassName("dropdown");

[...dropdown].forEach(ele => {
    ele.style.backgroundColor = "transparent";
    ele.style.top = "30px";
})

window.onscroll = function() {
    var curScrollPos = window.pageYOffset;
    if (lastScrollPos > curScrollPos) {
        navbar.style.top = "0";
        navbar.style.backgroundColor = "#000000";
    } else {
        navbar.style.top = "-" + 300 + "px";
        [...dropdown].forEach(ele => {
            ele.style.backgroundColor = "#000000";
            ele.style.top = "45px";
        });
    }
    if (curScrollPos == 0) {
        navbar.style.backgroundColor = "transparent";
        [...dropdown].forEach(ele => {
            ele.style.backgroundColor = "transparent";
            ele.style.top = "30px";
        });
    }
    lastScrollPos = curScrollPos;
}



