var navbar = document.getElementById("navbar");

        var scrollPos = 0;

        window.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;

            if (st > scrollPos) {
                navbar.classList.add("title-out");
                setTimeout(function () {
                    navbar.classList.remove("sticky");
                    navbar.style.backgroundColor = "";
                }, 600);
            } else {
                navbar.classList.remove("title-out");
                navbar.classList.add("sticky");
                navbar.classList.add("shadow-3")
                if (st == 0) {
                    navbar.style.backgroundColor = "";
                    navbar.classList.remove("shadow-3");
                } else {
                    navbar.style.backgroundColor = "#000000";
                }
            }
            scrollPos = st <= 0 ? 0 : st;
        }, false);