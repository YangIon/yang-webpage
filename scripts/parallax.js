let Parallax = {
    init(el, dist) {
        this.animateItem(el, dist);
    },
    setPosition() {
        if (window.pageYOffset !== undefined) {
            return window.pageYOffset;
        } else {
            return (document.documentElement || document.body.parentNode || document.body).scrollTop;
        }
    },
    animateItem(el, dist) {
        if (typeof window.orientation !== 'undefined') {return;} 
        let scrollPosition = this.setPosition();
        el.style.transform = "translate3d(0px, " + (scrollPosition / dist) + "px, 0px)";
    }
}

let handleScrolling = () => {
    Parallax.init(parallax1, 3);
    Parallax.init(parallax2, 3);
    Parallax.init(parallax3, 3);
    Parallax.init(parallax4, -1);
    Parallax.init(parallax5, -1);
    Parallax.init(parallax6, -1);
}

window.addEventListener('scroll', handleScrolling);